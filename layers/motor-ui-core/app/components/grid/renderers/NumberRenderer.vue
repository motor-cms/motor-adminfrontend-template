<script setup lang="ts">
import type { RendererProps, NumberRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<number | null>>()

const { locale } = useI18n()

const formatted = computed(() => {
  if (props.value === null || props.value === undefined) return '-'
  const rp = (props.column.rendererProps ?? {}) as NumberRendererProps
  const intlLocale = rp.locale ?? toIntlLocale(locale.value)
  const style = rp.style ?? 'decimal'

  const options: Intl.NumberFormatOptions = {
    style,
    minimumFractionDigits: rp.minimumFractionDigits,
    maximumFractionDigits: rp.maximumFractionDigits
  }

  if (style === 'currency') {
    options.currency = rp.currency ?? 'EUR'
  }

  return new Intl.NumberFormat(intlLocale, options).format(props.value)
})
</script>

<template>
  <span>{{ formatted }}</span>
</template>
