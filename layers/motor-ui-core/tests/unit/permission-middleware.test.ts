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

  describe('Administration area (ZRMDEV-237)', () => {
    const mockNavigateTo = vi.fn((path: string) => ({ redirectedTo: path }))

    function grant(...permissions: string[]) {
      mockCan.mockImplementation((p: string) => permissions.includes(p))
    }

    beforeEach(() => {
      vi.stubGlobal('navigateTo', mockNavigateTo)
    })

    it('redirects a user with users.read but without administration.read away from users', async () => {
      grant('users.read')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-admin/users', meta: { permission: 'users.read' } })).toEqual({ redirectedTo: '/no-access' })
    })

    it('redirects nested Administration pages without administration.read', async () => {
      grant('roles.read', 'roles.write')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-admin/roles/3/edit', meta: { permission: 'roles.read' } })).toEqual({ redirectedTo: '/no-access' })
    })

    it('allows Administration pages with both permissions', async () => {
      grant('users.read', 'administration.read')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-admin/users', meta: { permission: 'users.read' } })).toBeUndefined()
    })

    it('keeps e-mail templates reachable with their own permission only', async () => {
      grant('email-templates.read')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-admin/email-templates', meta: { permission: 'email-templates.read' } })).toBeUndefined()
    })

    it('does not require administration.read outside the Administration area', async () => {
      grant('builder-pages.read')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-builder/pages', meta: { permission: 'builder-pages.read' } })).toBeUndefined()
      expect(mockCan).not.toHaveBeenCalledWith('administration.read')
    })

    it('does not treat a lookalike prefix as the Administration area', async () => {
      grant('x.read')
      const fn = await loadMiddleware()
      expect(fn({ path: '/motor-administration-x', meta: { permission: 'x.read' } })).toBeUndefined()
    })
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
