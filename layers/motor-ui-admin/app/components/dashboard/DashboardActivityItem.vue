<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { ActivityItem } from '../../composables/useDashboardData'

const props = defineProps<{
  item: ActivityItem
}>()

const typeConfig: Record<string, { icon: string; color: string; label: string }> = {
  BuilderPage: { icon: 'i-lucide-file-text', color: 'primary', label: 'Seite' },
  Navigation: { icon: 'i-lucide-menu', color: 'info', label: 'Navigation' },
  NavigationItem: { icon: 'i-lucide-menu', color: 'info', label: 'Navigation' },
  File: { icon: 'i-lucide-image', color: 'success', label: 'Medien' },
  CustomContentType: { icon: 'i-lucide-layout-grid', color: 'primary', label: 'Inhaltstyp' },
  CustomContentField: { icon: 'i-lucide-layout-grid', color: 'primary', label: 'Inhaltstyp' },
  Clickpath: { icon: 'i-lucide-mouse-pointer-click', color: 'warning', label: 'Assistent' },
  ClickpathStep: { icon: 'i-lucide-mouse-pointer-click', color: 'warning', label: 'Assistent' },
  Topic: { icon: 'i-lucide-bar-chart-2', color: 'info', label: 'Scoring' },
  PublishingTime: { icon: 'i-lucide-clock', color: 'info', label: 'Geplant' },
  Approval: { icon: 'i-lucide-check-circle', color: 'success', label: 'Freigabe' },
  SeoRedirect: { icon: 'i-lucide-link', color: 'error', label: 'SEO' },
  SearchConfig: { icon: 'i-lucide-search', color: 'info', label: 'Suche' },
}

const config = computed(() => {
  if (props.item.description === 'deleted') {
    return {
      icon: 'i-lucide-trash-2',
      color: 'error',
      label: typeConfig[props.item.subject_type]?.label ?? props.item.subject_type,
    }
  }
  return typeConfig[props.item.subject_type] ?? {
    icon: 'i-lucide-activity',
    color: 'neutral',
    label: props.item.subject_type,
  }
})

const actionVerbs: Record<string, string> = {
  created: 'erstellt',
  updated: 'aktualisiert',
  deleted: 'gelöscht',
  published: 'veröffentlicht',
  unpublished: 'offline genommen',
}

const verb = computed(() => actionVerbs[props.item.description] ?? props.item.description)
const timestamp = computed(() => new Date(props.item.created_at))
</script>

<template>
  <div class="flex items-start gap-3 px-4 py-3 border-b border-default last:border-b-0 hover:bg-elevated/50 transition-colors">
    <div
      class="flex items-center justify-center size-7 rounded-md flex-shrink-0 mt-0.5"
      :class="`bg-${config.color}/10`"
    >
      <UIcon
        :name="config.icon"
        class="size-3.5"
        :class="`text-${config.color}`"
      />
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-sm text-default">
        <strong>{{ item.subject_name ?? 'Unbekannt' }}</strong> {{ verb }}
      </div>
      <div class="text-xs text-dimmed mt-0.5">
        {{ item.causer_name ?? 'System' }} &middot; {{ formatTimeAgo(timestamp) }}
      </div>
    </div>
    <UBadge
      :color="config.color"
      variant="subtle"
      size="xs"
    >
      {{ config.label }}
    </UBadge>
  </div>
</template>
