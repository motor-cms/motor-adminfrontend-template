<!-- app/pages/motor-admin/languages/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { languageMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'languages.read' })

type Language = components['schemas']['LanguageResource']

const { t } = useI18n()

const columns = columnsFromMeta<Language>(languageMeta, t, {
  pick: ['iso_639_1', 'english_name', 'native_name'],
  overrides: {
    iso_639_1: { renderer: 'badge', sortable: true, hideable: false },
    english_name: { sortable: true, hideable: false },
    native_name: { sortable: true }
  }
})

columns.push(createdAtColumn(t))

const { fetch: fetchLanguages } = useGridData<Language>('/api/v2/languages')
</script>

<template>
  <GridPage
    :title="t('motor-admin.languages.title')"
    :subtitle="t('motor-admin.languages.subtitle')"
    add-route="/motor-admin/languages/create"
    :add-label="t('motor-admin.languages.add')"
    write-permission="languages.write"
  >
    <GridBase
      id="languages-grid"
      :fetch="fetchLanguages"
      :columns="columns"
      base-path="/motor-admin/languages"
      :row-click-to="(row: any) => `/motor-admin/languages/${row.id}/edit`"
      write-permission="languages.write"
      delete-permission="languages.delete"
    />
  </GridPage>
</template>
