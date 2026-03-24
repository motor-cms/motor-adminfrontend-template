<!-- app/pages/motor-admin/domains/index.vue -->
<script setup lang="ts">
import type { ColumnDef } from '@motor-cms/ui-core/app/types/grid'
import { domainMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'domains.read' })

interface DomainApi {
  id: number
  name: string
  client?: { id: number, name: string }
  client_id: string
  is_active: boolean
  protocol: string
  host: string
  port: number
  path: string
  created_at: string
  updated_at: string
}

interface Domain {
  id: number
  name: string
  client_name: string
  is_active: boolean
  protocol: string
  host: string
  port: string
  path: string
  created_at: string
  updated_at: string
}

const { t } = useI18n()

const columns: ColumnDef<Domain>[] = [
  ...columnsFromMeta<Domain>(domainMeta, t, {
    pick: ['name', 'host', 'is_active'],
    overrides: {
      is_active: { renderer: 'boolean' }
    }
  })
]

// Insert client_name after name
columns.splice(1, 0, { key: 'client_name', label: t('motor-admin.clients.client') })

// Insert protocol before is_active (index 3 after splice)
columns.splice(3, 0, {
  key: 'protocol',
  label: t('motor-admin.domains.protocol'),
  renderer: 'badge',
  rendererProps: {
    color: (value: string | null) => value === 'https' ? 'success' : 'warning'
  }
})

columns.push(createdAtColumn(t))

const filters = [useClientFilter(), useIsActiveFilter()]

const fetchDomains = useGridFetch<DomainApi, Domain>('/api/v2/domains', {
  transform: record => ({
    id: record.id,
    name: record.name,
    client_name: record.client?.name ?? '-',
    is_active: record.is_active,
    protocol: record.protocol,
    host: record.host,
    port: String(record.port),
    path: record.path,
    created_at: record.created_at,
    updated_at: record.updated_at
  })
})
</script>

<template>
  <GridPage
    :title="t('motor-admin.domains.title')"
    :subtitle="t('motor-admin.domains.subtitle')"
    add-route="/motor-admin/domains/create"
    :add-label="t('motor-admin.domains.add')"
    write-permission="domains.write"
  >
    <GridBase
      id="domains-grid"
      :fetch="fetchDomains"
      :columns="columns"
      :filters="filters"
      base-path="/motor-admin/domains"
      :row-click-to="(row: any) => `/motor-admin/domains/${row.id}/edit`"
      write-permission="domains.write"
      delete-permission="domains.delete"
    />
  </GridPage>
</template>
