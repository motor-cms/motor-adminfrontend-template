import type { User } from '../types/auth'

// The notification center is a local-only toast history persisted to localStorage
// (plus an unread-count cookie for SSR). Notifications are kept in per-user
// buckets and this plugin points the store at the currently authenticated user's
// bucket. That means:
//  - user B never sees user A's notifications on a shared browser (no leak),
//  - logging back in as the SAME user restores their own notifications,
//  - a plain reload keeps the current user's notifications.
// On logout (id null) the store falls back to an empty anonymous view (ZRMDEV-235).
export default defineNuxtPlugin(() => {
  const { user } = useSanctumAuth<User>()
  const notifications = useNotificationsStore()
  const unreadCount = useCookie<number>('energis-unread-count', { default: () => 0 })

  const syncUser = (id: number | null) => {
    notifications.setUser(id)
    // Keep the SSR badge cookie in step with the now-visible user's bucket so a
    // stale count from the previous user doesn't flash before hydration.
    unreadCount.value = notifications.unreadCount
  }

  syncUser(user.value?.data?.id ?? null)

  watch(() => user.value?.data?.id ?? null, syncUser)
})
