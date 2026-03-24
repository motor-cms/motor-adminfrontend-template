<!-- app/pages/motor-admin/category-trees/[id]/categories/create.vue -->
<script setup lang="ts">
import { categoryFormMeta } from '@motor-cms/ui-core/app/types/generated/form-meta'
import { categoryFormConfig } from '@motor-cms/ui-core/app/types/config/category'

definePageMeta({ layout: 'default', permission: 'categories.write' })

const route = useRoute()
const { t } = useI18n()
const treeId = route.params.id as string

const { fields, schema, groups, state, loading, selectOptions, selectOptionsLoading, formRef, onSubmit, onSaveAndNew } = await useEntityForm({
  apiEndpoint: `/api/v2/category-trees/${treeId}/categories`,
  routePrefix: `/motor-admin/category-trees/${treeId}`,
  translationPrefix: 'motor-admin.categories',
  formMeta: categoryFormMeta,
  formConfig: categoryFormConfig,
  mode: 'create',
  selectOptionConfigs: {
    parent_id: { endpoint: `/api/v2/category-trees/${treeId}/categories`, labelKey: 'name' }
  }
})
</script>

<template>
  <FormPage
    :title="t('motor-admin.categories.create_title')"
    :back-route="`/motor-admin/category-trees/${treeId}`"
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
      :cancel-route="`/motor-admin/category-trees/${treeId}`"
      show-save-and-new
      @submit="onSubmit"
      @save-and-new="onSaveAndNew"
    >
      <template #field-parent_id="{ value, update }">
        <UFormField
          name="parent_id"
          :label="t('motor-admin.categories.parent')"
          :required="true"
          orientation="horizontal"
          :ui="{ container: 'w-full max-w-lg' }"
        >
          <FormInputsCategoryTreePicker
            :tree-id="treeId"
            :model-value="(value as number | null)"
            :new-item-name="state.name as string ?? ''"
            @update:model-value="update"
            @update:previous-sibling-id="(v: number | null) => state.previous_sibling_id = v"
            @update:next-sibling-id="(v: number | null) => state.next_sibling_id = v"
          />
        </UFormField>
      </template>
    </FormBase>
  </FormPage>
</template>
