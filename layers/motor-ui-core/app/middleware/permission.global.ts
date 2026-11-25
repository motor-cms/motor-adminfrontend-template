import type { User } from '../types/auth'
import { ADMINISTRATION_PERMISSION, requiresAdministrationAccess } from '../utils/administration-access'

export default defineNuxtRouteMiddleware((to) => {
  const permission = to.meta.permission as string | undefined
  // Pages of the Administration area also need administration.read (ZRMDEV-237).
  const needsAdministration = requiresAdministrationAccess(to.path)
  if (!permission && !needsAdministration) return

  const { user } = useSanctumAuth<User>()

  // Unauthenticated access is handled by sanctum's global auth middleware
  // (redirects to /login); nothing to check here without an identity.
  if (!user.value) return

  const { can } = usePermissions()
  const allowed = (!permission || can(permission))
    && (!needsAdministration || can(ADMINISTRATION_PERMISSION))
  if (!allowed) {
    // Don't throw: a thrown error renders the layout-less error page (no sidebar,
    // no logout), leaving the user stuck. Send them to an in-layout no-access
    // page where the permission-filtered sidebar and the user menu (logout)
    // stay available so they can reach a page they DO have access to, or log out
    // (ZRMDEV-236). Guard against a redirect loop on /no-access itself.
    if (to.path === '/no-access') return
    return navigateTo('/no-access')
  }
})
