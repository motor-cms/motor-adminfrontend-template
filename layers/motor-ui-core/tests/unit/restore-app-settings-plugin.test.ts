import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

describe('restore-app-settings plugin', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
  })

  it('restores persisted locale to i18n instance on startup', async () => {
    const localeRef = ref('en')

    vi.stubGlobal('useAppSettingsStore', () => ({ locale: 'en' }))
    vi.stubGlobal('defineNuxtPlugin', (fn: (app: Record<string, unknown>) => void) => {
      const nuxtApp = {
        $i18n: { locale: localeRef },
        hook: (_name: string, cb: () => void) => cb()
      }
      fn(nuxtApp)
      return fn
    })

    await import('../../app/plugins/03.restore-app-settings')

    expect(localeRef.value).toBe('en')
  })
})
