<script setup lang="ts">
import type { User } from '@motor-cms/ui-core/app/types/auth'

definePageMeta({
  permission: 'dashboard.read',
})

const { t, locale } = useI18n()
const { user } = useSanctumAuth<User>()
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
  return new Date().toLocaleDateString(locale.value, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})

function onAnnouncementCreated() {
  refresh()
  toast.add({ title: t('motor-admin.dashboard.announcement_created'), icon: 'i-lucide-megaphone', color: 'success' })
}

const toast = useToast()

async function onDismiss(id: number) {
  await dismissAnnouncement(id)
  toast.add({ title: t('motor-admin.dashboard.announcement_dismissed'), icon: 'i-lucide-check', color: 'success' })
}
</script>

<template>
  <div class="p-6">
    <div class="flex flex-col mb-6">
      <div>
        <h1 class="text-xl font-heading font-semibold text-highlighted">
          {{ t('motor-admin.dashboard.welcome', { name: user?.data?.name ?? '' }) }}
        </h1>
        <p class="text-sm text-dimmed mt-1">
          {{ currentDate }}
        </p>
      </div>
      <div class="flex items-center gap-2 mt-3 self-end">
        <UButton
          icon="i-lucide-plus"
          color="primary"
          size="sm"
          :label="t('motor-admin.dashboard.quick_actions.new_page')"
          @click="navigateTo('/motor-builder/builder-pages/create')"
        />
        <UButton
          icon="i-lucide-upload"
          color="neutral"
          variant="outline"
          size="sm"
          :label="t('motor-admin.dashboard.quick_actions.upload_media')"
          @click="navigateTo('/motor-media/files/create')"
        />
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="outline"
          size="sm"
          :label="t('motor-admin.dashboard.quick_actions.navigation')"
          to="/motor-builder/navigation-trees"
        />
      </div>
    </div>

    <DashboardStats :stats="stats" :loading="loading" class="mb-6" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DashboardActivity
        :items="activity"
        :loading="loading"
        :loading-more="activityLoadingMore"
        :has-more="hasMoreActivity"
        @load-more="loadMoreActivity"
      />

      <div class="flex flex-col gap-4">
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

    <DashboardOnboarding />
  </div>
</template>
