<script setup lang="ts">
import type { FormInputProps } from '@motor-cms/ui-core/app/types/form'

export interface PendingFile {
  file: File
  description: string
  alt_text: string
}

interface Props extends FormInputProps {
  accept?: string
  defaults?: { description: string, alt_text: string }
}

const props = withDefaults(defineProps<Props>(), {
  accept: 'image/*',
  defaults: () => ({ description: '', alt_text: '' })
})

const emit = defineEmits<{
  'update:modelValue': [files: PendingFile[]]
}>()

const { t } = useI18n()

const pendingFiles = ref<PendingFile[]>([])

// Dirty tracking: keyed by index-stable ID per entry
let nextId = 0
const entryIds = ref<number[]>([])
const dirtyFields = new Map<number, Set<string>>()

const previews = computed(() =>
  pendingFiles.value.map((entry, index) => ({
    entry,
    id: entryIds.value[index]!,
    url: URL.createObjectURL(entry.file),
    sizeHuman: formatFileSize(entry.file.size)
  }))
)

function addFiles(newFiles: FileList | File[]) {
  const fileArray = Array.from(newFiles)
  const desc = props.defaults?.description ?? ''
  const alt = props.defaults?.alt_text ?? ''
  for (const file of fileArray) {
    const id = nextId++
    entryIds.value.push(id)
    pendingFiles.value.push({
      file,
      description: desc,
      alt_text: alt
    })
  }
  pendingFiles.value = [...pendingFiles.value]
  entryIds.value = [...entryIds.value]
  emit('update:modelValue', pendingFiles.value)
}

function removeFile(index: number) {
  URL.revokeObjectURL(previews.value[index]!.url)
  const removedId = entryIds.value[index]!
  dirtyFields.delete(removedId)
  pendingFiles.value.splice(index, 1)
  entryIds.value.splice(index, 1)
  pendingFiles.value = [...pendingFiles.value]
  entryIds.value = [...entryIds.value]
  emit('update:modelValue', pendingFiles.value)
}

function updateField(index: number, field: 'description' | 'alt_text', value: string) {
  const id = entryIds.value[index]!
  if (!dirtyFields.has(id)) {
    dirtyFields.set(id, new Set())
  }
  dirtyFields.get(id)!.add(field)
  pendingFiles.value[index]![field] = value
  pendingFiles.value = [...pendingFiles.value]
  emit('update:modelValue', pendingFiles.value)
}

// Propagate defaults to non-dirty entries
watch(
  [() => props.defaults?.description, () => props.defaults?.alt_text],
  ([newDesc, newAlt]) => {
    if (pendingFiles.value.length === 0) return
    let changed = false
    for (let i = 0; i < pendingFiles.value.length; i++) {
      const id = entryIds.value[i]!
      const dirty = dirtyFields.get(id)
      if (!dirty?.has('description') && pendingFiles.value[i]!.description !== (newDesc ?? '')) {
        pendingFiles.value[i]!.description = newDesc ?? ''
        changed = true
      }
      if (!dirty?.has('alt_text') && pendingFiles.value[i]!.alt_text !== (newAlt ?? '')) {
        pendingFiles.value[i]!.alt_text = newAlt ?? ''
        changed = true
      }
    }
    if (changed) {
      pendingFiles.value = [...pendingFiles.value]
      emit('update:modelValue', pendingFiles.value)
    }
  }
)

onBeforeUnmount(() => {
  previews.value.forEach(p => URL.revokeObjectURL(p.url))
})
</script>

<template>
  <div class="space-y-4">
    <!-- Drop zone -->
    <FormInputsFileDropzone
      multiple
      :accept="accept"
      @files="addFiles"
    />

    <!-- Pending files list -->
    <div
      v-if="pendingFiles.length > 0"
      class="space-y-2"
    >
      <p class="text-sm font-medium">
        {{ t('motor-media.files.pending_files') }} ({{ pendingFiles.length }})
      </p>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          v-for="(preview, index) in previews"
          :key="preview.id"
          class="rounded-lg border p-3 space-y-3"
        >
          <div class="flex items-center gap-3">
            <img
              v-if="preview.entry.file.type.startsWith('image/')"
              :src="preview.url"
              :alt="preview.entry.file.name"
              class="size-12 rounded object-cover shrink-0"
            >
            <UIcon
              v-else
              name="i-lucide-file"
              class="size-12 text-muted shrink-0"
            />
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium">
                {{ preview.entry.file.name }}
              </p>
              <p class="text-xs text-muted">
                {{ preview.entry.file.type || t('motor-core.global.unknown') }} &middot; {{ preview.sizeHuman }}
              </p>
            </div>
            <UButton
              icon="i-lucide-x"
              variant="ghost"
              size="xs"
              color="error"
              @click="removeFile(index)"
            />
          </div>
          <UFormField :label="t('motor-media.files.description')">
            <UInput
              :model-value="preview.entry.description"
              size="sm"
              class="w-full"
              @update:model-value="updateField(index, 'description', $event as string)"
            />
          </UFormField>
          <UFormField :label="t('motor-media.files.alt_text')">
            <UInput
              :model-value="preview.entry.alt_text"
              size="sm"
              class="w-full"
              @update:model-value="updateField(index, 'alt_text', $event as string)"
            />
          </UFormField>
        </div>
      </div>
    </div>
    <p
      v-else
      class="text-sm text-muted"
    >
      {{ t('motor-media.files.no_files_selected') }}
    </p>
  </div>
</template>
