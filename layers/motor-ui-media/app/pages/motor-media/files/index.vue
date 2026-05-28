<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import type { BulkActionDef, RowActionDef } from '@motor-cms/ui-core/app/types/grid'
import { fileMeta } from '../../../types/generated/grid-meta'
import { fileGridConfig } from '@motor-cms/ui-core/app/types/config/file'

type File = components['schemas']['FileResource']

definePageMeta({ permission: 'files.read' })

const client = useSanctumClient()
const { t } = useI18n()

const usageModalOpen = ref(false)
const usageEndpoint = ref('')

function openUsageModal(fileId: number) {
  usageEndpoint.value = `/api/v2/files/${fileId}/usage`
  usageModalOpen.value = true
}

// View mode toggle (persisted in cookie for SSR safety)
const viewMode = useCookie<'gallery' | 'table'>('media-view-mode', { default: () => 'gallery' })

// Table columns (only needed for table view)
const columns = columnsFromMeta<File>(fileMeta, t, fileGridConfig)

columns.unshift({
  key: 'file',
  label: t('motor-media.files.file'),
  renderer: 'image',
  width: 'w-36'
})

// Constrain description + filename so they wrap rather than forcing the
// table to horizontal-scroll on long unbroken filenames (ZRMDEV-221 follow-up).
const wrappingTextCell = {
  width: 'max-w-xs',
  class: 'whitespace-normal break-words'
}

const descIdx = columns.findIndex(c => c.key === 'description')
if (descIdx >= 0) {
  columns[descIdx] = { ...columns[descIdx], ...wrappingTextCell }
}
columns.splice(descIdx + 1, 0, {
  key: 'file.file_name',
  label: t('motor-media.files.file_name'),
  ...wrappingTextCell
})

columns.push({
  key: 'file.mime_type',
  label: t('motor-media.files.mime_type')
})

columns.push({
  key: 'is_excluded_from_search_index',
  label: t('motor-media.files.is_excluded_from_search_index'),
  renderer: 'boolean'
})

columns.push(createdAtColumn(t, { key: 'created_at', sortKey: 'created_at' }))

const rowActions: RowActionDef<File>[] = [
  {
    key: 'usage',
    label: t('motor-media.files.usage_title'),
    icon: 'i-lucide-link',
    silent: true,
    handler: (row: File) => {
      openUsageModal(row.id as number)
    }
  }
]

const filters = [useClientFilter(), useCategoryFilter('media')]

const bulkActions: BulkActionDef[] = [
  {
    key: 'delete',
    label: t('motor-core.grid.delete_selected'),
    icon: 'i-lucide-trash-2',
    color: 'error',
    permission: 'files.delete',
    confirm: count => t('motor-core.grid.confirm_delete', { count }),
    handler: async (ids) => {
      await Promise.all(
        ids.map(id => client(`/api/v2/files/${id}`, { method: 'DELETE' }))
      )
    }
  }
]

const fetchFiles = useGridFetch<File>('/api/v2/files')

const gallerySortOptions = computed(() => [
  { label: t('motor-core.grid.sort_newest_first'), field: 'created_at', direction: 'desc' as const },
  { label: t('motor-core.grid.sort_oldest_first'), field: 'created_at', direction: 'asc' as const }
])
</script>

<template>
  <GridPage
      :title="t('motor-media.files.title')"
      :subtitle="t('motor-media.files.subtitle')"
      add-route="/motor-media/files/create"
      :add-label="t('motor-media.files.add')"
      write-permission="files.write"
    >
      <template #actions>
        <div class="inline-flex rounded-lg ring-1 ring-[var(--ui-border)] overflow-hidden">
          <button
            class="flex items-center justify-center size-9 transition-colors"
            :class="viewMode === 'gallery'
              ? 'bg-[var(--ui-primary)] text-white'
              : 'bg-[var(--ui-bg)] text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] hover:bg-[var(--ui-bg-elevated)]'"
            :title="t('motor-media.files.view_gallery')"
            @click="viewMode = 'gallery'"
          >
            <UIcon
              name="i-lucide-layout-grid"
              class="size-4"
            />
          </button>
          <button
            class="flex items-center justify-center size-9 transition-colors border-l border-[var(--ui-border)]"
            :class="viewMode === 'table'
              ? 'bg-[var(--ui-primary)] text-white'
              : 'bg-[var(--ui-bg)] text-[var(--ui-text-muted)] hover:text-[var(--ui-text)] hover:bg-[var(--ui-bg-elevated)]'"
            :title="t('motor-media.files.view_table')"
            @click="viewMode = 'table'"
          >
            <UIcon
              name="i-lucide-table-2"
              class="size-4"
            />
          </button>
        </div>
      </template>

      <!-- Gallery view -->
      <MediaGallery
        v-if="viewMode === 'gallery'"
        id="files"
        :fetch="fetchFiles"
        :filters="filters"
        :bulk-actions="bulkActions"
        :per-page="25"
        :sort-options="gallerySortOptions"
        @show-usage="openUsageModal"
      >
        <template #empty-action>
          <UButton
            to="/motor-media/files/create"
            :label="t('motor-media.files.add')"
            icon="i-lucide-plus"
            size="sm"
          />
        </template>
      </MediaGallery>

      <!-- Table view -->
      <GridBase
        v-else
        id="files"
        :fetch="fetchFiles"
        :columns="columns"
        :filters="filters"
        :bulk-actions="bulkActions"
        base-path="/motor-media/files"
        name-key="description"
        :row-actions="rowActions"
        write-permission="files.write"
        delete-permission="files.delete"
        default-sort="created_at"
        default-direction="desc"
        :row-click-to="(row: any) => `/motor-media/files/${row.id}/edit`"
      />
  </GridPage>

  <EntityUsageModal
    v-model:open="usageModalOpen"
    :endpoint="usageEndpoint"
    :title="t('motor-media.files.usage_title')"
  />
</template>
