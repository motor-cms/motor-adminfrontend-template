<script setup lang="ts">
import { permissionGroupFormMeta } from '../../../types/generated/form-meta'
import { permissionGroupFormConfig, permissionGroupSelectOptionConfigs, permissionGroupExtraFields } from '@motor-cms/ui-core/app/types/config/permission-group'

definePageMeta({ layout: 'default', permission: 'permission-groups.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/permission-groups',
  routePrefix: '/motor-admin/permission-groups',
  translationPrefix: 'motor-admin.permissions',
  formMeta: permissionGroupFormMeta,
  formConfig: permissionGroupFormConfig,
  mode: 'create',
  selectOptionConfigs: permissionGroupSelectOptionConfigs,
  extraFields: permissionGroupExtraFields,
  extraState: { permissions: [] }
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.permissions.create_title')"
    back-route="/motor-admin/permission-groups"
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
      cancel-route="/motor-admin/permission-groups"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
