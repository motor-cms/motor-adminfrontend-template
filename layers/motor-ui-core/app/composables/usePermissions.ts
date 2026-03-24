import type { User } from '../types/auth'

export function usePermissions() {
  const { user } = useSanctumAuth<User>()

  const permissionSet = computed<Set<string>>(() => {
    const perms = new Set<string>()
    const userData = user.value?.data
    if (!userData) return perms
    userData.permissions?.forEach(p => perms.add(p.name))
    userData.roles?.forEach(r => r.permissions.forEach(p => perms.add(p.name)))
    return perms
  })

  const roleSet = computed<Set<string>>(() => {
    return new Set(user.value?.data?.roles?.map(r => r.name) ?? [])
  })

  const isSuperAdmin = computed(() => roleSet.value.has('SuperAdmin'))

  function can(permission: string): boolean {
    return isSuperAdmin.value || permissionSet.value.has(permission)
  }

  function canAny(...permissions: string[]): boolean {
    return isSuperAdmin.value || permissions.some(p => permissionSet.value.has(p))
  }

  function hasRole(role: string): boolean {
    return roleSet.value.has(role)
  }

  return { can, canAny, hasRole, permissionSet, roleSet }
}
