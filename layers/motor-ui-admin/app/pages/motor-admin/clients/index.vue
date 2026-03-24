<!-- app/pages/motor-admin/clients/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { clientMeta } from '../../../types/generated/grid-meta'

definePageMeta({ permission: 'clients.read' })

type Client = components['schemas']['ClientResource']

const { t } = useI18n()

const columns = columnsFromMeta<Client>(clientMeta, t, {
  pick: ['name', 'slug', 'city', 'country_iso_3166_1', 'website', 'is_active', 'contact_email'],
  overrides: {
    slug: { defaultHidden: true },
    country_iso_3166_1: { renderer: 'badge' }
  }
})

columns.push(createdAtColumn(t))

const filters = [useIsActiveFilter()]

const fetchClients = useGridFetch<Client>('/api/v2/clients')
</script>

<template>
  <GridPage
    :title="t('motor-admin.clients.title')"
    :subtitle="t('motor-admin.clients.subtitle')"
    add-route="/motor-admin/clients/create"
    :add-label="t('motor-admin.clients.add')"
    write-permission="clients.write"
  >
    <GridBase
      id="clients-grid"
      :fetch="fetchClients"
      :columns="columns"
      :filters="filters"
      base-path="/motor-admin/clients"
      :row-click-to="(row: any) => `/motor-admin/clients/${row.id}/edit`"
      write-permission="clients.write"
      delete-permission="clients.delete"
    />
  </GridPage>
</template>
