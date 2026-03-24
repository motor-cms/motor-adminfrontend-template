<!-- app/pages/motor-admin/category-trees/[id]/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { RowActionDef } from '@motor-cms/ui-core/app/types/grid'
import { categoryMeta } from '@motor-cms/ui-core/app/types/generated/grid-meta'

definePageMeta({ permission: 'category-trees.read' })

type Category = components['schemas']['CategoryResource']
type CategoryTree = components['schemas']['CategoryTreeResource']

const route = useRoute()
const client = useSanctumClient()
const { t } = useI18n()

const treeId = route.params.id as string

const { data: treeRes } = useAsyncData(
  `category-tree-${treeId}`,
  () => client<{ data: CategoryTree }>(`/api/v2/category-trees/${treeId}`)
)
const treeName = computed(() => (treeRes.value?.data.name as string) ?? `#${treeId}`)

const columns = columnsFromMeta<Category>(categoryMeta, t, {
  pick: ['name']
})

// Override name column to use indented-text renderer
const nameCol = columns.find(c => c.key === 'name')
if (nameCol) {
  nameCol.renderer = 'indented-text'
}

columns.push(createdAtColumn(t))

const rowActions: RowActionDef<Category>[] = [
  {
    key: 'edit',
    label: t('motor-core.grid.edit'),
    icon: 'i-lucide-pencil',
    to: row => `/motor-admin/category-trees/${treeId}/categories/${row.id}/edit`
  },
  {
    key: 'delete',
    label: t('motor-core.grid.delete'),
    icon: 'i-lucide-trash-2',
    color: 'error',
    confirm: t('motor-core.grid.confirm_delete_row'),
    handler: async (row) => {
      await client(`/api/v2/category-trees/${treeId}/categories/${row.id}`, { method: 'DELETE' })
    }
  }
]

const fetchCategories = useGridFetch<Category>(`/api/v2/category-trees/${treeId}/categories`)
</script>

<template>
  <GridPage
    :title="treeName ? t('motor-admin.category_trees.children_title', { name: treeName }) : t('motor-admin.categories.title')"
    :subtitle="t('motor-admin.category_trees.children_subtitle')"
    :add-route="`/motor-admin/category-trees/${treeId}/categories/create`"
    :add-label="t('motor-admin.categories.add')"
    back-route="/motor-admin/category-trees"
    :back-label="t('motor-admin.category_trees.title')"
    write-permission="categories.write"
  >
    <GridBase
      id="categories-grid"
      :fetch="fetchCategories"
      :columns="columns"
      :row-actions="rowActions"
      :row-click-to="(row: any) => `/motor-admin/category-trees/${treeId}/categories/${row.id}/edit`"
      :add-route="`/motor-admin/category-trees/${treeId}/categories/create`"
      :add-label="t('motor-admin.categories.add')"
      disable-default-actions
      write-permission="categories.write"
      delete-permission="categories.delete"
    />
  </GridPage>
</template>
