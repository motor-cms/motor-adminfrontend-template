export interface DashboardStats {
  pages_total: number
  pages_draft: number
  pages_published: number
  pages_scheduled: number
  media_total: number
  navigation_trees: number
}

export interface ActivityItem {
  id: number
  description: string
  subject_type: string
  subject_id: number
  subject_name: string | null
  subject_exists: boolean
  causer_name: string | null
  created_at: string
}

export interface PublishingQueueItem {
  id: number
  name: string
  to_be_published_at: string
  publishable_type: string
  publishable_id: number
}

export interface AnnouncementItem {
  id: number
  title: string
  body: string | null
  type: 'info' | 'warning' | 'error'
  audience: 'self' | 'users' | 'client'
  linkable_type: string | null
  linkable_id: number | null
  linkable_name: string | null
  linkable_url: string | null
  created_by_name: string | null
  starts_at: string | null
  created_at: string
}

interface ActivityMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface DashboardResponse {
  data: {
    stats: DashboardStats
    activity: ActivityItem[]
    activity_meta: ActivityMeta
    publishing_queue: PublishingQueueItem[]
    announcements: AnnouncementItem[]
  }
}

const NOTIFIED_STORAGE_KEY = 'dashboard-announcements-notified'

function getNotifiedIds(): Set<number> {
  try {
    const raw = localStorage.getItem(NOTIFIED_STORAGE_KEY)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function persistNotifiedIds(ids: Set<number>) {
  localStorage.setItem(NOTIFIED_STORAGE_KEY, JSON.stringify([...ids]))
}

export function useDashboardData() {
  const client = useSanctumClient()
  const { notify } = useNotify()

  const stats = ref<DashboardStats>({
    pages_total: 0,
    pages_draft: 0,
    pages_published: 0,
    pages_scheduled: 0,
    media_total: 0,
    navigation_trees: 0,
  })
  const activity = ref<ActivityItem[]>([])
  const activityMeta = ref<ActivityMeta>({ current_page: 1, last_page: 1, per_page: 10, total: 0 })
  const activityLoadingMore = ref(false)
  const publishingQueue = ref<PublishingQueueItem[]>([])
  const announcements = ref<AnnouncementItem[]>([])
  const loading = ref(true)

  const hasMoreActivity = computed(() => activityMeta.value.current_page < activityMeta.value.last_page)

  async function refresh() {
    loading.value = true
    try {
      const response = await client<DashboardResponse>('/api/v2/dashboard')
      stats.value = response.data.stats
      activity.value = response.data.activity
      activityMeta.value = response.data.activity_meta
      publishingQueue.value = response.data.publishing_queue
      announcements.value = response.data.announcements

      const notified = getNotifiedIds()
      for (const a of response.data.announcements) {
        if (!notified.has(a.id)) {
          notify({
            title: a.title,
            description: a.body ?? undefined,
            color: a.type === 'error' ? 'error' : a.type === 'warning' ? 'warning' : 'info',
            icon: a.type === 'error' ? 'i-lucide-alert-circle' : a.type === 'warning' ? 'i-lucide-alert-triangle' : 'i-lucide-megaphone',
          })
          notified.add(a.id)
        }
      }
      persistNotifiedIds(notified)
    } finally {
      loading.value = false
    }
  }

  async function loadMoreActivity() {
    if (!hasMoreActivity.value || activityLoadingMore.value) return
    activityLoadingMore.value = true
    try {
      const nextPage = activityMeta.value.current_page + 1
      const response = await client<DashboardResponse>(`/api/v2/dashboard?activity_page=${nextPage}`)
      activity.value.push(...response.data.activity)
      activityMeta.value = response.data.activity_meta
    } finally {
      activityLoadingMore.value = false
    }
  }

  async function dismissAnnouncement(id: number) {
    await client(`/api/v2/dashboard/announcements/${id}/dismiss`, {
      method: 'POST',
    })
    announcements.value = announcements.value.filter(a => a.id !== id)
  }

  async function createAnnouncement(data: Record<string, unknown>) {
    await client('/api/v2/dashboard/announcements', {
      method: 'POST',
      body: data,
    })
    await refresh()
  }

  refresh().catch(() => {})

  return {
    stats,
    activity,
    activityMeta,
    activityLoadingMore,
    hasMoreActivity,
    publishingQueue,
    announcements,
    loading,
    refresh,
    loadMoreActivity,
    dismissAnnouncement,
    createAnnouncement,
  }
}
