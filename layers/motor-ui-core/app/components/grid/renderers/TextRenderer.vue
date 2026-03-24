<script setup lang="ts">
import type { RendererProps } from '@motor-cms/ui-core/app/types/grid'

defineProps<RendererProps<unknown>>()
</script>

<template>
  <span
    v-if="value != null"
    :title="String(value)"
  >{{ value }}</span>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
