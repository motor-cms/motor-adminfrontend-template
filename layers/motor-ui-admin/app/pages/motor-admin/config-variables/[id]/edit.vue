<script setup lang="ts">
import { configVariableFormMeta } from '../../../../types/generated/form-meta'
import { configVariableFormConfig } from '@motor-cms/ui-core/app/types/config/config-variable'

definePageMeta({ layout: 'default', permission: 'config-variables.write' })

const route = useRoute()
const { t } = useI18n()
const { fields, schema, groups, state, loading, fetching, fetchError, formRef, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/config-variables',
  routePrefix: '/motor-admin/config-variables',
  translationPrefix: 'motor-admin.config_variables',
  formMeta: configVariableFormMeta,
  formConfig: configVariableFormConfig,
  mode: 'edit',
  id: route.params.id as string
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.config_variables.edit_title')"
    back-route="/motor-admin/config-variables"
    :loading="fetching"
    :error="fetchError"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/config-variables"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
