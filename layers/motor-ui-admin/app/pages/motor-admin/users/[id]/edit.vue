<!-- app/pages/motor-admin/users/[id]/edit.vue -->
<script setup lang="ts">
import { userFormMeta } from '../../../../types/generated/form-meta'
import { userEditFormConfig, userSelectOptionConfigs, userEditExtraFields } from '@motor-cms/ui-core/app/types/config/user'

definePageMeta({ layout: 'default', permission: 'users.write' })

const route = useRoute()
const { t } = useI18n()

const { fields: rawFields, schema, groups, state, loading, fetching, fetchError, canWrite, formRef, selectOptions, selectOptionsLoading, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/users',
  routePrefix: '/motor-admin/users',
  translationPrefix: 'motor-admin.users',
  formMeta: userFormMeta,
  formConfig: userEditFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: userSelectOptionConfigs,
  extraFields: userEditExtraFields(t),
  extraState: { change_password: false, password: '', password_confirmation: '' },
  beforeSubmit: (data) => {
    // Remove client-only fields from payload
    delete data.change_password
    delete data.password_confirmation

    // Only send password if toggle is on and value is set
    if (!state.change_password || !data.password) {
      delete data.password
    }
  }
})

// Add password confirmation validation to schema
const refinedSchema = schema.superRefine((data, ctx) => {
  if (data.change_password && data.password && data.password !== data.password_confirmation) {
    ctx.addIssue({
      code: 'custom',
      path: ['password_confirmation'],
      message: t('motor-admin.users.password_mismatch')
    })
  }
})

// Make fields reactive for toggle visibility
const fields = reactive(rawFields)

const passwordField = fields.find(f => f.key === 'password')
const confirmField = fields.find(f => f.key === 'password_confirmation')

watchEffect(() => {
  if (passwordField) passwordField.hidden = !state.change_password
  if (confirmField) confirmField.hidden = !state.change_password
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.users.edit_title')"
    back-route="/motor-admin/users"
    :loading="fetching"
    :error="fetchError"
  >
    <FormBase
      ref="formRef"
      :disabled="!canWrite"
      v-model:state="state"
      :fields="fields"
      :schema="refinedSchema"
      :groups="groups"
      :select-options="selectOptions"
      :select-options-loading="selectOptionsLoading"
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/users"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
