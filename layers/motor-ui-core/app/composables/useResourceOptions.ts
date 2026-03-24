import type { SelectOption } from '../types/form'
import { useResourceOptionsStore } from '../stores/resourceOptions'

// ============================================
// In-flight promise deduplication (for fetchResourceOptions only)
// ============================================

const inFlightRequests = new Map<string, Promise<SelectOption[]>>()

const DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes

// ============================================
// Cache invalidation
// ============================================

export function invalidateResourceOptions(endpoint: string): void {
  const store = useResourceOptionsStore()
  store.invalidate(endpoint)
  inFlightRequests.delete(endpoint)
  clearNuxtData(key => typeof key === 'string' && key.startsWith('resource-options:') && key.includes(endpoint))
}

// ============================================
// fetchResourceOptions (standalone, for grid filters etc.)
// ============================================

interface ResourceOptionsConfig {
  labelKey: string
  valueKey?: string
  ttl?: number
}

export function fetchResourceOptions(endpoint: string, config: ResourceOptionsConfig): Promise<SelectOption[]> {
  const { labelKey, valueKey = 'id', ttl = DEFAULT_TTL } = config
  const store = useResourceOptionsStore()

  const cacheKey = valueKey === 'id' ? endpoint : `${endpoint}#v=${valueKey}`

  const cached = store.get(cacheKey, ttl)
  if (cached) {
    return Promise.resolve(cached)
  }

  const existing = inFlightRequests.get(cacheKey)
  if (existing) {
    return existing
  }

  const client = useSanctumClient()
  const promise = client<{ data: Array<Record<string, unknown>> }>(endpoint)
    .then((res) => {
      const mapped = res.data.map(item => ({
        label: String(item[labelKey] ?? ''),
        value: item[valueKey] as string | number
      }))
      store.set(cacheKey, mapped)
      inFlightRequests.delete(cacheKey)
      return mapped
    })
    .catch((err) => {
      inFlightRequests.delete(cacheKey)
      throw err
    })

  inFlightRequests.set(cacheKey, promise)
  return promise
}

// ============================================
// useResourceOptions composable (SSR-safe via useAsyncData)
// ============================================

export function useResourceOptions(endpoint: string, config: ResourceOptionsConfig) {
  const { labelKey, valueKey = 'id', ttl = DEFAULT_TTL } = config
  const store = useResourceOptionsStore()
  const cacheKey = valueKey === 'id' ? endpoint : `${endpoint}#v=${valueKey}`

  const { data, status } = useAsyncData<SelectOption[]>(
    `resource-options:${cacheKey}`,
    async () => {
      const client = useSanctumClient()
      const res = await client<{ data: Array<Record<string, unknown>> }>(endpoint)
      const mapped = res.data.map(item => ({
        label: String(item[labelKey] ?? ''),
        value: item[valueKey] as string | number
      }))
      store.set(cacheKey, mapped)
      return mapped
    },
    {
      getCachedData: () => store.get(cacheKey, ttl) ?? undefined
    }
  )

  return {
    options: computed<SelectOption[]>(() => data.value ?? []),
    loading: computed(() => status.value === 'pending')
  }
}

// ============================================
// useApiMutation composable
// ============================================

export function useApiMutation() {
  const client = useSanctumClient()

  async function mutate<T = unknown>(url: string, opts: { method: string, body?: Record<string, unknown> }): Promise<T> {
    const result = await client<T>(url, opts)

    // Auto-invalidate on success
    invalidateResourceOptions(url)

    // Also invalidate parent path for ID-suffixed URLs
    // e.g. /api/v2/email-templates/5 → /api/v2/email-templates
    const lastSlash = url.lastIndexOf('/')
    if (lastSlash > 0) {
      const parent = url.substring(0, lastSlash)
      // Only invalidate if parent looks like an API path (has at least one slash after protocol)
      if (parent.includes('/api/')) {
        invalidateResourceOptions(parent)
      }
    }

    return result
  }

  return { mutate }
}
