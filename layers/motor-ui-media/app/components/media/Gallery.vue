<script setup lang="ts">
import { useIntersectionObserver, useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import type {
  FilterDef,
  BulkActionDef,
  PaginatedResponse,
  GridParams
} from '@motor-cms/ui-core/app/types/grid'
import type { FileResource } from '../../types/media'

export interface GallerySortOption {
  label: string
  field: string
  direction: 'asc' | 'desc'
}

const props = withDefaults(defineProps<{
  id: string
  fetch: (params: GridParams) => Promise<PaginatedResponse<FileResource>>
  filters?: FilterDef[]
  bulkActions?: BulkActionDef[]
  searchable?: boolean
  perPage?: number
  sortOptions?: GallerySortOption[]
}>(), {
  searchable: true,
  perPage: 25,
  sortOptions: () => []
})

const emit = defineEmits<{
  'show-usage': [fileId: number]
}>()

const { t } = useI18n()

// Grid state — used only for search + filters (URL-synced)
const gridState = useGridState({
  gridId: props.id,
  defaultPerPage: props.perPage
})

if (props.filters) {
  gridState.initFilters(props.filters.map(f => f.key))
}

// Sort dropdown — option key is `${field}:${direction}`
function sortKey(opt: GallerySortOption): string {
  return `${opt.field}:${opt.direction}`
}
const sortSelectItems = computed(() =>
  props.sortOptions.map(opt => ({ label: opt.label, value: sortKey(opt) }))
)
const activeSortKey = computed(() => {
  const field = gridState.state.sort
  if (!field) {
    // Pick the first option as the visible default so the dropdown isn't empty
    return props.sortOptions[0] ? sortKey(props.sortOptions[0]) : ''
  }
  return `${field}:${gridState.state.direction}`
})
function onSortChange(value: string): void {
  const opt = props.sortOptions.find(o => sortKey(o) === value)
  if (opt) gridState.setSort(opt.field, opt.direction)
}

// Accumulated items + internal pagination
const items = ref<FileResource[]>([])
const currentPage = ref(0)
const lastPage = ref(1)
const totalItems = ref(0)
const initialLoading = ref(true)
const loadingMore = ref(false)
const fetchError = ref<Error | null>(null)

// Selection
const selectedIds = ref<Set<number>>(new Set())
const hasBulkActions = computed(() => (props.bulkActions?.length ?? 0) > 0)

function toggleSelection(id: number, selected: boolean) {
  const next = new Set(selectedIds.value)
  if (selected) next.add(id)
  else next.delete(id)
  selectedIds.value = next
}

function clearSelection() {
  selectedIds.value = new Set()
}

const selectedIdsArray = computed(() => Array.from(selectedIds.value))

const hasActiveFilters = computed(() => {
  if (gridState.state.search) return true
  return Object.values(gridState.state.filters).some(
    v => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0)
  )
})

const hasMore = computed(() => currentPage.value < lastPage.value)

// --- Masonry layout with pre-measured aspect ratios -----------------------
// Images are preloaded before their cards enter the grid so every tile is
// rendered at its final size (no reflow when the image finishes loading).
// Items are distributed into flex columns via a deterministic shortest-column
// algorithm: appending a page never moves already-placed tiles, unlike CSS
// `columns-*` which rebalances the whole grid on every append.

const runtimeConfig = useRuntimeConfig()
const backendBaseUrl = runtimeConfig.public.backendBaseUrl as string

const FALLBACK_RATIO = 4 / 3
const ratios = ref<Record<number, number>>({})
// SSR renders the skeleton; the real grid appears once page-1 thumbnails are measured
const clientReady = ref(false)

function preloadRatio(src: string, timeoutMs = 7000): Promise<number | null> {
  return new Promise((resolve) => {
    const img = new Image()
    const timer = window.setTimeout(() => resolve(null), timeoutMs)
    img.onload = () => {
      window.clearTimeout(timer)
      resolve(img.naturalHeight > 0 ? img.naturalWidth / img.naturalHeight : null)
    }
    img.onerror = () => {
      window.clearTimeout(timer)
      resolve(null)
    }
    img.src = src
  })
}

async function measureItems(list: FileResource[]): Promise<void> {
  if (import.meta.server) return
  const pending = list.filter(item => ratios.value[item.id] === undefined)
  await Promise.all(pending.map(async (item) => {
    let ratio: number | null = null
    if (mediaIsImage(item)) {
      const src = mediaThumbnailUrl(item, backendBaseUrl)
      if (src) ratio = await preloadRatio(src)
    }
    // Non-images use the card's fixed 4/3 placeholder; failed preloads fall
    // back to 4/3 too (the card crops via object-cover to keep the grid stable)
    ratios.value[item.id] = ratio ?? FALLBACK_RATIO
  }))
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMd = breakpoints.greaterOrEqual('md')
const isLg = breakpoints.greaterOrEqual('lg')
const isXl = breakpoints.greaterOrEqual('xl')
const columnCount = computed(() => {
  if (isXl.value) return 5
  if (isLg.value) return 4
  if (isMd.value) return 3
  return 2
})

// Nominal values for height estimation — only relative balance matters
const NOMINAL_COLUMN_WIDTH = 280
const CARD_INFO_HEIGHT = 62
const CARD_GAP = 16

const columns = computed<FileResource[][]>(() => {
  const count = columnCount.value
  const cols: FileResource[][] = Array.from({ length: count }, () => [])
  const heights = new Array<number>(count).fill(0)
  for (const item of items.value) {
    const ratio = ratios.value[item.id] ?? FALLBACK_RATIO
    let target = 0
    for (let i = 1; i < count; i++) {
      if (heights[i]! < heights[target]!) target = i
    }
    cols[target]!.push(item)
    heights[target]! += NOMINAL_COLUMN_WIDTH / ratio + CARD_INFO_HEIGHT + CARD_GAP
  }
  return cols
})

// Build fetch params combining filters with internal page
function buildParams(page: number): GridParams {
  const sortField = gridState.state.sort ?? 'created_at'
  const sortDirection = gridState.state.sort ? gridState.state.direction : 'desc'
  const params: GridParams = {
    page,
    per_page: props.perPage,
    sort: sortDirection === 'desc' ? `${sortField}:desc` : sortField
  }
  if (gridState.state.search) params.search = gridState.state.search
  Object.entries(gridState.state.filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params[key] = value
    }
  })
  return params
}

async function loadPage(page: number, append: boolean): Promise<void> {
  try {
    const response = await props.fetch(buildParams(page))
    // Measure thumbnails BEFORE inserting so tiles render at final size
    await measureItems(response.data)
    if (append) {
      items.value = [...items.value, ...response.data]
    } else {
      items.value = response.data
    }
    currentPage.value = response.meta.current_page
    lastPage.value = response.meta.last_page
    totalItems.value = response.meta.total
    fetchError.value = null
  } catch (e) {
    fetchError.value = e as Error
  }
}

async function loadMore(): Promise<void> {
  if (loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  try {
    await loadPage(currentPage.value + 1, true)
  } finally {
    loadingMore.value = false
  }
}

async function resetAndFetch(): Promise<void> {
  initialLoading.value = true
  currentPage.value = 0
  selectedIds.value = new Set()
  try {
    await loadPage(1, false)
  } finally {
    initialLoading.value = false
  }
}

defineExpose({ refresh: resetAndFetch })

// Register contextual shortcuts for the overlay
const { register: registerShortcut, unregister: unregisterShortcut } = useShortcutRegistry()
registerShortcut({
  id: 'media',
  label: t('motor-core.shortcuts.media'),
  icon: 'i-lucide-image',
  shortcuts: [
    { keys: ['meta', t('motor-core.shortcuts.click')], label: t('motor-core.shortcuts.select_multiple'), icon: 'i-lucide-mouse-pointer-click' }
  ]
})
onUnmounted(() => unregisterShortcut('media'))

// SSR-safe initial load (page 1)
const { error: ssrError } = await useAsyncData(
  `gallery-${props.id}-init`,
  () => loadPage(1, false)
)
if (ssrError.value) fetchError.value = ssrError.value
initialLoading.value = false

// When page 1 came from SSR its thumbnails were never measured on the
// client — measure them now, then swap the skeleton for the real grid.
onMounted(async () => {
  await measureItems(items.value)
  clientReady.value = true
})

// Watch filter/search/sort changes — reset accumulated data
const filterKey = computed(() => JSON.stringify({
  search: gridState.state.search,
  sort: gridState.state.sort,
  direction: gridState.state.direction,
  filters: gridState.state.filters
}))

watch(filterKey, () => {
  resetAndFetch()
})

// Intersection observer for infinite scroll
const sentinelRef = ref<HTMLElement | null>(null)

useIntersectionObserver(
  sentinelRef,
  ([entry]) => {
    if (entry?.isIntersecting && hasMore.value && !loadingMore.value && !initialLoading.value) {
      loadMore()
    }
  },
  { rootMargin: '200px' }
)
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 min-h-0">
    <!-- Toolbar (search + filters only, no pagination) -->
    <GridToolbar
      :searchable="searchable"
      :filters="filters"
      :search-value="gridState.state.search"
      :filter-values="gridState.state.filters"
      :has-active-filters="hasActiveFilters"
      @update:search-value="gridState.setSearch($event)"
      @update:filter-value="(key: string, value: unknown) => gridState.setFilter(key, value)"
      @reset-filters="gridState.resetFilters()"
    >
      <template #toolbar-extra>
        <USelect
          v-if="sortOptions.length > 0"
          :model-value="activeSortKey"
          :items="sortSelectItems"
          value-key="value"
          label-key="label"
          :aria-label="t('motor-core.grid.sort')"
          class="w-44"
          @update:model-value="onSortChange"
        />
        <span
          v-if="totalItems > 0"
          class="text-sm text-muted whitespace-nowrap"
        >
          {{ items.length }} / {{ totalItems }}
        </span>
        <slot name="toolbar-extra" />
      </template>
    </GridToolbar>

    <!-- Bulk Actions -->
    <GridBulkActions
      v-if="bulkActions && bulkActions.length > 0"
      :actions="bulkActions"
      :selected-ids="selectedIdsArray"
      @action-complete="resetAndFetch"
      @clear-selection="clearSelection"
    />

    <!-- Scrollable content area -->
    <div class="flex-1 min-h-0 overflow-y-auto p-2">
      <!-- Error state -->
      <div
        v-if="fetchError"
        class="flex flex-col items-center justify-center py-12 gap-3"
      >
        <UIcon
          name="i-lucide-alert-triangle"
          class="text-red-500 size-8"
        />
        <p class="text-sm text-muted">
          {{ fetchError.message || t('motor-core.grid.fetch_error') }}
        </p>
        <UButton
          :label="t('motor-core.grid.retry')"
          icon="i-lucide-refresh-cw"
          variant="outline"
          size="sm"
          @click="resetAndFetch()"
        />
      </div>

      <!-- Initial loading skeleton (also shown until page-1 thumbnails are measured) -->
      <div
        v-else-if="initialLoading || (!clientReady && items.length > 0)"
        class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4"
      >
        <div
          v-for="i in 12"
          :key="i"
          class="break-inside-avoid mb-4"
        >
          <USkeleton
            class="w-full rounded-xl"
            :style="{ height: `${140 + (i % 4) * 40}px` }"
          />
        </div>
      </div>

      <!-- Gallery masonry grid -->
      <template v-else-if="items.length > 0">
        <div
          data-testid="media-gallery-masonry"
          class="flex items-start gap-4"
        >
          <div
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            class="flex-1 min-w-0 flex flex-col gap-4"
          >
            <MediaGalleryCard
              v-for="item in column"
              :key="item.id"
              :item="item"
              :ratio="ratios[item.id]"
              :selectable="hasBulkActions"
              :selected="selectedIds.has(item.id)"
              @select="toggleSelection"
              @show-usage="emit('show-usage', $event)"
            />
            <USkeleton
              v-if="loadingMore && hasMore"
              class="w-full rounded-xl shrink-0"
              :style="{ height: `${150 + ((colIndex * 53) % 4) * 35}px` }"
            />
          </div>
        </div>

        <!-- Infinite scroll sentinel -->
        <div
          ref="sentinelRef"
          class="flex items-center justify-center py-6"
        >
          <div
            v-if="loadingMore"
            class="flex items-center gap-2 text-sm text-muted"
          >
            <UIcon
              name="i-lucide-loader-2"
              class="size-4 animate-spin"
            />
            {{ t('motor-core.global.loading') }}
          </div>
          <span
            v-else-if="!hasMore"
            class="text-xs text-dimmed"
          >
            {{ t('motor-media.files.all_loaded') }}
          </span>
        </div>
      </template>

      <!-- Empty states -->
      <div v-else>
        <div
          v-if="hasActiveFilters"
          class="flex flex-col items-center justify-center py-16 gap-3"
        >
          <UIcon
            name="i-lucide-search-x"
            class="size-10 text-muted"
          />
          <p class="text-sm font-medium text-muted">
            {{ t('motor-core.grid.no_filter_results') }}
          </p>
          <p class="text-xs text-dimmed">
            {{ t('motor-core.grid.no_filter_results_hint') }}
          </p>
          <UButton
            :label="t('motor-core.grid.clear_filters')"
            icon="i-lucide-x"
            variant="outline"
            size="sm"
            @click="gridState.resetFilters()"
          />
        </div>
        <div
          v-else
          class="flex flex-col items-center justify-center py-16 gap-3"
        >
          <UIcon
            name="i-lucide-image"
            class="size-10 text-muted"
          />
          <p class="text-sm font-medium text-muted">
            {{ t('motor-core.grid.no_records') }}
          </p>
          <p class="text-xs text-dimmed">
            {{ t('motor-core.grid.no_records_create') }}
          </p>
          <slot name="empty-action" />
        </div>
      </div>
    </div>
  </div>
</template>
