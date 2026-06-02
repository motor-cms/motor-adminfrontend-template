<script setup lang="ts">
import { fileFormMeta } from '../../../../types/generated/form-meta'
import { fileEditFormConfig, fileSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/file'

definePageMeta({ layout: 'default', permission: 'files.read' })

const route = useRoute()
const { t } = useI18n()
const client = useSanctumClient()
const { success, error: notifyError } = useNotify()
const router = useRouter()

const { fields, schema, groups, state, loading, fetching, fetchError, canWrite, pageTitle, formRef, selectOptions, selectOptionsLoading, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/files',
  routePrefix: '/motor-media/files',
  translationPrefix: 'motor-media.files',
  formMeta: fileFormMeta,
  formConfig: fileEditFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: fileSelectOptionConfigs
})

const fileId = route.params.id as string
const replacementFile = ref<File | null>(null)
const replacementPreviewUrl = ref<string | null>(null)
const replacementSizeHuman = computed(() =>
  replacementFile.value ? formatFileSize(replacementFile.value.size) : ''
)

function onReplacementSelected(files: File[]) {
  const file = files[0]
  if (!file) return
  if (replacementPreviewUrl.value) URL.revokeObjectURL(replacementPreviewUrl.value)
  replacementFile.value = file
  replacementPreviewUrl.value = URL.createObjectURL(file)
}

function clearReplacement() {
  if (replacementPreviewUrl.value) URL.revokeObjectURL(replacementPreviewUrl.value)
  replacementPreviewUrl.value = null
  replacementFile.value = null
}

onBeforeUnmount(() => {
  if (replacementPreviewUrl.value) URL.revokeObjectURL(replacementPreviewUrl.value)
})

const usageModalOpen = ref(false)
const usageEndpoint = computed(() => `/api/v2/files/${fileId}/usage`)

// Reuse the record already fetched by useEntityForm (no duplicate request)
const { data: fileRecord } = useNuxtData<{ data: Record<string, unknown> }>(
  `entity-form-/api/v2/files-${fileId}`
)

const currentFile = computed(() => {
  const file = fileRecord.value?.data?.file as { url?: string, file_name?: string, mime_type?: string } | null
  return file ?? null
})

const selectedCategories = ref<number[]>([])

watch(fileRecord, (res) => {
  if (res?.data) {
    const cats = res.data.categories as Array<{ id: number }> | null
    if (cats) {
      selectedCategories.value = cats.map(c => c.id)
    }
  }
}, { immediate: true })

async function submitFile(eventData: Record<string, unknown>): Promise<void> {
  const body: Record<string, unknown> = { ...eventData, categories: selectedCategories.value }
  if (replacementFile.value) {
    body.file = await fileToDataUrl(replacementFile.value)
  }
  await client(`/api/v2/files/${fileId}`, { method: 'PATCH', body })
  success(t('motor-media.files.edit_title'), t('motor-media.files.updated_success'))
}

function handleSubmitError(err: unknown) {
  const fetchErr = err as { response?: { status?: number, _data?: { message?: string, errors?: Record<string, string[]> } } }
  if (fetchErr.response?.status === 422 && fetchErr.response._data?.errors) {
    const serverErrors = fetchErr.response._data.errors
    const formErrors = Object.entries(serverErrors).map(([path, messages]) => ({
      path,
      message: messages[0] ?? ''
    }))
    formRef.value?.setErrors(formErrors)

    const count = formErrors.length
    const summary = count === 1
      ? formErrors[0]!.message
      : t('motor-core.global.validation_errors', { count })
    notifyError(t('motor-core.global.validation_failed'), summary)

    nextTick(() => {
      const errorEl = document.querySelector('[class*="error"]')
      errorEl?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  } else {
    const message = err instanceof Error ? err.message : t('motor-media.files.update_failed')
    notifyError(t('motor-media.files.edit_title'), message)
  }
}

async function onSubmit(event: { data: Record<string, unknown> }) {
  loading.value = true
  try {
    await submitFile(event.data)
    router.push('/motor-media/files')
  } catch (err: unknown) {
    handleSubmitError(err)
  } finally {
    loading.value = false
  }
}

async function onSaveAndNew(event: { data: Record<string, unknown> }) {
  loading.value = true
  try {
    await submitFile(event.data)
    router.push('/motor-media/files/create')
  } catch (err: unknown) {
    handleSubmitError(err)
  } finally {
    loading.value = false
  }
}

async function onSaveAndContinue(event: { data: Record<string, unknown> }) {
  loading.value = true
  try {
    await submitFile(event.data)
    nextTick(() => formRef.value?.captureSnapshot())
  } catch (err: unknown) {
    handleSubmitError(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <FormPage
      :title="pageTitle"
      back-route="/motor-media/files"
      :loading="fetching"
      :error="fetchError"
    >
      <FormBase
        ref="formRef"
        :disabled="!canWrite"
        v-model:state="state"
        :fields="fields"
        :schema="schema"
        :groups="groups"
        :select-options="selectOptions"
        :select-options-loading="selectOptionsLoading"
        :loading="loading"
        :delete-record="deleteRecord"
        :deleting="deleting"
        cancel-route="/motor-media/files"
        show-save-and-continue
        show-save-and-new
        @submit="onSubmit"
        @save-and-continue="onSaveAndContinue"
        @save-and-new="onSaveAndNew"
      >
        <template #after-fields>
          <UPageCard :title="t('motor-media.files.group_categories')">
            <FormInputsCategoryTreeInput
              v-model="selectedCategories"
              scope="media"
            />
          </UPageCard>

          <UPageCard :title="t('motor-media.files.usage_title')">
            <UButton
              :label="t('motor-media.files.usage_title')"
              icon="i-lucide-network"
              variant="outline"
              @click="usageModalOpen = true"
            />
          </UPageCard>

          <UPageCard :title="t('motor-media.files.current_file')">
            <div class="space-y-4">
              <!-- Current file preview -->
              <div
                v-if="currentFile?.url"
                class="flex items-center gap-4"
              >
                <img
                  v-if="currentFile.mime_type?.startsWith('image/')"
                  :src="currentFile.url"
                  :alt="currentFile.file_name ?? ''"
                  class="max-h-40 rounded object-contain"
                >
                <div
                  v-else
                  class="flex items-center gap-2"
                >
                  <UIcon
                    name="i-lucide-file"
                    class="size-8 text-muted"
                  />
                  <span class="text-sm">{{ currentFile.file_name }}</span>
                </div>
                <UButton
                  icon="i-lucide-download"
                  variant="outline"
                  size="sm"
                  :to="currentFile.url"
                  target="_blank"
                />
              </div>

              <!-- Replacement file input (drag-and-drop with preview before upload) -->
              <UFormField
                name="replacement_file"
                :label="t('motor-media.files.replace_file')"
              >
                <FormInputsFileDropzone
                  v-if="!replacementFile"
                  :label="t('motor-media.files.replace_file_description')"
                  @files="onReplacementSelected"
                />
                <!-- Preview of the selected replacement before it is uploaded -->
                <div
                  v-else
                  class="flex items-center gap-3 rounded-lg border p-3"
                >
                  <img
                    v-if="replacementPreviewUrl && replacementFile.type.startsWith('image/')"
                    :src="replacementPreviewUrl"
                    :alt="replacementFile.name"
                    class="size-16 rounded object-cover shrink-0"
                  >
                  <UIcon
                    v-else
                    name="i-lucide-file"
                    class="size-12 text-muted shrink-0"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium">
                      {{ replacementFile.name }}
                    </p>
                    <p class="text-xs text-muted">
                      {{ replacementFile.type || t('motor-core.global.unknown') }} &middot; {{ replacementSizeHuman }}
                    </p>
                  </div>
                  <UButton
                    icon="i-lucide-x"
                    variant="ghost"
                    size="xs"
                    color="error"
                    :aria-label="t('motor-media.files.remove')"
                    @click="clearReplacement"
                  />
                </div>
              </UFormField>
            </div>
          </UPageCard>
        </template>
      </FormBase>
    </FormPage>

    <EntityUsageModal
      v-model:open="usageModalOpen"
      :endpoint="usageEndpoint"
      :title="t('motor-media.files.usage_title')"
    />
  </div>
</template>
