<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  modelValue: File | null
  previewUrl: string | null
  accept?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: File | null]
}>()

const fileInput = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0] || null
  emit('update:modelValue', file)
}

function removeFile() {
  emit('update:modelValue', null)
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="relative">
      <UAvatar
        :src="previewUrl ?? undefined"
        :alt="t('motor-media.files.avatar_alt')"
        size="3xl"
        class="ring-2 ring-default"
      />
      <input
        ref="fileInput"
        type="file"
        :accept="accept ?? 'image/*'"
        class="hidden"
        @change="handleFileChange"
      >
    </div>

    <div class="flex flex-col gap-2">
      <UButton
        color="neutral"
        variant="outline"
        icon="i-lucide-upload"
        @click="triggerFileInput"
      >
        {{ previewUrl ? t('motor-media.files.change') : t('motor-media.files.upload') }}
      </UButton>

      <UButton
        v-if="previewUrl"
        color="error"
        variant="ghost"
        icon="i-lucide-trash-2"
        @click="removeFile"
      >
        {{ t('motor-media.files.remove') }}
      </UButton>
    </div>
  </div>
</template>
