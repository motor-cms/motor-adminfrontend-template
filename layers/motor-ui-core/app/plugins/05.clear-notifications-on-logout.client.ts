import type { User } from '../types/auth'

// The notification center is a local-only toast history persisted to
// localStorage (plus an unread-count cookie for SSR). It is NOT user-scoped, so
// on a shared browser the next user would otherwise see the previous user's
// notifications. Clear both whenever the session identity ends (logout) or
// switches to a different user. The initial null→user hydration is skipped so a
// page reload for the SAME user keeps their notifications (ZRMDEV-235).
export default defineNuxtPlugin(() => {
  const { user } = useSanctumAuth<User>()
  const notifications = useNotificationsStore()
  const unreadCount = useCookie<number>('energis-unread-count', { default: () => 0 })

  let previousUserId: number | null = user.value?.data?.id ?? null

  watch(() => user.value?.data?.id ?? null, (id) => {
    if (previousUserId !== null && id !== previousUserId) {
      notifications.clear()
      unreadCount.value = 0
    }
    previousUserId = id
  })
})
