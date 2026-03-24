<script setup lang="ts">
import type { RendererProps, LinkRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<string | null>>()

const rp = computed(() => props.column.rendererProps as LinkRendererProps | undefined)

const href = computed(() => {
  const hrefProp = rp.value?.href
  const toFn = rp.value?.to

  if (toFn) return toFn(props.row)
  if (hrefProp) return hrefProp

  // Auto-detect: if the cell value looks like a URL or email, use it as the href
  if (typeof props.value === 'string') {
    if (/^https?:\/\//.test(props.value)) return props.value
    if (/^mailto:/.test(props.value)) return props.value
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.value)) return `mailto:${props.value}`
  }

  return undefined
})

const isNativeLink = computed(() =>
  href.value ? /^(https?:|mailto:)/.test(href.value) : false
)

const opensNewTab = computed(() =>
  href.value?.startsWith('http') ?? false
)
</script>

<template>
  <NuxtLink
    v-if="href"
    :to="isNativeLink ? undefined : href"
    :href="isNativeLink ? href : undefined"
    :target="opensNewTab ? '_blank' : undefined"
    :title="value != null ? String(value) : undefined"
    class="text-primary hover:underline"
  >
    {{ value ?? '-' }}
  </NuxtLink>
  <span
    v-else
    :title="value != null ? String(value) : undefined"
  >
    {{ value ?? '-' }}
  </span>
</template>
