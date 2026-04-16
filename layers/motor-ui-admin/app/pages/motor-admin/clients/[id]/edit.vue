<!-- app/pages/motor-admin/clients/[id]/edit.vue -->
<script setup lang="ts">
import { clientFormMeta } from '../../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'
import { useClientFrontendConfig } from '../../../../composables/useClientFrontendConfig'
import { useClientLanguages } from '../../../../composables/useClientLanguages'

definePageMeta({ layout: 'default', permission: 'clients.read' })

const { t } = useI18n()
const { error: notifyError } = useNotify()
const route = useRoute()
const clientId = route.params.id as string

const {
  fields,
  schema,
  groups,
  state,
  loading,
  fetching,
  fetchError,
  canWrite,
  pageTitle,
  formRef,
  onSubmit,
  onSaveAndContinue,
  onSaveAndNew,
  deleteRecord,
  deleting
} = await useEntityForm({
  apiEndpoint: '/api/v2/clients',
  routePrefix: '/motor-admin/clients',
  translationPrefix: 'motor-admin.clients',
  formMeta: clientFormMeta,
  formConfig: clientFormConfig,
  mode: 'edit',
  id: clientId,
  beforeSubmit: (data) => {
    if (!validateFrontendConfig()) {
      throw new Error(t('motor-core.global.validation_failed'))
    }
    data.frontend_config = getFrontendConfigSubmitData()
  }
})

const { data: clientRecord } = useNuxtData<{ data: Record<string, unknown> }>(
  `entity-form-/api/v2/clients-${clientId}`
)

const {
  state: frontendConfigState,
  errors: frontendConfigErrors,
  fields: frontendConfigFields,
  groups: frontendConfigGroups,
  validate: validateFrontendConfig,
  getSubmitData: getFrontendConfigSubmitData
} = useClientFrontendConfig({ clientRecord, fetching })

const colorSchemeOptions = [
  { label: 'energis', value: 'energis' },
  { label: 'jaeckel', value: 'jaeckel' }
]

const logoSlugOptions = [
  { label: 'energis', value: 'energis' },
  { label: 'jaeckel', value: 'jaeckel' }
]

const clientIdRef = computed(() => route.params.id as string)
const { languages, isMultiLanguage, loading: languagesLoading } = useClientLanguages(clientIdRef)

const footerMap = computed(() => {
  const fc = clientRecord.value?.data?.frontend_config as Record<string, unknown> | undefined
  const gc = fc?.globalComponents as Record<string, unknown> | undefined
  return gc?.footer as Record<string, string> | undefined
})

const sanctumClient = useSanctumClient()

async function onFooterLinked(languageId: number, uuid: string, _pageId: number) {
  try {
    const freshClient = await sanctumClient<{ data: Record<string, unknown> }>(
      `/api/v2/clients/${clientId}`
    )
    const freshConfig = (freshClient.data.frontend_config as Record<string, unknown>) ?? {}
    const freshGc = (freshConfig.globalComponents as Record<string, unknown>) ?? {}
    const freshFooter = { ...(freshGc.footer as Record<string, string>) ?? {} }
    freshFooter[String(languageId)] = uuid

    await sanctumClient(`/api/v2/clients/${clientId}`, {
      method: 'PATCH',
      body: {
        frontend_config: {
          ...freshConfig,
          globalComponents: { ...freshGc, footer: freshFooter }
        }
      }
    })

    // Update cached record to reflect the change
    if (clientRecord.value?.data) {
      const record = clientRecord.value.data
      if (!record.frontend_config) record.frontend_config = {}
      const fc = record.frontend_config as Record<string, unknown>
      if (!fc.globalComponents) fc.globalComponents = {}
      const gc = fc.globalComponents as Record<string, unknown>
      if (!gc.footer) gc.footer = {}
      const footer = gc.footer as Record<string, string>
      footer[String(languageId)] = uuid
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.errors.update_failed')
    notifyError(t('motor-admin.clients.edit_title'), message)
  }
}

async function onFooterUnlinked(languageId: number) {
  try {
    const freshClient = await sanctumClient<{ data: Record<string, unknown> }>(
      `/api/v2/clients/${clientId}`
    )
    const freshConfig = (freshClient.data.frontend_config as Record<string, unknown>) ?? {}
    const freshGc = (freshConfig.globalComponents as Record<string, unknown>) ?? {}
    const freshFooter = { ...(freshGc.footer as Record<string, string>) ?? {} }
    delete freshFooter[String(languageId)]

    await sanctumClient(`/api/v2/clients/${clientId}`, {
      method: 'PATCH',
      body: {
        frontend_config: {
          ...freshConfig,
          globalComponents: { ...freshGc, footer: freshFooter }
        }
      }
    })

    // Update cached record
    if (clientRecord.value?.data) {
      const record = clientRecord.value.data
      const fc = record.frontend_config as Record<string, unknown>
      const gc = fc?.globalComponents as Record<string, unknown>
      const footer = gc?.footer as Record<string, string>
      if (footer) delete footer[String(languageId)]
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.errors.update_failed')
    notifyError(t('motor-admin.clients.edit_title'), message)
  }
}

</script>

<template>
  <FormPage
    :title="pageTitle"
    back-route="/motor-admin/clients"
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
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/clients"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    >
      <template #after-fields>
        <ClientFrontendConfigSection
          :state="frontendConfigState"
          :fields="frontendConfigFields"
          :groups="frontendConfigGroups"
          :errors="frontendConfigErrors"
          :disabled="!canWrite"
          :color-scheme-options="colorSchemeOptions"
          :logo-slug-options="logoSlugOptions"
        />
        <ClientGlobalComponentsSection
          :client-id="route.params.id"
          :client-name="(state.name as string) ?? ''"
          :footer-map="footerMap"
          :languages="languages"
          :is-multi-language="isMultiLanguage"
          :languages-loading="languagesLoading"
          :disabled="!canWrite"
          @footer-linked="onFooterLinked"
          @footer-unlinked="onFooterUnlinked"
        />
      </template>
    </FormBase>
  </FormPage>
</template>
