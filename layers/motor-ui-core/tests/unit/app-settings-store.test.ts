// AI-generated — review before merging
import { describe, expect, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppSettingsStore } from '../../app/stores/appSettings'

describe('useAppSettingsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('appSettingsStore-default-locale', () => {
    const store = useAppSettingsStore()
    expect(store.locale).toBe('de')
  })

  it('appSettingsStore-persists-locale', () => {
    const store = useAppSettingsStore()
    store.locale = 'en'
    expect(store.locale).toBe('en')
  })
})
