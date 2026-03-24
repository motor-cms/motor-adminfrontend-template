<script setup lang="ts">
import { configVariableFormMeta } from '../../../types/generated/form-meta'
import { configVariableFormConfig } from '@motor-cms/ui-core/app/types/config/config-variable'

definePageMeta({ layout: 'default', permission: 'config-variables.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/config-variables',
  routePrefix: '/motor-admin/config-variables',
  translationPrefix: 'motor-admin.config_variables',
  formMeta: configVariableFormMeta,
  formConfig: configVariableFormConfig,
  mode: 'create'
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.config_variables.create_title')"
    back-route="/motor-admin/config-variables"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      cancel-route="/motor-admin/config-variables"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
