<!-- app/components/grid/GridRowActions.vue -->
<script setup lang="ts" generic="T extends Record<string, unknown>">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { RowActionDef } from '@motor-cms/ui-core/app/types/grid'

const props = withDefaults(defineProps<{
  row: T
  actions: RowActionDef<T>[]
  nameKey?: string
}>(), {
  nameKey: 'name'
})

const emit = defineEmits<{
  'action-complete': []
}>()

const { t } = useI18n()
const { success, error } = useNotify()
const router = useRouter()

const { pendingAction, confirmModal, runHandler } = useActionHandler()
const confirmAction = ref<RowActionDef<T> | null>(null)

function getRecordName(): string {
  const candidates = [props.nameKey, 'name', 'title', 'subject', 'label']
  for (const key of candidates) {
    const value = props.row[key]
    if (value && typeof value === 'string') return value
  }
  return `#${props.row.id ?? ''}`
}

const visibleActions = computed(() =>
  props.actions.filter((action) => {
    if (action.visible) return action.visible(props.row)
    return true
  })
)

const menuItems = computed<DropdownMenuItem[][]>(() => {
  const normal = visibleActions.value.filter(a => a.color !== 'error')
  const destructive = visibleActions.value.filter(a => a.color === 'error')

  const toMenuItem = (action: RowActionDef<T>): DropdownMenuItem => ({
    label: typeof action.label === 'function' ? action.label(props.row) : action.label,
    icon: action.icon,
    color: action.color,
    disabled: pendingAction.value !== null,
    onSelect: () => executeAction(action)
  })

  const groups: DropdownMenuItem[][] = []
  if (normal.length > 0) groups.push(normal.map(toMenuItem))
  if (destructive.length > 0) groups.push(destructive.map(toMenuItem))
  return groups
})

function getConfirmMessage(action: RowActionDef<T>): string {
  if (typeof action.confirm === 'function') {
    return action.confirm(props.row)
  }
  return action.confirm ?? t('motor-core.grid.are_you_sure')
}

async function executeAction(action: RowActionDef<T>): Promise<void> {
  // Handle navigation
  if (action.to) {
    const path = typeof action.to === 'function' ? action.to(props.row) : action.to
    router.push(path)
    return
  }

  // Check if confirmation needed
  if (action.confirm && action.handler) {
    confirmAction.value = action
    confirmModal.value = true
    return
  }

  // Run handler directly
  if (action.handler) {
    await handleAction(action)
  }
}

async function handleAction(action: RowActionDef<T>): Promise<void> {
  if (!action.handler) return

  const label = typeof action.label === 'function' ? action.label(props.row) : action.label
  const name = getRecordName()

  await runHandler(
    action.key,
    () => action.handler!(props.row),
    {
      onSuccess: () => {
        if (!action.silent) {
          success(name, t('motor-core.grid.action_completed', { label }))
        }
        emit('action-complete')
      },
      onError: (err) => {
        error(t('motor-core.grid.action_failed', { label }), `${name}: ${err.message}`)
      },
      onFinally: () => {
        confirmAction.value = null
      }
    }
  )
}

function onConfirm(): void {
  if (confirmAction.value) {
    handleAction(confirmAction.value)
  }
}

function onCancel(): void {
  confirmModal.value = false
  confirmAction.value = null
}
</script>

<template>
  <UDropdownMenu
    v-if="visibleActions.length > 0"
    :items="menuItems"
  >
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-more-vertical"
      size="sm"
    />

    <GridConfirmActionModal
      v-model:open="confirmModal"
      :message="confirmAction ? getConfirmMessage(confirmAction) : ''"
      :color="confirmAction?.color"
      :loading="pendingAction !== null"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </UDropdownMenu>
</template>
