<script setup lang="ts">
import type { RendererProps, DateRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<string | Date | null | undefined>>()

const { locale } = useI18n()

const rp = computed(() => props.column.rendererProps as DateRendererProps | undefined)

const showTime = computed(() => rp.value?.showTime !== false)

const intlLocale = computed(() => {
  return rp.value?.locale ?? toIntlLocale(locale.value)
})

const formatted = computed(() => {
  if (!props.value) return '-'
  const date = parseDate(props.value)
  return formatDate(date, intlLocale.value, showTime.value)
})
</script>

<template>
  <span>{{ formatted }}</span>
</template>
