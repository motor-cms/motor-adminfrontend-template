import { describe, expect, it, vi, beforeEach } from 'vitest'

describe('api-error-handler plugin', () => {
  const mockAdd = vi.fn()
  let registeredHook: ((error: unknown) => void) | null = null

  beforeEach(() => {
    vi.clearAllMocks()
    registeredHook = null

    vi.stubGlobal('import', { meta: { client: true } })
    vi.stubGlobal('useToast', () => ({ add: mockAdd }))
    vi.stubGlobal('defineNuxtPlugin', (fn: (app: Record<string, unknown>) => void) => {
      const nuxtApp = {
        hook: (name: string, cb: (error: unknown) => void) => {
          if (name === 'app:error') registeredHook = cb
        },
        $i18n: { t: (key: string) => key }
      }
      fn(nuxtApp)
      return fn
    })

    Object.defineProperty(import.meta, 'client', { value: true, configurable: true })
    vi.resetModules()
  })

  async function loadPlugin() {
    await import('../../app/plugins/04.api-error-handler')
    return registeredHook
  }

  it('shows error toast on 403 status', async () => {
    const hook = await loadPlugin()
    hook?.({ statusCode: 403 })

    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({
        color: 'error',
        title: 'motor-core.errors.access_denied'
      })
    )
  })

  it('does not show toast for non-403 errors', async () => {
    const hook = await loadPlugin()
    hook?.({ statusCode: 500 })

    expect(mockAdd).not.toHaveBeenCalled()
  })
})
