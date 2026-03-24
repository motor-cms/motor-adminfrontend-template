<script setup lang="ts">
import type { RendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<unknown>>()

const level = computed(() => Number(props.row.level) || 0)
const indent = computed(() => Math.max(0, level.value - 1))
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5"
    :style="{ paddingLeft: `${indent * 1.25}rem` }"
    :title="value != null ? String(value) : undefined"
  >
    <UIcon
      v-if="indent > 0"
      name="i-lucide-corner-down-right"
      class="size-3.5 text-muted shrink-0"
    />
    <span>{{ value ?? '-' }}</span>
  </span>
</template>
