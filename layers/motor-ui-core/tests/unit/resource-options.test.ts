import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { setActivePinia, createPinia } from 'pinia'

import {
  invalidateResourceOptions,
  fetchResourceOptions,
  useResourceOptions,
  useApiMutation
} from '~/composables/useResourceOptions'
import { useResourceOptionsStore } from '~/stores/resourceOptions'

const mockClient = vi.fn()
vi.stubGlobal('useSanctumClient', () => mockClient)
vi.stubGlobal('clearNuxtData', vi.fn())
vi.stubGlobal('useAsyncData', (key: string, fetcher: () => Promise<unknown>, opts?: { getCachedData?: () => unknown }) => {
  const cached = opts?.getCachedData?.()
  if (cached) {
    return { data: ref(cached), status: ref('success') }
  }
  const data = ref(null)
  const status = ref('pending')
  fetcher().then((result) => {
    data.value = result
    status.value = 'success'
  }).catch(() => {
    status.value = 'error'
  })
  return { data, status }
})

describe('useResourceOptions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    mockClient.mockReset()
  })

  describe('invalidateResourceOptions', () => {
    it('clears store cache for endpoint', () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/users', [{ label: 'Admin', value: 1 }])
      expect(store.get('/api/v2/users', 60000)).not.toBeNull()

      invalidateResourceOptions('/api/v2/users')
      expect(store.get('/api/v2/users', 60000)).toBeNull()
    })
  })

  describe('fetchResourceOptions', () => {
    it('fetches and maps options from API', async () => {
      mockClient.mockResolvedValue({
        data: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' }
        ]
      })

      const options = await fetchResourceOptions('/api/v2/users', { labelKey: 'name' })

      expect(options).toEqual([
        { label: 'Alice', value: 1 },
        { label: 'Bob', value: 2 }
      ])
    })

    it('uses cache when available', async () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/users', [{ label: 'Cached', value: 99 }])

      const options = await fetchResourceOptions('/api/v2/users', { labelKey: 'name' })

      expect(options).toEqual([{ label: 'Cached', value: 99 }])
      expect(mockClient).not.toHaveBeenCalled()
    })

    it('uses custom valueKey', async () => {
      mockClient.mockResolvedValue({
        data: [{ uuid: 'abc', title: 'Page 1' }]
      })

      const options = await fetchResourceOptions('/api/v2/pages', { labelKey: 'title', valueKey: 'uuid' })

      expect(options).toEqual([{ label: 'Page 1', value: 'abc' }])
    })

    it('deduplicates in-flight requests', async () => {
      let resolvePromise: (v: unknown) => void
      mockClient.mockReturnValue(new Promise((resolve) => {
        resolvePromise = resolve
      }))

      const p1 = fetchResourceOptions('/api/v2/fresh-endpoint', { labelKey: 'name' })
      const p2 = fetchResourceOptions('/api/v2/fresh-endpoint', { labelKey: 'name' })

      resolvePromise!({ data: [{ id: 1, name: 'Test' }] })

      const [r1, r2] = await Promise.all([p1, p2])

      expect(r1).toEqual(r2)
      expect(mockClient).toHaveBeenCalledTimes(1)
    })

    it('removes in-flight entry on error', async () => {
      mockClient.mockRejectedValue(new Error('fail'))

      await expect(fetchResourceOptions('/api/v2/error-endpoint', { labelKey: 'name' })).rejects.toThrow('fail')

      mockClient.mockResolvedValue({ data: [{ id: 1, name: 'Retry' }] })
      const options = await fetchResourceOptions('/api/v2/error-endpoint', { labelKey: 'name' })
      expect(options).toEqual([{ label: 'Retry', value: 1 }])
    })
  })

  describe('useResourceOptions composable', () => {
    it('returns options and loading state', () => {
      mockClient.mockResolvedValue({
        data: [{ id: 1, name: 'Alice' }]
      })

      const result = useResourceOptions('/api/v2/users-composable', { labelKey: 'name' })

      expect(result.options).toBeDefined()
      expect(result.loading).toBeDefined()
    })

    it('returns cached data when available', () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/cached-endpoint', [{ label: 'Cached', value: 1 }])

      const result = useResourceOptions('/api/v2/cached-endpoint', { labelKey: 'name' })

      expect(result.options.value).toEqual([{ label: 'Cached', value: 1 }])
    })

    it('uses custom valueKey for cache key', () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/pages#v=uuid', [{ label: 'Page', value: 'abc' }])

      const result = useResourceOptions('/api/v2/pages', { labelKey: 'title', valueKey: 'uuid' })

      expect(result.options.value).toEqual([{ label: 'Page', value: 'abc' }])
    })

    it('returns empty options when data is null', () => {
      const result = useResourceOptions('/api/v2/empty-endpoint', { labelKey: 'name' })

      expect(result.options.value).toEqual([])
    })
  })

  describe('useApiMutation', () => {
    it('calls client with correct parameters', async () => {
      mockClient.mockResolvedValue({ data: { id: 1 } })

      const { mutate } = useApiMutation()
      const result = await mutate('/api/v2/users', { method: 'POST', body: { name: 'Test' } })

      expect(result).toEqual({ data: { id: 1 } })
      expect(mockClient).toHaveBeenCalledWith('/api/v2/users', { method: 'POST', body: { name: 'Test' } })
    })

    it('invalidates cache on success', async () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/users', [{ label: 'Old', value: 1 }])

      mockClient.mockResolvedValue({ data: { id: 2 } })

      const { mutate } = useApiMutation()
      await mutate('/api/v2/users', { method: 'POST', body: {} })

      expect(store.get('/api/v2/users', 60000)).toBeNull()
    })

    it('invalidates parent path for ID-suffixed URLs', async () => {
      const store = useResourceOptionsStore()
      store.set('/api/v2/users', [{ label: 'Old', value: 1 }])

      mockClient.mockResolvedValue({})

      const { mutate } = useApiMutation()
      await mutate('/api/v2/users/5', { method: 'PATCH', body: {} })

      expect(store.get('/api/v2/users', 60000)).toBeNull()
    })
  })
})
