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

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<Notification[]>([])
  const isSlideoverOpen = ref(false)

  const unreadCount = computed(() =>
    notifications.value.filter(n => !n.read).length
  )

  function add(notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) {
    const newNotification: Notification = {
      ...notification,
      id: generateUuid(),
      timestamp: new Date(),
      read: false
    }

    // Add to beginning of array
    notifications.value.unshift(newNotification)

    // Keep only last MAX_NOTIFICATIONS
    if (notifications.value.length > MAX_NOTIFICATIONS) {
      notifications.value = notifications.value.slice(0, MAX_NOTIFICATIONS)
    }

    return newNotification
  }

  function markAsRead(id: string) {
    const notification = notifications.value.find(n => n.id === id)
    if (notification) {
      notification.read = true
    }
  }

  function markAllAsRead() {
    notifications.value.forEach(n => n.read = true)
  }

  function remove(id: string) {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  function clear() {
    notifications.value = []
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
    unreadCount,
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
    pick: ['notifications'],
    serializer: {
      serialize: JSON.stringify,
      deserialize: deserializeNotifications
    }
  }
})

export function deserializeNotifications(value: string) {
  const data = JSON.parse(value)
  if (data?.notifications) {
    data.notifications = data.notifications.map((n: Notification & { timestamp: string }) => ({
      ...n,
      timestamp: new Date(n.timestamp)
    }))
  }
  return data
}
