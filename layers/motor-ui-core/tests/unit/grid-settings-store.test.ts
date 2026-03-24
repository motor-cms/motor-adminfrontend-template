// AI-generated — review before merging
import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useGridSettingsStore } from '../../app/stores/gridSettings'

describe('useGridSettingsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('gridSettingsStore-getSettings-returns', () => {
    const store = useGridSettingsStore()
    store.saveSettings('users-grid', { perPage: 25, sort: 'name', direction: 'asc', filters: {} })

    const result = store.getSettings('users-grid')
    expect(result).toBeDefined()
    expect(result!.perPage).toBe(25)
    expect(result!.sort).toBe('name')
  })

  it('gridSettingsStore-getSettings-undefined', () => {
    const store = useGridSettingsStore()
    const result = store.getSettings('nonexistent-grid')
    expect(result).toBeUndefined()
  })

  it('gridSettingsStore-saveSettings-merges', () => {
    const store = useGridSettingsStore()
    store.saveSettings('users-grid', { perPage: 25, sort: 'name', direction: 'asc', filters: {} })
    store.saveSettings('users-grid', { perPage: 50 })

    const result = store.getSettings('users-grid')
    expect(result!.perPage).toBe(50)
    expect(result!.sort).toBe('name')
  })

  it('gridSettingsStore-clearSettings-removes', () => {
    const store = useGridSettingsStore()
    store.saveSettings('users-grid', { perPage: 25, sort: null, direction: 'asc', filters: {} })
    store.saveSettings('roles-grid', { perPage: 10, sort: null, direction: 'desc', filters: {} })

    store.clearSettings('users-grid')
    expect(store.getSettings('users-grid')).toBeUndefined()
    expect(store.getSettings('roles-grid')).toBeDefined()
  })

  it('gridSettingsStore-clearAll-empties', () => {
    const store = useGridSettingsStore()
    store.saveSettings('users-grid', { perPage: 25, sort: null, direction: 'asc', filters: {} })
    store.saveSettings('roles-grid', { perPage: 10, sort: null, direction: 'desc', filters: {} })

    store.clearAll()
    expect(store.getSettings('users-grid')).toBeUndefined()
    expect(store.getSettings('roles-grid')).toBeUndefined()
  })
})
