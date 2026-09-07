<script setup lang="ts">
import type { PendingFile } from '../../../components/form/inputs/MultiFileUpload.vue'
import { fileFormMeta } from '../../../types/generated/form-meta'
import { fileCreateFormConfig, fileSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/file'
import {
  AI_GENERATED_FIELD,
  AI_MODIFIED_FIELD,
  aiLabelingGroupsWithHint,
  applyAiLabeling,
  applyAiLabelingExclusion,
  withAiLabelingFields
} from '../../../utils/aiLabeling'

definePageMeta({ layout: 'default', permission: 'files.write' })

const { t } = useI18n()
const router = useRouter()
const client = useSanctumClient()
const { success, error: notifyError, warning } = useNotify()

const formRef = ref<{ captureSnapshot: () => void, isDirty: boolean, setErrors: (errors: Array<{ path: string, message: string }>) => void } | null>(null)

const { fields, schema, groups, state, selectOptions, selectOptionsLoading } = await useEntityForm({
  apiEndpoint: '/api/v2/files',
  routePrefix: '/motor-media/files',
  translationPrefix: 'motor-media.files',
  formMeta: fileFormMeta,
  formConfig: withAiLabelingFields(fileCreateFormConfig),
  mode: 'create',
  selectOptionConfigs: fileSelectOptionConfigs
})

const formGroups = aiLabelingGroupsWithHint(groups, t('motor-media.files.ai_labeling_hint'))

watch(() => state[AI_GENERATED_FIELD], () => applyAiLabelingExclusion(state, AI_GENERATED_FIELD))
watch(() => state[AI_MODIFIED_FIELD], () => applyAiLabelingExclusion(state, AI_MODIFIED_FIELD))

const selectedCategories = ref<number[]>([])

const pendingFiles = ref<PendingFile[]>([])
const uploading = ref(false)
const uploadProgress = ref('')
const upload = useCancellableUpload()

const defaults = computed(() => ({
  description: (state.description as string) || '',
  alt_text: (state.alt_text as string) || ''
}))

const submitted = ref(false)
const categoriesError = computed(() =>
  submitted.value && selectedCategories.value.length === 0
    ? t('motor-media.files.categories_required')
    : undefined
)
const filesError = computed(() =>
  submitted.value && pendingFiles.value.length === 0
    ? t('motor-media.files.files_required')
    : undefined
)

// Clear errors once requirements are met
watch(selectedCategories, () => {
  if (selectedCategories.value.length > 0 && pendingFiles.value.length > 0) submitted.value = false
})
watch(pendingFiles, () => {
  if (pendingFiles.value.length > 0 && selectedCategories.value.length > 0) submitted.value = false
})

function scrollToFirstError() {
  nextTick(() => {
    const errorEl = document.querySelector('.text-error')
    if (errorEl) {
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  })
}

function handleServerError(err: unknown) {
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
    scrollToFirstError()
    return true
  }
  return false
}

async function onSubmit(event: { data: Record<string, unknown> }) {
  submitted.value = true
  if (selectedCategories.value.length === 0 || pendingFiles.value.length === 0) {
    const missingFields: string[] = []
    if (selectedCategories.value.length === 0) missingFields.push(t('motor-media.files.group_categories'))
    if (pendingFiles.value.length === 0) missingFields.push(t('motor-media.files.pending_files'))
    warning(t('motor-core.global.validation_failed'), missingFields.join(', '))
    scrollToFirstError()
    return
  }

  applyAiLabeling(event.data)

  uploading.value = true
  const signal = upload.start()
  const total = pendingFiles.value.length
  const errors: string[] = []
  let aborted = false

  try {
    for (let i = 0; i < total; i++) {
      const pending = pendingFiles.value[i]!
      uploadProgress.value = t('motor-media.files.upload_progress', { current: i + 1, total })

      const fileData = await fileToDataUrl(pending.file)
      const body = {
        ...event.data,
        description: pending.description,
        alt_text: pending.alt_text,
        categories: selectedCategories.value,
        files: [fileData]
      }

      try {
        await client('/api/v2/files', {
          method: 'POST',
          body,
          signal
        })
      } catch (err: unknown) {
        if (isAbortError(err)) {
          aborted = true
          break
        }
        if (!handleServerError(err)) {
          const message = err instanceof Error ? err.message : t('motor-media.files.upload_failed', { name: pending.file.name })
          errors.push(`${pending.file.name}: ${message}`)
        }
      }
    }

    // User cancelled / navigated away: the navigation already happened, so don't
    // show notifications and don't force a redirect to the overview.
    if (aborted) return

    upload.done()

    if (errors.length === 0) {
      success(t('motor-media.files.create_title'), t('motor-media.files.created_success'))
      router.push('/motor-media/files')
    } else if (errors.length < total) {
      const uploaded = total - errors.length
      success(t('motor-media.files.create_title'), t('motor-media.files.upload_partial_success', { uploaded, total }))
      notifyError(t('motor-media.files.create_title'), errors.join('\n'))
      router.push('/motor-media/files')
    } else {
      notifyError(t('motor-media.files.create_title'), errors.join('\n'))
    }
  } finally {
    uploading.value = false
    uploadProgress.value = ''
  }
}
</script>

<template>
  <FormPage
    :title="t('motor-media.files.create_title')"
    back-route="/motor-media/files"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="formGroups"
      :select-options="selectOptions"
      :select-options-loading="selectOptionsLoading"
      :loading="uploading"
      cancel-route="/motor-media/files"
      @submit="onSubmit"
    >
      <template #after-fields>
        <UPageCard :title="t('motor-media.files.group_categories')">
          <FormInputsCategoryTreeInput
            v-model="selectedCategories"
            scope="media"
          />
          <p
            v-if="categoriesError"
            class="mt-2 text-sm text-error"
          >
            {{ categoriesError }}
          </p>
        </UPageCard>

        <UPageCard :title="t('motor-media.files.pending_files')">
          <p
            v-if="uploadProgress"
            class="mb-3 text-sm font-medium text-primary"
          >
            {{ uploadProgress }}
          </p>
          <FormInputsMultiFileUpload
            :field="{ key: 'files', label: '', input: 'multi-file-upload', required: true }"
            :model-value="(pendingFiles as any)"
            :defaults="defaults"
            accept="*/*"
            @update:model-value="pendingFiles = $event"
          />
          <p
            v-if="filesError"
            class="mt-2 text-sm text-error"
          >
            {{ filesError }}
          </p>
        </UPageCard>
      </template>
    </FormBase>
  </FormPage>
</template>
