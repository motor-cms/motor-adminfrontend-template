<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { ActivityItem } from '../../composables/useDashboardData'

const { t } = useI18n()

const props = defineProps<{
  item: ActivityItem
}>()

const typeLabels: Record<string, string> = {
  BuilderPage: 'page',
  Navigation: 'navigation',
  NavigationItem: 'navigation',
  File: 'media',
  CustomContentType: 'content_type',
  CustomContentField: 'content_type',
  Clickpath: 'assistant',
  ClickpathStep: 'assistant',
  Topic: 'scoring',
  PublishingTime: 'scheduled',
  Approval: 'approval',
  SeoRedirect: 'seo',
  SearchConfig: 'search',
}

const typeIcons: Record<string, { icon: string; color: string }> = {
  BuilderPage: { icon: 'i-lucide-file-text', color: 'primary' },
  Navigation: { icon: 'i-lucide-menu', color: 'info' },
  NavigationItem: { icon: 'i-lucide-menu', color: 'info' },
  File: { icon: 'i-lucide-image', color: 'success' },
  CustomContentType: { icon: 'i-lucide-layout-grid', color: 'primary' },
  CustomContentField: { icon: 'i-lucide-layout-grid', color: 'primary' },
  Clickpath: { icon: 'i-lucide-mouse-pointer-click', color: 'warning' },
  ClickpathStep: { icon: 'i-lucide-mouse-pointer-click', color: 'warning' },
  Topic: { icon: 'i-lucide-bar-chart-2', color: 'info' },
  PublishingTime: { icon: 'i-lucide-clock', color: 'info' },
  Approval: { icon: 'i-lucide-check-circle', color: 'success' },
  SeoRedirect: { icon: 'i-lucide-link', color: 'error' },
  SearchConfig: { icon: 'i-lucide-search', color: 'info' },
}

function typeLabel(subjectType: string): string {
  const key = typeLabels[subjectType]
  return key ? t(`motor-admin.dashboard.activity.types.${key}`) : subjectType
}

const config = computed(() => {
  const icons = typeIcons[props.item.subject_type]
  if (props.item.description === 'deleted') {
    return {
      icon: 'i-lucide-trash-2',
      color: 'error',
      label: typeLabel(props.item.subject_type),
    }
  }
  return {
    icon: icons?.icon ?? 'i-lucide-activity',
    color: icons?.color ?? 'neutral',
    label: typeLabel(props.item.subject_type),
  }
})

const verb = computed(() => {
  const key = props.item.description
  const translated = t(`motor-admin.dashboard.activity.verbs.${key}`)
  return translated.startsWith('motor-admin.') ? key : translated
})
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
        <strong>{{ item.subject_name ?? t('motor-admin.dashboard.activity.unknown') }}</strong> {{ verb }}
      </div>
      <div class="text-xs text-dimmed mt-0.5">
        {{ item.causer_name ?? t('motor-admin.dashboard.activity.system') }} &middot; {{ formatTimeAgo(timestamp) }}
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
