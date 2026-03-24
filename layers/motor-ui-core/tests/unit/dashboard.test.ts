import { describe, expect, it, vi, beforeEach } from 'vitest'

describe('useDashboard', () => {
  const mockPush = vi.fn()
  const mockRoute = { path: '/', params: {}, query: {} }
  const mockRouter = { push: mockPush }
  const mockRegister = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('useRoute', () => mockRoute)
    vi.stubGlobal('useRouter', () => mockRouter)
    vi.stubGlobal('useI18n', () => ({ t: (k: string) => k }))
    vi.stubGlobal('defineShortcuts', vi.fn())
    vi.stubGlobal('useShortcutRegistry', () => ({ register: mockRegister }))

    vi.resetModules()
  })

  it('returns route, router, and settingsOpen ref', async () => {
    const { createSharedComposable } = await import('@vueuse/core')
    vi.stubGlobal('createSharedComposable', createSharedComposable)

    const mod = await import('../../app/composables/useDashboard')
    const result = mod.useDashboard()

    expect(result.route).toBeDefined()
    expect(result.router).toBeDefined()
    expect(result.settingsOpen).toBeDefined()
    expect(result.settingsOpen.value).toBe(false)
  })

  it('registers global keyboard shortcuts', async () => {
    const { createSharedComposable } = await import('@vueuse/core')
    vi.stubGlobal('createSharedComposable', createSharedComposable)

    const mod = await import('../../app/composables/useDashboard')
    mod.useDashboard()

    expect(mockRegister).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'global',
        shortcuts: expect.arrayContaining([
          expect.objectContaining({ label: 'motor-core.shortcuts.search' })
        ])
      })
    )
  })

  it('defineShortcuts g-h navigates home', async () => {
    let capturedShortcuts: Record<string, () => void> = {}
    vi.stubGlobal('defineShortcuts', (shortcuts: Record<string, () => void>) => {
      capturedShortcuts = shortcuts
    })

    const { createSharedComposable } = await import('@vueuse/core')
    vi.stubGlobal('createSharedComposable', createSharedComposable)

    const mod = await import('../../app/composables/useDashboard')
    mod.useDashboard()

    expect(capturedShortcuts['g-h']).toBeDefined()
    capturedShortcuts['g-h']()
    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('defineShortcuts g-s opens settings', async () => {
    let capturedShortcuts: Record<string, () => void> = {}
    vi.stubGlobal('defineShortcuts', (shortcuts: Record<string, () => void>) => {
      capturedShortcuts = shortcuts
    })

    const { createSharedComposable } = await import('@vueuse/core')
    vi.stubGlobal('createSharedComposable', createSharedComposable)

    const mod = await import('../../app/composables/useDashboard')
    const result = mod.useDashboard()

    expect(capturedShortcuts['g-s']).toBeDefined()
    capturedShortcuts['g-s']()
    expect(result.settingsOpen.value).toBe(true)
  })
})
