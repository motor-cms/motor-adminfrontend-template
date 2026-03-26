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

const typeIcons: Record<string, string> = {
  BuilderPage: 'i-lucide-file-text',
  Navigation: 'i-lucide-menu',
  NavigationItem: 'i-lucide-menu',
  File: 'i-lucide-image',
  CustomContentType: 'i-lucide-layout-grid',
  CustomContentField: 'i-lucide-layout-grid',
  Clickpath: 'i-lucide-mouse-pointer-click',
  ClickpathStep: 'i-lucide-mouse-pointer-click',
  Topic: 'i-lucide-bar-chart-2',
  PublishingTime: 'i-lucide-clock',
  Approval: 'i-lucide-check-circle',
  SeoRedirect: 'i-lucide-link',
  SearchConfig: 'i-lucide-search',
}

function typeLabel(subjectType: string): string {
  const key = typeLabels[subjectType]
  return key ? t(`motor-admin.dashboard.activity.types.${key}`) : subjectType
}

const isDeleted = computed(() => props.item.description === 'deleted')

const config = computed(() => {
  const icon = isDeleted.value
    ? 'i-lucide-trash-2'
    : typeIcons[props.item.subject_type] ?? 'i-lucide-activity'
  return {
    icon,
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
  <div class="flex items-start gap-3 px-4 py-3 last:pb-0 hover:bg-elevated/50 transition-colors">
    <div
      class="flex items-center justify-center size-7 rounded-md flex-shrink-0 mt-0.5"
      :class="isDeleted ? 'bg-error/10' : 'bg-muted/50'"
    >
      <UIcon
        :name="config.icon"
        class="size-3.5"
        :class="isDeleted ? 'text-error' : 'text-dimmed'"
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
      :color="isDeleted ? 'error' : 'neutral'"
      variant="subtle"
      size="xs"
    >
      {{ config.label }}
    </UBadge>
  </div>
</template>
