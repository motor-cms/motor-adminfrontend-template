import { describe, expect, it, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useNotificationsStore, deserializeNotifications } from '../../app/stores/notifications'

vi.mock('../../app/utils/uuid', () => {
  let counter = 0
  return { generateUuid: () => `notif-uuid-${++counter}` }
})

describe('useNotificationsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds notification with generated id and timestamp', () => {
    const store = useNotificationsStore()
    const result = store.add({ title: 'Test', color: 'success' })

    expect(result.id).toMatch(/^notif-uuid-/)
    expect(result.timestamp).toBeInstanceOf(Date)
    expect(result.read).toBe(false)
    expect(store.notifications).toHaveLength(1)
    expect(store.notifications[0].title).toBe('Test')
  })

  it('adds notifications at beginning (newest first)', () => {
    const store = useNotificationsStore()
    store.add({ title: 'First', color: 'info' })
    store.add({ title: 'Second', color: 'info' })

    expect(store.notifications[0].title).toBe('Second')
    expect(store.notifications[1].title).toBe('First')
  })

  it('tracks unreadCount', () => {
    const store = useNotificationsStore()
    store.add({ title: 'A', color: 'info' })
    store.add({ title: 'B', color: 'info' })
    expect(store.unreadCount).toBe(2)

    store.markAsRead(store.notifications[0].id)
    expect(store.unreadCount).toBe(1)
  })

  it('markAsRead marks single notification', () => {
    const store = useNotificationsStore()
    const notif = store.add({ title: 'Read me', color: 'warning' })
    expect(notif.read).toBe(false)

    store.markAsRead(notif.id)
    expect(store.notifications[0].read).toBe(true)
  })

  it('markAsRead does nothing for non-existent id', () => {
    const store = useNotificationsStore()
    store.add({ title: 'Test', color: 'info' })

    store.markAsRead('nonexistent')
    expect(store.notifications[0].read).toBe(false)
  })

  it('markAllAsRead marks everything', () => {
    const store = useNotificationsStore()
    store.add({ title: 'A', color: 'info' })
    store.add({ title: 'B', color: 'info' })
    store.add({ title: 'C', color: 'info' })

    store.markAllAsRead()
    expect(store.notifications.every(n => n.read)).toBe(true)
    expect(store.unreadCount).toBe(0)
  })

  it('removes notification by id', () => {
    const store = useNotificationsStore()
    const notif = store.add({ title: 'Remove me', color: 'error' })
    store.add({ title: 'Keep me', color: 'success' })
    expect(store.notifications.length).toBe(2)

    store.remove(notif.id)
    expect(store.notifications).toHaveLength(1)
    expect(store.notifications[0].title).toBe('Keep me')
  })

  it('remove does nothing for non-existent id', () => {
    const store = useNotificationsStore()
    store.add({ title: 'Test', color: 'info' })

    store.remove('nonexistent')
    expect(store.notifications).toHaveLength(1)
  })

  it('clears all notifications', () => {
    const store = useNotificationsStore()
    store.add({ title: 'A', color: 'info' })
    store.add({ title: 'B', color: 'info' })

    store.clear()
    expect(store.notifications).toHaveLength(0)
  })

  it('limits to MAX_NOTIFICATIONS (20)', () => {
    const store = useNotificationsStore()
    for (let i = 0; i < 25; i++) {
      store.add({ title: `Notif ${i}`, color: 'info' })
    }
    expect(store.notifications.length).toBeLessThanOrEqual(20)
  })

  it('openSlideover sets flag', () => {
    const store = useNotificationsStore()
    expect(store.isSlideoverOpen).toBe(false)

    store.openSlideover()
    expect(store.isSlideoverOpen).toBe(true)
  })

  it('closeSlideover clears flag', () => {
    const store = useNotificationsStore()
    store.openSlideover()
    expect(store.isSlideoverOpen).toBe(true)

    store.closeSlideover()
    expect(store.isSlideoverOpen).toBe(false)
  })

  it('notificationsStore-slideover-open-close', () => {
    const store = useNotificationsStore()
    expect(store.isSlideoverOpen).toBe(false)

    store.openSlideover()
    expect(store.isSlideoverOpen).toBe(true)

    store.closeSlideover()
    expect(store.isSlideoverOpen).toBe(false)
  })

  it('adds notification with error details', () => {
    const store = useNotificationsStore()
    const notif = store.add({
      title: 'Error',
      color: 'error',
      error: { message: 'Something went wrong', status: 500 }
    })

    expect(notif.error).toBeDefined()
    expect(notif.error!.message).toBe('Something went wrong')
    expect(notif.error!.status).toBe(500)
  })

  it('adds notification with description and icon', () => {
    const store = useNotificationsStore()
    const notif = store.add({
      title: 'Info',
      description: 'Details here',
      color: 'info',
      icon: 'i-heroicons-info'
    })

    expect(notif.description).toBe('Details here')
    expect(notif.icon).toBe('i-heroicons-info')
  })

  describe('per-user scoping (ZRMDEV-235)', () => {
    it('keeps each user notifications in a separate bucket', () => {
      const store = useNotificationsStore()

      store.setUser(1)
      store.add({ title: 'A only', color: 'info' })
      expect(store.notifications).toHaveLength(1)

      // Switching to another user shows an empty view — no leak of user 1's data.
      store.setUser(2)
      expect(store.notifications).toHaveLength(0)
      store.add({ title: 'B only', color: 'info' })
      expect(store.notifications).toHaveLength(1)
      expect(store.notifications[0].title).toBe('B only')

      // Switching back to user 1 restores their notifications.
      store.setUser(1)
      expect(store.notifications).toHaveLength(1)
      expect(store.notifications[0].title).toBe('A only')
    })

    it('logout (null user) shows an empty anonymous view without discarding buckets', () => {
      const store = useNotificationsStore()

      store.setUser(42)
      store.add({ title: 'Mine', color: 'info' })

      store.setUser(null)
      expect(store.notifications).toHaveLength(0)

      // Re-login as the same user restores the bucket.
      store.setUser(42)
      expect(store.notifications).toHaveLength(1)
      expect(store.notifications[0].title).toBe('Mine')
    })

    it('clear only empties the current user bucket', () => {
      const store = useNotificationsStore()

      store.setUser(1)
      store.add({ title: 'A', color: 'info' })
      store.setUser(2)
      store.add({ title: 'B', color: 'info' })

      store.clear()
      expect(store.notifications).toHaveLength(0)

      store.setUser(1)
      expect(store.notifications).toHaveLength(1)
    })

    it('normalises numeric and string user ids to the same bucket', () => {
      const store = useNotificationsStore()

      store.setUser(7)
      store.add({ title: 'Seven', color: 'info' })

      store.setUser('7')
      expect(store.notifications).toHaveLength(1)
      expect(store.notifications[0].title).toBe('Seven')
    })

    it('MAX_NOTIFICATIONS limit is per user', () => {
      const store = useNotificationsStore()

      store.setUser(1)
      for (let i = 0; i < 25; i++) {
        store.add({ title: `Notif ${i}`, color: 'info' })
      }
      expect(store.notifications.length).toBeLessThanOrEqual(20)

      store.setUser(2)
      expect(store.notifications).toHaveLength(0)
    })
  })

  describe('persist serializer', () => {
    it('serializer produces valid JSON for the per-user shape', () => {
      const store = useNotificationsStore()
      store.setUser(1)
      store.add({ title: 'Test', color: 'success' })

      const serialized = JSON.stringify({ notificationsByUser: { 1: store.notifications } })
      const parsed = JSON.parse(serialized)
      expect(parsed.notificationsByUser['1']).toHaveLength(1)
      expect(parsed.notificationsByUser['1'][0].title).toBe('Test')
    })

    it('deserializeNotifications converts timestamps in every user bucket', () => {
      const serialized = JSON.stringify({
        notificationsByUser: {
          1: [
            { id: '1', title: 'Test', color: 'info', timestamp: '2026-03-01T12:00:00Z', read: false }
          ],
          2: [
            { id: '2', title: 'Test2', color: 'success', timestamp: '2026-02-15T08:00:00Z', read: true }
          ]
        }
      })

      const result = deserializeNotifications(serialized)
      expect(result.notificationsByUser['1'][0].timestamp).toBeInstanceOf(Date)
      expect(result.notificationsByUser['2'][0].timestamp).toBeInstanceOf(Date)
      expect(result.notificationsByUser['1'][0].timestamp.getFullYear()).toBe(2026)
    })

    it('deserializeNotifications handles data without notificationsByUser', () => {
      const serialized = JSON.stringify({ other: 'data' })
      const result = deserializeNotifications(serialized)
      expect(result).toEqual({ other: 'data' })
    })
  })
})
