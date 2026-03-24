<script setup lang="ts">
import type { RendererProps, ListRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<unknown[] | null>>()

const rp = computed(() => props.column.rendererProps as ListRendererProps | undefined)

const itemKey = computed(() =>
  rp.value?.itemKey ?? 'name'
)

const maxItems = computed(() =>
  rp.value?.max ?? 3
)

const items = computed(() => {
  if (!Array.isArray(props.value)) return []
  return props.value.slice(0, maxItems.value)
})

const remainingCount = computed(() => {
  if (!Array.isArray(props.value)) return 0
  return Math.max(0, props.value.length - maxItems.value)
})

function getLabel(item: unknown): string {
  if (typeof item === 'string') return item
  if (typeof item === 'object' && item !== null) {
    return (item as Record<string, unknown>)[itemKey.value] as string ?? ''
  }
  return String(item)
}
</script>

<template>
  <div
    v-if="items.length > 0"
    class="flex flex-wrap gap-1"
  >
    <UBadge
      v-for="(item, index) in items"
      :key="index"
      color="neutral"
      variant="subtle"
      size="sm"
    >
      {{ getLabel(item) }}
    </UBadge>
    <UBadge
      v-if="remainingCount > 0"
      color="neutral"
      variant="outline"
      size="sm"
    >
      +{{ remainingCount }}
    </UBadge>
  </div>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
