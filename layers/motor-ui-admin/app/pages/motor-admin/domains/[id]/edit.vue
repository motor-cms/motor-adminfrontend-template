<!-- app/pages/motor-admin/domains/[id]/edit.vue -->
<script setup lang="ts">
import { domainFormMeta } from '../../../../types/generated/form-meta'
import { domainFormConfig, domainSelectOptionConfigs, domainProtocolOptions } from '@motor-cms/ui-core/app/types/config/domain'

definePageMeta({ layout: 'default', permission: 'domains.write' })

const route = useRoute()
const { t } = useI18n()

const { fields, schema, groups, state, loading, fetching, fetchError, formRef, selectOptions, selectOptionsLoading, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/domains',
  routePrefix: '/motor-admin/domains',
  translationPrefix: 'motor-admin.domains',
  formMeta: domainFormMeta,
  formConfig: domainFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: domainSelectOptionConfigs
})

const mergedSelectOptions = computed(() => ({
  ...selectOptions?.value,
  protocol: domainProtocolOptions
}))
</script>

<template>
  <FormPage
    :title="t('motor-admin.domains.edit_title')"
    back-route="/motor-admin/domains"
    :loading="fetching"
    :error="fetchError"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :select-options="mergedSelectOptions"
      :select-options-loading="selectOptionsLoading"
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/domains"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
