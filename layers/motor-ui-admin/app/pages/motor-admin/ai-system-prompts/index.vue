<!-- app/pages/motor-admin/ai-system-prompts/index.vue -->
<script setup lang="ts">
import type { ColumnDef } from '@motor-cms/ui-core/app/types/grid'

definePageMeta({ permission: 'ai-system-prompts.read' })

interface AISystemPromptApi {
  id: number
  name: string
  prompt: string
  client: { id: number, name: string } | null
  client_id: number
  created_at: string
  updated_at: string
}

interface AISystemPrompt {
  id: number
  name: string
  prompt: string
  client_name: string
  created_at: string
  updated_at: string
}

const { t } = useI18n()

const columns: ColumnDef<AISystemPrompt>[] = [
  { key: 'name', label: t('motor-core.global.name'), sortable: true, hideable: false },
  { key: 'client_name', label: t('motor-admin.clients.client') },
  { key: 'prompt', label: t('motor-admin.ai_system_prompts.prompt'), class: 'truncate max-w-xs' },
  createdAtColumn(t)
]

const filters = [useClientFilter()]

const fetchAISystemPrompts = useGridFetch<AISystemPromptApi, AISystemPrompt>('/api/v2/ai-system-prompts', {
  transform: record => ({
    id: record.id,
    name: record.name,
    prompt: record.prompt,
    client_name: record.client?.name ?? '-',
    created_at: record.created_at,
    updated_at: record.updated_at
  })
})
</script>

<template>
  <GridPage
    :title="t('motor-admin.ai_system_prompts.title')"
    :subtitle="t('motor-admin.ai_system_prompts.subtitle')"
    add-route="/motor-admin/ai-system-prompts/create"
    :add-label="t('motor-admin.ai_system_prompts.add')"
    write-permission="ai-system-prompts.write"
  >
    <GridBase
      id="ai-system-prompts-grid"
      :fetch="fetchAISystemPrompts"
      :columns="columns"
      :filters="filters"
      base-path="/motor-admin/ai-system-prompts"
      :row-click-to="(row: any) => `/motor-admin/ai-system-prompts/${row.id}/edit`"
      write-permission="ai-system-prompts.write"
      delete-permission="ai-system-prompts.delete"
    />
  </GridPage>
</template>
