<!-- app/pages/motor-admin/email-templates/index.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { RowActionDef } from '@motor-cms/ui-core/app/types/grid'
import { emailTemplateMeta } from '../../../types/generated/grid-meta'
import { emailTemplateGridConfig } from '@motor-cms/ui-core/app/types/config/email-template'

definePageMeta({ permission: 'email-templates.read' })

type EmailTemplate = components['schemas']['EmailTemplateResource']

const { t } = useI18n()

const usageModalOpen = ref(false)
const usageEndpoint = ref('')

const columns = columnsFromMeta<EmailTemplate>(emailTemplateMeta, t, emailTemplateGridConfig)

columns.push(createdAtColumn(t))

const rowActions: RowActionDef<EmailTemplate>[] = [
  {
    key: 'usage',
    label: t('motor-admin.email_templates.usage_title'),
    icon: 'i-lucide-link',
    silent: true,
    handler: (row: EmailTemplate) => {
      usageEndpoint.value = `/api/v2/email-templates/${row.id}/usage`
      usageModalOpen.value = true
    }
  }
]

const filters = [useClientFilter(), useLanguageFilter()]

const fetchEmailTemplates = useGridFetch<EmailTemplate>('/api/v2/email-templates')
</script>

<template>
  <div>
    <GridPage
      :title="t('motor-admin.email_templates.title')"
      :subtitle="t('motor-admin.email_templates.subtitle')"
      add-route="/motor-admin/email-templates/create"
      :add-label="t('motor-admin.email_templates.add')"
      write-permission="email-templates.write"
    >
      <GridBase
        id="email-templates-grid"
        :fetch="fetchEmailTemplates"
        :columns="columns"
        :filters="filters"
        :row-actions="rowActions"
        base-path="/motor-admin/email-templates"
        :row-click-to="(row: any) => `/motor-admin/email-templates/${row.id}/edit`"
        write-permission="email-templates.write"
        delete-permission="email-templates.delete"
      />
    </GridPage>

    <EntityUsageModal
      v-model:open="usageModalOpen"
      :endpoint="usageEndpoint"
      :title="t('motor-admin.email_templates.usage_title')"
    />
  </div>
</template>
