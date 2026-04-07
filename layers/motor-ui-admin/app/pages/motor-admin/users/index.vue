<!-- app/pages/motor-admin/users/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { BulkActionDef } from '@motor-cms/ui-core/app/types/grid'
import { userMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'users.read' })

type User = components['schemas']['UserResource']

const client = useSanctumClient()
const { t } = useI18n()

const columns = columnsFromMeta<User>(userMeta, t, {
  pick: ['avatar', 'name', 'email', 'roles'],
  overrides: {
    avatar: { label: '', width: '60px', hideable: false },
    email: { sortable: true }
  }
})

columns.push(createdAtColumn(t))

const filters = [useClientFilter()]

const bulkActions: BulkActionDef[] = [
  {
    key: 'delete',
    label: t('motor-core.grid.delete_selected'),
    icon: 'i-lucide-trash-2',
    color: 'error',
    permission: 'users.delete',
    confirm: count => t('motor-core.grid.confirm_delete', { count }),
    handler: async (ids) => {
      await client('/api/v2/users/bulk-delete', {
        method: 'POST',
        body: { ids }
      })
    }
  }
]

const { fetch: fetchUsers } = useGridData<User>('/api/v2/users')
</script>

<template>
  <UsersOnboarding />
  <GridPage
    :title="t('motor-admin.users.title')"
    :subtitle="t('motor-admin.users.subtitle')"
    add-route="/motor-admin/users/create"
    :add-label="t('motor-admin.users.add')"
    write-permission="users.write"
  >
    <GridBase
      id="users-grid"
      :fetch="fetchUsers"
      :columns="columns"
      :filters="filters"
      :bulk-actions="bulkActions"
      base-path="/motor-admin/users"
      :row-click-to="(row: any) => `/motor-admin/users/${row.id}/edit`"
      write-permission="users.write"
      delete-permission="users.delete"
    />
  </GridPage>
</template>
