<!-- app/pages/motor-admin/config-variables/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { BulkActionDef } from '@motor-cms/ui-core/app/types/grid'
import { configVariableMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'config-variables.read' })

type ConfigVariable = components['schemas']['ConfigVariableResource']

const client = useSanctumClient()
const { t } = useI18n()

const columns = columnsFromMeta<ConfigVariable>(configVariableMeta, t, {
  pick: ['package', 'group', 'name', 'value', 'is_invisible'],
  overrides: {
    package: { renderer: 'badge' },
    group: { renderer: 'badge' }
  }
})

columns.push(createdAtColumn(t, { defaultHidden: true }))

const filters = [usePackageFilter(), useGroupFilter(), useIsInvisibleFilter()]

const bulkActions: BulkActionDef[] = [
  {
    key: 'delete',
    label: t('motor-core.grid.delete_selected'),
    icon: 'i-lucide-trash-2',
    color: 'error',
    permission: 'config-variables.delete',
    confirm: count => t('motor-core.grid.confirm_delete', { count }),
    handler: async (ids) => {
      await client('/api/v2/config-variables/bulk-delete', {
        method: 'POST',
        body: { ids }
      })
    }
  }
]

const fetchConfigVariables = useGridFetch<ConfigVariable>('/api/v2/config-variables')
</script>

<template>
  <GridPage
    :title="t('motor-admin.config_variables.title')"
    :subtitle="t('motor-admin.config_variables.subtitle')"
    add-route="/motor-admin/config-variables/create"
    :add-label="t('motor-admin.config_variables.add')"
    write-permission="config-variables.write"
  >
    <GridBase
      id="config-variables-grid"
      :fetch="fetchConfigVariables"
      :columns="columns"
      :filters="filters"
      :bulk-actions="bulkActions"
      base-path="/motor-admin/config-variables"
      :row-click-to="(row: any) => `/motor-admin/config-variables/${row.id}/edit`"
      write-permission="config-variables.write"
      delete-permission="config-variables.delete"
    />
  </GridPage>
</template>
