<!-- app/pages/motor-admin/users/create.vue -->
<script setup lang="ts">
import { userFormMeta } from '../../../types/generated/form-meta'
import { userFormConfig, userSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/user'

definePageMeta({ layout: 'default', permission: 'users.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/users',
  routePrefix: '/motor-admin/users',
  translationPrefix: 'motor-admin.users',
  formMeta: userFormMeta,
  formConfig: userFormConfig,
  mode: 'create',
  selectOptionConfigs: userSelectOptionConfigs
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.users.create_title')"
    back-route="/motor-admin/users"
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
      cancel-route="/motor-admin/users"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
