<!-- app/pages/motor-admin/ai-system-prompts/[id]/edit.vue -->
<script setup lang="ts">
import { aISystemPromptFormMeta } from '../../../../types/generated/form-meta'
import { aiSystemPromptFormConfig, aiSystemPromptSelectOptionConfigs } from '@motor-cms/ui-core/app/types/config/ai-system-prompt'

definePageMeta({ layout: 'default', permission: 'ai-system-prompts.write' })

const route = useRoute()
const { t } = useI18n()
const { fields, schema, groups, state, loading, fetching, fetchError, formRef, selectOptions, selectOptionsLoading, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/ai-system-prompts',
  routePrefix: '/motor-admin/ai-system-prompts',
  translationPrefix: 'motor-admin.ai_system_prompts',
  formMeta: aISystemPromptFormMeta,
  formConfig: aiSystemPromptFormConfig,
  mode: 'edit',
  id: route.params.id as string,
  selectOptionConfigs: aiSystemPromptSelectOptionConfigs
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.ai_system_prompts.edit_title')"
    back-route="/motor-admin/ai-system-prompts"
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
      cancel-route="/motor-admin/ai-system-prompts"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
