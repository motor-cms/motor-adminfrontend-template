<script setup lang="ts">
import type { DashboardStats } from '../../composables/useDashboardData'

const { t } = useI18n()

const props = defineProps<{
  stats: DashboardStats
  loading: boolean
}>()

const cards = computed(() => [
  {
    label: t('motor-admin.dashboard.stats.pages'),
    value: props.stats.pages_total,
    subtitle: t('motor-admin.dashboard.stats.pages_total'),
    icon: 'i-lucide-file-text',
  },
  {
    label: t('motor-admin.dashboard.stats.drafts'),
    value: props.stats.pages_draft,
    subtitle: t('motor-admin.dashboard.stats.drafts_subtitle'),
    icon: 'i-lucide-pencil',
  },
  {
    label: t('motor-admin.dashboard.stats.scheduled'),
    value: props.stats.pages_scheduled,
    subtitle: t('motor-admin.dashboard.stats.scheduled_subtitle'),
    icon: 'i-lucide-clock',
  },
  {
    label: t('motor-admin.dashboard.stats.media'),
    value: props.stats.media_total,
    subtitle: t('motor-admin.dashboard.stats.media_subtitle'),
    icon: 'i-lucide-image',
  },
])
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <UPageCard
      v-for="card in cards"
      :key="card.label"
      :ui="{ root: 'border-0 shadow-none' }"
    >
      <div class="flex items-center gap-3 mb-2">
        <div class="flex items-center justify-center size-8 rounded-lg bg-primary/10">
          <UIcon
            :name="card.icon"
            class="size-4 text-primary"
          />
        </div>
        <span class="text-sm text-muted">{{ card.label }}</span>
      </div>
      <div class="text-3xl font-heading font-bold text-highlighted">
        {{ loading ? '—' : card.value }}
      </div>
      <div class="text-xs text-dimmed mt-1">
        {{ card.subtitle }}
      </div>
    </UPageCard>
  </div>
</template>
