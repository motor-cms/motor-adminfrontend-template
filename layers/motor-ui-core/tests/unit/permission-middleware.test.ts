import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

describe('permission middleware', () => {
  let middlewareFn: (to: Record<string, unknown>) => unknown
  const mockCan = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    vi.stubGlobal('defineNuxtRouteMiddleware', (fn: (to: Record<string, unknown>) => unknown) => {
      middlewareFn = fn
      return fn
    })
    vi.stubGlobal('useSanctumAuth', () => ({
      user: ref({ id: 1, name: 'Admin', permissions: ['users.read'] })
    }))
    vi.stubGlobal('usePermissions', () => ({ can: mockCan }))
    vi.stubGlobal('createError', (opts: Record<string, unknown>) => {
      const err = new Error(opts.statusMessage as string)
      ;(err as unknown as Record<string, unknown>).statusCode = opts.statusCode
      return err
    })

    vi.resetModules()
  })

  async function loadMiddleware() {
    await import('../../app/middleware/permission.global')
    return middlewareFn
  }

  it('allows navigation when page has no permission meta', async () => {
    const fn = await loadMiddleware()
    const result = fn({ meta: {} })
    expect(result).toBeUndefined()
  })

  it('allows navigation when user has required permission', async () => {
    mockCan.mockReturnValue(true)
    const fn = await loadMiddleware()
    const result = fn({ meta: { permission: 'users.read' } })
    expect(result).toBeUndefined()
  })

  it('throws 404 when user lacks required permission', async () => {
    mockCan.mockReturnValue(false)
    const fn = await loadMiddleware()
    expect(() => fn({ meta: { permission: 'admin.manage' } })).toThrow()
  })

  it('skips check when user is not yet loaded', async () => {
    vi.stubGlobal('useSanctumAuth', () => ({ user: ref(null) }))
    vi.resetModules()
    const fn = await loadMiddleware()
    const result = fn({ meta: { permission: 'users.read' } })
    expect(result).toBeUndefined()
    expect(mockCan).not.toHaveBeenCalled()
  })
})
