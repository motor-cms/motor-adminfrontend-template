import { getCurrentInstance, onMounted, onBeforeUnmount, watch } from 'vue'
import type { Ref } from 'vue'
import type Sortable from 'sortablejs'

export interface SortableOptions {
  group?: string | Sortable.GroupOptions
  handle?: string
  animation?: number
  ghostClass?: string
  dragClass?: string
  chosenClass?: string
  fallbackOnBody?: boolean
  forceFallback?: boolean
  swapThreshold?: number
  disabled?: boolean
  draggable?: string
  filter?: string
  sort?: boolean
  onSort?: (evt: Sortable.SortableEvent) => void
  onAdd?: (evt: Sortable.SortableEvent) => void
  onRemove?: (evt: Sortable.SortableEvent) => void
  onMove?: (evt: Sortable.MoveEvent, originalEvent: Event) => boolean | -1 | 1 | undefined
}

/**
 * Wraps SortableJS for Vue 3, ensuring DOM mutations are reverted
 * before the reactive array is updated (prevents double-move conflicts).
 * Supports cross-container drag via onAdd/onRemove callbacks.
 *
 * IMPORTANT: ghostClass, dragClass, chosenClass must each be a SINGLE
 * CSS class (no spaces). SortableJS uses DOMTokenList which rejects
 * space-separated tokens.
 */
export function useSortable(
  containerRef: Ref<HTMLElement | null>,
  options: SortableOptions = {}
) {
  let sortableInstance: Sortable | null = null

  async function initSortable() {
    if (!containerRef.value || sortableInstance) return

    let SortableLib: typeof Sortable
    try {
      const mod = await import('sortablejs')
      SortableLib = mod.default
    } catch (e) {
      console.error('[useSortable] Failed to import sortablejs:', e)
      return
    }

    if (!containerRef.value || sortableInstance) return

    sortableInstance = SortableLib.create(containerRef.value, {
      animation: options.animation ?? 200,
      fallbackOnBody: options.fallbackOnBody ?? true,
      forceFallback: options.forceFallback ?? false,
      swapThreshold: options.swapThreshold ?? 0.5,
      ghostClass: options.ghostClass ?? 'opacity-30',
      dragClass: options.dragClass ?? 'shadow-lg',
      chosenClass: options.chosenClass ?? 'ring-2',
      group: options.group,
      handle: options.handle,
      ...(options.draggable != null && { draggable: options.draggable }),
      filter: options.filter,
      sort: options.sort ?? true,
      disabled: options.disabled ?? false,

      onEnd(evt) {
        const { item, from, to, oldIndex, newIndex } = evt
        if (from === to) {
          if (item && oldIndex !== undefined && newIndex !== undefined && oldIndex !== newIndex) {
            to!.removeChild(item)
            from.insertBefore(item, from.children[oldIndex] || null)
          }
          options.onSort?.(evt)
        }
      },

      onAdd(evt) {
        evt.item?.parentNode?.removeChild(evt.item)
        options.onAdd?.(evt)
      },

      onRemove: options.onRemove,
      onMove: options.onMove
    })
  }

  function destroy() {
    sortableInstance?.destroy()
    sortableInstance = null
  }

  function setDisabled(disabled: boolean) {
    if (sortableInstance) {
      sortableInstance.option('disabled', disabled)
    }
  }

  // Only register lifecycle hooks when called during component setup.
  // When called from onMounted/nextTick (e.g. CanvasComponent), the
  // component instance is no longer active, so we skip auto-lifecycle
  // and rely on the caller to manage init/destroy via the returned API.
  if (getCurrentInstance()) {
    onMounted(() => {
      initSortable()
    })

    onBeforeUnmount(() => {
      destroy()
    })
  }

  watch(containerRef, (newEl) => {
    destroy()
    if (newEl) initSortable()
  })

  return {
    initSortable,
    destroy,
    setDisabled,
    getInstance: () => sortableInstance
  }
}
