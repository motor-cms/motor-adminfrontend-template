<!-- app/components/grid/GridBulkActions.vue -->
<script setup lang="ts">
import type { BulkActionDef } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<{
  actions: BulkActionDef[]
  selectedIds: (string | number)[]
}>()

const emit = defineEmits<{
  'action-complete': []
  'clear-selection': []
}>()

const { t } = useI18n()
const { success, error } = useNotify()
const { can } = usePermissions()

const visibleActions = computed(() =>
  props.actions.filter(a => !a.permission || can(a.permission))
)

const { pendingAction, confirmModal, runHandler } = useActionHandler()
const confirmAction = ref<BulkActionDef | null>(null)

function getConfirmMessage(action: BulkActionDef): string {
  if (typeof action.confirm === 'function') {
    return action.confirm(props.selectedIds.length)
  }
  return action.confirm ?? t('motor-core.grid.are_you_sure')
}

async function executeAction(action: BulkActionDef): Promise<void> {
  // Check if confirmation is needed
  if (action.confirm) {
    confirmAction.value = action
    confirmModal.value = true
    return
  }

  await handleAction(action)
}

async function handleAction(action: BulkActionDef): Promise<void> {
  await runHandler(
    action.key,
    () => action.handler(props.selectedIds),
    {
      onSuccess: () => {
        success(t('motor-core.grid.action_completed', { label: action.label }), t('motor-core.grid.items_affected', { count: props.selectedIds.length }))
        emit('action-complete')
        emit('clear-selection')
      },
      onError: (err) => {
        error(t('motor-core.grid.action_failed', { label: action.label }), err.message)
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
  <div
    v-if="selectedIds.length > 0 && visibleActions.length > 0"
    class="flex items-center gap-3 p-3 rounded-lg bg-[var(--ui-bg-elevated)]"
  >
    <span class="text-sm font-medium">
      {{ t('motor-core.grid.selected', { count: selectedIds.length }) }}
    </span>

    <div class="flex items-center gap-2">
      <UButton
        v-for="action in visibleActions"
        :key="action.key"
        :color="action.color ?? 'neutral'"
        :icon="action.icon"
        :loading="pendingAction === action.key"
        :disabled="pendingAction !== null && pendingAction !== action.key"
        size="sm"
        variant="soft"
        @click="executeAction(action)"
      >
        {{ action.label }}
      </UButton>
    </div>

    <UButton
      color="neutral"
      variant="ghost"
      size="sm"
      icon="i-lucide-x"
      @click="emit('clear-selection')"
    >
      {{ t('motor-core.grid.clear') }}
    </UButton>

    <GridConfirmActionModal
      v-model:open="confirmModal"
      :message="confirmAction ? getConfirmMessage(confirmAction) : ''"
      :color="confirmAction?.color"
      :loading="pendingAction !== null"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </div>
</template>
