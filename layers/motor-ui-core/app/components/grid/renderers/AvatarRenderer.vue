<script setup lang="ts">
import type { RendererProps, AvatarValue, AvatarRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<AvatarValue | string | null>>()

const rp = computed(() => props.column.rendererProps as AvatarRendererProps | undefined)

const avatarUrl = computed(() => {
  if (!props.value) return undefined
  if (typeof props.value === 'string') return props.value

  const avatar = props.value
  return getConversionUrl(avatar.conversions, 'thumb', avatar.url)
})

const initials = computed(() => {
  const nameKey = rp.value?.nameKey ?? 'name'
  const name = props.row[nameKey]
  if (typeof name !== 'string' || !name) return undefined
  return name.split(' ').map(part => part[0]).join('').toUpperCase().slice(0, 2)
})
</script>

<template>
  <UAvatar
    :src="avatarUrl"
    :text="initials"
    size="sm"
  />
</template>
