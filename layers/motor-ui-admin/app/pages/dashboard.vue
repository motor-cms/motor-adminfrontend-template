<script setup lang="ts">
definePageMeta({
  permission: 'dashboard.read',
})

const { t } = useI18n()
const { user } = useSanctumAuth()
const { can } = usePermissions()

const canCreateAnnouncements = computed(() => can('dashboard-announcements.write'))

const {
  stats,
  activity,
  activityLoadingMore,
  hasMoreActivity,
  publishingQueue,
  announcements,
  loading,
  refresh,
  loadMoreActivity,
  dismissAnnouncement,
} = useDashboardData()

const announcementModalOpen = ref(false)

const currentDate = computed(() => {
  return new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})

function onAnnouncementCreated() {
  refresh()
  toast.add({ title: 'Meldung erstellt', icon: 'i-lucide-megaphone', color: 'success' })
}

const toast = useToast()

async function onDismiss(id: number) {
  await dismissAnnouncement(id)
  toast.add({ title: 'Meldung ausgeblendet', icon: 'i-lucide-check', color: 'success' })
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-6">
      <h1 class="text-xl font-heading font-semibold text-highlighted">
        {{ t('motor-admin.dashboard.welcome', { name: user?.data?.name ?? '' }) }}
      </h1>
      <p class="text-sm text-dimmed mt-1">
        {{ currentDate }}
      </p>
    </div>

    <DashboardStats :stats="stats" :loading="loading" class="mb-6" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <DashboardActivity
          :items="activity"
          :loading="loading"
          :loading-more="activityLoadingMore"
          :has-more="hasMoreActivity"
          @load-more="loadMoreActivity"
        />
      </div>

      <div class="flex flex-col gap-4">
        <DashboardQuickActions
          @create-page="navigateTo('/motor-builder/builder-pages/create')"
          @upload-media="navigateTo('/motor-media/files/create')"
        />
        <DashboardAnnouncements
          :items="announcements"
          :loading="loading"
          :can-create="canCreateAnnouncements"
          @dismiss="onDismiss"
          @create="announcementModalOpen = true"
        />
        <DashboardPublishingQueue :items="publishingQueue" :loading="loading" />
      </div>
    </div>

    <DashboardAnnouncementModal
      v-model:open="announcementModalOpen"
      @created="onAnnouncementCreated"
    />
  </div>
</template>
