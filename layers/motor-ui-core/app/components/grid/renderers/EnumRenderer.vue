<script setup lang="ts">
import type { RendererProps, EnumRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<string | number | null>>()

const { t, te } = useI18n({ useScope: 'global' })

const rp = computed(() => props.column.rendererProps as EnumRendererProps | undefined)

const label = computed(() => {
  if (props.value == null) return null
  const prefix = rp.value?.translationPrefix
  if (!prefix) return String(props.value)
  const key = `${prefix}${props.value}`
  return te(key) ? t(key) : String(props.value)
})
</script>

<template>
  <span
    v-if="label != null"
    :title="label"
  >{{ label }}</span>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
