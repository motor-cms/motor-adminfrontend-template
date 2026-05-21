<script setup lang="ts">
import type { FormInputProps, FormInputValue, SelectOption } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()

const { t, te } = useI18n({ useScope: 'global' })

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

interface OptionGroup {
  key: string
  label: string
  options: (SelectOption & { action: string, actionLabel: string })[]
}

function translateGroup(key: string): string {
  const i18nKey = `motor-core.global.perm_group_${key}`
  if (te(i18nKey)) return t(i18nKey)
  return key.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function groupDescription(key: string): string | null {
  const i18nKey = `motor-core.global.perm_desc_${key}`
  return te(i18nKey) ? t(i18nKey) : null
}

function translateAction(action: string): string {
  const i18nKey = `motor-core.global.${action}`
  if (te(i18nKey)) return t(i18nKey)
  return action.charAt(0).toUpperCase() + action.slice(1)
}

const groups = computed<OptionGroup[]>(() => {
  const map = new Map<string, (SelectOption & { action: string, actionLabel: string })[]>()

  for (const opt of (props.options ?? [])) {
    const sepIdx = opt.label.lastIndexOf(separator)
    const groupKey = sepIdx > -1 ? opt.label.substring(0, sepIdx) : ''
    const action = sepIdx > -1 ? opt.label.substring(sepIdx + 1) : opt.label

    if (!map.has(groupKey)) {
      map.set(groupKey, [])
    }
    map.get(groupKey)!.push({ ...opt, action, actionLabel: translateAction(action) })
  }

  return Array.from(map.entries()).map(([key, options]) => ({
    key,
    label: translateGroup(key),
    options: options.sort((a, b) => a.action.localeCompare(b.action))
  }))
})

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

function toggle(value: string | number) {
  const current = selected.value
  if (current.includes(value)) {
    selected.value = current.filter(v => v !== value)
  } else {
    selected.value = [...current, value]
  }
}

function isGroupFullySelected(group: OptionGroup): boolean {
  return group.options.every(o => isSelected(o.value))
}

function isGroupPartiallySelected(group: OptionGroup): boolean {
  const some = group.options.some(o => isSelected(o.value))
  const all = group.options.every(o => isSelected(o.value))
  return some && !all
}

function toggleGroup(group: OptionGroup) {
  const current = selected.value
  if (isGroupFullySelected(group)) {
    const groupValues = new Set(group.options.map(o => o.value))
    selected.value = current.filter(v => !groupValues.has(v))
  } else {
    const missing = group.options.filter(o => !current.includes(o.value)).map(o => o.value)
    selected.value = [...current, ...missing]
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
        <!-- Group toggle + label (fixed width) -->
        <label class="flex items-center gap-2 cursor-pointer select-none shrink-0 w-48">
          <UCheckbox
            :model-value="isGroupFullySelected(group)"
            :indeterminate="isGroupPartiallySelected(group)"
            :disabled="disabled"
            @update:model-value="toggleGroup(group)"
          />
          <span class="text-sm font-medium truncate">{{ group.label }}</span>
          <UTooltip
            v-if="groupDescription(group.key)"
            :text="groupDescription(group.key)!"
          >
            <UIcon name="i-lucide-info" class="size-3.5 text-[var(--ui-text-muted)] shrink-0" />
          </UTooltip>
        </label>

        <!-- Action checkboxes spread across remaining space -->
        <div class="flex flex-wrap items-center gap-x-5 gap-y-1 flex-1">
          <label
            v-for="option in group.options"
            :key="option.value"
            class="flex items-center gap-1.5 cursor-pointer"
          >
            <UCheckbox
              :model-value="isSelected(option.value)"
              :disabled="disabled"
              @update:model-value="toggle(option.value)"
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
