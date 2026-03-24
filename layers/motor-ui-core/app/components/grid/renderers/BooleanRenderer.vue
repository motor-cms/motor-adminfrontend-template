<script setup lang="ts">
import type { RendererProps, BooleanRendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<boolean | number | string | null>>()

const { t } = useI18n()

const rp = computed(() => props.column.rendererProps as BooleanRendererProps | undefined)

const trueLabel = computed(() =>
  rp.value?.trueLabel ?? t('motor-core.grid.yes')
)

const falseLabel = computed(() =>
  rp.value?.falseLabel ?? t('motor-core.grid.no')
)

// Coerce string values from API (e.g. "1", "0", "true", "false") to boolean
function toBool(val: boolean | number | string | null): boolean {
  if (typeof val === 'string') {
    return val !== '' && val !== '0' && val.toLowerCase() !== 'false'
  }
  return !!val
}

const label = computed(() =>
  toBool(props.value) ? trueLabel.value : falseLabel.value
)

const color = computed(() =>
  toBool(props.value) ? 'success' : 'neutral'
)
</script>

<template>
  <UBadge
    :color="color"
    variant="subtle"
    size="sm"
  >
    {{ label }}
  </UBadge>
</template>
