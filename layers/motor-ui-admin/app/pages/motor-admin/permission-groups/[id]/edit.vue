<script setup lang="ts">
import { permissionGroupFormMeta } from '../../../../types/generated/form-meta'
import { permissionGroupFormConfig, permissionGroupSelectOptionConfigs, permissionGroupExtraFields } from '@motor-cms/ui-core/app/types/config/permission-group'

definePageMeta({ layout: 'default', permission: 'permission-groups.read' })

const route = useRoute()
const { fields, schema, groups, state, loading, fetching, fetchError, canWrite, pageTitle, formRef, selectOptions, selectOptionsLoading, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/permission-groups',
  routePrefix: '/motor-admin/permission-groups',
  translationPrefix: 'motor-admin.permissions',
  formMeta: permissionGroupFormMeta,
  formConfig: permissionGroupFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: permissionGroupSelectOptionConfigs,
  extraFields: permissionGroupExtraFields,
  extraState: { permissions: [] }
})
</script>

<template>
  <FormPage
    :title="pageTitle"
    back-route="/motor-admin/permission-groups"
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
      :select-options="selectOptions"
      :select-options-loading="selectOptionsLoading"
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/permission-groups"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
