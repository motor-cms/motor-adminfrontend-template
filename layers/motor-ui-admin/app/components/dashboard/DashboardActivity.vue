<script setup lang="ts">
import type { ActivityItem } from '../../composables/useDashboardData'

const props = defineProps<{
  items: ActivityItem[]
  loading: boolean
  loadingMore: boolean
  hasMore: boolean
}>()

const emit = defineEmits<{
  loadMore: []
}>()

const { t } = useI18n()
const scrollContainer = ref<HTMLElement | null>(null)
const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function setupObserver() {
  observer?.disconnect()
  if (!scrollContainer.value || !sentinel.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting && props.hasMore && !props.loadingMore) {
        emit('loadMore')
      }
    },
    { root: scrollContainer.value, threshold: 0 },
  )
  observer.observe(sentinel.value)
}

onMounted(setupObserver)
watch([scrollContainer, sentinel], setupObserver)
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <UPageCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-sm font-heading font-semibold text-highlighted">{{ t('motor-admin.dashboard.activity.title') }}</span>
      </div>
    </template>
    <div v-if="loading" class="flex items-center justify-center py-12 text-muted">
      <UIcon name="i-lucide-loader-2" class="size-5 animate-spin" />
    </div>
    <div v-else-if="items.length === 0" class="flex flex-col items-center justify-center py-12 text-muted">
      <UIcon name="i-lucide-activity" class="size-10 mb-3" />
      <p class="text-sm">{{ t('motor-admin.dashboard.activity.empty') }}</p>
    </div>
    <div v-else class="relative -mx-4 -my-4 sm:-mx-6 sm:-my-6">
      <div
        ref="scrollContainer"
        class="max-h-[420px] overflow-y-auto"
      >
        <DashboardActivityItem
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
        <div ref="sentinel" class="h-px" />
        <div v-if="loadingMore" class="flex items-center justify-center py-3 text-muted">
          <UIcon name="i-lucide-loader-2" class="size-4 animate-spin" />
        </div>
      </div>
    </div>
  </UPageCard>
</template>
