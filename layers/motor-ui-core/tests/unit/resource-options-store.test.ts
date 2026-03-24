// AI-generated — review before merging
import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useResourceOptionsStore } from '../../app/stores/resourceOptions'

describe('useResourceOptionsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('resourceOptionsStore-set-stores', () => {
    const store = useResourceOptionsStore()
    const options = [{ label: 'Option A', value: 1 }]
    store.set('/api/clients', options)

    expect(store.entries['/api/clients']).toBeDefined()
    expect(store.entries['/api/clients'].data).toEqual(options)
    expect(store.entries['/api/clients'].fetchedAt).toBeGreaterThan(0)
  })

  it('resourceOptionsStore-get-within-ttl', () => {
    const store = useResourceOptionsStore()
    const options = [{ label: 'Option A', value: 1 }]
    store.set('/api/clients', options)

    const result = store.get('/api/clients', 60_000)
    expect(result).toEqual(options)
  })

  it('resourceOptionsStore-get-expired', () => {
    const store = useResourceOptionsStore()
    const options = [{ label: 'Option A', value: 1 }]

    const past = Date.now() - 120_000
    store.entries['/api/clients'] = { data: options, fetchedAt: past }

    const result = store.get('/api/clients', 60_000)
    expect(result).toBeNull()
  })

  it('resourceOptionsStore-invalidate-removes', () => {
    const store = useResourceOptionsStore()
    store.set('/api/clients', [{ label: 'A', value: 1 }])
    store.set('/api/roles', [{ label: 'B', value: 2 }])

    store.invalidate('/api/clients')
    expect(store.entries['/api/clients']).toBeUndefined()
    expect(store.entries['/api/roles']).toBeDefined()
  })
})
