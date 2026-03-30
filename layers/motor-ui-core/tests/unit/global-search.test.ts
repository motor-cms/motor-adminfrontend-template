import { describe, expect, it, vi, beforeEach } from 'vitest'
import { readonly } from 'vue'

import {
  resolveRoute,
  resolveIcon,
  resolveIndexLabel,
  resolveModuleLabel,
  resolveActions,
  resolveSuffix,
  searchPalette,
  fetchSearchGrid,
  useModuleFacets
} from '~/composables/useGlobalSearch'

vi.stubGlobal('readonly', readonly)

const mockClient = vi.fn()
vi.stubGlobal('useSanctumClient', () => mockClient)

describe('useGlobalSearch', () => {
  beforeEach(() => {
    mockClient.mockReset()
  })

  describe('resolveRoute', () => {
    it('returns correct route for a known module/index with id', () => {
      const result = resolveRoute({ module: 'motor-admin', index: 'users', id: 42, title: 'Test', score: 1 })
      expect(result).toBe('/motor-admin/users/42/edit')
    })

    it('returns "#" for unknown module/index', () => {
      const result = resolveRoute({ module: 'unknown', index: 'stuff', id: 1, title: 'X', score: 0 })
      expect(result).toBe('#')
    })

    it('returns "#" when id is null', () => {
      const result = resolveRoute({ module: 'motor-admin', index: 'users', id: null as unknown as number, title: 'Test', score: 1 })
      expect(result).toBe('#')
    })

    it('resolves builder_pages route', () => {
      const result = resolveRoute({ module: 'motor-builder', index: 'builder_pages', id: 7, title: 'Page', score: 0.5 })
      expect(result).toBe('/motor-builder/builder-pages/7/edit')
    })

    it('resolves category_trees route (no /edit suffix)', () => {
      const result = resolveRoute({ module: 'motor-admin', index: 'category_trees', id: 3, title: 'Tree', score: 1 })
      expect(result).toBe('/motor-admin/category-trees/3')
    })

    it('resolves media files route', () => {
      const result = resolveRoute({ module: 'motor-media', index: 'files', id: 99, title: 'Image', score: 0 })
      expect(result).toBe('/motor-media/files/99/edit')
    })
  })

  describe('resolveIcon', () => {
    it('returns icon for known module/index', () => {
      expect(resolveIcon('motor-admin', 'users')).toBe('i-lucide-users')
    })

    it('returns icon for motor-builder/builder_pages', () => {
      expect(resolveIcon('motor-builder', 'builder_pages')).toBe('i-lucide-file-text')
    })

    it('returns fallback icon for unknown module/index', () => {
      expect(resolveIcon('unknown', 'unknown')).toBe('i-lucide-file')
    })

    it('returns icon for motor-media/files', () => {
      expect(resolveIcon('motor-media', 'files')).toBe('i-lucide-image')
    })

    it('returns icon for motor-scoring/topics', () => {
      expect(resolveIcon('motor-scoring', 'topics')).toBe('i-lucide-trophy')
    })
  })

  describe('resolveRoute - new entities', () => {
    it('resolves builder_custom_components route', () => {
      const result = resolveRoute({ module: 'motor-builder', index: 'builder_custom_components', id: 5, title: 'Comp', score: 1 })
      expect(result).toBe('/motor-builder/builder-components/5/edit')
    })

    it('resolves navigation_trees route', () => {
      const result = resolveRoute({ module: 'motor-builder', index: 'navigation_trees', id: 3, title: 'Nav', score: 1 })
      expect(result).toBe('/motor-builder/navigation-trees/3')
    })

    it('resolves clickpaths route', () => {
      const result = resolveRoute({ module: 'motor-assistant', index: 'clickpaths', id: 10, title: 'Path', score: 1 })
      expect(result).toBe('/motor-assistant/clickpaths/10/edit')
    })

    it('resolves custom_content_types route', () => {
      const result = resolveRoute({ module: 'motor-content-type', index: 'custom_content_types', id: 2, title: 'Type', score: 1 })
      expect(result).toBe('/motor-content-type/content-types/2/edit')
    })

    it('resolves seo_redirects route', () => {
      const result = resolveRoute({ module: 'motor-builder', index: 'seo_redirects', id: 7, title: 'Redirect', score: 1 })
      expect(result).toBe('/motor-builder/seo-redirects/7/edit')
    })

    it('resolves search_configs route', () => {
      const result = resolveRoute({ module: 'motor-builder', index: 'search_configs', id: 4, title: 'Config', score: 1 })
      expect(result).toBe('/motor-builder/search-configs/4/edit')
    })
  })

  describe('resolveActions', () => {
    const t = vi.fn((key: string) => key)

    it('returns link-navigation and publish actions for builder_pages', () => {
      const result = { module: 'motor-builder', index: 'builder_pages', id: 1, title: 'Page', score: 1, meta: {} }
      const actions = resolveActions(result, t)
      expect(actions).toHaveLength(2)
      expect(actions[0].key).toBe('link-nav')
      expect(actions[0].emit).toBe('link-navigation')
      expect(actions[1].key).toBe('publish')
      expect(actions[1].emit).toBe('publish')
    })

    it('returns publish icon based on is_published meta', () => {
      const published = { module: 'motor-builder', index: 'builder_pages', id: 1, title: 'P', score: 1, meta: { is_published: 1 } }
      const unpublished = { module: 'motor-builder', index: 'builder_pages', id: 2, title: 'U', score: 1, meta: { is_published: 0 } }

      const pubActions = resolveActions(published, t)
      const unpubActions = resolveActions(unpublished, t)

      expect(pubActions[1].icon).toBe('i-lucide-globe-lock')
      expect(unpubActions[1].icon).toBe('i-lucide-globe')
    })

    it('returns lightbox, download, copy-url for image files', () => {
      const result = { module: 'motor-media', index: 'files', id: 1, title: 'Photo', score: 1, meta: { mime_type: 'image/jpeg' } }
      const actions = resolveActions(result, t)
      expect(actions).toHaveLength(3)
      expect(actions.map(a => a.key)).toEqual(['lightbox', 'download', 'copy-url'])
    })

    it('returns only download and copy-url for non-image files', () => {
      const result = { module: 'motor-media', index: 'files', id: 1, title: 'Doc.pdf', score: 1, meta: { mime_type: 'application/pdf' } }
      const actions = resolveActions(result, t)
      expect(actions).toHaveLength(2)
      expect(actions.map(a => a.key)).toEqual(['download', 'copy-url'])
    })

    it('returns view action for navigation_trees', () => {
      const result = { module: 'motor-builder', index: 'navigation_trees', id: 5, title: 'Nav', score: 1, meta: {} }
      const actions = resolveActions(result, t)
      expect(actions).toHaveLength(1)
      expect(actions[0].key).toBe('view')
      expect(actions[0].to).toBe('/motor-builder/navigation-trees/5')
    })

    it('returns no actions for generic entities (click navigates to edit)', () => {
      const result = { module: 'motor-admin', index: 'users', id: 1, title: 'User', score: 1, meta: {} }
      const actions = resolveActions(result, t)
      expect(actions).toEqual([])
    })

    it('returns empty actions for unknown entities', () => {
      const result = { module: 'unknown', index: 'stuff', id: 1, title: 'X', score: 1, meta: {} }
      const actions = resolveActions(result, t)
      expect(actions).toEqual([])
    })
  })

  describe('resolveIndexLabel', () => {
    it('returns translated label when translation exists', () => {
      const t = vi.fn().mockReturnValue('Users')
      expect(resolveIndexLabel('motor-admin', 'users', t)).toBe('Users')
      expect(t).toHaveBeenCalledWith('motor-admin.users.title')
    })

    it('returns fallback when translation returns key itself', () => {
      const t = vi.fn((key: string) => key)
      const result = resolveIndexLabel('motor-admin', 'email_templates', t)
      expect(result).toBe('Email Templates')
    })

    it('capitalizes each word in fallback', () => {
      const t = vi.fn((key: string) => key)
      const result = resolveIndexLabel('motor-admin', 'config_variables', t)
      expect(result).toBe('Config Variables')
    })
  })

  describe('resolveModuleLabel', () => {
    it('returns translated label for known module', () => {
      const t = vi.fn().mockReturnValue('Administration')
      expect(resolveModuleLabel('motor-admin', t)).toBe('Administration')
      expect(t).toHaveBeenCalledWith('motor-core.global.administration')
    })

    it('returns translated label for motor-media', () => {
      const t = vi.fn().mockReturnValue('Media')
      expect(resolveModuleLabel('motor-media', t)).toBe('Media')
    })

    it('returns translated label for motor-builder', () => {
      const t = vi.fn().mockReturnValue('Builder')
      expect(resolveModuleLabel('motor-builder', t)).toBe('Builder')
    })

    it('returns fallback for unknown module with motor- prefix', () => {
      const t = vi.fn()
      const result = resolveModuleLabel('motor-custom', t)
      expect(result).toBe('Custom')
    })

    it('returns fallback for module without motor- prefix', () => {
      const t = vi.fn()
      const result = resolveModuleLabel('other', t)
      expect(result).toBe('Other')
    })
  })

  describe('resolveSuffix', () => {
    it('returns navigation_tree_name from meta', () => {
      const result = { module: 'motor-builder', index: 'navigation_items', id: 1, title: 'Strom', score: 1, meta: { navigation_tree_id: 5, navigation_tree_name: 'Hauptnavigation links' } }
      expect(resolveSuffix(result)).toBe('Hauptnavigation links')
    })

    it('returns undefined when no navigation_tree_name in meta', () => {
      const result = { module: 'motor-admin', index: 'users', id: 1, title: 'User', score: 1, meta: {} }
      expect(resolveSuffix(result)).toBeUndefined()
    })

    it('returns undefined when meta is empty', () => {
      const result = { module: 'motor-builder', index: 'navigation_items', id: 1, title: 'Item', score: 1, meta: { navigation_tree_id: 5 } }
      expect(resolveSuffix(result)).toBeUndefined()
    })
  })

  describe('searchPalette', () => {
    it('calls API and returns grouped results', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-admin', index: 'users', id: 1, title: 'Admin User', score: 1 },
          { module: 'motor-admin', index: 'users', id: 2, title: 'Regular User', score: 0.8 },
          { module: 'motor-builder', index: 'builder_pages', id: 5, title: 'Home Page', score: 0.5 }
        ],
        meta: { total: 3 }
      })

      const result = await searchPalette('test', t, 10)

      expect(mockClient).toHaveBeenCalledWith('/api/v2/global-search', { query: { q: 'test', limit: 10 } })
      expect(result.groups).toHaveLength(2)
      expect(result.total).toBe(3)

      const usersGroup = result.groups.find(g => g.id === 'motor-admin/users')
      expect(usersGroup).toBeDefined()
      expect(usersGroup!.items).toHaveLength(2)
      expect(usersGroup!.items[0].label).toBe('Admin User')
      expect(usersGroup!.items[0].to).toBe('/motor-admin/users/1/edit')
    })

    it('uses thumbnail as avatar for image files', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-media', index: 'files', id: 1, title: 'Photo', score: 1, meta: { thumbnail_url: 'https://example.com/thumb.jpg', mime_type: 'image/jpeg' } }
        ],
        meta: { total: 1, modules: {} }
      })

      const result = await searchPalette('photo', t)
      const item = result.groups[0].items[0]
      expect(item.avatar).toEqual({ src: 'https://example.com/thumb.jpg' })
      expect(item.icon).toBeUndefined()
    })

    it('keeps icon for non-image files even with thumbnail_url', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-media', index: 'files', id: 1, title: 'Document.pdf', score: 1, meta: { thumbnail_url: 'https://example.com/thumb.jpg', mime_type: 'application/pdf' } }
        ],
        meta: { total: 1, modules: {} }
      })

      const result = await searchPalette('doc', t)
      const item = result.groups[0].items[0]
      expect(item.avatar).toBeUndefined()
      expect(item.icon).toBeDefined()
    })

    it('uses "(Untitled)" for results without title', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-admin', index: 'users', id: 1, title: null, score: 1 }
        ],
        meta: { total: 1 }
      })

      const result = await searchPalette('test', t)
      expect(result.groups[0].items[0].label).toBe('(Untitled)')
    })
  })

  describe('searchPalette - new features', () => {
    it('returns moduleFacets from API response', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [],
        meta: { total: 0, modules: { 'motor-admin': 5, 'motor-media': 3 } }
      })

      const result = await searchPalette('test', t)
      expect(result.moduleFacets).toEqual({ 'motor-admin': 5, 'motor-media': 3 })
    })

    it('includes excerpt on palette items', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-admin', index: 'users', id: 1, title: 'Admin', excerpt: 'Admin user description', score: 1, meta: {} }
        ],
        meta: { total: 1, modules: {} }
      })

      const result = await searchPalette('admin', t)
      expect(result.groups[0].items[0].excerpt).toBe('Admin user description')
    })

    it('includes actions on palette items', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-media', index: 'files', id: 1, title: 'Photo', score: 1, meta: { mime_type: 'image/jpeg' } }
        ],
        meta: { total: 1, modules: {} }
      })

      const result = await searchPalette('photo', t)
      const actions = result.groups[0].items[0].actions
      expect(actions.length).toBeGreaterThan(0)
      expect(actions.map(a => a.key)).toContain('lightbox')
    })

    it('includes module and index on palette items', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-builder', index: 'builder_pages', id: 1, title: 'Page', score: 1, meta: {} }
        ],
        meta: { total: 1, modules: {} }
      })

      const result = await searchPalette('page', t)
      expect(result.groups[0].items[0].module).toBe('motor-builder')
      expect(result.groups[0].items[0].index).toBe('builder_pages')
    })

    it('includes suffix from navigation_tree_name for navigation items', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-builder', index: 'navigation_items', id: 1, title: 'Strom', score: 1, meta: { navigation_tree_id: 5, navigation_tree_name: 'Navbar' } },
          { module: 'motor-builder', index: 'navigation_items', id: 2, title: 'Strom', score: 0.9, meta: { navigation_tree_id: 8, navigation_tree_name: 'Hauptnavigation links' } }
        ],
        meta: { total: 2, modules: {} }
      })

      const result = await searchPalette('strom', t)
      expect(result.groups[0].items[0].suffix).toBe('Navbar')
      expect(result.groups[0].items[1].suffix).toBe('Hauptnavigation links')
    })
  })

  describe('fetchSearchGrid', () => {
    it('returns empty response when no search term', async () => {
      const t = vi.fn((key: string) => key)
      const fetcher = fetchSearchGrid(t)

      const result = await fetcher({ page: 1, per_page: 25 })
      expect(result.data).toEqual([])
      expect(result.meta.total).toBe(0)
      expect(mockClient).not.toHaveBeenCalled()
    })

    it('fetches and transforms search results', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-admin', index: 'users', id: 1, title: 'Admin', excerpt: 'Admin user', score: 1.0 }
        ],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: { 'motor-admin': 1 } }
      })

      const fetcher = fetchSearchGrid(t)
      const result = await fetcher({ page: 1, per_page: 25, search: 'admin' })

      expect(result.data).toHaveLength(1)
      expect(result.data[0].title).toBe('Admin')
      expect(result.data[0].to).toBe('/motor-admin/users/1/edit')
      expect(result.meta.total).toBe(1)
    })

    it('applies module filter as query param', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [],
        meta: { total: 0, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t, 'motor-admin')
      await fetcher({ page: 1, per_page: 25, search: 'test' })

      expect(mockClient).toHaveBeenCalledWith('/api/v2/global-search', {
        query: expect.objectContaining({ q: 'test', module: 'motor-admin' })
      })
    })

    it('does not include module param when no filter', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [],
        meta: { total: 0, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t)
      await fetcher({ page: 1, per_page: 25, search: 'test' })

      const callArgs = mockClient.mock.calls[0][1] as { query: Record<string, unknown> }
      expect(callArgs.query.module).toBeUndefined()
    })

    it('preserves facets when module filter is active', async () => {
      const t = vi.fn((key: string) => key)

      mockClient.mockResolvedValue({
        data: [{ module: 'motor-admin', index: 'users', id: 1, title: 'A', excerpt: '', score: 1, meta: {} }],
        meta: { total: 5, page: 1, last_page: 1, per_page: 25, modules: { 'motor-admin': 5, 'motor-media': 10 } }
      })

      const unfilteredFetcher = fetchSearchGrid(t)
      await unfilteredFetcher({ page: 1, per_page: 25, search: 'test' })

      const facets = useModuleFacets()
      expect(facets.value).toEqual({ 'motor-admin': 5, 'motor-media': 10 })

      mockClient.mockResolvedValue({
        data: [{ module: 'motor-admin', index: 'users', id: 1, title: 'A', excerpt: '', score: 1, meta: {} }],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: { 'motor-admin': 1 } }
      })

      const filteredFetcher = fetchSearchGrid(t, 'motor-admin')
      await filteredFetcher({ page: 1, per_page: 25, search: 'test' })

      expect(facets.value).toEqual({ 'motor-admin': 5, 'motor-media': 10 })
    })

    it('includes entity_meta in grid rows', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-builder', index: 'builder_pages', id: 1, title: 'Page', excerpt: '', score: 1, meta: { uuid: 'abc-123', is_published: 1 } }
        ],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t)
      const result = await fetcher({ page: 1, per_page: 25, search: 'test' })

      expect(result.data[0].entity_meta).toEqual({ uuid: 'abc-123', is_published: 1 })
    })

    it('includes icon, raw_module, raw_index in grid rows', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-admin', index: 'users', id: 1, title: 'User', excerpt: '', score: 1, meta: {} }
        ],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t)
      const result = await fetcher({ page: 1, per_page: 25, search: 'test' })

      expect(result.data[0].raw_module).toBe('motor-admin')
      expect(result.data[0].raw_index).toBe('users')
      expect(result.data[0].icon).toBe('i-lucide-users')
    })

    it('includes actions in grid rows', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-media', index: 'files', id: 1, title: 'File', excerpt: '', score: 1, meta: {} }
        ],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t)
      const result = await fetcher({ page: 1, per_page: 25, search: 'test' })

      expect(result.data[0].actions.length).toBeGreaterThan(0)
      expect(result.data[0].actions.map(a => a.key)).toContain('download')
    })

    it('accepts preClient parameter', async () => {
      const t = vi.fn((key: string) => key)
      const customClient = vi.fn().mockResolvedValue({
        data: [],
        meta: { total: 0, page: 1, last_page: 1, per_page: 25, modules: {} }
      })

      const fetcher = fetchSearchGrid(t, undefined, customClient)
      await fetcher({ page: 1, per_page: 25, search: 'test' })

      expect(customClient).toHaveBeenCalled()
      expect(mockClient).not.toHaveBeenCalled()
    })
  })

  describe('useModuleFacets', () => {
    it('returns a readonly ref', () => {
      const facets = useModuleFacets()
      expect(facets.value).toBeDefined()
    })
  })

  describe('fetchSearchGrid - stale response handling', () => {
    it('discards stale responses when a newer fetch has started', async () => {
      const t = vi.fn((key: string) => key)

      let resolveFirst: ((value: unknown) => void) | undefined
      let resolveSecond: ((value: unknown) => void) | undefined

      mockClient
        .mockImplementationOnce(() => new Promise((resolve) => { resolveFirst = resolve }))
        .mockImplementationOnce(() => new Promise((resolve) => { resolveSecond = resolve }))

      const fetcher = fetchSearchGrid(t)

      const firstPromise = fetcher({ page: 1, per_page: 25, search: 'old' })
      const secondPromise = fetcher({ page: 1, per_page: 25, search: 'new' })

      resolveSecond!({
        data: [{ module: 'motor-admin', index: 'users', id: 1, title: 'New', excerpt: '', score: 1 }],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: { 'motor-admin': 1 } }
      })

      const secondResult = await secondPromise

      resolveFirst!({
        data: [{ module: 'motor-admin', index: 'users', id: 99, title: 'Old', excerpt: '', score: 0.5 }],
        meta: { total: 1, page: 1, last_page: 1, per_page: 25, modules: { 'motor-admin': 1 } }
      })

      const firstResult = await firstPromise

      expect(secondResult.data).toHaveLength(1)
      expect(secondResult.data[0].title).toBe('New')
      expect(firstResult.data).toHaveLength(0)
      expect(firstResult.meta.total).toBe(0)
    })
  })
})
