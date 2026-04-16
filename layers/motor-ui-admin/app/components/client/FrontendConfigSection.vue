<!-- app/components/client/FrontendConfigSection.vue -->
<script setup lang="ts">
import type { FormFieldConfig, FormGroupConfig } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<{
  state: Record<string, unknown>
  fields: FormFieldConfig[]
  groups: FormGroupConfig[]
  errors: Record<string, string>
  disabled?: boolean
  colorSchemeOptions: { label: string, value: string }[]
  logoSlugOptions: { label: string, value: string }[]
}>()

// ============================================
// Dot-path helpers
// ============================================

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (current != null && typeof current === 'object') {
      return (current as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

function setNestedValue(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split('.')
  let current: Record<string, unknown> = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]!
    if (current[key] == null || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  }
  const lastKey = keys[keys.length - 1]!
  current[lastKey] = value
}

// ============================================
// Grouped field helpers
// ============================================

function fieldsForGroup(groupKey: string): FormFieldConfig[] {
  return props.fields.filter(f => f.group === groupKey)
}

// ============================================
// Options resolver
// ============================================

function optionsForField(fieldKey: string): { label: string, value: string }[] {
  if (fieldKey === 'colorScheme') return props.colorSchemeOptions
  if (fieldKey === 'logoSlug') return props.logoSlugOptions
  return []
}
</script>

<template>
  <template
    v-for="group in groups"
    :key="group.key"
  >
    <UPageCard :title="group.label">
      <div class="space-y-4">
        <template
          v-for="field in fieldsForGroup(group.key)"
          :key="field.key"
        >
          <UFormField
            :label="field.label"
            :name="field.key"
            :required="field.required"
            :error="errors[field.key]"
            orientation="horizontal"
            :ui="{ container: 'w-full max-w-2xl' }"
          >
            <!-- Toggle -->
            <USwitch
              v-if="field.input === 'toggle'"
              :model-value="(getNestedValue(state, field.key) as boolean) ?? false"
              :disabled="disabled"
              @update:model-value="setNestedValue(state, field.key, $event)"
            />

            <!-- Select -->
            <USelectMenu
              v-else-if="field.input === 'select'"
              :model-value="(getNestedValue(state, field.key) as string | undefined)"
              :items="optionsForField(field.key)"
              value-key="value"
              label-key="label"
              :placeholder="field.label"
              :disabled="disabled"
              class="w-full"
              @update:model-value="setNestedValue(state, field.key, $event)"
            />

            <!-- Text / Email / URL -->
            <UInput
              v-else
              :model-value="(getNestedValue(state, field.key) as string) ?? ''"
              :type="field.input === 'email' ? 'email' : field.input === 'url' ? 'url' : 'text'"
              :disabled="disabled"
              class="w-full"
              @update:model-value="setNestedValue(state, field.key, $event)"
            />
          </UFormField>
        </template>
      </div>
    </UPageCard>
  </template>
</template>
