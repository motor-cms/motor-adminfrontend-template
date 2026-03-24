<!-- app/components/grid/GridPagination.vue -->
<script setup lang="ts">
import type { PaginationMeta } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<{
  meta: PaginationMeta | null
  perPageOptions?: number[]
}>()

const emit = defineEmits<{
  'update:page': [page: number]
  'update:perPage': [perPage: number]
}>()

const { t } = useI18n()

const page = computed({
  get: () => props.meta?.current_page ?? 1,
  set: value => emit('update:page', value)
})

const perPageOptions = computed(() => {
  const options = props.perPageOptions ?? [10, 25, 50, 100]
  return options.map(value => ({
    label: t('motor-core.grid.per_page', { count: value }),
    value
  }))
})

const showingText = computed(() => {
  if (!props.meta) return ''
  const { current_page, per_page, total } = props.meta
  const from = (current_page - 1) * per_page + 1
  const to = Math.min(current_page * per_page, total)
  return t('motor-core.grid.showing', { from, to, total })
})
</script>

<template>
  <div
    v-if="meta && meta.total > 0"
    class="flex items-center justify-between"
  >
    <span class="text-sm text-muted">
      {{ showingText }}
    </span>

    <div class="flex items-center gap-4">
      <USelect
        :model-value="meta.per_page"
        :items="perPageOptions"
        value-key="value"
        label-key="label"
        class="w-36"
        @update:model-value="emit('update:perPage', $event as number)"
      />

      <UPagination
        v-model:page="page"
        :total="meta.total"
        :items-per-page="meta.per_page"
        :sibling-count="1"
        show-edges
      />
    </div>
  </div>
</template>
