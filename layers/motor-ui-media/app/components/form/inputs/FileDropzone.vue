<script setup lang="ts">
// Shared drag-and-drop file zone used by both the create page (multiple files)
// and the edit page's "replace file" control (single file). Presentational +
// drag/picker handling only — it emits the selected File[] and lets the
// consumer own preview/list rendering.
const props = withDefaults(defineProps<{
  accept?: string
  multiple?: boolean
  /** Main hint text. Defaults to the generic "drop files here" string. */
  label?: string
  disabled?: boolean
}>(), {
  accept: '*/*',
  multiple: false,
  disabled: false
})

const emit = defineEmits<{
  files: [files: File[]]
}>()

const { t } = useI18n()

const isDragging = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

function emitFiles(fileList: FileList | File[]) {
  const files = Array.from(fileList)
  if (files.length > 0) emit('files', files)
}

function onDrop(event: DragEvent) {
  isDragging.value = false
  if (props.disabled) return
  if (event.dataTransfer?.files) emitFiles(event.dataTransfer.files)
}

function onDragOver() {
  if (props.disabled) return
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function openFilePicker() {
  if (props.disabled) return
  fileInputRef.value?.click()
}

function onFileInputChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) {
    emitFiles(input.files)
    input.value = ''
  }
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 transition-colors"
    :class="[
      isDragging ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50',
      disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
    ]"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragOver"
    @dragleave="onDragLeave"
    @click="openFilePicker"
  >
    <UIcon
      name="i-lucide-upload-cloud"
      class="size-10 text-muted"
    />
    <p class="text-sm text-muted">
      {{ label ?? t('motor-media.files.drop_files') }}
    </p>
    <UButton
      variant="outline"
      size="sm"
      icon="i-lucide-folder-open"
      :disabled="disabled"
      @click.stop="openFilePicker"
    >
      {{ t('motor-media.files.browse') }}
    </UButton>
    <input
      ref="fileInputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      class="hidden"
      @change="onFileInputChange"
    >
  </div>
</template>
