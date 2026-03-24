<!-- app/pages/motor-admin/domains/create.vue -->
<script setup lang="ts">
import { domainFormMeta } from '../../../types/generated/form-meta'
import { domainFormConfig, domainSelectOptionConfigs, domainProtocolOptions } from '@motor-cms/ui-core/app/types/config/domain'

definePageMeta({ layout: 'default', permission: 'domains.write' })

const { t } = useI18n()

const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/domains',
  routePrefix: '/motor-admin/domains',
  translationPrefix: 'motor-admin.domains',
  formMeta: domainFormMeta,
  formConfig: domainFormConfig,
  mode: 'create',
  selectOptionConfigs: domainSelectOptionConfigs
})

const mergedSelectOptions = computed(() => ({
  ...selectOptions?.value,
  protocol: domainProtocolOptions
}))
</script>

<template>
  <FormPage
    :title="t('motor-admin.domains.create_title')"
    back-route="/motor-admin/domains"
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
      cancel-route="/motor-admin/domains"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
