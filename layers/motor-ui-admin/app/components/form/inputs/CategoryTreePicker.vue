<!-- app/components/form/inputs/CategoryTreePicker.vue -->
<script setup lang="ts">
import type { TreeNode } from '@motor-cms/ui-core/app/types/tree'

interface CategoryItem {
  id: number
  name: string
  parent_id: number | null
  level: number
}

const TEMP_NEW_ID = -1

const props = defineProps<{
  treeId: string
  modelValue: number | null
  /** API endpoint to fetch tree items (defaults to category-trees endpoint) */
  endpoint?: string
  /** ID of the category being edited — shown highlighted & draggable */
  currentId?: number
  /** Name for a new item (create mode) — shown as a draggable node */
  newItemName?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
  'update:previousSiblingId': [value: number | null]
  'update:nextSiblingId': [value: number | null]
}>()

const { t } = useI18n()
const sanctumClient = useSanctumClient()

const tree = ref<TreeNode[]>([])
const isCreateMode = computed(() => props.newItemName !== undefined && !props.currentId)
const isEditMode = computed(() => !!props.currentId || isCreateMode.value)
const activeItemId = computed(() => props.currentId ?? (isCreateMode.value ? TEMP_NEW_ID : undefined))

// The parent_id of root-level categories (their parent is outside the returned list)
const rootParentId = ref<number | null>(null)
const isDragging = ref(false)
const expandedIds = ref(new Set<number>())

// IDs that can't be a drop/select target (current item + its descendants)
const nonSelectableIds = computed(() => {
  const ids = new Set<number>()
  if (!props.currentId) return ids
  ids.add(props.currentId)
  let changed = true
  while (changed) {
    changed = false
    for (const cat of categories.value) {
      if (cat.parent_id !== null && ids.has(cat.parent_id) && !ids.has(cat.id)) {
        ids.add(cat.id)
        changed = true
      }
    }
  }
  return ids
})

const { data: categoriesRes, status: fetchStatus } = useAsyncData<{ data: CategoryItem[] }>(
  `category-tree-picker-${props.treeId}`,
  () => {
    const url = props.endpoint
      ? `${props.endpoint}?per_page=0`
      : `/api/v2/category-trees/${props.treeId}/categories?per_page=0`
    return sanctumClient<{ data: CategoryItem[] }>(url)
  }
)

const categories = computed(() => categoriesRes.value?.data ?? [])
const loading = computed(() => fetchStatus.value === 'pending')

function buildTree(cats: CategoryItem[]): TreeNode[] {
  const map = new Map<number, TreeNode>()
  for (const cat of cats) {
    map.set(cat.id, { id: cat.id, name: cat.name, children: [] })
  }
  const roots: TreeNode[] = []
  for (const cat of cats) {
    const node = map.get(cat.id)!
    if (cat.parent_id !== null && map.has(cat.parent_id)) {
      map.get(cat.parent_id)!.children.push(node)
    } else {
      roots.push(node)
      // Capture the parent_id of root-level categories
      if (rootParentId.value === null && cat.parent_id !== null) {
        rootParentId.value = cat.parent_id
      }
    }
  }
  return roots
}

// Find ancestor IDs from root to target (not including target)
function findPathTo(nodes: TreeNode[], targetId: number): number[] | null {
  for (const node of nodes) {
    if (node.id === targetId) return []
    if (node.children.length > 0) {
      const path = findPathTo(node.children, targetId)
      if (path !== null) return [node.id, ...path]
    }
  }
  return null
}

watch(categories, (cats) => {
  tree.value = buildTree(cats)

  // Empty tree: default rootParentId to the tree's own ID (root node)
  if (rootParentId.value === null) {
    rootParentId.value = Number(props.treeId)
  }

  // Create mode: insert virtual "new" node at the start of the root list
  if (isCreateMode.value) {
    tree.value.unshift({ id: TEMP_NEW_ID, name: props.newItemName || '', children: [] })
    // Emit initial position (first child at root level)
    emitPosition()
  }

  // Auto-expand path to current item (+ the item itself to show its children)
  if (props.currentId) {
    const path = findPathTo(tree.value, props.currentId)
    if (path) {
      expandedIds.value = new Set([...path, props.currentId])
    }
  }
}, { immediate: true })

// Keep the active node's name in sync with the prop
watch(() => props.newItemName, (name) => {
  const id = activeItemId.value
  if (id === undefined) return
  const node = findNode(tree.value, id)
  if (node) node.name = name || ''
})

function toggleNode(id: number) {
  const next = new Set(expandedIds.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  expandedIds.value = next
}

// =============================================
// Tree mutation (edit mode drag & drop)
// =============================================

function findAndRemove(nodes: TreeNode[], id: number): TreeNode | null {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]!
    if (node.id === id) return nodes.splice(i, 1)[0] ?? null
    const found = findAndRemove(node.children, id)
    if (found) return found
  }
  return null
}

function findNode(nodes: TreeNode[], id: number): TreeNode | null {
  for (const n of nodes) {
    if (n.id === id) return n
    const found = findNode(n.children, id)
    if (found) return found
  }
  return null
}

/** Find the list containing the active item and emit its parent + siblings */
function emitPosition() {
  const id = activeItemId.value
  if (id === undefined) return

  function findInList(nodes: TreeNode[], parentId: number | null): boolean {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i]!.id === id) {
        const prev = i > 0 ? (nodes[i - 1]?.id ?? null) : null
        const next = i < nodes.length - 1 ? (nodes[i + 1]?.id ?? null) : null
        emit('update:modelValue', parentId)
        emit('update:previousSiblingId', prev)
        emit('update:nextSiblingId', next)
        return true
      }
      if (findInList(nodes[i]!.children, nodes[i]!.id)) return true
    }
    return false
  }
  findInList(tree.value, rootParentId.value)
}

function moveItem(itemId: number, newParentId: number | null, newIndex: number) {
  const item = findAndRemove(tree.value, itemId)
  if (!item) return

  let targetList: TreeNode[]
  if (newParentId === null || newParentId === rootParentId.value) {
    targetList = tree.value
  } else {
    const parent = findNode(tree.value, newParentId)
    if (!parent) return
    targetList = parent.children
  }

  targetList.splice(newIndex, 0, item)

  // Auto-expand the target parent so the user sees the result
  if (newParentId !== null && !expandedIds.value.has(newParentId)) {
    const next = new Set(expandedIds.value)
    next.add(newParentId)
    expandedIds.value = next
  }

  emitPosition()
}

// =============================================
// Auto-expand collapsed parents on drag hover
// =============================================

const autoExpandedIds = new Set<number>()
let hoverTimer: ReturnType<typeof setTimeout> | null = null
let hoverTargetId: number | null = null

function isDescendantOf(nodeId: number, ancestorId: number): boolean {
  const catMap = new Map(categories.value.map(c => [c.id, c]))
  let current = catMap.get(nodeId)
  while (current) {
    if (current.parent_id === ancestorId) return true
    if (current.parent_id === null) return false
    current = current.parent_id !== null ? catMap.get(current.parent_id) : undefined
  }
  return false
}

function collapseStaleAutoExpanded(currentItemId: number) {
  if (autoExpandedIds.size === 0) return
  const toRemove: number[] = []
  for (const id of autoExpandedIds) {
    if (id === currentItemId || isDescendantOf(currentItemId, id)) continue
    toRemove.push(id)
  }
  if (toRemove.length === 0) return
  const next = new Set(expandedIds.value)
  for (const id of toRemove) {
    next.delete(id)
    autoExpandedIds.delete(id)
  }
  expandedIds.value = next
}

function cancelHoverExpand() {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
    hoverTargetId = null
  }
}

function startHoverExpand(id: number) {
  if (id === hoverTargetId) return
  cancelHoverExpand()
  hoverTargetId = id
  hoverTimer = setTimeout(() => {
    const next = new Set(expandedIds.value)
    next.add(id)
    expandedIds.value = next
    autoExpandedIds.add(id)
    hoverTargetId = null
    hoverTimer = null
  }, 500)
}

/** Called from @dragover on each tree item during drag */
function handleDragOver(itemId: number) {
  collapseStaleAutoExpanded(itemId)

  if (itemId === activeItemId.value) {
    cancelHoverExpand()
    return
  }
  if (nonSelectableIds.value.has(itemId)) {
    cancelHoverExpand()
    return
  }
  if (expandedIds.value.has(itemId)) {
    cancelHoverExpand()
    return
  }

  const node = findNode(tree.value, itemId)
  if (!node || node.children.length === 0) {
    cancelHoverExpand()
    return
  }

  startHoverExpand(itemId)
}

/** Called after drop — keeps drop target expanded, collapses the rest */
function cleanupAutoExpand(dropParentId: number | null) {
  cancelHoverExpand()
  if (dropParentId !== null) {
    autoExpandedIds.delete(dropParentId)
  }
  if (autoExpandedIds.size === 0) return
  const next = new Set(expandedIds.value)
  for (const id of autoExpandedIds) {
    next.delete(id)
  }
  expandedIds.value = next
  autoExpandedIds.clear()
}

// Provide shared state for the recursive NestedDraggable components
provide('categoryTree', {
  currentId: computed(() => activeItemId.value),
  nonSelectableIds,
  moveItem,
  isEditMode,
  isDragging,
  expandedIds: computed(() => expandedIds.value),
  toggleNode,
  handleDragOver,
  cleanupAutoExpand
})
</script>

<template>
  <ClientOnly>
    <div
      v-if="loading"
      class="flex items-center gap-2 text-sm text-[var(--ui-text-muted)]"
    >
      <UIcon
        name="i-lucide-loader-2"
        class="animate-spin"
      />
      {{ t('motor-core.global.loading') }}
    </div>
    <div
      v-else
      class="text-sm"
    >
      <FormInputsNestedDraggable
        :items="tree"
        :parent-id="rootParentId"
        :depth="0"
      />
    </div>
  </ClientOnly>
</template>
