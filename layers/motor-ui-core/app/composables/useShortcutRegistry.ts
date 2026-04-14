import { createSharedComposable, useEventListener } from '@vueuse/core'

export interface ShortcutEntry {
  keys: string[]
  label: string
  icon?: string
}

export interface ShortcutGroup {
  id: string
  label: string
  icon?: string
  shortcuts: ShortcutEntry[]
}

const HOLD_DELAY_MS = 400

const _useShortcutRegistry = () => {
  const groups = ref<Map<string, ShortcutGroup>>(new Map())
  const isOverlayVisible = ref(false)

  let holdTimer: ReturnType<typeof setTimeout> | null = null
  let isModifierHeld = false

  function register(group: ShortcutGroup) {
    groups.value = new Map(groups.value).set(group.id, group)
  }

  function unregister(id: string) {
    const next = new Map(groups.value)
    next.delete(id)
    groups.value = next
  }

  const sortedGroups = computed(() => {
    const order = ['global', 'builder', 'form', 'grid', 'media']
    return [...groups.value.values()].sort((a, b) => {
      const ai = order.indexOf(a.id)
      const bi = order.indexOf(b.id)
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
    })
  })

  function cancelHold() {
    if (holdTimer) {
      clearTimeout(holdTimer)
      holdTimer = null
    }
    isOverlayVisible.value = false
    isModifierHeld = false
  }

  if (import.meta.client) {
    const isOverlayModifier = (e: KeyboardEvent) =>
      e.key === 'Meta' || e.key === 'Control' || e.key === 'Alt'

    useEventListener('keydown', (e: KeyboardEvent) => {
      if (isOverlayModifier(e)) {
        if (isModifierHeld) return
        isModifierHeld = true
        holdTimer = setTimeout(() => {
          if (isModifierHeld) {
            isOverlayVisible.value = true
          }
        }, HOLD_DELAY_MS)
        return
      }
      // Any other key while modifier held = performing a shortcut, cancel overlay
      if (isModifierHeld) {
        cancelHold()
      }
    })

    useEventListener('keyup', (e: KeyboardEvent) => {
      if (isOverlayModifier(e)) {
        cancelHold()
      }
    })

    useEventListener('blur', () => {
      cancelHold()
    })

    // Dismiss overlay on any click so Cmd+Click interactions (e.g. gallery multi-select) work
    useEventListener('mousedown', () => {
      if (isOverlayVisible.value) {
        isOverlayVisible.value = false
      }
    })
  }

  return {
    groups: sortedGroups,
    isOverlayVisible,
    register,
    unregister
  }
}

export const useShortcutRegistry = createSharedComposable(_useShortcutRegistry)
