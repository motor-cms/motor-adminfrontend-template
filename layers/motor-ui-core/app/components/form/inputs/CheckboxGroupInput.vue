<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()

const selected = computed({
  get: () => (props.modelValue as (string | number)[]) ?? [],
  set: val => emit('update:modelValue', val)
})

function toggle(value: string | number) {
  const current = selected.value
  if (current.includes(value)) {
    selected.value = current.filter(v => v !== value)
  } else {
    selected.value = [...current, value]
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
    <label
      v-for="option in (props.options ?? [])"
      :key="option.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <UCheckbox
        :model-value="selected.includes(option.value)"
        :disabled="props.disabled"
        @update:model-value="toggle(option.value)"
      />
      <span class="text-sm">{{ option.label }}</span>
    </label>
    <p
      v-if="!props.options?.length"
      class="text-sm text-muted"
    >
      –
    </p>
  </div>
</template>
