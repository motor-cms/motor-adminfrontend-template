<script setup lang="ts">
import { languageFormMeta } from '../../../../types/generated/form-meta'
import { languageFormConfig } from '@motor-cms/ui-core/app/types/config/language'

definePageMeta({ layout: 'default', permission: 'languages.read' })

const route = useRoute()
const { fields, schema, groups, state, loading, fetching, fetchError, canWrite, pageTitle, formRef, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/languages',
  routePrefix: '/motor-admin/languages',
  translationPrefix: 'motor-admin.languages',
  formMeta: languageFormMeta,
  formConfig: languageFormConfig,
  mode: 'edit',
  id: route.params.id as string
})
</script>

<template>
  <FormPage
    :title="pageTitle"
    back-route="/motor-admin/languages"
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
      cancel-route="/motor-admin/languages"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
