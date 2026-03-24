<!-- app/pages/motor-admin/email-templates/create.vue -->
<script setup lang="ts">
import { emailTemplateFormMeta } from '../../../types/generated/form-meta'
import { emailTemplateFormConfig, emailTemplateSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/email-template'

definePageMeta({ layout: 'default', permission: 'email-templates.write' })

const { t } = useI18n()
const { fields: rawFields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/email-templates',
  routePrefix: '/motor-admin/email-templates',
  translationPrefix: 'motor-admin.email_templates',
  formMeta: emailTemplateFormMeta,
  formConfig: emailTemplateFormConfig,
  mode: 'create',
  selectOptionConfigs: emailTemplateSelectOptionConfigs
})

const fields = reactive(rawFields)
const bodyHtmlField = fields.find(f => f.key === 'body_html')
if (bodyHtmlField) {
  watchEffect(() => {
    bodyHtmlField.hidden = !state.has_body_html
  })
}
</script>

<template>
  <FormPage
    :title="t('motor-admin.email_templates.create_title')"
    back-route="/motor-admin/email-templates"
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
      cancel-route="/motor-admin/email-templates"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
