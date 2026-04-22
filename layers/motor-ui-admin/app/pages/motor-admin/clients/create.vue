<!-- app/pages/motor-admin/clients/create.vue -->
<script setup lang="ts">
import { clientFormMeta } from '../../../types/generated/form-meta'
import { clientFormConfig } from '@motor-cms/ui-core/app/types/config/client'

definePageMeta({ layout: 'default', permission: 'clients.write' })

const { t } = useI18n()

const isFrontendConfigEnabled
  = useRuntimeConfig().public.featureClientFrontendConfig === true

const { extensions, validateAll, getAllSubmitData } = useClientFormExtensions()

const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/clients',
  routePrefix: '/motor-admin/clients',
  translationPrefix: 'motor-admin.clients',
  formMeta: clientFormMeta,
  formConfig: clientFormConfig,
  mode: 'create',
  beforeSubmit: async (data) => {
    if (!isFrontendConfigEnabled || extensions.value.length === 0) return
    const valid = await validateAll()
    if (!valid) {
      throw new Error(t('motor-core.global.validation_failed'))
    }
    data.frontend_config = getAllSubmitData()
  }
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
          :client-id="undefined"
          :client-record="null"
          :disabled="false"
          mode="create"
        />
      </template>
    </FormBase>
  </FormPage>
</template>
