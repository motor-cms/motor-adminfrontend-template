<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()
</script>

<template>
  <UInput
    :model-value="(props.modelValue as string) ?? ''"
    type="email"
    :placeholder="props.field.placeholder ?? props.field.label"
    :disabled="props.disabled"
    :class="props.field.class"
    class="w-full"
    v-bind="props.field.inputProps"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
