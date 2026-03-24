import type { User } from '../types/auth'

export default defineNuxtRouteMiddleware((to) => {
  const permission = to.meta.permission as string | undefined
  if (!permission) return

  const { user } = useSanctumAuth<User>()

  // Skip check if user is not yet loaded (auth middleware handles redirect)
  if (!user.value) return

  const { can } = usePermissions()
  if (!can(permission)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }
})
