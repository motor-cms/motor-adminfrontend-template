import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'

const mockClient = vi.fn()
const mockNotify = vi.fn()
const mockToastAdd = vi.fn()
const mockStoreAdd = vi.fn()

vi.stubGlobal('useSanctumClient', () => mockClient)
vi.stubGlobal('useNotify', () => ({ notify: mockNotify }))
vi.stubGlobal('useToast', () => ({ add: mockToastAdd }))
vi.stubGlobal('useNotificationsStore', () => ({ add: mockStoreAdd }))

function makeDashboardResponse(overrides: Record<string, unknown> = {}) {
  return {
    data: {
      stats: {
        pages_total: 42,
        pages_draft: 10,
        pages_published: 30,
        pages_scheduled: 2,
        media_total: 100,
        navigation_trees: 5,
      },
      activity: [
        {
          id: 1,
          description: 'created',
          subject_type: 'BuilderPage',
          subject_id: 10,
          subject_name: 'Homepage',
          subject_exists: true,
          causer_name: 'admin',
          created_at: '2026-03-26T10:00:00Z',
        },
      ],
      activity_meta: {
        current_page: 1,
        last_page: 3,
        per_page: 10,
        total: 25,
      },
      publishing_queue: [
        {
          id: 1,
          name: 'Launch Page',
          to_be_published_at: '2026-04-01T08:00:00Z',
          publishable_type: 'BuilderPage',
          publishable_id: 20,
        },
      ],
      announcements: [],
      ...overrides,
    },
  }
}

describe('useDashboardData', () => {
  let localStorageData: Record<string, string> = {}

  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
    localStorageData = {}
    vi.stubGlobal('localStorage', {
      getItem: (key: string) => localStorageData[key] ?? null,
      setItem: (key: string, value: string) => { localStorageData[key] = value },
      removeItem: (key: string) => { delete localStorageData[key] },
    })
  })

  async function importComposable() {
    const mod = await import('../../app/composables/useDashboardData')
    return mod
  }

  describe('refresh', () => {
    it('fetches dashboard data and populates all refs', async () => {
      const response = makeDashboardResponse()
      mockClient.mockResolvedValue(response)

      const { useDashboardData } = await importComposable()
      const { stats, activity, activityMeta, publishingQueue, announcements, loading } = useDashboardData()

      await vi.waitFor(() => {
        expect(loading.value).toBe(false)
      })

      expect(mockClient).toHaveBeenCalledWith('/api/v2/dashboard')
      expect(stats.value.pages_total).toBe(42)
      expect(stats.value.pages_published).toBe(30)
      expect(activity.value).toHaveLength(1)
      expect(activity.value[0].description).toBe('created')
      expect(activityMeta.value.total).toBe(25)
      expect(publishingQueue.value).toHaveLength(1)
      expect(announcements.value).toHaveLength(0)
    })

    it('sets loading to false even on API error', async () => {
      mockClient.mockRejectedValueOnce(new Error('Network error'))

      const { useDashboardData } = await importComposable()
      const { loading } = useDashboardData()

      await vi.waitFor(() => {
        expect(loading.value).toBe(false)
      })
    })
  })

  describe('hasMoreActivity', () => {
    it('returns true when more pages are available', async () => {
      mockClient.mockResolvedValue(makeDashboardResponse({
        activity_meta: { current_page: 1, last_page: 3, per_page: 10, total: 25 },
      }))

      const { useDashboardData } = await importComposable()
      const { hasMoreActivity } = useDashboardData()

      await vi.waitFor(() => {
        expect(hasMoreActivity.value).toBe(true)
      })
    })

    it('returns false when on the last page', async () => {
      mockClient.mockResolvedValue(makeDashboardResponse({
        activity_meta: { current_page: 3, last_page: 3, per_page: 10, total: 25 },
      }))

      const { useDashboardData } = await importComposable()
      const { hasMoreActivity } = useDashboardData()

      await vi.waitFor(() => {
        expect(hasMoreActivity.value).toBe(false)
      })
    })
  })

  describe('loadMoreActivity', () => {
    it('appends next page of activity items', async () => {
      const initialResponse = makeDashboardResponse()
      const page2Response = makeDashboardResponse({
        activity: [
          {
            id: 2,
            description: 'updated',
            subject_type: 'BuilderPage',
            subject_id: 11,
            subject_name: 'About',
            subject_exists: true,
            causer_name: 'editor',
            created_at: '2026-03-26T11:00:00Z',
          },
        ],
        activity_meta: { current_page: 2, last_page: 3, per_page: 10, total: 25 },
      })

      mockClient.mockResolvedValueOnce(initialResponse).mockResolvedValueOnce(page2Response)

      const { useDashboardData } = await importComposable()
      const { activity, activityMeta, loadMoreActivity } = useDashboardData()

      await vi.waitFor(() => {
        expect(activity.value).toHaveLength(1)
      })

      await loadMoreActivity()

      expect(activity.value).toHaveLength(2)
      expect(activity.value[1].description).toBe('updated')
      expect(activityMeta.value.current_page).toBe(2)
      expect(mockClient).toHaveBeenLastCalledWith('/api/v2/dashboard?activity_page=2')
    })

    it('does nothing when already on the last page', async () => {
      mockClient.mockResolvedValue(makeDashboardResponse({
        activity_meta: { current_page: 3, last_page: 3, per_page: 10, total: 25 },
      }))

      const { useDashboardData } = await importComposable()
      const { loadMoreActivity } = useDashboardData()

      await vi.waitFor(() => {
        expect(mockClient).toHaveBeenCalledTimes(1)
      })

      await loadMoreActivity()

      expect(mockClient).toHaveBeenCalledTimes(1)
    })

    it('does not fire concurrent requests while loading', async () => {
      const slowPage2 = new Promise(resolve =>
        setTimeout(() => resolve(makeDashboardResponse({
          activity: [],
          activity_meta: { current_page: 2, last_page: 3, per_page: 10, total: 25 },
        })), 50)
      )

      mockClient
        .mockResolvedValueOnce(makeDashboardResponse())
        .mockReturnValueOnce(slowPage2)

      const { useDashboardData } = await importComposable()
      const { loadMoreActivity, activityLoadingMore } = useDashboardData()

      await vi.waitFor(() => {
        expect(mockClient).toHaveBeenCalledTimes(1)
      })

      const p1 = loadMoreActivity()
      expect(activityLoadingMore.value).toBe(true)

      await loadMoreActivity()
      expect(mockClient).toHaveBeenCalledTimes(2)

      await p1
      expect(activityLoadingMore.value).toBe(false)
    })
  })

  describe('dismissAnnouncement', () => {
    it('removes the announcement from the list', async () => {
      const announcements = [
        { id: 10, title: 'Maintenance', body: null, type: 'info', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T09:00:00Z' },
        { id: 20, title: 'Update', body: 'New version', type: 'warning', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T10:00:00Z' },
      ]

      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      const result = useDashboardData()

      await vi.waitFor(() => {
        expect(result.announcements.value).toHaveLength(2)
      })

      mockClient.mockResolvedValueOnce({})
      await result.dismissAnnouncement(10)

      expect(result.announcements.value).toHaveLength(1)
      expect(result.announcements.value[0].id).toBe(20)
      expect(mockClient).toHaveBeenCalledWith('/api/v2/dashboard/announcements/10/dismiss', {
        method: 'POST',
      })
    })
  })

  describe('createAnnouncement', () => {
    it('posts to API and then refreshes', async () => {
      mockClient.mockResolvedValue(makeDashboardResponse())

      const { useDashboardData } = await importComposable()
      const { createAnnouncement } = useDashboardData()

      await vi.waitFor(() => {
        expect(mockClient).toHaveBeenCalledTimes(1)
      })

      mockClient.mockResolvedValueOnce({})
      mockClient.mockResolvedValueOnce(makeDashboardResponse())

      const payload = { title: 'New Feature', body: 'Check it out', type: 'info', audience: 'client' }
      await createAnnouncement(payload)

      expect(mockClient).toHaveBeenCalledWith('/api/v2/dashboard/announcements', {
        method: 'POST',
        body: payload,
      })
      expect(mockClient).toHaveBeenCalledWith('/api/v2/dashboard')
      expect(mockClient).toHaveBeenCalledTimes(3)
    })
  })

  describe('announcement notifications', () => {
    it('sends notifications for new announcements', async () => {
      const announcements = [
        { id: 100, title: 'Alert', body: 'Something happened', type: 'warning', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T12:00:00Z' },
      ]
      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      useDashboardData()

      await vi.waitFor(() => {
        expect(mockNotify).toHaveBeenCalledWith({
          title: 'Alert',
          description: 'Something happened',
          color: 'warning',
          icon: 'i-lucide-alert-triangle',
        })
      })
    })

    it('does not re-notify for already-seen announcements', async () => {
      localStorageData['dashboard-announcements-notified'] = JSON.stringify([100])

      const announcements = [
        { id: 100, title: 'Old Alert', body: null, type: 'info', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T10:00:00Z' },
      ]
      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      useDashboardData()

      await vi.waitFor(() => {
        expect(mockClient).toHaveBeenCalledTimes(1)
      })

      expect(mockNotify).not.toHaveBeenCalled()
    })

    it('persists notified IDs to localStorage', async () => {
      const announcements = [
        { id: 200, title: 'New', body: null, type: 'info', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T12:00:00Z' },
      ]
      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      useDashboardData()

      await vi.waitFor(() => {
        expect(mockNotify).toHaveBeenCalledTimes(1)
      })

      const stored = JSON.parse(localStorageData['dashboard-announcements-notified'])
      expect(stored).toContain(200)
    })

    it('uses error color and icon for error-type announcements', async () => {
      const announcements = [
        { id: 300, title: 'Critical', body: 'System down', type: 'error', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T12:00:00Z' },
      ]
      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      useDashboardData()

      await vi.waitFor(() => {
        expect(mockNotify).toHaveBeenCalledWith({
          title: 'Critical',
          description: 'System down',
          color: 'error',
          icon: 'i-lucide-alert-circle',
        })
      })
    })

    it('uses info color and megaphone icon for info-type announcements', async () => {
      const announcements = [
        { id: 400, title: 'FYI', body: null, type: 'info', audience: 'client', linkable_type: null, linkable_id: null, linkable_name: null, linkable_url: null, created_by_name: 'admin', created_at: '2026-03-26T12:00:00Z' },
      ]
      mockClient.mockResolvedValue(makeDashboardResponse({ announcements }))

      const { useDashboardData } = await importComposable()
      useDashboardData()

      await vi.waitFor(() => {
        expect(mockNotify).toHaveBeenCalledWith({
          title: 'FYI',
          description: undefined,
          color: 'info',
          icon: 'i-lucide-megaphone',
        })
      })
    })
  })
})
