<!-- app/components/form/inputs/NestedDraggable.vue -->
<script setup lang="ts">
import type { TreeNode } from '@motor-cms/ui-core/app/types/tree'

defineOptions({ name: 'FormInputsNestedDraggable' })

defineProps<{
  items: TreeNode[]
  parentId: number | null
  depth: number
}>()

const {
  currentId, nonSelectableIds, moveItem,
  isEditMode, isDragging, expandedIds, toggleNode,
  handleDragOver, cleanupAutoExpand
} = inject<{
  currentId: ComputedRef<number | undefined>
  nonSelectableIds: ComputedRef<Set<number>>
  moveItem: (itemId: number, newParentId: number | null, newIndex: number) => void
  isEditMode: ComputedRef<boolean>
  isDragging: Ref<boolean>
  expandedIds: ComputedRef<Set<number>>
  toggleNode: (id: number) => void
  handleDragOver: (itemId: number) => void
  cleanupAutoExpand: (dropParentId: number | null) => void
}>('categoryTree')!

function isExpanded(id: number): boolean {
  return expandedIds.value.has(id)
}

function hasChildren(item: TreeNode): boolean {
  return item.children.length > 0
}

function onItemDragOver(item: TreeNode) {
  if (!isDragging.value) return
  handleDragOver(item.id)
}

const listRef = ref<HTMLElement | null>(null)
let sortableInstance: { destroy: () => void } | null = null

onMounted(async () => {
  if (!listRef.value || !isEditMode.value) return

  const { default: Sortable } = await import('sortablejs')

  sortableInstance = Sortable.create(listRef.value, {
    group: { name: 'categories' },
    animation: 200,
    fallbackOnBody: true,
    swapThreshold: 0.5,
    invertSwap: true,
    invertedSwapThreshold: 0.5,
    emptyInsertThreshold: 8,
    filter: '.no-drag',
    preventOnFilter: false,
    ghostClass: 'opacity-30',
    onStart() {
      isDragging.value = true
    },
    onMove(evt) {
      // Prevent dropping into the current item's own descendants
      const targetParentIdStr = (evt.to as HTMLElement).dataset.parentId
      if (targetParentIdStr) {
        const targetParentId = parseInt(targetParentIdStr)
        if (!isNaN(targetParentId) && nonSelectableIds.value.has(targetParentId)) {
          return false
        }
      }
      return true
    },
    onEnd(evt) {
      isDragging.value = false

      if (evt.newIndex === undefined || evt.oldIndex === undefined) {
        cleanupAutoExpand(null)
        return
      }

      const itemId = parseInt(evt.item.dataset.id!)
      if (isNaN(itemId)) {
        cleanupAutoExpand(null)
        return
      }

      const targetParentIdStr = (evt.to as HTMLElement).dataset.parentId
      const newParentId = targetParentIdStr ? parseInt(targetParentIdStr) : null
      const newIndex = evt.newIndex

      // Revert DOM change — let Vue handle re-rendering from reactive data
      if (evt.from !== evt.to) {
        evt.to.removeChild(evt.item)
        const ref = evt.from.children[evt.oldIndex] || null
        evt.from.insertBefore(evt.item, ref)
      } else {
        evt.from.removeChild(evt.item)
        const ref = evt.from.children[evt.oldIndex] || null
        evt.from.insertBefore(evt.item, ref)
      }

      moveItem(itemId, newParentId, newIndex)
      cleanupAutoExpand(newParentId)
    }
  })
})

onBeforeUnmount(() => {
  sortableInstance?.destroy()
})
</script>

<template>
  <ul
    ref="listRef"
    :data-parent-id="parentId ?? ''"
    :class="[
      'list-none',
      depth > 0 ? 'ml-4 pl-3' : '',
      depth > 0 && items.length > 0 ? 'border-l border-[var(--ui-border)]' : '',
      items.length === 0 ? 'min-h-[8px]' : '',
      isEditMode && items.length > 0 ? 'pb-1' : ''
    ]"
  >
    <li
      v-for="item in items"
      :key="item.id"
      :data-id="item.id"
      :class="{ 'no-drag': item.id !== currentId }"
    >
      <!-- Current item: highlighted + draggable -->
      <div
        v-if="item.id === currentId"
        class="flex items-center gap-1 px-2 py-1.5 my-0.5 cursor-grab active:cursor-grabbing"
      >
        <span class="shrink-0 w-4" />
        <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 -my-0.5 ring-2 ring-[var(--ui-primary)] bg-[var(--ui-primary)]/10 font-semibold text-[var(--ui-primary)]">
          <UIcon
            name="i-lucide-grip-vertical"
            class="shrink-0 size-4 opacity-60"
          />
          {{ item.name || '…' }}
        </span>
      </div>

      <!-- Non-selectable descendants (dimmed) -->
      <div
        v-else-if="nonSelectableIds.has(item.id)"
        class="flex items-center gap-1 px-2 py-1.5 my-0.5 opacity-40"
        @dragover="onItemDragOver(item)"
      >
        <button
          v-if="hasChildren(item)"
          class="shrink-0 size-6 sm:size-4 flex items-center justify-center"
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
          class="shrink-0 w-6 sm:w-4"
        />
        <UIcon
          :name="hasChildren(item) ? (isExpanded(item.id) ? 'i-lucide-folder-open' : 'i-lucide-folder') : 'i-lucide-file'"
          class="shrink-0 size-4"
        />
        {{ item.name }}
      </div>

      <!-- Other items (static) -->
      <div
        v-else
        class="flex items-center gap-1 px-2 py-1.5 my-0.5"
        @dragover="onItemDragOver(item)"
      >
        <button
          v-if="hasChildren(item)"
          class="shrink-0 size-6 sm:size-4 flex items-center justify-center rounded hover:bg-[var(--ui-bg-elevated)] transition-colors cursor-pointer"
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
          class="shrink-0 w-6 sm:w-4"
        />
        <UIcon
          :name="hasChildren(item) ? (isExpanded(item.id) ? 'i-lucide-folder-open' : 'i-lucide-folder') : 'i-lucide-file'"
          class="shrink-0 size-4 opacity-60"
        />
        {{ item.name }}
      </div>

      <!-- Children container:
           - Skip for current item (its children move with it, no need to render)
           - Always render in drag mode (expanded shows items, collapsed is empty drop target) -->
      <FormInputsNestedDraggable
        v-if="item.id !== currentId && isEditMode"
        :items="isExpanded(item.id) ? item.children : []"
        :parent-id="item.id"
        :depth="depth + 1"
      />
    </li>
  </ul>
</template>
