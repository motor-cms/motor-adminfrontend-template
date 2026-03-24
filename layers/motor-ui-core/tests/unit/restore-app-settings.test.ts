import { describe, expect, it, vi } from 'vitest'

const mockLocale = { value: 'en' }
const mockAppSettingsStore = vi.fn()
vi.stubGlobal('useAppSettingsStore', mockAppSettingsStore)

let hookCallback: (() => void) | null = null
let pluginCallback: ((nuxtApp: { $i18n: { locale: { value: string } }, hook: (name: string, cb: () => void) => void }) => void) | null = null
vi.stubGlobal('defineNuxtPlugin', (fn: typeof pluginCallback) => {
  pluginCallback = fn
})

await import('../../app/plugins/03.restore-app-settings')

describe('restore app settings plugin', () => {
  it('restoreAppSettings-sets-locale', () => {
    expect(pluginCallback).toBeDefined()
    mockAppSettingsStore.mockReturnValue({ locale: 'de' })
    const nuxtApp = {
      $i18n: { locale: mockLocale },
      hook: (_name: string, cb: () => void) => { hookCallback = cb }
    }
    mockLocale.value = 'en'
    pluginCallback!(nuxtApp)
    // Execute the hook callback
    hookCallback!()
    expect(mockLocale.value).toBe('de')
  })
})
