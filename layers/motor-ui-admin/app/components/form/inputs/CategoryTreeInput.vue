<script setup lang="ts">
import type { TreeItem } from '@nuxt/ui'

const { t } = useI18n()

interface CategoryTreeItem extends TreeItem {
  id: number
  children?: CategoryTreeItem[]
}

interface Category {
  id: number
  name: string
  parent_id: number | null
  _lft: number
  level: number
}

const props = defineProps<{
  scope: string
  modelValue?: number[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number[]]
}>()

const client = useSanctumClient()

const treeItems = ref<CategoryTreeItem[]>([])
const itemMap = new Map<number, CategoryTreeItem>()
const selectedIds = ref(new Set<number>())

function buildTree(categories: Category[]): CategoryTreeItem[] {
  const sorted = [...categories].sort((a, b) => a._lft - b._lft)
  const map = new Map<number, CategoryTreeItem>()
  const roots: CategoryTreeItem[] = []

  for (const cat of sorted) {
    const item: CategoryTreeItem = {
      id: cat.id,
      label: cat.name,
      children: [],
      defaultExpanded: true
    }
    map.set(cat.id, item)
    itemMap.set(cat.id, item)

    if (cat.level === 0) continue // skip tree root

    if (cat.parent_id && map.has(cat.parent_id) && map.get(cat.parent_id) !== undefined) {
      const parent = map.get(cat.parent_id)!
      if (categories.find(c => c.id === cat.parent_id)!.level > 0) {
        parent.children!.push(item)
        continue
      }
    }
    roots.push(item)
  }

  return roots
}

function isSelected(item: CategoryTreeItem): boolean {
  return selectedIds.value.has(item.id)
}

function getAllDescendantIds(item: CategoryTreeItem): number[] {
  const ids: number[] = []
  for (const child of item.children ?? []) {
    ids.push(child.id)
    ids.push(...getAllDescendantIds(child))
  }
  return ids
}

function isIndeterminate(item: CategoryTreeItem): boolean {
  if (!item.children?.length) return false
  const descendantIds = getAllDescendantIds(item)
  const selectedCount = descendantIds.filter(id => selectedIds.value.has(id)).length
  return selectedCount > 0 && selectedCount < descendantIds.length
}

function toggleItem(item: CategoryTreeItem) {
  const ids = new Set(selectedIds.value)
  if (ids.has(item.id)) {
    ids.delete(item.id)
  } else {
    ids.add(item.id)
  }
  selectedIds.value = ids
  emit('update:modelValue', [...ids])
}

// Sync incoming modelValue (IDs) → selectedIds
function syncFromIds() {
  if (!props.modelValue || props.modelValue.length === 0) {
    selectedIds.value = new Set()
    return
  }
  selectedIds.value = new Set(props.modelValue.filter(id => itemMap.has(id)))
}

watch(() => props.modelValue, syncFromIds, { deep: true })

const { data: categoriesRes, status: fetchStatus } = useAsyncData<{ data: Category[] }>(
  `category-tree-input-${props.scope}`,
  () => client<{ data: Category[] }>(`/api/v2/categories?scope=${props.scope}&per_page=0`)
)

const loading = computed(() => fetchStatus.value === 'pending')

watch(categoriesRes, (res) => {
  if (res?.data) {
    treeItems.value = buildTree(res.data)
    syncFromIds()
  }
}, { immediate: true })
</script>

<template>
  <div
    v-if="loading"
    class="flex items-center gap-2 text-sm text-muted py-2"
  >
    <UIcon
      name="i-lucide-loader-2"
      class="size-4 animate-spin"
    />
    <span>{{ t('motor-core.global.loading') }}</span>
  </div>
  <UTree
    v-else
    :items="treeItems"
    :get-key="(item: CategoryTreeItem) => String(item.id)"
  >
    <template #item-leading="{ item }">
      <UCheckbox
        :model-value="isIndeterminate(item as CategoryTreeItem) ? 'indeterminate' : isSelected(item as CategoryTreeItem)"
        tabindex="-1"
        @change="toggleItem(item as CategoryTreeItem)"
        @click.stop
      />
    </template>
    <template #item-label="{ item }">
      <span
        class="cursor-pointer select-none"
        @click.stop="toggleItem(item as CategoryTreeItem)"
      >
        {{ (item as CategoryTreeItem).label }}
      </span>
    </template>
  </UTree>
</template>
