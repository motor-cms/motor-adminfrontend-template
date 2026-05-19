<script setup lang="ts">
import { roleFormMeta } from '../../../types/generated/form-meta'
import { roleFormConfig, roleSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/role'

definePageMeta({ layout: 'default', permission: 'roles.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/roles',
  routePrefix: '/motor-admin/roles',
  translationPrefix: 'motor-admin.roles',
  formMeta: roleFormMeta,
  formConfig: roleFormConfig,
  mode: 'create',
  selectOptionConfigs: roleSelectOptionConfigs,
  extraState: { guard_name: 'web' },
  beforeSubmit: (data, formState) => {
    data.guard_name = formState.guard_name
  }
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.roles.create_title')"
    back-route="/motor-admin/roles"
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
      cancel-route="/motor-admin/roles"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
