<script setup lang="ts">
import type { DashboardStats } from '../../composables/useDashboardData'

const props = defineProps<{
  stats: DashboardStats
  loading: boolean
}>()

const cards = computed(() => [
  {
    label: 'Seiten',
    value: props.stats.pages_total,
    subtitle: 'Gesamt',
    icon: 'i-lucide-file-text',
    color: 'primary' as const,
  },
  {
    label: 'Entwürfe',
    value: props.stats.pages_draft,
    subtitle: 'In Bearbeitung',
    icon: 'i-lucide-pencil',
    color: 'warning' as const,
  },
  {
    label: 'Geplant',
    value: props.stats.pages_scheduled,
    subtitle: 'Veröffentlichung',
    icon: 'i-lucide-clock',
    color: 'info' as const,
  },
  {
    label: 'Medien',
    value: props.stats.media_total,
    subtitle: 'Dateien',
    icon: 'i-lucide-image',
    color: 'success' as const,
  },
])
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <UPageCard
      v-for="card in cards"
      :key="card.label"
    >
      <div class="flex items-center gap-3 mb-2">
        <div
          class="flex items-center justify-center size-8 rounded-lg"
          :class="`bg-${card.color}/10`"
        >
          <UIcon
            :name="card.icon"
            class="size-4"
            :class="`text-${card.color}`"
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
