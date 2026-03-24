<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()
</script>

<template>
  <USelectMenu
    :model-value="(props.modelValue as (string | number)[]) ?? []"
    :items="props.options ?? []"
    value-key="value"
    label-key="label"
    multiple
    :placeholder="props.field.placeholder ?? props.field.label"
    :disabled="props.disabled"
    :loading="props.optionsLoading"
    :class="props.field.class"
    class="w-full"
    v-bind="props.field.inputProps"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
