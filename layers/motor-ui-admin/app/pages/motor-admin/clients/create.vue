<!-- app/pages/motor-admin/clients/create.vue -->
<script setup lang="ts">
import { clientFormMeta } from '../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'

definePageMeta({ layout: 'default', permission: 'clients.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/clients',
  routePrefix: '/motor-admin/clients',
  translationPrefix: 'motor-admin.clients',
  formMeta: clientFormMeta,
  formConfig: clientFormConfig,
  mode: 'create'
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.clients.create_title')"
    back-route="/motor-admin/clients"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      cancel-route="/motor-admin/clients"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
