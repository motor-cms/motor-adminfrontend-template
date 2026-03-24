<script setup lang="ts">
import type { FormInputProps, FormInputValue } from '@motor-cms/ui-core/app/types/form'

const props = defineProps<FormInputProps>()
const emit = defineEmits<{ 'update:modelValue': [value: FormInputValue] }>()

const { t } = useI18n()
const visible = ref(false)

const value = computed(() => (props.modelValue as string) ?? '')

// Password strength calculation
const strength = computed(() => {
  const pw = value.value
  if (!pw) return { score: 0, label: '', color: '' }

  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++
  if (/\d/.test(pw)) score++
  if (/[^a-zA-Z0-9]/.test(pw)) score++

  if (score <= 2) return { score, label: t('motor-core.global.password_weak'), color: 'bg-red-500' }
  if (score <= 3) return { score, label: t('motor-core.global.password_medium'), color: 'bg-yellow-500' }
  return { score, label: t('motor-core.global.password_strong'), color: 'bg-green-500' }
})
</script>

<template>
  <div class="w-full">
    <UInput
      :model-value="value"
      :type="visible ? 'text' : 'password'"
      :placeholder="props.field.placeholder ?? props.field.label"
      :disabled="props.disabled"
      :class="props.field.class"
      class="w-full"
      v-bind="props.field.inputProps"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #trailing>
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="visible ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :aria-label="visible ? t('motor-core.global.hide_password') : t('motor-core.global.show_password')"
          @click="visible = !visible"
        />
      </template>
    </UInput>
    <div
      v-if="value.length > 0 && !props.field.inputProps?.hideStrength"
      class="mt-2"
    >
      <div class="flex items-center gap-2">
        <div class="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            class="h-full rounded-full transition-all duration-300"
            :class="strength.color"
            :style="{ width: `${(strength.score / 5) * 100}%` }"
          />
        </div>
        <span class="text-xs text-muted whitespace-nowrap">{{ strength.label }}</span>
      </div>
    </div>
  </div>
</template>
