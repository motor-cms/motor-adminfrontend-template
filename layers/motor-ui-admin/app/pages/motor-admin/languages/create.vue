<script setup lang="ts">
import { languageFormMeta } from '../../../types/generated/form-meta'
import { languageFormConfig } from '@motor-cms/ui-core/app/types/config/language'

definePageMeta({ layout: 'default', permission: 'languages.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/languages',
  routePrefix: '/motor-admin/languages',
  translationPrefix: 'motor-admin.languages',
  formMeta: languageFormMeta,
  formConfig: languageFormConfig,
  mode: 'create'
})

const isoField = fields.find(f => f.key === 'iso_639_1')
watch(() => state.iso_639_1, (code) => {
  const opt = isoField?.staticOptions?.find(o => o.value === code)
  if (opt) {
    const match = opt.label.match(/^(.+?)\s*—\s*(.+?)\s*\(/)
    state.english_name = match?.[1]?.trim() ?? ''
    state.native_name = match?.[2]?.trim() ?? ''
  } else {
    state.english_name = ''
    state.native_name = ''
  }
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.languages.create_title')"
    back-route="/motor-admin/languages"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      cancel-route="/motor-admin/languages"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
