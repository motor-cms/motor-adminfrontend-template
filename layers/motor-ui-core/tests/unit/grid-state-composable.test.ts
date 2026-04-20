import { describe, expect, it, beforeEach, vi } from 'vitest'
import { useGridState, isFilterValuePresent } from '../../app/composables/useGridState'

const mockReplace = vi.fn()
const mockSaveSettings = vi.fn()

describe('useGridState', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('useRoute', () => ({ query: {} }))
    vi.stubGlobal('useRouter', () => ({ replace: mockReplace }))
    vi.stubGlobal('useGridSettingsStore', () => ({
      getSettings: () => undefined,
      saveSettings: mockSaveSettings
    }))
    vi.stubGlobal('useCookie', (_name: string, opts?: { default?: () => Record<string, boolean> }) =>
      ref(opts?.default?.() ?? null)
    )
    vi.stubGlobal('toRaw', (v: unknown) => v)
  })

  it('initializes with defaults', () => {
    const { state } = useGridState({ gridId: 'test-grid' })
    expect(state.page).toBe(1)
    expect(state.perPage).toBe(25)
    expect(state.search).toBe('')
    expect(state.sort).toBeNull()
    expect(state.direction).toBe('asc')
    expect(state.filters).toEqual({})
  })

  it('uses custom defaultPerPage', () => {
    const { state } = useGridState({ gridId: 'test-grid', defaultPerPage: 50 })
    expect(state.perPage).toBe(50)
  })

  it('initializes from URL query params', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { page: '3', per_page: '50', search: 'hello', sort: 'name', direction: 'desc' }
    }))
    const { state } = useGridState({ gridId: 'test-grid' })
    expect(state.page).toBe(3)
    expect(state.perPage).toBe(50)
    expect(state.search).toBe('hello')
    expect(state.sort).toBe('name')
    expect(state.direction).toBe('desc')
  })

  it('initializes from persisted settings', () => {
    vi.stubGlobal('useGridSettingsStore', () => ({
      getSettings: () => ({ perPage: 100, sort: 'created_at', direction: 'desc' as const }),
      saveSettings: mockSaveSettings
    }))
    const { state } = useGridState({ gridId: 'test-grid' })
    expect(state.perPage).toBe(100)
    expect(state.sort).toBe('created_at')
    expect(state.direction).toBe('desc')
  })

  it('setPage updates page', () => {
    const { state, setPage } = useGridState({ gridId: 'test-grid' })
    setPage(3)
    expect(state.page).toBe(3)
  })

  it('setPerPage resets page to 1', () => {
    const { state, setPage, setPerPage } = useGridState({ gridId: 'test-grid' })
    setPage(3)
    setPerPage(50)
    expect(state.perPage).toBe(50)
    expect(state.page).toBe(1)
  })

  it('setSearch resets page to 1', () => {
    const { state, setPage, setSearch } = useGridState({ gridId: 'test-grid' })
    setPage(3)
    setSearch('test')
    expect(state.search).toBe('test')
    expect(state.page).toBe(1)
  })

  it('setSort updates sort and direction', () => {
    const { state, setSort } = useGridState({ gridId: 'test-grid' })
    setSort('name', 'desc')
    expect(state.sort).toBe('name')
    expect(state.direction).toBe('desc')
  })

  it('setSort defaults direction to asc', () => {
    const { state, setSort } = useGridState({ gridId: 'test-grid' })
    setSort('email')
    expect(state.sort).toBe('email')
    expect(state.direction).toBe('asc')
  })

  it('setFilter updates filter and resets page', () => {
    const { state, setPage, setFilter } = useGridState({ gridId: 'test-grid' })
    setPage(3)
    setFilter('status', 'active')
    expect(state.filters.status).toBe('active')
    expect(state.page).toBe(1)
  })

  it('resetFilters clears everything', () => {
    const { state, setSearch, setFilter, resetFilters } = useGridState({ gridId: 'test-grid' })
    setSearch('foo')
    setFilter('status', 'active')
    resetFilters()
    expect(state.filters).toEqual({})
    expect(state.search).toBe('')
    expect(state.page).toBe(1)
  })

  it('toParams produces correct API params', () => {
    const { setSearch, setSort, setFilter, toParams } = useGridState({ gridId: 'test-grid' })
    setSearch('query')
    setSort('name', 'desc')
    setFilter('client_id', 5)

    const params = toParams()
    expect(params.page).toBe(1)
    expect(params.per_page).toBe(25)
    expect(params.search).toBe('query')
    // Backend SortRenderer expects colon-joined `field:direction`
    expect(params.sort).toBe('name:desc')
    expect(params.direction).toBeUndefined()
    expect(params.client_id).toBe(5)
  })

  it('toParams emits plain sort field when direction is asc', () => {
    const { setSort, toParams } = useGridState({ gridId: 'test-grid' })
    setSort('name', 'asc')
    const params = toParams()
    expect(params.sort).toBe('name')
  })

  it('defaultSort/defaultDirection apply when nothing is set', () => {
    const { toParams } = useGridState({
      gridId: 'test-grid',
      defaultSort: 'created_at',
      defaultDirection: 'desc'
    })
    const params = toParams()
    expect(params.sort).toBe('created_at:desc')
  })

  it('toParams omits empty values', () => {
    const { toParams } = useGridState({ gridId: 'test-grid' })
    const params = toParams()
    expect(params.search).toBeUndefined()
    expect(params.sort).toBeUndefined()
  })

  it('initFilters populates from URL query', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { client_id: '5', status: 'active' }
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['client_id', 'status'])
    expect(state.filters.client_id).toBe(5)
    expect(state.filters.status).toBe('active')
  })

  it('initFilters handles array query values', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { role_ids: ['1', '2', '3'] }
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['role_ids'])
    expect(state.filters.role_ids).toEqual([1, 2, 3])
  })

  it('initFilters uses persisted values when URL is empty', () => {
    vi.stubGlobal('useGridSettingsStore', () => ({
      getSettings: () => ({ filters: { status: 'active' } }),
      saveSettings: mockSaveSettings
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['status'])
    expect(state.filters.status).toBe('active')
  })

  it('setColumnVisibility updates visibility', () => {
    const { columnVisibility, setColumnVisibility } = useGridState({
      gridId: 'test-grid',
      defaultColumnVisibility: { name: true, email: true }
    })
    setColumnVisibility('email', false)
    expect(columnVisibility.value.email).toBe(false)
    expect(columnVisibility.value.name).toBe(true)
  })

  it('columnVisibility falls back to default when cookie value is null', () => {
    vi.stubGlobal('useCookie', () => ref(null))
    const { columnVisibility } = useGridState({
      gridId: 'test-grid',
      defaultColumnVisibility: { name: true, email: false }
    })
    expect(columnVisibility.value).toEqual({ name: true, email: false })
  })

  it('initFilters parses boolean true string', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { is_active: 'true' }
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['is_active'])
    expect(state.filters.is_active).toBe(true)
  })

  it('initFilters parses boolean false string', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { is_active: 'false' }
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['is_active'])
    expect(state.filters.is_active).toBe(false)
  })

  it('initFilters parses null string', () => {
    vi.stubGlobal('useRoute', () => ({
      query: { parent_id: 'null' }
    }))
    const { state, initFilters } = useGridState({ gridId: 'test-grid' })
    initFilters(['parent_id'])
    expect(state.filters.parent_id).toBeNull()
  })
})

describe('isFilterValuePresent', () => {
  it('returns false for undefined, null, empty string', () => {
    expect(isFilterValuePresent(undefined)).toBe(false)
    expect(isFilterValuePresent(null)).toBe(false)
    expect(isFilterValuePresent('')).toBe(false)
  })

  it('returns true for non-empty values', () => {
    expect(isFilterValuePresent(0)).toBe(true)
    expect(isFilterValuePresent('text')).toBe(true)
    expect(isFilterValuePresent(false)).toBe(true)
    expect(isFilterValuePresent([])).toBe(true)
  })
})
