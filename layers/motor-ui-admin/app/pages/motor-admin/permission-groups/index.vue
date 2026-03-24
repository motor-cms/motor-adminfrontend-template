<!-- app/pages/motor-admin/permission-groups/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { permissionGroupMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'permission-groups.read' })

type PermissionGroup = components['schemas']['PermissionGroupResource']

const { t } = useI18n()

const columns = columnsFromMeta<PermissionGroup>(permissionGroupMeta, t, {
  pick: ['name', 'sort_position', 'permissions'],
  overrides: {
    sort_position: { label: t('motor-admin.permissions.position'), sortable: true }
  },
  translationPrefix: 'motor-admin.permissions'
})

columns.push(createdAtColumn(t))

const fetchPermissionGroups = useGridFetch<PermissionGroup>('/api/v2/permission-groups')
</script>

<template>
  <GridPage
    :title="t('motor-admin.permissions.title')"
    :subtitle="t('motor-admin.permissions.subtitle')"
    add-route="/motor-admin/permission-groups/create"
    :add-label="t('motor-admin.permissions.add')"
    write-permission="permission-groups.write"
  >
    <GridBase
      id="permission-groups-grid"
      :fetch="fetchPermissionGroups"
      :columns="columns"
      base-path="/motor-admin/permission-groups"
      :row-click-to="(row: any) => `/motor-admin/permission-groups/${row.id}/edit`"
      write-permission="permission-groups.write"
      delete-permission="permission-groups.delete"
    />
  </GridPage>
</template>
