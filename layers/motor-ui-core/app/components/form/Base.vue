<!-- app/components/form/Base.vue -->
<script setup lang="ts">
import type { Component } from 'vue'
import type { FormSubmitEvent, FormErrorEvent, DropdownMenuItem } from '@nuxt/ui'
import type { ZodObject, ZodTypeAny, ZodType } from 'zod'
import type { FormFieldConfig, FormGroupConfig, SelectOption } from '@motor-cms/ui-core/app/types/form'
import { useEventListener } from '@vueuse/core'
import { builtInInputs } from './inputs'

const props = withDefaults(defineProps<{
  fields: FormFieldConfig[]
  schema: ZodObject<Record<string, ZodTypeAny>> | ZodType
  groups?: FormGroupConfig[]
  selectOptions?: Record<string, SelectOption[]>
  selectOptionsLoading?: Record<string, boolean>
  loading?: boolean
  cancelRoute?: string
  disabled?: boolean
  dirtyGuard?: boolean
  /** Delete handler (only shown in edit mode) */
  deleteRecord?: () => Promise<void>
  /** Permission required to delete (e.g. 'users.delete'). If set, hides button when user lacks permission. */
  deletePermission?: string
  /** Whether a delete operation is in progress */
  deleting?: boolean
  /** Show "Save and Continue Editing" button (edit mode only) */
  showSaveAndContinue?: boolean
  /** Show "Save and Create New" button */
  showSaveAndNew?: boolean
}>(), {
  groups: undefined,
  selectOptions: undefined,
  selectOptionsLoading: undefined,
  cancelRoute: undefined,
  dirtyGuard: true,
  deleteRecord: undefined,
  deletePermission: undefined,
  deleting: false
})

const state = defineModel<Record<string, unknown>>('state', { required: true })

// Provide form state to child input components (e.g. SlugInput needs to watch source field)
// state is a Ref<Record> from defineModel — provide the inner value for reactive access
provide('formState', state.value)

const emit = defineEmits<{
  submit: [event: FormSubmitEvent<Record<string, unknown>>]
  saveAndContinue: [event: FormSubmitEvent<Record<string, unknown>>]
  saveAndNew: [event: FormSubmitEvent<Record<string, unknown>>]
}>()

const { t } = useI18n()
const router = useRouter()
const { warning } = useNotify()
const { can } = usePermissions()

const canDelete = computed(() =>
  !!props.deleteRecord && (!props.deletePermission || can(props.deletePermission))
)

// Dirty guard: track unsaved changes and confirm navigation
const { isDirty, showLeaveModal, captureSnapshot, confirmLeave, cancelLeave, markSubmitted } = useFormDirtyGuard(state)

// Submit action: which button triggered the submit
const submitAction = ref<'save' | 'saveAndContinue' | 'saveAndNew'>('save')

// Delete confirmation
const showDeleteModal = ref(false)

function onDeleteConfirm() {
  showDeleteModal.value = false
  markSubmitted()
  props.deleteRecord?.()
}

onMounted(() => {
  if (props.dirtyGuard) {
    captureSnapshot()
  }
})

// UForm template ref for programmatic error setting
const uFormRef = ref<{ $el: HTMLFormElement, setErrors: (errors: Array<{ path: string, message: string }>) => void } | null>(null)

function setErrors(errors: Array<{ path: string, message: string }>) {
  uFormRef.value?.setErrors(errors)
}

defineExpose({ captureSnapshot, isDirty, setErrors })

// Cmd+S / Ctrl+S to save, Cmd+Shift+S / Ctrl+Shift+S to save and create new
useEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 's') {
    e.preventDefault()
    if (props.disabled) {
      warning(t('motor-core.global.no_permission'), t('motor-core.global.no_permission_edit'))
      return
    }
    if (props.loading || props.deleting) return
    if (e.shiftKey && props.showSaveAndNew) {
      submitAction.value = 'saveAndNew'
    }
    uFormRef.value?.$el.requestSubmit()
  }
})

// Register contextual shortcuts for the overlay (skip when form is read-only)
const { register: registerShortcut, unregister: unregisterShortcut } = useShortcutRegistry()
const formShortcuts = computed(() => {
  if (props.disabled) return []
  const entries = [
    { keys: ['meta', 'S'], label: t('motor-core.shortcuts.save'), icon: 'i-lucide-save' }
  ]
  if (props.showSaveAndNew) {
    entries.push({ keys: ['meta', 'shift', 'S'], label: t('motor-core.shortcuts.save_and_new'), icon: 'i-lucide-plus' })
  }
  return entries
})

watchEffect(() => {
  if (formShortcuts.value.length > 0) {
    registerShortcut({
      id: 'form',
      label: t('motor-core.shortcuts.form'),
      icon: 'i-lucide-file-pen-line',
      shortcuts: formShortcuts.value
    })
  } else {
    unregisterShortcut('form')
  }
})
onUnmounted(() => unregisterShortcut('form'))

// Input registry: merge built-ins with custom registrations
const { getAll: getAllCustomInputs } = useFormInputs()

const inputRegistry = computed(() => {
  const registry = new Map<string, Component>(
    Object.entries(builtInInputs) as [string, Component][]
  )
  const custom = getAllCustomInputs()
  custom.forEach((component, name) => {
    registry.set(name, component)
  })
  return registry
})

// Group fields by group key (exclude hidden fields)
const groupedFields = computed(() => {
  const visibleFields = props.fields.filter(f => !f.hidden)
  if (!props.groups || props.groups.length === 0) {
    return [{ group: undefined as FormGroupConfig | undefined, fields: visibleFields }]
  }

  const groups: Array<{ group: FormGroupConfig | undefined, fields: FormFieldConfig[] }> = []
  const ungrouped: FormFieldConfig[] = []

  // Build a map of group key -> fields in order
  const groupFieldsMap = new Map<string, FormFieldConfig[]>()
  for (const group of props.groups) {
    groupFieldsMap.set(group.key, [])
  }

  const fieldByKey = new Map(visibleFields.map(f => [f.key, f]))

  for (const field of visibleFields) {
    if (field.group && groupFieldsMap.has(field.group)) {
      groupFieldsMap.get(field.group)!.push(field)
    } else {
      ungrouped.push(field)
    }
  }

  for (const group of props.groups) {
    // Use fieldOrder for display order when available, otherwise fall back to fields array order
    let groupFields: FormFieldConfig[]
    if (group.fieldOrder) {
      groupFields = group.fieldOrder
        .map(key => fieldByKey.get(key))
        .filter((f): f is FormFieldConfig => !!f && !f.hidden && f.group === group.key)
    } else {
      groupFields = groupFieldsMap.get(group.key)!
    }
    if (groupFields.length > 0) {
      groups.push({ group, fields: groupFields })
    }
  }

  if (ungrouped.length > 0) {
    groups.push({ group: undefined, fields: ungrouped })
  }

  return groups
})

function updateField(key: string, value: unknown) {
  state.value[key] = value
}

function resolveInput(inputType: string): Component | undefined {
  return inputRegistry.value.get(inputType)
}

// Validation error handling: scroll to first error + show toast
function onError(event: FormErrorEvent) {
  const errors = event.errors
  if (!errors || errors.length === 0) return

  let message: string
  if (errors.length === 1) {
    message = errors[0]!.message
  } else {
    const fieldNames = errors.slice(0, 3).map((e) => {
      const field = props.fields.find(f => f.key === e.name)
      return field?.label ?? e.name
    })
    const extra = errors.length > 3 ? ` +${errors.length - 3}` : ''
    message = fieldNames.join(', ') + extra
  }
  warning(t('motor-core.global.validation_failed'), message)

  // Scroll to first error field
  const firstError = errors[0]
  if (firstError?.id) {
    const element = document.getElementById(firstError.id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

// Form layout setting
const appSettings = useAppSettingsStore()
const isCompact = computed(() => appSettings.formLayout === 'compact')

// UFormField ui override
const formFieldUi = computed(() => isCompact.value
  ? { container: 'w-full' }
  : { container: 'w-full max-w-2xl' }
)

const spanClass: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12'
}

function fieldSpanClass(field: FormFieldConfig, group?: FormGroupConfig): string {
  const span = field.span ?? group?.defaultSpan ?? 12
  return spanClass[span] ?? 'col-span-12'
}

const hasSaveMenu = computed(() => props.showSaveAndContinue || props.showSaveAndNew)

const saveMenuItems = computed<DropdownMenuItem[]>(() => {
  const items: DropdownMenuItem[] = []
  if (props.showSaveAndContinue) {
    items.push({
      label: t('motor-core.global.save_and_continue'),
      icon: 'i-lucide-save',
      onSelect(e: Event) {
        e.preventDefault()
        submitAction.value = 'saveAndContinue'
        nextTick(() => uFormRef.value?.$el.requestSubmit())
      }
    })
  }
  if (props.showSaveAndNew) {
    items.push({
      label: t('motor-core.global.save_and_new'),
      icon: 'i-lucide-plus',
      onSelect(e: Event) {
        e.preventDefault()
        submitAction.value = 'saveAndNew'
        nextTick(() => uFormRef.value?.$el.requestSubmit())
      }
    })
  }
  return items
})
</script>

<template>
  <UForm
    ref="uFormRef"
    :schema="schema"
    :state="state"
    class="flex-1 flex flex-col"
    @submit="markSubmitted(); submitAction === 'saveAndContinue' ? emit('saveAndContinue', $event) : submitAction === 'saveAndNew' ? emit('saveAndNew', $event) : emit('submit', $event); submitAction = 'save'"
    @error="onError"
  >
    <div :class="isCompact ? 'grid grid-cols-2 gap-4 pb-4' : 'flex flex-col gap-4 pb-4'">
    <template
      v-for="({ group, fields: groupFields }, groupIdx) in groupedFields"
      :key="group?.key ?? '_ungrouped'"
    >
      <UPageCard
        v-if="group"
        :class="isCompact && groupedFields.length % 2 === 1 && groupIdx === groupedFields.length - 1 ? 'col-span-2' : ''"
        :title="group.label"
        :description="group.description"
        :ui="isCompact ? { root: 'relative flex rounded-lg items-start', container: 'relative flex flex-col p-4 sm:p-6 gap-x-8 gap-y-4', wrapper: 'flex flex-col items-start', body: '' } : undefined"
      >
        <div :class="isCompact ? 'grid grid-cols-12 gap-x-4 gap-y-3' : 'space-y-4'">
          <template
            v-for="field in groupFields"
            :key="field.key"
          >
            <!-- Slot escape hatch: #field-{key} -->
            <div :class="isCompact ? fieldSpanClass(field, group) : ''">
              <slot
                :name="`field-${field.key}`"
                :field="field"
                :value="state[field.key]"
                :update="(v: unknown) => updateField(field.key, v)"
              >
                <UFormField
                  :name="field.key"
                  :label="field.label"
                  :required="field.required"
                  :description="field.description"
                  :orientation="isCompact ? (group?.orientation ?? 'vertical') : (group?.orientation ?? 'horizontal')"
                  :ui="formFieldUi"
                >
                  <template
                    v-if="field.help"
                    #label
                  >
                    {{ field.label }}
                    <span
                      v-if="field.required"
                      class="text-[var(--ui-error)]"
                    >*</span>
                    <FormHelpTooltip :text="field.help" />
                  </template>
                  <component
                    :is="resolveInput(field.input)"
                    v-if="resolveInput(field.input)"
                    :field="field"
                    :model-value="state[field.key]"
                    :options="selectOptions?.[field.key] ?? field.staticOptions"
                    :options-loading="selectOptionsLoading?.[field.key]"
                    :disabled="disabled"
                    @update:model-value="updateField(field.key, $event)"
                  />
                </UFormField>
              </slot>
            </div>
          </template>
        </div>
      </UPageCard>

      <!-- Ungrouped fields (no card wrapper) -->
      <div
        v-else
        :class="isCompact ? 'grid grid-cols-12 gap-x-4 gap-y-3' : 'space-y-4'"
      >
        <template
          v-for="field in groupFields"
          :key="field.key"
        >
          <div :class="isCompact ? fieldSpanClass(field) : ''">
            <slot
              :name="`field-${field.key}`"
              :field="field"
              :value="state[field.key]"
              :update="(v: unknown) => updateField(field.key, v)"
            >
              <UFormField
                :name="field.key"
                :label="field.label"
                :required="field.required"
                :description="field.description"
                :orientation="isCompact ? 'vertical' : 'horizontal'"
                :ui="formFieldUi"
              >
                <template
                  v-if="field.help"
                  #label
                >
                  {{ field.label }}
                  <span
                    v-if="field.required"
                    class="text-[var(--ui-error)]"
                  >*</span>
                  <FormHelpTooltip :text="field.help" />
                </template>
                <component
                  :is="resolveInput(field.input)"
                  v-if="resolveInput(field.input)"
                  :field="field"
                  :model-value="state[field.key]"
                  :options="selectOptions?.[field.key]"
                  :disabled="disabled"
                  @update:model-value="updateField(field.key, $event)"
                />
              </UFormField>
            </slot>
          </div>
        </template>
      </div>
    </template>
    </div>

    <!-- Extra fields not in form-meta (e.g. API intersection types) -->
    <div class="flex flex-col gap-4 pb-4">
      <slot name="after-fields" />
    </div>

    <!-- Spacer pushes actions to bottom when form content is short -->
    <div class="flex-1" />

    <!-- Actions (sticky bottom bar) -->
    <div class="sticky bottom-0 z-10 -mx-6 px-6 py-4 backdrop-blur-sm bg-[var(--ui-bg)]/80 border-t border-[var(--ui-border)]">
      <slot name="actions">
        <div v-if="disabled" class="flex items-center gap-2">
          <div class="flex items-center gap-2 text-sm text-[var(--ui-text-muted)]">
            <UIcon name="i-lucide-lock" class="size-4" />
            {{ t('motor-core.global.no_permission_edit') }}
          </div>
          <div class="flex-1" />
          <UButton
            v-if="cancelRoute"
            color="neutral"
            variant="outline"
            icon="i-lucide-arrow-left"
            @click="router.push(cancelRoute)"
          >
            {{ t('motor-core.global.back') }}
          </UButton>
        </div>
        <div v-else class="flex items-center gap-2">
          <UButton
            v-if="canDelete"
            color="error"
            variant="outline"
            icon="i-lucide-trash-2"
            :loading="deleting"
            :disabled="loading"
            @click="showDeleteModal = true"
          >
            {{ t('motor-core.global.delete') }}
          </UButton>
          <div class="flex-1" />
          <UButton
            v-if="cancelRoute"
            color="neutral"
            variant="outline"
            icon="i-lucide-arrow-left"
            :disabled="deleting"
            @click="router.push(cancelRoute)"
          >
            {{ t('motor-core.global.cancel') }}
          </UButton>
          <!-- Split save button: primary save + dropdown for secondary actions -->
          <div
            v-if="hasSaveMenu"
            class="split-button inline-flex"
          >
            <UButton
              type="submit"
              :loading="loading"
              :disabled="deleting"
              icon="i-lucide-save"
              class="rounded-r-none"
            >
              {{ t('motor-core.global.save') }}
            </UButton>
            <UDropdownMenu
              :items="saveMenuItems"
              :content="{ align: 'end', side: 'top' }"
            >
              <UButton
                icon="i-lucide-chevron-up"
                :disabled="deleting || loading"
                class="rounded-l-none -ml-px"
              />
            </UDropdownMenu>
          </div>
          <UButton
            v-else
            type="submit"
            :loading="loading"
            :disabled="deleting"
            icon="i-lucide-save"
          >
            {{ t('motor-core.global.save') }}
          </UButton>
        </div>
      </slot>
    </div>
  </UForm>

  <!-- Dirty guard: unsaved changes confirmation modal -->
  <UModal
    v-if="dirtyGuard"
    v-model:open="showLeaveModal"
    :title="t('motor-core.global.unsaved_changes_title')"
    :description="t('motor-core.global.unsaved_changes_body')"
  >
    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton
          color="neutral"
          variant="outline"
          @click="cancelLeave"
        >
          {{ t('motor-core.global.stay') }}
        </UButton>
        <UButton
          color="error"
          @click="confirmLeave"
        >
          {{ t('motor-core.global.leave') }}
        </UButton>
      </div>
    </template>
  </UModal>

  <!-- Delete confirmation modal -->
  <UModal
    v-if="canDelete"
    v-model:open="showDeleteModal"
  >
    <template #header>
      {{ t('motor-core.global.confirm_delete_title') }}
    </template>
    <template #body>
      <p>{{ t('motor-core.global.confirm_delete_body') }}</p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton
          color="neutral"
          variant="outline"
          @click="showDeleteModal = false"
        >
          {{ t('motor-core.global.cancel') }}
        </UButton>
        <UButton
          color="error"
          icon="i-lucide-trash-2"
          @click="onDeleteConfirm"
        >
          {{ t('motor-core.global.delete') }}
        </UButton>
      </div>
    </template>
  </UModal>
</template>
