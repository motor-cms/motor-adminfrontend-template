import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  useClientFilter,
  useLanguageFilter,
  useDomainFilter,
  useIsPublishedFilter,
  useIsActiveFilter,
  useIsInvisibleFilter,
  useGuardNameFilter,
  useScopeFilter,
  usePackageFilter,
  useGroupFilter,
  useCategoryFilter,
  useHttpStatusCodeFilter
} from '../../app/composables/useCommonFilters'

vi.stubGlobal('useI18n', () => ({ t: (key: string) => key }))
vi.mock('~/composables/useResourceOptions', () => ({ fetchResourceOptions: vi.fn().mockResolvedValue([]) }))

const mockClient = vi.fn()
vi.stubGlobal('useSanctumClient', () => mockClient)

describe('useCommonFilters', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('useClientFilter returns correct structure', () => {
    const filter = useClientFilter()
    expect(filter.key).toBe('client_id')
    expect(filter.type).toBe('select')
    expect(typeof filter.options).toBe('function')
  })

  it('useLanguageFilter returns correct structure', () => {
    const filter = useLanguageFilter()
    expect(filter.key).toBe('language_id')
    expect(filter.type).toBe('select')
    expect(typeof filter.options).toBe('function')
  })

  it('useDomainFilter returns correct structure', () => {
    const filter = useDomainFilter()
    expect(filter.key).toBe('domain_id')
    expect(filter.type).toBe('select')
    expect(typeof filter.options).toBe('function')
  })

  it('commonFilters-domain-filter', () => {
    const filter = useDomainFilter()
    expect(filter.key).toBe('domain_id')
    expect(filter.type).toBe('select')
    expect(typeof filter.options).toBe('function')
  })

  it('useIsPublishedFilter returns static options', () => {
    const filter = useIsPublishedFilter()
    expect(filter.key).toBe('is_published')
    expect(Array.isArray(filter.options)).toBe(true)
    const opts = filter.options as Array<{ label: string, value: number }>
    expect(opts).toHaveLength(2)
    expect(opts[0].value).toBe(1)
    expect(opts[1].value).toBe(0)
  })

  it('useIsActiveFilter returns static options', () => {
    const filter = useIsActiveFilter()
    expect(filter.key).toBe('is_active')
    expect(Array.isArray(filter.options)).toBe(true)
    const opts = filter.options as Array<{ label: string, value: number }>
    expect(opts).toHaveLength(2)
    expect(opts.find(o => o.value === 1)).toBeDefined()
    expect(opts.find(o => o.value === 0)).toBeDefined()
  })

  it('useIsInvisibleFilter returns correct key and options', () => {
    const filter = useIsInvisibleFilter()
    expect(filter.key).toBe('is_invisible')
    expect(filter.type).toBe('select')
    const opts = filter.options as Array<{ label: string, value: number }>
    expect(opts).toHaveLength(2)
  })

  it('useGuardNameFilter returns web/api options', () => {
    const filter = useGuardNameFilter()
    expect(filter.key).toBe('guard_name')
    const opts = filter.options as Array<{ label: string, value: string }>
    expect(opts).toHaveLength(2)
    expect(opts[0]).toEqual({ label: 'web', value: 'web' })
    expect(opts[1]).toEqual({ label: 'api', value: 'api' })
  })

  it('useScopeFilter returns async options', () => {
    const filter = useScopeFilter()
    expect(filter.key).toBe('scope')
    expect(typeof filter.options).toBe('function')
  })

  it('usePackageFilter returns async options', () => {
    const filter = usePackageFilter()
    expect(filter.key).toBe('package')
    expect(typeof filter.options).toBe('function')
  })

  it('useGroupFilter returns async options', () => {
    const filter = useGroupFilter()
    expect(filter.key).toBe('group')
    expect(typeof filter.options).toBe('function')
  })

  it('useCategoryFilter returns filter with scope-based options', () => {
    const filter = useCategoryFilter('my-scope')
    expect(filter.key).toBe('category_id')
    expect(typeof filter.options).toBe('function')
  })

  it('useCategoryFilter options fetches and formats categories', async () => {
    mockClient.mockResolvedValue({
      data: [
        { id: 1, name: 'Root', level: 0, _lft: 1 },
        { id: 2, name: 'Child A', level: 1, _lft: 2 },
        { id: 3, name: 'Grandchild', level: 2, _lft: 3 },
        { id: 4, name: 'Child B', level: 1, _lft: 5 }
      ]
    })

    const filter = useCategoryFilter('test-scope')
    const opts = await (filter.options as () => Promise<unknown[]>)()

    expect(opts).toHaveLength(3)
    expect(opts[0]).toEqual({ label: 'Child A', value: 2 })
    expect((opts[1] as { label: string }).label).toContain('Grandchild')
    expect((opts[1] as { label: string }).label).toContain('\u21B3')
    expect(opts[2]).toEqual({ label: 'Child B', value: 4 })
  })

  it('commonFilters-category-filter-scope', async () => {
    mockClient.mockResolvedValue({ data: [] })

    const filter = useCategoryFilter('my-scope')
    await (filter.options as () => Promise<unknown[]>)()

    expect(mockClient).toHaveBeenCalledWith(expect.stringContaining('scope=my-scope'))
  })

  it('useHttpStatusCodeFilter returns HTTP status options', () => {
    const filter = useHttpStatusCodeFilter()
    expect(filter.key).toBe('http_status_code')
    const opts = filter.options as Array<{ label: string, value: number }>
    expect(opts).toHaveLength(4)
    expect(opts.map(o => o.value)).toEqual([301, 302, 307, 410])
  })

  it('filters accept overrides', () => {
    const filter = useClientFilter({ key: 'custom_key', type: 'text' })
    expect(filter.key).toBe('custom_key')
    expect(filter.type).toBe('text')
  })

  it('all boolean filters accept overrides', () => {
    const published = useIsPublishedFilter({ key: 'custom_pub' })
    expect(published.key).toBe('custom_pub')

    const invisible = useIsInvisibleFilter({ placeholder: 'custom' })
    expect(invisible.placeholder).toBe('custom')
  })

  it('async options functions invoke fetchResourceOptions', async () => {
    const { fetchResourceOptions } = await import('~/composables/useResourceOptions')
    const mockFetch = fetchResourceOptions as ReturnType<typeof vi.fn>

    const clientFilter = useClientFilter()
    await (clientFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/clients', { labelKey: 'name' })

    mockFetch.mockClear()
    const langFilter = useLanguageFilter()
    await (langFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/languages', { labelKey: 'native_name' })

    mockFetch.mockClear()
    const domainFilter = useDomainFilter()
    await (domainFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/domains', { labelKey: 'name' })

    mockFetch.mockClear()
    const scopeFilter = useScopeFilter()
    await (scopeFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/category-trees', { labelKey: 'scope', valueKey: 'scope' })

    mockFetch.mockClear()
    const packageFilter = usePackageFilter()
    await (packageFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/config-variables', { labelKey: 'package', valueKey: 'package' })

    mockFetch.mockClear()
    const groupFilter = useGroupFilter()
    await (groupFilter.options as () => Promise<unknown>)()
    expect(mockFetch).toHaveBeenCalledWith('/api/v2/config-variables', { labelKey: 'group', valueKey: 'group' })
  })
})
