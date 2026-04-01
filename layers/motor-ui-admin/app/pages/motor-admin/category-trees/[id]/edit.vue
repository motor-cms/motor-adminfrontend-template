<!-- app/pages/motor-admin/category-trees/[id]/edit.vue -->
<script setup lang="ts">
import { categoryTreeFormMeta } from '@motor-cms/ui-core/app/types/generated/form-meta'
import { categoryTreeEditFormConfig } from '@motor-cms/ui-core/app/types/config/category-tree'

definePageMeta({ layout: 'default', permission: 'category-trees.read' })

const route = useRoute()
const { fields, schema, groups, state, loading, fetching, fetchError, canWrite, pageTitle, formRef, onSubmit, onSaveAndContinue, onSaveAndNew, deleteRecord, deleting } = await useEntityForm({
  apiEndpoint: '/api/v2/category-trees',
  routePrefix: '/motor-admin/category-trees',
  translationPrefix: 'motor-admin.category_trees',
  formMeta: categoryTreeFormMeta,
  formConfig: categoryTreeEditFormConfig,
  mode: 'edit',
  id: route.params.id as string
})
</script>

<template>
  <FormPage
    :title="pageTitle"
    back-route="/motor-admin/category-trees"
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
      :loading="loading"
      :delete-record="deleteRecord"
      :deleting="deleting"
      cancel-route="/motor-admin/category-trees"
      show-save-and-continue
      show-save-and-new
      @submit="onSubmit"
      @save-and-continue="onSaveAndContinue"
      @save-and-new="onSaveAndNew"
    />
  </FormPage>
</template>
