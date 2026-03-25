<!-- app/components/grid/GridPagination.vue -->
<script setup lang="ts">
import type { PaginationMeta } from '@motor-cms/ui-core/app/types/grid'

const props = withDefaults(defineProps<{
  meta: PaginationMeta | null
  perPageOptions?: number[]
  compact?: boolean
}>(), {
  compact: false
})

const emit = defineEmits<{
  'update:page': [page: number]
  'update:perPage': [perPage: number]
}>()

const { t } = useI18n()

const page = computed({
  get: () => props.meta?.current_page ?? 1,
  set: value => emit('update:page', value)
})

const perPageItems = computed(() => {
  const options = props.perPageOptions ?? [10, 25, 50, 100]
  return props.compact
    ? options.map(value => ({ label: String(value), value }))
    : options.map(value => ({ label: t('motor-core.grid.per_page', { count: value }), value }))
})

const showingText = computed(() => {
  if (!props.meta) return ''
  const { current_page, per_page, total } = props.meta
  const from = props.meta.from ?? (current_page - 1) * per_page + 1
  const to = props.meta.to ?? Math.min(current_page * per_page, total)
  if (props.compact) return `${from}-${to} / ${total}`
  return t('motor-core.grid.showing', { from, to, total })
})
</script>

<template>
  <div
    v-if="meta && meta.total > 0"
    :class="compact
      ? 'flex items-center gap-3 flex-nowrap shrink-0'
      : 'flex items-center justify-between'"
  >
    <span class="text-sm text-muted whitespace-nowrap">
      {{ showingText }}
    </span>

    <div class="flex items-center gap-3">
      <USelect
        :model-value="meta.per_page"
        :items="perPageItems"
        value-key="value"
        label-key="label"
        aria-label="Results per page"
        :class="compact ? 'w-20' : 'w-36'"
        @update:model-value="emit('update:perPage', Number($event))"
      />

      <UPagination
        v-model:page="page"
        :total="meta.total"
        :items-per-page="meta.per_page"
        :sibling-count="1"
        :show-edges="!compact"
        @update:page="emit('update:page', $event)"
      />
    </div>
  </div>
</template>
