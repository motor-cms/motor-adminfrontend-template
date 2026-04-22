<!-- app/pages/motor-admin/clients/[id]/edit.vue -->
<script setup lang="ts">
import { clientFormMeta } from '../../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'
import { useClientLanguages } from '../../../../composables/useClientLanguages'

definePageMeta({ layout: 'default', permission: 'clients.read' })

const { t } = useI18n()
const { error: notifyError } = useNotify()
const route = useRoute()
const clientId = route.params.id as string

const isFrontendConfigEnabled
  = useRuntimeConfig().public.featureClientFrontendConfig === true

const { extensions, allExtensionsValid, validateAll, getAllSubmitData } = useClientFormExtensions()

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
  beforeSubmit: async (data) => {
    if (!isFrontendConfigEnabled || extensions.value.length === 0) return
    const valid = await validateAll()
    if (!valid) {
      throw new Error(t('motor-core.global.validation_failed'))
    }
    data.frontend_config = {
      ...getAllSubmitData(),
      globalComponents: (data.frontend_config as Record<string, unknown>)?.globalComponents
        ?? (clientRecord.value?.data?.frontend_config as Record<string, unknown>)?.globalComponents,
    }
  }
})

const { data: clientRecord } = useNuxtData<{ data: Record<string, unknown> }>(
  `entity-form-/api/v2/clients-${clientId}`
)

const clientIdRef = computed(() =>
  isFrontendConfigEnabled ? (route.params.id as string) : ''
)
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
        ...freshClient.data,
        frontend_config: {
          ...freshConfig,
          globalComponents: { ...freshGc, footer: freshFooter }
        }
      }
    })

    await refreshNuxtData(`entity-form-/api/v2/clients-${clientId}`)
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
        ...freshClient.data,
        frontend_config: {
          ...freshConfig,
          globalComponents: { ...freshGc, footer: freshFooter }
        }
      }
    })

    await refreshNuxtData(`entity-form-/api/v2/clients-${clientId}`)
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
      <template
        v-if="isFrontendConfigEnabled && extensions.length > 0"
        #after-fields
      >
        <h2 class="text-lg font-semibold text-highlighted mt-2">
          {{ t('motor-admin.clients.frontend_config_title') }}
        </h2>
        <component
          v-for="ext in extensions"
          :key="ext.key"
          :is="ext.component"
          :client-id="clientId"
          :client-record="clientRecord"
          :disabled="!canWrite"
          mode="edit"
        />
        <ClientGlobalComponentsSection
          :client-id="route.params.id"
          :client-name="(state.name as string) ?? ''"
          :footer-map="footerMap"
          :languages="languages"
          :is-multi-language="isMultiLanguage"
          :languages-loading="languagesLoading"
          :disabled="!canWrite || !allExtensionsValid"
          @footer-linked="onFooterLinked"
          @footer-unlinked="onFooterUnlinked"
        />
      </template>
    </FormBase>
  </FormPage>
</template>
