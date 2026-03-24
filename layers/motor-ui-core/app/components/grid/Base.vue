<!-- app/components/grid/BaseGrid.vue -->
<script setup lang="ts" generic="T extends Record<string, unknown>">
import { h, type Component } from 'vue'
import { useEventListener } from '@vueuse/core'
import type { TableColumn } from '@nuxt/ui'
import type {
  BaseGridProps,
  ColumnDef,
  RowActionDef,
  PaginatedResponse,
  PaginationMeta
} from '@motor-cms/ui-core/app/types/grid'

const props = withDefaults(defineProps<BaseGridProps<T>>(), {
  rowKey: 'id',
  nameKey: 'name',
  perPage: 25,
  perPageOptions: () => [25, 50, 100],
  searchable: true,
  disableDefaultActions: false,
  emptyText: undefined,
  emptyIcon: undefined,
  addRoute: undefined,
  addLabel: undefined,
  writePermission: undefined,
  deletePermission: undefined
})

const emit = defineEmits<{
  'row-click': [row: T]
}>()

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  if (!path.includes('.')) return obj[path]
  return path.split('.').reduce<unknown>(
    (acc, key) => (acc as Record<string, unknown>)?.[key],
    obj
  )
}

const router = useRouter()
const client = useSanctumClient()
const { t } = useI18n()
const { can } = usePermissions()

// Row click handling — skip navigation when click originates from interactive elements
const interactiveSelectors = 'a, button, input, select, textarea, [data-no-row-click]'

function handleRowClick(e: Event, row: T): void {
  const target = e.target as HTMLElement | null
  if (target?.closest(interactiveSelectors)) return

  emit('row-click', row)
  if (props.rowClickTo) {
    router.push(props.rowClickTo(row))
  }
}

// Renderer registry — all renderers registered via plugins
const { get: getRenderer } = useGridRenderers()

// Grid state management
const defaultColumnVisibility = Object.fromEntries(
  props.columns.filter(col => col.defaultHidden).map(col => [col.key, false])
)
const gridState = useGridState({
  gridId: props.id,
  defaultPerPage: props.perPage,
  defaultColumnVisibility
})

// Initialize filter keys synchronously before watcher to prevent double fetch
if (props.filters) {
  const filterKeys = props.filters.map(f => f.key)
  gridState.initFilters(filterKeys)
}

// Empty state create route (explicit prop or derived from basePath)
const resolvedAddRoute = computed(() => {
  if (props.addRoute) return props.addRoute
  if (props.basePath) return `${props.basePath}/create`
  return null
})

// Arrow key pagination + N for create new
useEventListener('keydown', (e: KeyboardEvent) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) return
  if (e.metaKey || e.ctrlKey || e.altKey) return

  if (!meta.value) return
  if (e.key === 'ArrowLeft' && meta.value.current_page > 1) {
    gridState.setPage(meta.value.current_page - 1)
  } else if (e.key === 'ArrowRight' && meta.value.current_page < meta.value.last_page) {
    gridState.setPage(meta.value.current_page + 1)
  } else if (e.key === 'n' && resolvedAddRoute.value && (!props.writePermission || can(props.writePermission))) {
    router.push(resolvedAddRoute.value)
  }
})

// Register contextual shortcuts for the overlay
const { register: registerShortcut, unregister: unregisterShortcut } = useShortcutRegistry()
const gridShortcuts = computed(() => {
  const entries = [
    { keys: ['←'], label: t('motor-core.shortcuts.prev_page'), icon: 'i-lucide-arrow-left' },
    { keys: ['→'], label: t('motor-core.shortcuts.next_page'), icon: 'i-lucide-arrow-right' }
  ]
  if (resolvedAddRoute.value) {
    entries.push({ keys: ['N'], label: t('motor-core.shortcuts.create_new'), icon: 'i-lucide-plus' })
  }
  return entries
})
watch(gridShortcuts, (shortcuts) => {
  registerShortcut({
    id: 'grid',
    label: t('motor-core.shortcuts.grid'),
    icon: 'i-lucide-table-2',
    shortcuts
  })
}, { immediate: true })
onUnmounted(() => unregisterShortcut('grid'))

// Data fetching — useAsyncData ensures SSR waits for data
const paramsKey = computed(() => JSON.stringify(gridState.toParams()))

const { data: response, status, error: fetchError, refresh: fetchData } = await useAsyncData<PaginatedResponse<T>>(
  `grid-${props.id}`,
  () => props.fetch(gridState.toParams()),
  { watch: [paramsKey] }
)

const loading = computed(() => status.value === 'pending')
const data = computed<T[]>(() => response.value?.data ?? [])
const meta = computed<PaginationMeta | null>(() => response.value?.meta ?? null)

// Selection state
const selectedRows = ref<T[]>([])

const hasBulkActions = computed(() => (props.bulkActions?.length ?? 0) > 0)

function onSelectionUpdate(v: T[]): void {
  selectedRows.value = v
}

const selectionModelValue = computed(() =>
  hasBulkActions.value ? selectedRows.value : undefined
)

const selectedIds = computed(() =>
  selectedRows.value.map(row => row[props.rowKey] as string | number)
)

function clearSelection(): void {
  selectedRows.value = []
}

watch(
  () => [gridState.state.search, gridState.state.filters],
  () => clearSelection(),
  { deep: true }
)

// Derive API base path from basePath (convention: /motor-admin/X -> /api/v2/X)
const apiBasePath = computed(() => {
  if (!props.basePath) return null
  return props.basePath.replace(/^\/motor-[^/]+\//, '/api/v2/')
})

// Row actions with defaults
const mergedRowActions = computed<RowActionDef<T>[]>(() => {
  const defaults: RowActionDef<T>[] = props.disableDefaultActions
    ? []
    : [
        {
          key: 'edit',
          label: t('motor-core.grid.edit'),
          icon: 'i-lucide-pencil',
          to: (row: T) => `${props.basePath}/${row[props.rowKey]}/edit`,
          visible: () => !props.writePermission || can(props.writePermission)
        },
        ...(apiBasePath.value
          ? [{
              key: 'delete',
              label: t('motor-core.grid.delete'),
              icon: 'i-lucide-trash-2',
              color: 'error' as const,
              confirm: t('motor-core.grid.confirm_delete_row'),
              visible: () => !props.deletePermission || can(props.deletePermission),
              handler: async (row: T) => {
                await client(`${apiBasePath.value}/${row[props.rowKey]}`, { method: 'DELETE' })
              }
            }]
          : [])
      ]

  // Merge user-provided actions with defaults
  const userActions = props.rowActions ?? []
  const result: RowActionDef<T>[] = []

  defaults.forEach((defaultAction) => {
    const userOverride = userActions.find(a => a.key === defaultAction.key)
    if (userOverride) {
      if (userOverride.enabled === false) {
        // Skip disabled default actions
        return
      }
      result.push({ ...defaultAction, ...userOverride })
    } else {
      result.push(defaultAction)
    }
  })

  // Add user actions that don't override defaults
  userActions.forEach((action) => {
    if (!defaults.find(d => d.key === action.key)) {
      result.push(action)
    }
  })

  return result
})

// Map TanStack column IDs to API sort keys (handles dotted accessorKeys like 'file.created_at')
const sortKeyMap = computed(() => {
  const map: Record<string, string> = {}
  for (const col of props.columns) {
    if (col.sortable) {
      // TanStack derives column id from accessorKey by replacing dots with underscores
      const tanstackId = col.key.replace(/\./g, '_')
      map[tanstackId] = col.sortKey ?? col.key
    }
  }
  return map
})

// Convert columns to UTable format
const tableColumns = computed(() => {
  const cols: TableColumn<T>[] = props.columns.map((col: ColumnDef<T>) => {
    const column: TableColumn<T> = {
      id: col.key,
      accessorKey: col.key,
      header: col.sortable
        ? ({ column: tableCol }) => {
            const isSorted = tableCol.getIsSorted()
            return h(resolveComponent('UButton') as Component, {
              'color': 'neutral',
              'variant': 'ghost',
              'label': col.label,
              'aria-label': `Sort by ${col.label}`,
              'icon': isSorted
                ? (isSorted === 'asc' ? 'i-lucide-arrow-up-narrow-wide' : 'i-lucide-arrow-down-wide-narrow')
                : 'i-lucide-arrow-up-down',
              'class': '-mx-2.5',
              'onClick': () => {
                const sorted = tableCol.getIsSorted()
                if (sorted === 'desc') tableCol.clearSorting()
                else tableCol.toggleSorting(sorted === 'asc')
              }
            })
          }
        : () => h('span', { class: 'text-sm font-medium text-[var(--ui-text)]' }, col.label),
      cell: ({ row }) => {
        const value = getNestedValue(row.original as Record<string, unknown>, col.key)
        const rendererName = col.renderer ?? 'text'
        const RendererComponent = getRenderer(rendererName)

        if (RendererComponent) {
          return h(RendererComponent as Component, {
            value,
            row: row.original,
            column: col
          })
        }

        return h('span', {}, String(value ?? '-'))
      }
    }

    // Build meta classes: truncation for text-like renderers, width, custom class
    const shouldTruncate = !col.renderer || col.renderer === 'text' || col.renderer === 'link'
    const tdClasses: string[] = []
    const thClasses: string[] = []

    if (shouldTruncate) tdClasses.push('truncate')
    if (col.class) tdClasses.push(col.class)
    if (col.width) {
      tdClasses.push(col.width)
      thClasses.push(col.width)
    }

    if (tdClasses.length > 0 || thClasses.length > 0) {
      column.meta = {
        class: {
          ...(tdClasses.length > 0 ? { td: tdClasses.join(' ') } : {}),
          ...(thClasses.length > 0 ? { th: thClasses.join(' ') } : {})
        }
      }
    }

    return column
  })

  // Add actions column if we have row actions
  if (mergedRowActions.value.length > 0) {
    cols.push({
      id: 'actions',
      header: '',
      cell: ({ row }) => {
        return h(resolveComponent('GridRowActions') as Component, {
          row: row.original,
          actions: mergedRowActions.value,
          nameKey: props.nameKey,
          onActionComplete: fetchData
        })
      },
      meta: {
        class: { th: 'w-12', td: 'w-12' }
      }
    })
  }

  return cols
})

// Sorting state for UTable — use a stable ref to avoid infinite update cycles
// (a computed get/set creates a new array each evaluation, causing UTable to re-emit)
const sorting = ref<Array<{ id: string, desc: boolean }>>(
  gridState.state.sort
    ? [{
        id: Object.entries(sortKeyMap.value).find(([, v]) => v === gridState.state.sort)?.[0] ?? gridState.state.sort,
        desc: gridState.state.direction === 'desc'
      }]
    : []
)

function onSortingUpdate(value: Array<{ id: string, desc: boolean }> | undefined): void {
  if (!value) return
  sorting.value = value
  if (value.length > 0 && value[0]) {
    const apiKey = sortKeyMap.value[value[0].id] ?? value[0].id
    gridState.setSort(apiKey, value[0].desc ? 'desc' : 'asc')
  } else {
    gridState.setSort(null)
  }
}

function onColumnVisibilityUpdate(v: Record<string, boolean> | undefined): void {
  if (v !== undefined) gridState.columnVisibility.value = v
}

function onRowSelect(e: Event, row: { original: T }): void {
  handleRowClick(e, row.original)
}

// Live announcement for screen readers
const liveAnnouncement = computed(() => {
  if (loading.value) return t('motor-core.grid.loading')
  if (!meta.value || meta.value.total === 0) return t('motor-core.grid.no_results')
  const from = meta.value.from ?? ((meta.value.current_page - 1) * meta.value.per_page + 1)
  const to = meta.value.to ?? Math.min(meta.value.current_page * meta.value.per_page, meta.value.total)
  return t('motor-core.grid.showing', { from, to, total: meta.value.total })
})

// Active filters detection
const hasActiveFilters = computed(() => {
  if (gridState.state.search) return true
  return Object.values(gridState.state.filters).some(
    (v: unknown) => isFilterValuePresent(v) && !(Array.isArray(v) && v.length === 0)
  )
})

// Expose refresh method
// eslint-disable-next-line vue/no-expose-after-await
defineExpose({
  refresh: fetchData
})
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 min-h-0">
    <!-- Toolbar -->
    <GridToolbar
      :searchable="searchable"
      :filters="filters"
      :columns="columns"
      :column-visibility="gridState.columnVisibility.value"
      :search-value="gridState.state.search"
      :filter-values="gridState.state.filters"
      :has-active-filters="hasActiveFilters"
      :meta="meta"
      :per-page-options="perPageOptions"
      @update:search-value="gridState.setSearch($event)"
      @update:filter-value="(key: string, value: unknown) => gridState.setFilter(key, value)"
      @update:column-visibility="(key: string, visible: boolean) => gridState.setColumnVisibility(key, visible)"
      @update:page="gridState.setPage($event)"
      @update:per-page="gridState.setPerPage($event)"
      @reset-filters="gridState.resetFilters()"
    >
      <template #toolbar-extra>
        <slot name="toolbar-extra" />
      </template>
    </GridToolbar>

    <!-- Bulk Actions -->
    <GridBulkActions
      v-if="bulkActions && bulkActions.length > 0"
      :actions="bulkActions"
      :selected-ids="selectedIds"
      @action-complete="fetchData"
      @clear-selection="clearSelection"
    />

    <!-- Error state -->
    <div
      v-if="fetchError"
      class="flex flex-col items-center justify-center py-12 gap-3"
    >
      <UIcon
        name="i-lucide-alert-triangle"
        class="text-red-500 size-8"
      />
      <p class="text-sm text-muted">
        {{ fetchError.message || t('motor-core.grid.fetch_error') }}
      </p>
      <UButton
        :label="t('motor-core.grid.retry')"
        icon="i-lucide-refresh-cw"
        variant="outline"
        size="sm"
        @click="fetchData()"
      />
    </div>

    <!-- Screen reader announcements -->
    <div
      class="sr-only"
      aria-live="polite"
      aria-atomic="true"
    >
      {{ liveAnnouncement }}
    </div>

    <!-- Table -->
    <UTable
      v-if="!fetchError"
      :model-value="selectionModelValue"
      :sorting="sorting"
      :column-visibility="gridState.columnVisibility.value"
      :data="data"
      :columns="(tableColumns as TableColumn<T>[])"
      :loading="loading"
      sticky
      :ui="{ base: 'table-fixed w-full', tr: rowClickTo ? 'cursor-pointer' : '' }"
      class="w-full flex-1 min-h-0"
      @update:model-value="onSelectionUpdate"
      @update:sorting="onSortingUpdate"
      @update:column-visibility="onColumnVisibilityUpdate"
      @select="onRowSelect"
    >
      <!-- Empty state -->
      <template #empty>
        <div
          v-if="loading"
          class="flex flex-col gap-2 py-4"
        >
          <USkeleton
            v-for="i in 5"
            :key="i"
            class="h-12 w-full"
          />
        </div>
        <slot
          v-else
          name="empty"
        >
          <!-- Filtered: no matching results -->
          <div
            v-if="hasActiveFilters"
            class="flex flex-col items-center justify-center py-12 gap-3"
          >
            <UIcon
              :name="emptyIcon ?? 'i-lucide-search-x'"
              class="size-8 text-muted"
            />
            <p class="text-sm font-medium text-muted">
              {{ emptyText ?? t('motor-core.grid.no_filter_results') }}
            </p>
            <p class="text-xs text-dimmed">
              {{ t('motor-core.grid.no_filter_results_hint') }}
            </p>
            <UButton
              :label="t('motor-core.grid.clear_filters')"
              icon="i-lucide-x"
              variant="outline"
              size="sm"
              @click="gridState.resetFilters()"
            />
          </div>
          <!-- Unfiltered: no records exist yet -->
          <div
            v-else
            class="flex flex-col items-center justify-center py-12 gap-3"
          >
            <UIcon
              :name="emptyIcon ?? 'i-lucide-inbox'"
              class="size-8 text-muted"
            />
            <p class="text-sm font-medium text-muted">
              {{ emptyText ?? t('motor-core.grid.no_records') }}
            </p>
            <p class="text-xs text-dimmed">
              {{ t('motor-core.grid.no_records_create') }}
            </p>
            <UButton
              v-if="resolvedAddRoute && (!writePermission || can(writePermission))"
              :to="resolvedAddRoute"
              :label="addLabel ?? t('motor-core.grid.no_records')"
              icon="i-lucide-plus"
              size="sm"
            />
          </div>
        </slot>
      </template>
    </UTable>
  </div>
</template>
