<!-- app/pages/motor-admin/category-trees/create.vue -->
<script setup lang="ts">
import { categoryTreeFormMeta } from '@motor-cms/ui-core/app/types/generated/form-meta'
import { categoryTreeFormConfig } from '@motor-cms/ui-core/app/types/config/category-tree'

definePageMeta({ layout: 'default', permission: 'category-trees.write' })

const { t } = useI18n()
const { fields, schema, groups, state, loading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: '/api/v2/category-trees',
  routePrefix: '/motor-admin/category-trees',
  translationPrefix: 'motor-admin.category_trees',
  formMeta: categoryTreeFormMeta,
  formConfig: categoryTreeFormConfig,
  mode: 'create'
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.category_trees.create_title')"
    back-route="/motor-admin/category-trees"
  >
    <FormBase
      ref="formRef"
      v-model:state="state"
      :fields="fields"
      :schema="schema"
      :groups="groups"
      :loading="loading"
      cancel-route="/motor-admin/category-trees"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
