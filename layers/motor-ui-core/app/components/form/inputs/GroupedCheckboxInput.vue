<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'
import { usePermissionLabels } from '../../../composables/usePermissionLabels'
import { buildPermissionGroups, PERMISSION_ACTION_ORDER, type PermissionActionOption, type PermissionGroup } from '../../../utils/permission-groups'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()

const { t, te } = useI18n({ useScope: 'global' })
const { translateGroup, translateAction } = usePermissionLabels()

const separator = (props.field.inputProps?.separator as string) ?? '.'
const presetsEndpoint = props.field.inputProps?.presetsEndpoint as string | undefined

const searchQuery = ref('')

const selected = computed({
  get: () => (props.modelValue as (string | number)[]) ?? [],
  set: val => emit('update:modelValue', val)
})

interface PresetGroup {
  id: number
  name: string
  permissionIds: (string | number)[]
}

const presetGroups = ref<PresetGroup[]>([])

if (presetsEndpoint) {
  const client = useSanctumClient()
  const { data } = useLazyAsyncData(`grouped-checkbox-presets-${presetsEndpoint}`, () =>
    client<{ data: Array<{ id: number, name: string, permissions?: Array<{ id: number, name: string }> }> }>(presetsEndpoint)
  )

  watchEffect(() => {
    if (data.value?.data) {
      presetGroups.value = data.value.data
        .filter(g => g.permissions && g.permissions.length > 0)
        .map(g => ({
          id: g.id,
          name: g.name,
          permissionIds: g.permissions!.map(p => p.id),
        }))
    }
  })
}

function applyPreset(preset: PresetGroup) {
  const current = new Set(selected.value)
  for (const id of preset.permissionIds) {
    current.add(id)
  }
  selected.value = Array.from(current)
}

type OptionGroup = PermissionGroup

function groupDescription(key: string): string | null {
  const i18nKey = `motor-core.global.perm_desc_${key}`
  return te(i18nKey) ? t(i18nKey) : null
}

const groups = computed<OptionGroup[]>(() =>
  buildPermissionGroups(props.options ?? [], separator, translateGroup, translateAction)
)

/** Standard actions get fixed columns (legend order); others follow after. */
function standardCell(group: OptionGroup, action: string): PermissionActionOption | undefined {
  return group.options.find(o => o.action === action)
}

function extraOptions(group: OptionGroup): PermissionActionOption[] {
  return group.options.filter(o => !(PERMISSION_ACTION_ORDER as readonly string[]).includes(o.action))
}

const filteredGroups = computed(() => {
  if (!searchQuery.value) return groups.value
  const q = searchQuery.value.toLowerCase()
  return groups.value.filter(g =>
    g.key.toLowerCase().includes(q) || g.label.toLowerCase().includes(q)
  )
})

function isSelected(value: string | number): boolean {
  return selected.value.includes(value)
}

function isOptionSelected(option: PermissionActionOption): boolean {
  return option.values.every(v => isSelected(v))
}

function toggleOption(option: PermissionActionOption) {
  const current = selected.value
  if (isOptionSelected(option)) {
    const values = new Set(option.values)
    selected.value = current.filter(v => !values.has(v))
  } else {
    selected.value = [...current, ...option.values.filter(v => !current.includes(v))]
  }
}

function groupValues(group: OptionGroup): (string | number)[] {
  return group.options.flatMap(o => o.values)
}

function isGroupFullySelected(group: OptionGroup): boolean {
  return groupValues(group).every(v => isSelected(v))
}

function isGroupPartiallySelected(group: OptionGroup): boolean {
  const values = groupValues(group)
  return values.some(v => isSelected(v)) && !values.every(v => isSelected(v))
}

function toggleGroup(group: OptionGroup) {
  const current = selected.value
  const values = groupValues(group)
  if (isGroupFullySelected(group)) {
    const set = new Set(values)
    selected.value = current.filter(v => !set.has(v))
  } else {
    selected.value = [...current, ...values.filter(v => !current.includes(v))]
  }
}

function selectAll() {
  selected.value = (props.options ?? []).map(o => o.value)
}

function deselectAll() {
  selected.value = []
}

const totalCount = computed(() => props.options?.length ?? 0)
const selectedCount = computed(() => selected.value.length)
</script>

<template>
  <div class="space-y-3">
    <!-- Toolbar -->
    <div class="flex items-center gap-3 flex-wrap">
      <UInput
        v-model="searchQuery"
        :placeholder="t('motor-core.global.filter_placeholder')"
        icon="i-lucide-search"
        size="sm"
        class="w-48"
      />
      <UDropdownMenu
        v-if="presetGroups.length > 0"
        :items="presetGroups.map(g => ({ label: g.name, onSelect: () => applyPreset(g) }))"
        :ui="{ content: 'max-h-64 overflow-y-auto' }"
      >
        <UButton
          size="sm"
          variant="soft"
          color="primary"
          icon="i-lucide-layers"
          :label="t('motor-core.global.apply_preset')"
          trailing-icon="i-lucide-chevron-down"
        />
      </UDropdownMenu>
      <span class="text-xs text-[var(--ui-text-muted)] tabular-nums whitespace-nowrap">
        {{ t('motor-core.global.selected_count', { selected: selectedCount, total: totalCount }) }}
      </span>
      <div class="flex items-center gap-1 ml-auto">
        <UButton
          size="xs"
          variant="ghost"
          color="neutral"
          :label="t('motor-core.global.select_all')"
          @click="selectAll"
        />
        <UButton
          size="xs"
          variant="ghost"
          color="neutral"
          :label="t('motor-core.global.select_none')"
          @click="deselectAll"
        />
      </div>
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ui-text-muted)]">
      <span class="font-medium">{{ t('motor-core.global.perm_legend_title') }}:</span>
      <span><strong>{{ t('motor-core.global.read') }}</strong> — {{ t('motor-core.global.perm_legend_read') }}</span>
      <span><strong>{{ t('motor-core.global.write') }}</strong> — {{ t('motor-core.global.perm_legend_write') }}</span>
      <span><strong>{{ t('motor-core.global.delete') }}</strong> — {{ t('motor-core.global.perm_legend_delete') }}</span>
      <span><strong>{{ t('motor-core.global.publish') }}</strong> — {{ t('motor-core.global.perm_legend_publish') }}</span>
    </div>

    <!-- Scrollable rows -->
    <div class="border border-[var(--ui-border)] rounded-[var(--ui-radius)] divide-y divide-[var(--ui-border)] max-h-96 overflow-y-auto">
      <div
        v-for="group in filteredGroups"
        :key="group.key"
        class="flex items-center gap-4 px-3 py-2"
      >
        <!-- Group toggle + label (fixed width, wraps instead of truncating) -->
        <label class="flex items-center gap-2 cursor-pointer select-none shrink-0 w-56">
          <UCheckbox
            :model-value="isGroupFullySelected(group)"
            :indeterminate="isGroupPartiallySelected(group)"
            :disabled="disabled"
            @update:model-value="toggleGroup(group)"
          />
          <span class="text-sm font-medium break-words min-w-0">{{ group.label }}</span>
          <UTooltip
            v-if="groupDescription(group.key)"
            :text="groupDescription(group.key)!"
          >
            <UIcon name="i-lucide-info" class="size-3.5 text-[var(--ui-text-muted)] shrink-0" />
          </UTooltip>
        </label>

        <!-- Fixed columns read / write / delete / publish (same order as the legend) -->
        <div class="grid grid-cols-4 gap-x-5 gap-y-1 w-[30rem] shrink-0">
          <template
            v-for="action in PERMISSION_ACTION_ORDER"
            :key="action"
          >
            <label
              v-if="standardCell(group, action)"
              class="flex items-center gap-1.5 cursor-pointer"
            >
              <UCheckbox
                :model-value="isOptionSelected(standardCell(group, action)!)"
                :disabled="disabled"
                @update:model-value="toggleOption(standardCell(group, action)!)"
              />
              <span class="text-sm">{{ standardCell(group, action)!.actionLabel }}</span>
            </label>
            <span
              v-else
              aria-hidden="true"
            />
          </template>
        </div>

        <!-- Non-standard actions -->
        <div
          v-if="extraOptions(group).length"
          class="flex flex-wrap items-center gap-x-5 gap-y-1 flex-1"
        >
          <label
            v-for="option in extraOptions(group)"
            :key="option.action"
            class="flex items-center gap-1.5 cursor-pointer"
          >
            <UCheckbox
              :model-value="isOptionSelected(option)"
              :disabled="disabled"
              @update:model-value="toggleOption(option)"
            />
            <span class="text-sm">{{ option.actionLabel }}</span>
          </label>
        </div>
      </div>
    </div>

    <p
      v-if="!options?.length"
      class="text-sm text-[var(--ui-text-muted)]"
    >
      –
    </p>
  </div>
</template>
