import { defineStore } from 'pinia'
import type { SelectOption } from '../types/form'

interface CachedEntry {
  data: SelectOption[]
  fetchedAt: number
}

export const useResourceOptionsStore = defineStore('resourceOptions', () => {
  const entries = ref<Record<string, CachedEntry>>({})

  function get(endpoint: string, ttl: number): SelectOption[] | null {
    const entry = entries.value[endpoint]
    if (entry && (Date.now() - entry.fetchedAt) < ttl) {
      return entry.data
    }
    return null
  }

  function set(endpoint: string, data: SelectOption[]) {
    entries.value[endpoint] = { data, fetchedAt: Date.now() }
  }

  function invalidate(endpoint: string) {
    const { [endpoint]: _, ...rest } = entries.value
    entries.value = rest
  }

  return { entries, get, set, invalidate }
}, {
  persist: {
    pick: ['entries']
  }
})
