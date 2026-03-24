// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { usePermissions } from '../../app/composables/usePermissions'

describe('usePermissions', () => {
  const mockUser = ref<{ data?: { permissions?: { name: string }[], roles?: { name: string, permissions: { name: string }[] }[] } } | null>(null)

  beforeEach(() => {
    vi.stubGlobal('useSanctumAuth', () => ({ user: mockUser }))
    mockUser.value = null
  })

  it('permissions-can-returns-true', () => {
    mockUser.value = {
      data: {
        permissions: [{ name: 'users.read' }],
        roles: [{ name: 'Admin', permissions: [{ name: 'users.write' }] }]
      }
    }
    const { can } = usePermissions()

    expect(can('users.read')).toBe(true)
    expect(can('users.write')).toBe(true)
  })

  it('permissions-can-returns-false', () => {
    mockUser.value = {
      data: {
        permissions: [{ name: 'users.read' }],
        roles: [{ name: 'Admin', permissions: [{ name: 'users.write' }] }]
      }
    }
    const { can } = usePermissions()

    expect(can('users.delete')).toBe(false)
  })

  it('permissions-canAny-partial-match', () => {
    mockUser.value = {
      data: {
        permissions: [{ name: 'users.read' }],
        roles: [{ name: 'Admin', permissions: [{ name: 'users.write' }] }]
      }
    }
    const { canAny } = usePermissions()

    expect(canAny('users.delete', 'users.read', 'users.create')).toBe(true)
  })

  it('permissions-superadmin-bypass', () => {
    mockUser.value = {
      data: {
        permissions: [],
        roles: [{ name: 'SuperAdmin', permissions: [] }]
      }
    }
    const { can, canAny } = usePermissions()

    expect(can('any.permission')).toBe(true)
    expect(canAny('foo', 'bar', 'baz')).toBe(true)
  })

  it('permissions-hasRole-match', () => {
    mockUser.value = {
      data: {
        permissions: [],
        roles: [{ name: 'Admin', permissions: [] }]
      }
    }
    const { hasRole } = usePermissions()

    expect(hasRole('Admin')).toBe(true)
  })

  it('returns empty permissions when user.value is null', () => {
    mockUser.value = null
    const { can, canAny, hasRole, permissionSet, roleSet } = usePermissions()

    expect(permissionSet.value.size).toBe(0)
    expect(roleSet.value.size).toBe(0)
    expect(can('any.permission')).toBe(false)
    expect(canAny('a', 'b')).toBe(false)
    expect(hasRole('Admin')).toBe(false)
  })

  it('returns empty permissions when userData is undefined', () => {
    mockUser.value = { data: undefined as never }
    const { can, permissionSet, roleSet } = usePermissions()

    expect(permissionSet.value.size).toBe(0)
    expect(roleSet.value.size).toBe(0)
    expect(can('any.permission')).toBe(false)
  })

  it('handles missing permissions array on userData', () => {
    mockUser.value = {
      data: {
        roles: [{ name: 'Viewer', permissions: [{ name: 'pages.read' }] }]
      }
    } as never
    const { can, permissionSet } = usePermissions()

    expect(permissionSet.value.has('pages.read')).toBe(true)
    expect(can('pages.read')).toBe(true)
  })

  it('handles missing roles array on userData', () => {
    mockUser.value = {
      data: {
        permissions: [{ name: 'files.read' }]
      }
    } as never
    const { can, roleSet } = usePermissions()

    expect(roleSet.value.size).toBe(0)
    expect(can('files.read')).toBe(true)
  })
})
