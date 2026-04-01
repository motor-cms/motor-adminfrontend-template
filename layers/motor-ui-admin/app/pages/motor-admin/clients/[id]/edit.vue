<!-- app/pages/motor-admin/clients/[id]/edit.vue -->
<script setup lang="ts">
import { clientFormMeta } from '../../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'

definePageMeta({ layout: 'default', permission: 'clients.read' })

const route = useRoute()
const { fields, schema, groups, state, loading, fetching, fetchError, canWrite, pageTitle, formRef, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/clients',
  routePrefix: '/motor-admin/clients',
  translationPrefix: 'motor-admin.clients',
  formMeta: clientFormMeta,
  formConfig: clientFormConfig,
  mode: 'edit',
  id: route.params.id as string
})
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
    />
  </FormPage>
</template>
