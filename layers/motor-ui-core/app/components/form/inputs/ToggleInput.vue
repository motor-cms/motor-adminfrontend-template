<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()
</script>

<template>
  <USwitch
    :model-value="(props.modelValue as boolean) ?? false"
    :disabled="props.disabled"
    v-bind="props.field.inputProps"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
