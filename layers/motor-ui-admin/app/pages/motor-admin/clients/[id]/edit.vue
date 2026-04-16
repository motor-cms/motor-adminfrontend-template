<!-- app/pages/motor-admin/clients/[id]/edit.vue -->
<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { clientFormMeta } from '../../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'
import { useClientFrontendConfig } from '../../../../composables/useClientFrontendConfig'

definePageMeta({ layout: 'default', permission: 'clients.read' })

const { t } = useI18n()
const { error: notifyError } = useNotify()
const route = useRoute()

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
  onSubmit: baseOnSubmit,
  onSaveAndContinue: baseOnSaveAndContinue,
  onSaveAndNew: baseOnSaveAndNew,
  deleteRecord,
  deleting
} = await useEntityForm({
  apiEndpoint: '/api/v2/clients',
  routePrefix: '/motor-admin/clients',
  translationPrefix: 'motor-admin.clients',
  formMeta: clientFormMeta,
  formConfig: clientFormConfig,
  mode: 'edit',
  id: route.params.id as string
})

const {
  state: frontendConfigState,
  errors: frontendConfigErrors,
  fields: frontendConfigFields,
  groups: frontendConfigGroups,
  validate: validateFrontendConfig,
  getSubmitData: getFrontendConfigSubmitData
} = useClientFrontendConfig({ entityState: state, fetching })

const colorSchemeOptions = [
  { label: 'energis', value: 'energis' },
  { label: 'jaeckel', value: 'jaeckel' }
]

const logoSlugOptions = [
  { label: 'energis', value: 'energis' },
  { label: 'jaeckel', value: 'jaeckel' }
]

type SubmitHandler = (event: FormSubmitEvent<Record<string, unknown>>) => Promise<void>

function wrapSubmit(baseHandler: SubmitHandler): SubmitHandler {
  return async (event: FormSubmitEvent<Record<string, unknown>>) => {
    const valid = validateFrontendConfig()
    if (!valid) {
      notifyError(
        t('motor-core.global.validation_failed'),
        t('motor-core.global.validation_failed')
      )
      return
    }
    state.frontend_config = getFrontendConfigSubmitData()
    await baseHandler(event)
  }
}

const onSubmit = wrapSubmit(baseOnSubmit)
const onSaveAndContinue = wrapSubmit(baseOnSaveAndContinue)
const onSaveAndNew = wrapSubmit(baseOnSaveAndNew)
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
      </template>
    </FormBase>
  </FormPage>
</template>
