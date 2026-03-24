import type { GridState, GridParams } from '../types/grid'

export function isFilterValuePresent(value: unknown): boolean {
  return value !== undefined && value !== null && value !== ''
}

interface UseGridStateOptions {
  gridId: string
  defaultPerPage?: number
  defaultColumnVisibility?: Record<string, boolean>
}

export function useGridState(options: UseGridStateOptions) {
  const { gridId, defaultPerPage = 25, defaultColumnVisibility = {} } = options

  const route = useRoute()
  const router = useRouter()
  const gridSettingsStore = useGridSettingsStore()

  // Initialize state from URL > persisted > defaults
  const persistedSettings = gridSettingsStore.getSettings(gridId)

  const state = reactive<GridState>({
    page: Number(route.query.page) || 1,
    perPage: Number(route.query.per_page) || persistedSettings?.perPage || defaultPerPage,
    search: (route.query.search as string) || '',
    sort: (route.query.sort as string) || persistedSettings?.sort || null,
    direction: (route.query.direction as 'asc' | 'desc') || persistedSettings?.direction || 'asc',
    filters: {}
  })

  // Column visibility: cookie (SSR-safe) > persisted store > defaults
  // Only visibility needs a cookie because it changes DOM structure (column count),
  // causing hydration mismatches when server and client disagree.
  const visCookie = useCookie<Record<string, boolean>>(`grid-vis-${gridId}`, {
    default: () => persistedSettings?.columnVisibility ?? { ...defaultColumnVisibility }
  })

  const columnVisibility = ref<Record<string, boolean>>(
    visCookie.value ?? { ...defaultColumnVisibility }
  )

  function setColumnVisibility(key: string, visible: boolean): void {
    columnVisibility.value = { ...columnVisibility.value, [key]: visible }
  }

  // Dual persistence for column visibility (both are intentionally kept):
  // - Cookie: required for SSR hydration safety — server must know column count
  //   to render the correct DOM structure, preventing hydration mismatches.
  // - Store (localStorage): acts as long-term fallback that seeds the cookie
  //   default (line 37) when cookies are cleared or on first visit.
  watch(columnVisibility, (value) => {
    visCookie.value = value
    gridSettingsStore.saveSettings(gridId, { columnVisibility: value })
  }, { deep: true })

  // Initialize filters from URL > persisted
  function initFilters(filterKeys: string[]): void {
    const persistedFilters = persistedSettings?.filters || {}

    filterKeys.forEach((key) => {
      const urlValue = route.query[key]
      if (urlValue !== undefined) {
        // Parse array values (e.g., role_ids=1&role_ids=2)
        if (Array.isArray(urlValue)) {
          state.filters[key] = urlValue.map(v => parseFilterValue(v as string))
        } else {
          state.filters[key] = parseFilterValue(urlValue as string)
        }
      } else if (persistedFilters[key] !== undefined) {
        state.filters[key] = persistedFilters[key]
      }
    })
  }

  // Parse filter values (handle booleans, numbers)
  function parseFilterValue(value: string): unknown {
    if (value === 'true') return true
    if (value === 'false') return false
    if (value === 'null') return null
    const num = Number(value)
    if (!isNaN(num) && value !== '') return num
    return value
  }

  // Sync state to URL
  function syncToUrl(): void {
    const query: Record<string, unknown> = {}

    if (state.page > 1) query.page = state.page
    if (state.perPage !== defaultPerPage) query.per_page = state.perPage
    if (state.search) query.search = state.search
    if (state.sort) {
      query.sort = state.sort
      query.direction = state.direction
    }

    // Add filter values
    Object.entries(state.filters).forEach(([key, value]) => {
      if (isFilterValuePresent(value)) {
        query[key] = value
      }
    })

    router.replace({ query: query as Record<string, string> })
  }

  // Save settings to persistent store
  function persistSettings(): void {
    gridSettingsStore.saveSettings(gridId, {
      perPage: state.perPage,
      sort: state.sort,
      direction: state.direction,
      filters: state.filters
    })
  }

  // Convert state to API params
  function toParams(): GridParams {
    const params: GridParams = {
      page: state.page,
      per_page: state.perPage
    }

    if (state.search) params.search = state.search
    if (state.sort) {
      params.sort = state.sort
      params.direction = state.direction
    }

    // Add filters
    Object.entries(state.filters).forEach(([key, value]) => {
      if (isFilterValuePresent(value)) {
        params[key] = value
      }
    })

    return params
  }

  // URL sync — watches all state so every change is reflected in the URL
  // flush: 'post' defers the router.replace until after DOM updates,
  // preventing recursive update cycles during navigation
  watch(
    () => ({ ...state, filters: { ...state.filters } }),
    syncToUrl,
    { deep: true, flush: 'post' }
  )

  // Persistence — only watches settings that should survive across sessions
  // (page and search are intentionally excluded: they are transient)
  watch(
    () => [state.perPage, state.sort, state.direction, state.filters] as const,
    persistSettings,
    { deep: true }
  )

  // Actions
  function setPage(page: number): void {
    state.page = page
  }

  function setPerPage(perPage: number): void {
    state.perPage = perPage
    state.page = 1 // Reset to first page
  }

  function setSearch(search: string): void {
    state.search = search
    state.page = 1 // Reset to first page
  }

  function setSort(sort: string | null, direction: 'asc' | 'desc' = 'asc'): void {
    state.sort = sort
    state.direction = direction
  }

  function setFilter(key: string, value: unknown): void {
    state.filters[key] = value
    state.page = 1 // Reset to first page
  }

  function resetFilters(): void {
    state.filters = {}
    state.search = ''
    state.page = 1
  }

  return {
    state,
    columnVisibility,
    initFilters,
    toParams,
    setPage,
    setPerPage,
    setSearch,
    setSort,
    setFilter,
    setColumnVisibility,
    resetFilters
  }
}
