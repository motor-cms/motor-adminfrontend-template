<!-- app/components/grid/GridToolbar.vue -->
<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import type { ColumnDef, FilterDef, FilterOption, PaginationMeta } from '@motor-cms/ui-core/app/types/grid'

const { t } = useI18n()

const props = withDefaults(defineProps<{
  searchable?: boolean
  filters?: FilterDef[]
  columns?: ColumnDef[]
  columnVisibility?: Record<string, boolean>
  searchValue: string
  filterValues: Record<string, unknown>
  hasActiveFilters?: boolean
  meta?: PaginationMeta | null
  perPageOptions?: number[]
}>(), {
  perPageOptions: () => [25, 50, 100]
})

const emit = defineEmits<{
  'update:searchValue': [value: string]
  'update:filterValue': [key: string, value: unknown]
  'update:columnVisibility': [key: string, visible: boolean]
  'reset-filters': []
  'update:page': [page: number]
  'update:perPage': [perPage: number]
}>()

// Debounced search
const searchInput = ref(props.searchValue)

watch(() => props.searchValue, (value) => {
  searchInput.value = value
})

watchDebounced(
  searchInput,
  (value: string) => {
    emit('update:searchValue', value)
  },
  { debounce: 300 }
)

// Reset filters handler
function onReset(): void {
  searchInput.value = ''
  emit('update:searchValue', '')
  emit('reset-filters')
}

function clearSearch(): void {
  searchInput.value = ''
  emit('update:searchValue', '')
}

// Track loaded async options
const loadedOptions = ref<Record<string, FilterOption[]>>({})
const loadingOptions = ref<Record<string, boolean>>({})

// Load async options
async function loadOptions(filter: FilterDef): Promise<FilterOption[]> {
  if (!filter.options) return []

  if (typeof filter.options === 'function') {
    if (loadedOptions.value[filter.key]) {
      return loadedOptions.value[filter.key]!
    }

    loadingOptions.value[filter.key] = true
    try {
      const options = await filter.options()
      loadedOptions.value[filter.key] = options
      return options
    } finally {
      loadingOptions.value[filter.key] = false
    }
  }

  return filter.options
}

// Get options for a filter
function getOptions(filter: FilterDef): FilterOption[] {
  if (typeof filter.options === 'function') {
    return loadedOptions.value[filter.key] ?? []
  }
  return filter.options ?? []
}

// Sentinel value for the "All" option (empty string is reserved by Radix Vue)
const ALL_VALUE = '__all__'

// Get options with "All" prepended for single-select filters
function getOptionsWithAll(filter: FilterDef): FilterOption[] {
  const allOption: FilterOption = {
    label: filter.placeholder ?? t('motor-core.grid.filter_all'),
    value: ALL_VALUE
  }
  return [allOption, ...getOptions(filter)]
}

function onFilterChange(key: string, value: unknown): void {
  emit('update:filterValue', key, value === ALL_VALUE ? undefined : value)
}

function asSelectValue(v: unknown): string | number {
  return v as string | number
}

function asMultiSelectValue(v: unknown): (string | number)[] {
  return (v as (string | number)[]) ?? []
}

const activeFiltersOnlyCount = computed(() => {
  let count = 0
  for (const v of Object.values(props.filterValues)) {
    if (isFilterValuePresent(v) && !(Array.isArray(v) && v.length === 0)) {
      count++
    }
  }
  return count
})

function isFilterActive(filter: FilterDef): boolean {
  const value = props.filterValues[filter.key]
  if (value === undefined || value === null || value === '') return false
  if (Array.isArray(value) && value.length === 0) return false
  return true
}

function getFilterDisplayValue(filter: FilterDef): string {
  const value = props.filterValues[filter.key]
  if (value === undefined || value === null) return ''

  const options = getOptions(filter)

  if (filter.multiple && Array.isArray(value)) {
    if (value.length === 1) {
      const opt = options.find(o => o.value === value[0])
      return opt?.label ?? String(value[0])
    }
    return t('motor-core.grid.selected', { count: value.length })
  }

  const opt = options.find(o => o.value === value)
  return opt?.label ?? String(value)
}

function clearFilter(filter: FilterDef): void {
  emit('update:filterValue', filter.key, filter.multiple ? [] : undefined)
}

// Column visibility
const hideableColumns = computed(() =>
  (props.columns ?? []).filter(col => col.hideable !== false && col.label)
)

const hasColumnSelector = computed(() => hideableColumns.value.length > 0)

// Load async options on mount
onMounted(() => {
  props.filters?.forEach((filter) => {
    if (typeof filter.options === 'function') {
      loadOptions(filter)
    }
  })
})
</script>

<template>
  <div class="flex items-start gap-3">
    <!-- Left: Search + Filters (wrap together) -->
    <div class="flex flex-wrap items-center gap-3 flex-1 min-w-0">
      <!-- Search Input -->
      <UInput
        v-if="searchable !== false"
        v-model="searchInput"
        icon="i-lucide-search"
        :placeholder="t('motor-core.grid.search_placeholder')"
        :aria-label="t('motor-core.grid.search_placeholder')"
        class="w-48"
        :ui="{ trailing: 'pe-0.5' }"
      >
        <template v-if="searchInput?.length" #trailing>
          <UButton
            color="neutral"
            variant="ghost"
            size="xs"
            icon="i-lucide-x"
            :aria-label="t('motor-core.grid.clear_search')"
            class="p-0.5"
            @click="clearSearch"
          />
        </template>
      </UInput>

      <!-- Filter Popover -->
      <UPopover v-if="filters?.length">
        <UButton
          icon="i-lucide-filter"
          variant="outline"
          color="neutral"
          aria-label="Filters"
          :ui="{ leadingIcon: 'size-3.5' }"
        >
          {{ t('motor-core.grid.filter') }}
          <UBadge
            v-if="activeFiltersOnlyCount > 0"
            color="primary"
            variant="solid"
            size="sm"
            class="ml-1"
          >
            {{ activeFiltersOnlyCount }}
          </UBadge>
        </UButton>

        <template #content>
          <div class="p-4 min-w-72 flex flex-col gap-4">
            <div
              v-for="filter in filters"
              :key="filter.key"
              class="flex flex-col gap-1.5"
            >
              <span class="text-sm font-medium text-[var(--ui-text-muted)]">
                {{ filter.label }}
              </span>

              <!-- Select Filter -->
              <USelect
                v-if="filter.type === 'select' && !filter.multiple"
                :model-value="asSelectValue(filterValues[filter.key] ?? ALL_VALUE)"
                :items="getOptionsWithAll(filter)"
                :loading="loadingOptions[filter.key]"
                value-key="value"
                label-key="label"
                @update:model-value="onFilterChange(filter.key, $event)"
              />

              <!-- Multi-Select Filter -->
              <USelect
                v-else-if="filter.type === 'select' && filter.multiple"
                :model-value="asMultiSelectValue(filterValues[filter.key])"
                :items="getOptions(filter)"
                :loading="loadingOptions[filter.key]"
                :placeholder="filter.placeholder ?? filter.label"
                value-key="value"
                label-key="label"
                multiple
                @update:model-value="emit('update:filterValue', filter.key, $event)"
              />

              <!-- Boolean Filter (Button Group) -->
              <div
                v-else-if="filter.type === 'boolean'"
                class="inline-flex rounded-md shadow-sm"
              >
                <UButton
                  v-for="(option, index) in getOptions(filter)"
                  :key="String(option.value)"
                  :color="filterValues[filter.key] === option.value ? 'primary' : 'neutral'"
                  :variant="filterValues[filter.key] === option.value ? 'solid' : 'outline'"
                  size="sm"
                  :class="[
                    index === 0 ? 'rounded-r-none' : '',
                    index === getOptions(filter).length - 1 ? 'rounded-l-none' : '',
                    index > 0 && index < getOptions(filter).length - 1 ? 'rounded-none' : '',
                    index > 0 ? '-ml-px' : ''
                  ]"
                  @click="emit('update:filterValue', filter.key, option.value)"
                >
                  {{ option.label }}
                </UButton>
              </div>
            </div>

            <!-- Reset all filters -->
            <UButton
              v-if="activeFiltersOnlyCount > 0"
              icon="i-lucide-filter-x"
              variant="ghost"
              color="neutral"
              size="sm"
              class="self-start"
              @click="onReset"
            >
              {{ t('motor-core.grid.reset') }}
            </UButton>
          </div>
        </template>
      </UPopover>

      <!-- Active Filter Chips -->
      <template
        v-for="filter in filters"
        :key="`chip-${filter.key}`"
      >
        <span
          v-if="isFilterActive(filter)"
          class="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full bg-[var(--ui-bg-elevated)] text-xs text-[var(--ui-text-muted)] border border-[var(--ui-border)]"
        >
          {{ filter.label }}: {{ getFilterDisplayValue(filter) }}
          <button
            class="inline-flex items-center justify-center rounded-full size-4 hover:bg-[var(--ui-bg-accented)] transition-colors"
            @click="clearFilter(filter)"
          >
            <UIcon
              name="i-lucide-x"
              class="size-3"
            />
          </button>
        </span>
      </template>
    </div>

    <!-- Right: Pagination + Column Selector (never wraps) -->
    <div class="flex items-center gap-3 flex-nowrap shrink-0">
      <GridPagination
        compact
        :meta="meta"
        :per-page-options="perPageOptions"
        @update:page="emit('update:page', $event)"
        @update:per-page="emit('update:perPage', $event)"
      />

      <!-- Column Selector (rightmost, next to table columns) -->
      <UPopover v-if="hasColumnSelector">
        <UButton
          icon="i-lucide-columns-3"
          variant="ghost"
          color="neutral"
          size="sm"
          aria-label="Toggle columns"
        />

        <template #content>
          <div class="flex flex-col gap-0.5 p-2 min-w-40">
            <div
              v-for="col in hideableColumns"
              :key="col.key"
              class="px-2 py-1 rounded hover:bg-elevated"
            >
              <UCheckbox
                :model-value="columnVisibility?.[col.key] !== false"
                :label="col.label"
                @update:model-value="emit('update:columnVisibility', col.key, $event === true)"
              />
            </div>
          </div>
        </template>
      </UPopover>

      <!-- Toolbar Extra Slot -->
      <slot name="toolbar-extra" />
    </div>
  </div>
</template>
