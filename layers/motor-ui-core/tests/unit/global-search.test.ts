import { describe, expect, it, vi, beforeEach } from 'vitest'
import { readonly } from 'vue'

import {
  resolveRoute,
  resolveIcon,
  resolveIndexLabel,
  resolveModuleLabel,
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

    it('uses thumbnail as avatar when available', async () => {
      const t = vi.fn((key: string) => key)
      mockClient.mockResolvedValue({
        data: [
          { module: 'motor-media', index: 'files', id: 1, title: 'Photo', score: 1, meta: { thumbnail_url: 'https://example.com/thumb.jpg' } }
        ],
        meta: { total: 1 }
      })

      const result = await searchPalette('photo', t)
      const item = result.groups[0].items[0]
      expect(item.avatar).toEqual({ src: 'https://example.com/thumb.jpg' })
      expect(item.icon).toBeUndefined()
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

    it('applies module filter prefix', async () => {
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
