<!-- app/pages/motor-admin/category-trees/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { RowActionDef } from '@motor-cms/ui-core/app/types/grid'
import { categoryTreeMeta } from '@motor-cms/ui-core/app/types/generated/grid-meta'

definePageMeta({ permission: 'category-trees.read' })

type CategoryTree = components['schemas']['CategoryTreeResource']

const { t } = useI18n()

const columns = columnsFromMeta<CategoryTree>(categoryTreeMeta, t, {
  pick: ['name', 'scope']
})

columns.push(createdAtColumn(t))

const rowActions: RowActionDef<CategoryTree>[] = [
  {
    key: 'children',
    label: t('motor-admin.category_trees.children'),
    icon: 'i-lucide-list-tree',
    to: row => `/motor-admin/category-trees/${row.id}`
  },
  { key: 'delete', label: '', enabled: false }
]

const filters = [useScopeFilter()]

const fetchCategoryTrees = useGridFetch<CategoryTree>('/api/v2/category-trees')
</script>

<template>
  <GridPage
    :title="t('motor-admin.category_trees.title')"
    :subtitle="t('motor-admin.category_trees.subtitle')"
    add-route="/motor-admin/category-trees/create"
    :add-label="t('motor-admin.category_trees.add')"
    write-permission="category-trees.write"
  >
    <GridBase
      id="category-trees-grid"
      :fetch="fetchCategoryTrees"
      :columns="columns"
      :filters="filters"
      :row-actions="rowActions"
      base-path="/motor-admin/category-trees"
      :row-click-to="(row: any) => `/motor-admin/category-trees/${row.id}`"
      write-permission="category-trees.write"
      delete-permission="category-trees.delete"
    />
  </GridPage>
</template>
