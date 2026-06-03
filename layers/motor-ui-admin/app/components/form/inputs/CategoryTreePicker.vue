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
// Horizontal pixels per nesting level. Dragging the item this far to the
// right/left while moving changes the target depth by one — this is what makes
// the nesting level directly visible and controllable.
const INDENT = 24

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
      if (rootParentId.value === null && cat.parent_id !== null) {
        rootParentId.value = cat.parent_id
      }
    }
  }
  return roots
}

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

  if (rootParentId.value === null) {
    rootParentId.value = Number(props.treeId)
  }

  if (isCreateMode.value) {
    tree.value.unshift({ id: TEMP_NEW_ID, name: props.newItemName || '', children: [] })
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

watch(() => props.newItemName, (name) => {
  const id = activeItemId.value
  if (id === undefined) return
  const node = findNode(tree.value, id)
  if (node) node.name = name || ''
})

function toggleNode(id: number) {
  const next = new Set(expandedIds.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  expandedIds.value = next
}

// =============================================
// Tree data helpers (move + emit position)
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

  if (newParentId !== null && !expandedIds.value.has(newParentId)) {
    const next = new Set(expandedIds.value)
    next.add(newParentId)
    expandedIds.value = next
  }

  emitPosition()
}

// =============================================
// Flatten the visible tree into a single list with depth
// =============================================

interface FlatItem {
  id: number
  name: string
  depth: number
  parentId: number | null
  hasChildren: boolean
}

const flattened = computed<FlatItem[]>(() => {
  const out: FlatItem[] = []
  function walk(nodes: TreeNode[], depth: number, parentId: number | null) {
    for (const n of nodes) {
      out.push({ id: n.id, name: n.name, depth, parentId, hasChildren: n.children.length > 0 })
      if (n.children.length && expandedIds.value.has(n.id)) walk(n.children, depth + 1, n.id)
    }
  }
  walk(tree.value, 0, rootParentId.value)
  return out
})

function isExpanded(id: number): boolean {
  return expandedIds.value.has(id)
}

// =============================================
// Pointer-based drag with horizontal level control
// =============================================

const containerRef = ref<HTMLElement | null>(null)
const dragActive = ref(false)
const isDragging = computed(() => dragActive.value)
const pointer = ref({ x: 0, y: 0 })
let startX = 0
let activeDepth = 0

// Item above the insertion point (null = insert at very top)
const overItemId = ref<number | null>(null)
const offsetLeft = ref(0)

// Descendants of the active item — excluded from the list while dragging
const activeDescendantIds = computed<Set<number>>(() => {
  const ids = new Set<number>()
  if (activeItemId.value === undefined) return ids
  const node = findNode(tree.value, activeItemId.value)
  if (node) {
    (function collect(n: TreeNode) {
      for (const c of n.children) { ids.add(c.id); collect(c) }
    })(node)
  }
  return ids
})

// What we render: during drag the active item + its subtree lift out
const displayItems = computed<FlatItem[]>(() => {
  if (!dragActive.value) return flattened.value
  return flattened.value.filter(i => i.id !== activeItemId.value && !activeDescendantIds.value.has(i.id))
})

const activeItem = computed(() => flattened.value.find(i => i.id === activeItemId.value) ?? null)

const projected = computed(() => {
  if (!dragActive.value) return null
  const items = displayItems.value
  const overIndex = overItemId.value === null ? -1 : items.findIndex(i => i.id === overItemId.value)
  const prevItem = overIndex >= 0 ? items[overIndex] : null
  const nextItem = items[overIndex + 1] ?? null

  const dragDepth = Math.round(offsetLeft.value / INDENT)
  const projectedDepth = activeDepth + dragDepth
  const maxDepth = prevItem ? prevItem.depth + 1 : 0
  const minDepth = nextItem ? nextItem.depth : 0
  const depth = Math.max(minDepth, Math.min(projectedDepth, maxDepth))

  let parentId: number | null
  if (depth === 0 || !prevItem) {
    parentId = rootParentId.value
  } else if (depth === prevItem.depth) {
    parentId = prevItem.parentId
  } else if (depth > prevItem.depth) {
    parentId = prevItem.id
  } else {
    const ancestor = items.slice(0, overIndex + 1).reverse().find(i => i.depth === depth)
    parentId = ancestor?.parentId ?? rootParentId.value
  }

  return { depth, parentId, overIndex, overItemId: overItemId.value }
})

const projectedParentName = computed(() => {
  const p = projected.value
  if (!p) return null
  if (p.parentId === null || p.parentId === rootParentId.value) return null
  return findNode(tree.value, p.parentId)?.name ?? null
})

function rowsInDom(): HTMLElement[] {
  return [...(containerRef.value?.querySelectorAll<HTMLElement>('[data-flat-id]') ?? [])]
}

function updateOver(clientY: number) {
  let over: number | null = null
  for (const row of rowsInDom()) {
    const r = row.getBoundingClientRect()
    if (clientY >= r.top + r.height / 2) over = Number(row.dataset.flatId)
    else break
  }
  overItemId.value = over
}

function onHandlePointerDown(e: PointerEvent) {
  if (activeItemId.value === undefined) return
  e.preventDefault()
  e.stopPropagation()
  dragActive.value = true
  startX = e.clientX
  offsetLeft.value = 0
  activeDepth = activeItem.value?.depth ?? 0
  pointer.value = { x: e.clientX, y: e.clientY }
  nextTick(() => updateOver(e.clientY))
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(e: PointerEvent) {
  if (!dragActive.value) return
  pointer.value = { x: e.clientX, y: e.clientY }
  offsetLeft.value = e.clientX - startX
  updateOver(e.clientY)
}

function onPointerUp() {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  const p = projected.value
  const id = activeItemId.value
  dragActive.value = false
  if (!p || id === undefined) return

  // Index among the target parent's children
  const items = displayItems.value
  const upto = items.slice(0, p.overIndex + 1)
  const prevSibling = [...upto].reverse().find(i => i.parentId === p.parentId && i.depth === p.depth)
  const targetChildren = (p.parentId === null || p.parentId === rootParentId.value)
    ? tree.value
    : (findNode(tree.value, p.parentId)?.children ?? [])
  const newIndex = prevSibling
    ? targetChildren.findIndex(c => c.id === prevSibling.id) + 1
    : 0

  moveItem(id, p.parentId, newIndex)
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
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
      ref="containerRef"
      class="relative text-sm select-none"
      :class="dragActive ? 'cursor-grabbing' : ''"
    >
      <!-- Insertion line at the very top -->
      <div
        v-if="dragActive && projected && projected.overItemId === null"
        class="pointer-events-none py-0.5"
        :style="{ paddingLeft: (projected.depth * INDENT + 8) + 'px' }"
      >
        <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 border-2 border-dashed border-[var(--ui-primary)] bg-[var(--ui-primary)]/5 text-[var(--ui-primary)]/70 text-sm">
          <UIcon
            name="i-lucide-grip-vertical"
            class="size-4 opacity-40"
          />
          {{ activeItem?.name || '…' }}
        </span>
      </div>

      <template
        v-for="item in displayItems"
        :key="item.id"
      >
        <!-- Active (current) item rendered in place as a grabbable pill -->
        <div
          v-if="item.id === activeItemId"
          :data-flat-id="item.id"
          class="flex items-center gap-1 px-2 py-1.5 my-0.5"
          :style="{ paddingLeft: (item.depth * INDENT + 8) + 'px' }"
        >
          <span class="shrink-0 size-5 sm:size-4" />
          <span
            class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 -my-0.5 ring-2 ring-[var(--ui-primary)] bg-[var(--ui-primary)]/10 font-semibold text-[var(--ui-primary)] cursor-grab active:cursor-grabbing touch-none"
            @pointerdown="onHandlePointerDown"
          >
            <UIcon
              name="i-lucide-grip-vertical"
              class="shrink-0 size-4 opacity-60"
            />
            {{ item.name || '…' }}
          </span>
        </div>
        <div
          v-else
          :data-flat-id="item.id"
          class="flex items-center gap-1 px-2 py-1.5 my-0.5 rounded-md transition-colors"
          :class="[
            nonSelectableIds.has(item.id) ? 'opacity-40' : '',
            dragActive && projected && projected.parentId === item.id ? 'ring-2 ring-[var(--ui-primary)] bg-[var(--ui-primary)]/10' : ''
          ]"
          :style="{ paddingLeft: (item.depth * INDENT + 8) + 'px' }"
        >
          <button
            v-if="item.hasChildren"
            class="shrink-0 size-5 sm:size-4 flex items-center justify-center rounded hover:bg-[var(--ui-bg-elevated)] transition-colors cursor-pointer"
            type="button"
            @click.stop="toggleNode(item.id)"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="size-3.5 transition-transform duration-200"
              :class="{ 'rotate-90': isExpanded(item.id) }"
            />
          </button>
          <span
            v-else
            class="shrink-0 size-5 sm:size-4"
          />
          <UIcon
            :name="item.hasChildren
              ? ((isExpanded(item.id) || (dragActive && projected && projected.parentId === item.id)) ? 'i-lucide-folder-open' : 'i-lucide-folder')
              : 'i-lucide-file'"
            class="shrink-0 size-4"
            :class="dragActive && projected && projected.parentId === item.id ? 'text-[var(--ui-primary)]' : 'opacity-60'"
          />
          <span class="truncate">{{ item.name }}</span>
        </div>

        <!-- Insertion line after this row -->
        <div
          v-if="dragActive && projected && projected.overItemId === item.id"
          class="pointer-events-none py-0.5"
          :style="{ paddingLeft: (projected.depth * INDENT + 8) + 'px' }"
        >
          <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 border-2 border-dashed border-[var(--ui-primary)] bg-[var(--ui-primary)]/5 text-[var(--ui-primary)]/70 text-sm">
            <UIcon
              name="i-lucide-grip-vertical"
              class="size-4 opacity-40"
            />
            {{ activeItem?.name || '…' }}
          </span>
        </div>
      </template>

      <!-- Floating chip + level hint following the cursor while dragging -->
      <Teleport to="body">
        <div
          v-if="dragActive && activeItem"
          class="fixed z-50 pointer-events-none -translate-y-1/2"
          :style="{ left: pointer.x + 14 + 'px', top: pointer.y + 'px' }"
        >
          <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 ring-2 ring-[var(--ui-primary)] bg-[var(--ui-bg-default,#fff)] shadow-lg font-semibold text-[var(--ui-primary)] text-sm">
            <UIcon
              name="i-lucide-grip-vertical"
              class="shrink-0 size-4 opacity-60"
            />
            {{ activeItem.name || '…' }}
          </span>
          <span
            v-if="projected"
            class="mt-1 flex items-center gap-1 w-fit rounded px-1.5 py-0.5 bg-[var(--ui-primary)] text-white text-[11px] shadow"
          >
            <UIcon
              name="i-lucide-corner-down-right"
              class="size-3"
            />
            {{ projectedParentName || '—' }}
          </span>
        </div>
      </Teleport>
    </div>
  </ClientOnly>
</template>
