<script setup lang="ts">
import type { PublishingQueueItem } from '../../composables/useDashboardData'

const { t, locale } = useI18n()

defineProps<{
  items: PublishingQueueItem[]
  loading: boolean
}>()

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <UPageCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-clock" class="size-4 text-info" />
        <span class="text-sm font-heading font-semibold text-highlighted">{{ t('motor-admin.dashboard.publishing_queue.title') }}</span>
      </div>
    </template>
    <div v-if="loading" class="flex items-center justify-center py-6 text-muted">
      <UIcon name="i-lucide-loader-2" class="size-5 animate-spin" />
    </div>
    <div v-else-if="items.length === 0" class="text-sm text-muted py-4 text-center">
      {{ t('motor-admin.dashboard.publishing_queue.empty') }}
    </div>
    <div v-else class="flex flex-col gap-2">
      <NuxtLink
        v-for="item in items"
        :key="item.id"
        :to="`/motor-builder/builder-pages/${item.publishable_id}/edit`"
        class="p-3 rounded-lg bg-elevated border border-muted hover:border-primary/50 transition-colors"
      >
        <div class="text-sm font-medium text-default">{{ item.name }}</div>
        <div class="text-xs text-info mt-1">{{ formatDate(item.to_be_published_at) }}</div>
      </NuxtLink>
    </div>
  </UPageCard>
</template>
