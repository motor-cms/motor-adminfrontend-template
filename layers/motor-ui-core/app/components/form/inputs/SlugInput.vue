<!-- app/components/form/inputs/SlugInput.vue -->
<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()

const { t } = useI18n()
const state = inject<Record<string, unknown>>('formState', reactive({}))
const { slugTouched } = useSlugField(state, {
  sourceKey: (props.field.inputProps as Record<string, string>)?.sourceKey ?? 'name',
  targetKey: props.field.key
})

function onInput(value: string) {
  slugTouched.value = true
  emit('update:modelValue', value)
}
</script>

<template>
  <UInput
    :model-value="(props.modelValue as string) ?? ''"
    :placeholder="props.field.placeholder ?? t('motor-core.global.slug_auto_generated')"
    :disabled="props.disabled"
    class="w-full"
    @update:model-value="onInput"
  />
</template>
