import { defineStore } from 'pinia'
import { generateUuid } from '../utils/uuid'

export interface NotificationError {
  message: string
  stack?: string
  status?: number
  url?: string
  responseBody?: unknown
}

export interface Notification {
  id: string
  title: string
  description?: string
  color: 'success' | 'error' | 'warning' | 'info' | 'neutral'
  icon?: string
  timestamp: Date
  read: boolean
  error?: NotificationError
}

const MAX_NOTIFICATIONS = 20

// Bucket used when no user is authenticated (login screen, SSR, tests). A user's
// notifications are never stored here, so the anonymous view is always empty on a
// shared browser after logout.
const ANONYMOUS_BUCKET = '__anonymous__'

function bucketKey(userId: string | null) {
  return userId ?? ANONYMOUS_BUCKET
}

export const useNotificationsStore = defineStore('notifications', () => {
  // Notifications are a local-only toast history persisted to localStorage. To
  // avoid leaking one user's notifications to the next on a shared browser they
  // are kept in per-user buckets keyed by user id, and only the current user's
  // bucket is ever exposed. Because the buckets persist, logging back in as the
  // same user restores their notifications (ZRMDEV-235).
  const notificationsByUser = ref<Record<string, Notification[]>>({})
  // Which user's bucket is currently visible. Not persisted — the auth plugin
  // sets it on login / logout / user switch. null → anonymous (empty) view.
  const currentUserId = ref<string | null>(null)
  const isSlideoverOpen = ref(false)

  const notifications = computed(() =>
    notificationsByUser.value[bucketKey(currentUserId.value)] ?? []
  )

  const unreadCount = computed(() =>
    notifications.value.filter(n => !n.read).length
  )

  // Returns the current user's bucket, creating it on first write.
  function currentBucket() {
    const key = bucketKey(currentUserId.value)
    if (!notificationsByUser.value[key]) {
      notificationsByUser.value[key] = []
    }
    return notificationsByUser.value[key]
  }

  // Point the store at a user's bucket. Accepts number | string | null so it can
  // be fed the sanctum user id directly.
  function setUser(userId: string | number | null | undefined) {
    currentUserId.value = userId === null || userId === undefined ? null : String(userId)
  }

  function add(notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) {
    const newNotification: Notification = {
      ...notification,
      id: generateUuid(),
      timestamp: new Date(),
      read: false
    }

    const key = bucketKey(currentUserId.value)
    const bucket = currentBucket()

    // Add to beginning of array
    bucket.unshift(newNotification)

    // Keep only last MAX_NOTIFICATIONS
    if (bucket.length > MAX_NOTIFICATIONS) {
      notificationsByUser.value[key] = bucket.slice(0, MAX_NOTIFICATIONS)
    }

    return newNotification
  }

  function markAsRead(id: string) {
    const notification = currentBucket().find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  function markAllAsRead() {
    currentBucket().forEach(n => n.read = true)
  }

  function remove(id: string) {
    const bucket = currentBucket()
    const index = bucket.findIndex(n => n.id === id)
    if (index !== -1) {
      bucket.splice(index, 1)
    }
  }

  // Clears only the current user's notifications (slideover "clear" button).
  function clear() {
    notificationsByUser.value[bucketKey(currentUserId.value)] = []
  }

  function openSlideover() {
    isSlideoverOpen.value = true
  }

  function closeSlideover() {
    isSlideoverOpen.value = false
  }

  return {
    notifications,
    isSlideoverOpen,
    currentUserId,
    unreadCount,
    setUser,
    add,
    markAsRead,
    markAllAsRead,
    remove,
    clear,
    openSlideover,
    closeSlideover
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['notificationsByUser'],
    serializer: {
      serialize: JSON.stringify,
      deserialize: deserializeNotifications
    }
  }
})

export function deserializeNotifications(value: string) {
  const data = JSON.parse(value)
  if (data?.notificationsByUser && typeof data.notificationsByUser === 'object') {
    for (const key of Object.keys(data.notificationsByUser)) {
      const bucket = data.notificationsByUser[key]
      if (Array.isArray(bucket)) {
        data.notificationsByUser[key] = bucket.map((n: Notification & { timestamp: string }) => ({
          ...n,
          timestamp: new Date(n.timestamp)
        }))
      }
    }
  }
  return data
}
