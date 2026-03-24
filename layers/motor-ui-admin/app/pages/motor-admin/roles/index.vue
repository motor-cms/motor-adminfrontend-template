<!-- app/pages/motor-admin/roles/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { roleMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'roles.read' })

type Role = components['schemas']['RoleResource']

const { t } = useI18n()

const columns = columnsFromMeta<Role>(roleMeta, t, {
  pick: ['name', 'guard_name', 'permissions'],
  overrides: {
    guard_name: { renderer: 'badge' }
  }
})

columns.push(createdAtColumn(t))

const filters = [useGuardNameFilter()]

const { fetch: fetchRoles } = useGridData<Role>('/api/v2/roles')
</script>

<template>
  <GridPage
    :title="t('motor-admin.roles.title')"
    :subtitle="t('motor-admin.roles.subtitle')"
    add-route="/motor-admin/roles/create"
    :add-label="t('motor-admin.roles.add')"
    write-permission="roles.write"
  >
    <GridBase
      id="roles-grid"
      :fetch="fetchRoles"
      :columns="columns"
      :filters="filters"
      base-path="/motor-admin/roles"
      :row-click-to="(row: any) => `/motor-admin/roles/${row.id}/edit`"
      write-permission="roles.write"
      delete-permission="roles.delete"
    />
  </GridPage>
</template>
