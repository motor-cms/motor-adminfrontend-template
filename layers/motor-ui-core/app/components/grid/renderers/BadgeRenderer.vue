<script setup lang="ts">
import type { RendererProps, BadgeRendererProps, BadgeColor } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<string | null>>()

const rp = computed(() => props.column.rendererProps as BadgeRendererProps | undefined)

const color = computed<BadgeColor>(() => {
  const colorProp = rp.value?.color
  if (typeof colorProp === 'function') {
    return colorProp(props.value)
  }
  return colorProp ?? 'neutral'
})
</script>

<template>
  <UBadge
    v-if="value"
    :color="color"
    variant="subtle"
    size="sm"
  >
    {{ value }}
  </UBadge>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
