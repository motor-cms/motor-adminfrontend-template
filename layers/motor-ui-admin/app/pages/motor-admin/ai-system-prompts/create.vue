<!-- app/pages/motor-admin/ai-system-prompts/create.vue -->
<script setup lang="ts">
import { aISystemPromptFormMeta } from '../../../types/generated/form-meta'
import { aiSystemPromptFormConfig, aiSystemPromptSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/ai-system-prompt'

definePageMeta({ layout: 'default', permission: 'ai-system-prompts.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/ai-system-prompts',
  routePrefix: '/motor-admin/ai-system-prompts',
  translationPrefix: 'motor-admin.ai_system_prompts',
  formMeta: aISystemPromptFormMeta,
  formConfig: aiSystemPromptFormConfig,
  mode: 'create',
  selectOptionConfigs: aiSystemPromptSelectOptionConfigs
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.ai_system_prompts.create_title')"
    back-route="/motor-admin/ai-system-prompts"
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
      cancel-route="/motor-admin/ai-system-prompts"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
