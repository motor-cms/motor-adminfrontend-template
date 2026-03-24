<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import type {
  FilterDef,
  BulkActionDef,
  PaginatedResponse,
  GridParams
} from '@motor-cms/ui-core/app/types/grid'
import type { FileResource } from '../../types/media'

const props = withDefaults(defineProps<{
  id: string
  fetch: (params: GridParams) => Promise<PaginatedResponse<FileResource>>
  filters?: FilterDef[]
  bulkActions?: BulkActionDef[]
  searchable?: boolean
  perPage?: number
}>(), {
  searchable: true,
  perPage: 25
})

const emit = defineEmits<{
  'show-usage': [fileId: number]
}>()

const { t } = useI18n()

// Grid state — used only for search + filters (URL-synced)
const gridState = useGridState({
  gridId: props.id,
  defaultPerPage: props.perPage
})

if (props.filters) {
  gridState.initFilters(props.filters.map(f => f.key))
}

// Accumulated items + internal pagination
const items = ref<FileResource[]>([])
const currentPage = ref(0)
const lastPage = ref(1)
const totalItems = ref(0)
const initialLoading = ref(true)
const loadingMore = ref(false)
const fetchError = ref<Error | null>(null)

// Selection
const selectedIds = ref<Set<number>>(new Set())
const hasBulkActions = computed(() => (props.bulkActions?.length ?? 0) > 0)

function toggleSelection(id: number, selected: boolean) {
  const next = new Set(selectedIds.value)
  if (selected) next.add(id)
  else next.delete(id)
  selectedIds.value = next
}

function clearSelection() {
  selectedIds.value = new Set()
}

const selectedIdsArray = computed(() => Array.from(selectedIds.value))

const hasActiveFilters = computed(() => {
  if (gridState.state.search) return true
  return Object.values(gridState.state.filters).some(
    v => v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0)
  )
})

const hasMore = computed(() => currentPage.value < lastPage.value)

// Build fetch params combining filters with internal page
function buildParams(page: number): GridParams {
  const params: GridParams = {
    page,
    per_page: props.perPage
  }
  if (gridState.state.search) params.search = gridState.state.search
  Object.entries(gridState.state.filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params[key] = value
    }
  })
  return params
}

async function loadPage(page: number, append: boolean): Promise<void> {
  try {
    const response = await props.fetch(buildParams(page))
    if (append) {
      items.value = [...items.value, ...response.data]
    } else {
      items.value = response.data
    }
    currentPage.value = response.meta.current_page
    lastPage.value = response.meta.last_page
    totalItems.value = response.meta.total
    fetchError.value = null
  } catch (e) {
    fetchError.value = e as Error
  }
}

async function loadMore(): Promise<void> {
  if (loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  try {
    await loadPage(currentPage.value + 1, true)
  } finally {
    loadingMore.value = false
  }
}

async function resetAndFetch(): Promise<void> {
  initialLoading.value = true
  currentPage.value = 0
  selectedIds.value = new Set()
  try {
    await loadPage(1, false)
  } finally {
    initialLoading.value = false
  }
}

defineExpose({ refresh: resetAndFetch })

// Register contextual shortcuts for the overlay
const { register: registerShortcut, unregister: unregisterShortcut } = useShortcutRegistry()
registerShortcut({
  id: 'media',
  label: t('motor-core.shortcuts.media'),
  icon: 'i-lucide-image',
  shortcuts: [
    { keys: ['meta', t('motor-core.shortcuts.click')], label: t('motor-core.shortcuts.select_multiple'), icon: 'i-lucide-mouse-pointer-click' }
  ]
})
onUnmounted(() => unregisterShortcut('media'))

// SSR-safe initial load (page 1)
const { error: ssrError } = await useAsyncData(
  `gallery-${props.id}-init`,
  () => loadPage(1, false)
)
if (ssrError.value) fetchError.value = ssrError.value
initialLoading.value = false

// Watch filter/search changes — reset accumulated data
const filterKey = computed(() => JSON.stringify({
  search: gridState.state.search,
  filters: gridState.state.filters
}))

watch(filterKey, () => {
  resetAndFetch()
})

// Intersection observer for infinite scroll
const sentinelRef = ref<HTMLElement | null>(null)

useIntersectionObserver(
  sentinelRef,
  ([entry]) => {
    if (entry?.isIntersecting && hasMore.value && !loadingMore.value && !initialLoading.value) {
      loadMore()
    }
  },
  { rootMargin: '200px' }
)
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 min-h-0">
    <!-- Toolbar (search + filters only, no pagination) -->
    <GridToolbar
      :searchable="searchable"
      :filters="filters"
      :search-value="gridState.state.search"
      :filter-values="gridState.state.filters"
      :has-active-filters="hasActiveFilters"
      @update:search-value="gridState.setSearch($event)"
      @update:filter-value="(key: string, value: unknown) => gridState.setFilter(key, value)"
      @reset-filters="gridState.resetFilters()"
    >
      <template #toolbar-extra>
        <span
          v-if="totalItems > 0"
          class="text-sm text-muted whitespace-nowrap"
        >
          {{ items.length }} / {{ totalItems }}
        </span>
        <slot name="toolbar-extra" />
      </template>
    </GridToolbar>

    <!-- Bulk Actions -->
    <GridBulkActions
      v-if="bulkActions && bulkActions.length > 0"
      :actions="bulkActions"
      :selected-ids="selectedIdsArray"
      @action-complete="resetAndFetch"
      @clear-selection="clearSelection"
    />

    <!-- Scrollable content area -->
    <div class="flex-1 min-h-0 overflow-y-auto p-2">
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
          @click="resetAndFetch()"
        />
      </div>

      <!-- Initial loading skeleton -->
      <div
        v-else-if="initialLoading"
        class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4"
      >
        <div
          v-for="i in 12"
          :key="i"
          class="break-inside-avoid mb-4"
        >
          <USkeleton
            class="w-full rounded-xl"
            :style="{ height: `${140 + (i % 4) * 40}px` }"
          />
        </div>
      </div>

      <!-- Gallery masonry grid -->
      <template v-else-if="items.length > 0">
        <div class="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
          <MediaGalleryCard
            v-for="item in items"
            :key="item.id"
            :item="item"
            :selectable="hasBulkActions"
            :selected="selectedIds.has(item.id)"
            @select="toggleSelection"
            @show-usage="emit('show-usage', $event)"
          />
        </div>

        <!-- Infinite scroll sentinel -->
        <div
          ref="sentinelRef"
          class="flex items-center justify-center py-6"
        >
          <div
            v-if="loadingMore"
            class="flex items-center gap-2 text-sm text-muted"
          >
            <UIcon
              name="i-lucide-loader-2"
              class="size-4 animate-spin"
            />
            {{ t('motor-core.global.loading') }}
          </div>
          <span
            v-else-if="!hasMore"
            class="text-xs text-dimmed"
          >
            {{ t('motor-media.files.all_loaded') }}
          </span>
        </div>
      </template>

      <!-- Empty states -->
      <div v-else>
        <div
          v-if="hasActiveFilters"
          class="flex flex-col items-center justify-center py-16 gap-3"
        >
          <UIcon
            name="i-lucide-search-x"
            class="size-10 text-muted"
          />
          <p class="text-sm font-medium text-muted">
            {{ t('motor-core.grid.no_filter_results') }}
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
        <div
          v-else
          class="flex flex-col items-center justify-center py-16 gap-3"
        >
          <UIcon
            name="i-lucide-image"
            class="size-10 text-muted"
          />
          <p class="text-sm font-medium text-muted">
            {{ t('motor-core.grid.no_records') }}
          </p>
          <p class="text-xs text-dimmed">
            {{ t('motor-core.grid.no_records_create') }}
          </p>
          <slot name="empty-action" />
        </div>
      </div>
    </div>
  </div>
</template>
