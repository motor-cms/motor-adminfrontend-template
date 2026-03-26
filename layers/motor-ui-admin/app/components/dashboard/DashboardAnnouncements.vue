<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { AnnouncementItem } from '../../composables/useDashboardData'

const props = defineProps<{
  items: AnnouncementItem[]
  loading: boolean
  canCreate?: boolean
}>()

const emit = defineEmits<{
  dismiss: [id: number]
  create: []
}>()

const borderColors: Record<string, string> = {
  info: 'border-l-info',
  warning: 'border-l-warning',
  error: 'border-l-error',
}
</script>

<template>
  <UPageCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-megaphone" class="size-4 text-primary" />
          <span class="text-sm font-heading font-semibold text-highlighted">Meldungen</span>
          <UBadge
            v-if="items.length > 0"
            color="primary"
            variant="subtle"
            size="xs"
          >
            {{ items.length }}
          </UBadge>
        </div>
        <UButton
          v-if="canCreate"
          icon="i-lucide-plus"
          size="xs"
          variant="ghost"
          color="neutral"
          @click="emit('create')"
        />
      </div>
    </template>
    <div v-if="loading" class="flex items-center justify-center py-6 text-muted">
      <UIcon name="i-lucide-loader-2" class="size-5 animate-spin" />
    </div>
    <div v-else-if="items.length === 0" class="text-sm text-muted py-4 text-center">
      Keine Meldungen
    </div>
    <div v-else class="flex flex-col gap-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="p-3 rounded-lg bg-elevated border border-muted border-l-3"
        :class="borderColors[item.type] ?? 'border-l-info'"
      >
        <div class="flex items-start justify-between gap-2">
          <div class="text-sm font-medium text-default">{{ item.title }}</div>
          <button
            class="flex-shrink-0 text-dimmed hover:text-default transition-colors"
            @click="emit('dismiss', item.id)"
          >
            <UIcon name="i-lucide-x" class="size-3.5" />
          </button>
        </div>
        <p v-if="item.body" class="text-xs text-muted mt-1">{{ item.body }}</p>
        <NuxtLink
          v-if="item.linkable_url"
          :to="item.linkable_url"
          class="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
        >
          <UIcon name="i-lucide-external-link" class="size-3" />
          {{ item.linkable_name }}
        </NuxtLink>
        <div class="text-xs text-dimmed mt-2">
          {{ item.created_by_name }} &middot; {{ formatTimeAgo(new Date(item.created_at)) }}
        </div>
      </div>
    </div>
  </UPageCard>
</template>
