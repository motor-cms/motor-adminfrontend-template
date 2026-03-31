import type { FormSubmitEvent } from '@nuxt/ui'
import type { ZodObject, ZodTypeAny } from 'zod'
import type { FormFieldConfig, FormGroupConfig, SelectOption } from '../types/form'
import type { ResourceFormMeta, FormFieldsFromMetaOptions } from './formFieldUtils'
import { formFieldsFromMeta, initFormState, zodSchemaForField } from './formFieldUtils'
import { useResourceOptions, useApiMutation } from './useResourceOptions'

// ============================================
// Types
// ============================================

export interface SelectOptionConfig {
  endpoint: string
  labelKey: string
  valueKey?: string
}

interface EntityFormMeta {
  post: ResourceFormMeta
  patch: ResourceFormMeta
}

interface EntityFormOptionsBase {
  /** API base path, e.g. '/api/v2/email-templates' */
  apiEndpoint: string
  /** Route path for navigation after save/cancel, e.g. '/motor-admin/email-templates' */
  routePrefix: string
  /** i18n translation prefix, e.g. 'motor-admin.email_templates' */
  translationPrefix: string

  // --- Field source (pick ONE) ---

  /** Form metadata from generated form-meta (most entities), has .post and .patch keys */
  formMeta?: EntityFormMeta
  /** Options passed to formFieldsFromMeta (pick/omit/overrides/groups) */
  formConfig?: FormFieldsFromMetaOptions
  /** Manual field definitions (for entities without generated metadata, e.g. ai-system-prompts) */
  manualFields?: FormFieldConfig[]
  /** Manual Zod schema (required when using manualFields) */
  manualSchema?: ZodObject<Record<string, ZodTypeAny>>
  /** Manual initial state (required when using manualFields) */
  manualState?: Record<string, unknown>
  /** Manual group definitions (for entities without generated metadata) */
  manualGroups?: FormGroupConfig[]

  // --- Optional features ---

  /** Select option configurations keyed by field name */
  selectOptionConfigs?: Record<string, SelectOptionConfig>
  /** Row field used as display name in toasts (e.g. 'name', 'title'). Defaults to 'name'. */
  nameKey?: string
  /** Extra fields to append after metadata-derived fields (e.g. permissions checkbox-group) */
  extraFields?: FormFieldConfig[]
  /** Extra initial state values for extra fields */
  extraState?: Record<string, unknown>
  /** Hook called before each submit — mutate event.data to inject extra payload */
  beforeSubmit?: (data: Record<string, unknown>, state: Record<string, unknown>) => void | Promise<void>
  /** Explicit write permission override (auto-derived from apiEndpoint if not set) */
  writePermission?: string
}

interface EntityFormCreateOptions extends EntityFormOptionsBase {
  mode: 'create'
  id?: never
}

interface EntityFormEditOptions extends EntityFormOptionsBase {
  mode: 'edit'
  /** Record ID (required for edit mode, from route.params.id) */
  id: string
}

type EntityFormOptions = EntityFormCreateOptions | EntityFormEditOptions

// ============================================
// Composable
// ============================================

export async function useEntityForm(options: EntityFormOptions) {
  const {
    apiEndpoint,
    routePrefix,
    translationPrefix,
    formMeta,
    formConfig,
    manualFields,
    manualSchema,
    manualState,
    mode,
    id,
    selectOptionConfigs,
    nameKey = 'name',
    extraFields: extraFieldsDef,
    extraState: extraStateDef,
    beforeSubmit,
    writePermission: writePermissionOverride
  } = options

  const { t, te } = useI18n()
  const router = useRouter()
  const { success, error: notifyError } = useNotify()
  const { mutate } = useApiMutation()

  // ============================================
  // Build fields + schema
  // ============================================

  let fields: FormFieldConfig[]
  let schema: ZodObject<Record<string, ZodTypeAny>>
  let groups: FormGroupConfig[] = []

  if (formMeta) {
    const meta = mode === 'create' ? formMeta.post : formMeta.patch
    const result = formFieldsFromMeta(meta, t, formConfig, te)
    fields = result.fields
    schema = result.schema
    groups = result.groups
  } else if (manualFields && manualSchema) {
    fields = manualFields
    schema = manualSchema
    groups = options.manualGroups ?? []
  } else {
    throw new Error('useEntityForm: provide either formMeta or manualFields+manualSchema')
  }

  // Append extra fields (e.g. permissions checkbox-group not in form meta)
  // and extend the Zod schema so their values are included in event.data on submit
  if (extraFieldsDef) {
    fields.push(...extraFieldsDef)
    const extraShape: Record<string, ZodTypeAny> = {}
    for (const field of extraFieldsDef) {
      extraShape[field.key] = zodSchemaForField(
        { input: field.input, required: field.required },
        t
      )
    }
    schema = schema.extend(extraShape) as typeof schema
  }

  // ============================================
  // Select options
  // ============================================

  const selectOptionRefs: Record<string, ReturnType<typeof useResourceOptions>> = {}
  if (selectOptionConfigs) {
    // Build a set of multi-value field keys so we can fetch all options for them
    const multiValueFields = new Set(
      fields.filter(f => f.input === 'multi-select' || f.input === 'checkbox-group' || f.input === 'grouped-checkbox').map(f => f.key)
    )

    for (const [fieldKey, config] of Object.entries(selectOptionConfigs)) {
      // Multi-select fields need all records — per_page=0 returns everything in one page
      let { endpoint } = config
      if (multiValueFields.has(fieldKey) && !endpoint.includes('per_page')) {
        endpoint += endpoint.includes('?') ? '&per_page=0' : '?per_page=0'
      }

      selectOptionRefs[fieldKey] = useResourceOptions(endpoint, {
        labelKey: config.labelKey,
        valueKey: config.valueKey
      })
    }
  }

  const selectOptions = computed(() => {
    const result: Record<string, SelectOption[]> = {}
    for (const [fieldKey, ref] of Object.entries(selectOptionRefs)) {
      result[fieldKey] = ref.options.value
    }
    return result
  })

  const selectOptionsLoading = computed(() => {
    const result: Record<string, boolean> = {}
    for (const [fieldKey, ref] of Object.entries(selectOptionRefs)) {
      result[fieldKey] = ref.loading.value
    }
    return result
  })

  const hasSelectOptions = Object.keys(selectOptionRefs).length > 0

  // ============================================
  // Form state
  // ============================================

  const state = manualState ? reactive(manualState) : initFormState(fields)
  if (extraStateDef) {
    Object.assign(state, extraStateDef)
  }
  const loading = ref(false)

  // Edit-mode specific refs
  const formRef = ref<{
    captureSnapshot: () => void
    setErrors: (errors: Array<{ path: string, message: string }>) => void
  } | null>(null)
  const fetching = ref(mode === 'edit')
  const fetchError = ref(false)

  // ============================================
  // Load record (edit mode) — SSR-safe via useAsyncData
  // ============================================

  const sanctumClient = useSanctumClient()
  const { can } = usePermissions()

  // Register onMounted before await to preserve component instance context
  if (mode === 'edit') {
    onMounted(() => formRef.value?.captureSnapshot())
  }

  const { data: recordData, error: recordError } = await useAsyncData(
    `entity-form-${apiEndpoint}-${id ?? 'new'}`,
    () => {
      if (mode !== 'edit' || !id) return Promise.resolve(null)
      return sanctumClient<{ data: Record<string, unknown> }>(`${apiEndpoint}/${id}`)
    }
  )

  if (mode === 'edit') {
    if (recordData.value?.data) {
      const record = recordData.value.data
      for (const field of fields) {
        const value = record[field.key]
        if (value !== undefined && value !== null) {
          if ((field.input === 'multi-select' || field.input === 'checkbox-group' || field.input === 'grouped-checkbox') && Array.isArray(value)) {
            state[field.key] = value.map((item: unknown) =>
              typeof item === 'object' && item !== null ? (item as Record<string, unknown>).id : item
            )
          } else if (field.input === 'toggle' && typeof value === 'number') {
            state[field.key] = Boolean(value)
          } else {
            state[field.key] = value
          }
        }
      }
    }

    if (recordError.value) {
      fetchError.value = true
    }

    fetching.value = false
  }

  // ============================================
  // Submit
  // ============================================

  const isCreate = mode === 'create'
  const titleKey = isCreate ? `${translationPrefix}.create_title` : `${translationPrefix}.edit_title`
  const successKey = isCreate ? `${translationPrefix}.created_success` : `${translationPrefix}.updated_success`
  const fallbackMessage = isCreate ? t('motor-core.errors.create_failed') : t('motor-core.errors.update_failed')

  function handleSubmitError(err: unknown, recordName: string, url: string) {
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
    } else {
      const message = err instanceof Error ? err.message : fallbackMessage
      const desc = recordName ? `"${recordName}": ${message}` : message
      notifyError(t(titleKey), desc, {
        message,
        stack: err instanceof Error ? err.stack : undefined,
        url
      })
    }
  }

  async function onSubmit(event: FormSubmitEvent<Record<string, unknown>>) {
    loading.value = true
    const url = isCreate ? apiEndpoint : `${apiEndpoint}/${id}`
    const method = isCreate ? 'POST' : 'PATCH'
    const recordName = (state[nameKey] as string) || ''
    try {
      if (beforeSubmit) await beforeSubmit(event.data, state)
      await mutate<{ data: unknown }>(url, {
        method,
        body: event.data
      })
      const desc = recordName ? `"${recordName}" — ${t(successKey)}` : t(successKey)
      success(t(titleKey), desc)
      router.push(routePrefix)
    } catch (err: unknown) {
      handleSubmitError(err, recordName, url)
    } finally {
      loading.value = false
    }
  }

  async function onSaveAndContinue(event: FormSubmitEvent<Record<string, unknown>>) {
    loading.value = true
    const url = isCreate ? apiEndpoint : `${apiEndpoint}/${id}`
    const method = isCreate ? 'POST' : 'PATCH'
    const recordName = (state[nameKey] as string) || ''
    try {
      if (beforeSubmit) await beforeSubmit(event.data, state)
      await mutate<{ data: unknown }>(url, {
        method,
        body: event.data
      })
      const desc = recordName ? `"${recordName}" — ${t(successKey)}` : t(successKey)
      success(t(titleKey), desc)
      // Stay on page — re-capture dirty guard snapshot
      nextTick(() => formRef.value?.captureSnapshot())
    } catch (err: unknown) {
      handleSubmitError(err, recordName, url)
    } finally {
      loading.value = false
    }
  }

  async function onSaveAndNew(event: FormSubmitEvent<Record<string, unknown>>) {
    loading.value = true
    const url = isCreate ? apiEndpoint : `${apiEndpoint}/${id}`
    const method = isCreate ? 'POST' : 'PATCH'
    const recordName = (state[nameKey] as string) || ''
    try {
      if (beforeSubmit) await beforeSubmit(event.data, state)
      await mutate<{ data: unknown }>(url, {
        method,
        body: event.data
      })
      const desc = recordName ? `"${recordName}" — ${t(successKey)}` : t(successKey)
      success(t(titleKey), desc)
      const createPath = `${routePrefix}/create`
      if (router.currentRoute.value.path === createPath) {
        // Already on create page — reset form state
        for (const field of fields) {
          state[field.key] = initFormState(fields)[field.key]
        }
        nextTick(() => formRef.value?.captureSnapshot())
      } else {
        router.push(createPath)
      }
    } catch (err: unknown) {
      handleSubmitError(err, recordName, url)
    } finally {
      loading.value = false
    }
  }

  // ============================================
  // Delete (edit mode only)
  // ============================================

  // Derive permissions from apiEndpoint: '/api/v2/users' → 'users.write' / 'users.delete'
  const resourceSegment = apiEndpoint.replace(/^\/api\/v\d+\//, '').split('/').pop() ?? ''
  const writePermission = writePermissionOverride ?? (resourceSegment ? `${resourceSegment}.write` : undefined)
  const deletePermission = resourceSegment ? `${resourceSegment}.delete` : undefined

  const canWrite = !writePermission || can(writePermission)
  const canDelete = !isCreate && !!deletePermission && can(deletePermission)
  const deleting = ref(false)

  async function deleteRecord() {
    if (isCreate || !id) return

    deleting.value = true
    const url = `${apiEndpoint}/${id}`
    const recordName = (state[nameKey] as string) || ''
    try {
      await mutate<undefined>(url, { method: 'DELETE' })
      const desc = recordName
        ? `"${recordName}" — ${t('motor-core.global.deleted_success')}`
        : t('motor-core.global.deleted_success')
      success(t(titleKey), desc)
      router.push(routePrefix)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t('motor-core.errors.delete_failed')
      const desc = recordName ? `"${recordName}": ${message}` : message
      notifyError(t(titleKey), desc, {
        message,
        stack: err instanceof Error ? err.stack : undefined,
        url
      })
    } finally {
      deleting.value = false
    }
  }

  return {
    fields,
    schema,
    groups,
    state,
    loading,
    selectOptions: hasSelectOptions ? selectOptions : undefined,
    selectOptionsLoading: hasSelectOptions ? selectOptionsLoading : undefined,
    formRef,
    fetching,
    fetchError,
    onSubmit,
    onSaveAndContinue,
    onSaveAndNew,
    deleting,
    deleteRecord: canDelete ? deleteRecord : undefined,
    canWrite
  }
}
