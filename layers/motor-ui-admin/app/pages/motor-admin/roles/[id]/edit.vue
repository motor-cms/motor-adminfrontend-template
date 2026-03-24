<script setup lang="ts">
import { roleFormMeta } from '../../../../types/generated/form-meta'
import { roleFormConfig, roleSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/role'

definePageMeta({ layout: 'default', permission: 'roles.write' })

const route = useRoute()
const { t } = useI18n()
const { fields, schema, groups, state, loading, fetching, fetchError, formRef, selectOptions, selectOptionsLoading, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/roles',
  routePrefix: '/motor-admin/roles',
  translationPrefix: 'motor-admin.roles',
  formMeta: roleFormMeta,
  formConfig: roleFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: roleSelectOptionConfigs
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.roles.edit_title')"
    back-route="/motor-admin/roles"
    :loading="fetching"
    :error="fetchError"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :select-options="selectOptions"
      :select-options-loading="selectOptionsLoading"
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/roles"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
