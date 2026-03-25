<!-- app/pages/search.vue -->
<script setup lang="ts">
import type { SearchGridRow } from '@motor-cms/ui-core/app/types/search'
import type { PaginatedResponse, PaginationMeta } from '@motor-cms/ui-core/app/types/grid'
import { watchDebounced } from '@vueuse/core'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const client = useSanctumClient()
const toast = useToast()

const ALL_MODULES = '_all'
const moduleFilter = ref(ALL_MODULES)
const searchInput = ref((route.query.search as string) ?? '')
const page = ref(1)
const perPage = ref(25)
const loading = ref(false)
const results = ref<SearchGridRow[]>([])
const meta = ref<PaginationMeta | null>(null)

const moduleFacets = useModuleFacets()

if (route.query.module && typeof route.query.module === 'string') {
  moduleFilter.value = route.query.module
}

watch(() => route.query.search, (newSearch) => {
  const val = (newSearch as string) ?? ''
  if (val !== searchInput.value) {
    searchInput.value = val
    page.value = 1
    doSearch(true)
  }
})

watch(() => route.query.module, (newModule) => {
  const val = (newModule as string) ?? ALL_MODULES
  if (val !== moduleFilter.value) {
    moduleFilter.value = val || ALL_MODULES
  }
})

const facetTabs = computed(() => {
  const tabs = [{ label: t('motor-core.search.filter_all_modules'), value: ALL_MODULES, count: 0 }]
  let totalCount = 0
  for (const [key, count] of Object.entries(moduleFacets.value)) {
    totalCount += count
    tabs.push({ label: resolveModuleLabel(key, t), value: key, count })
  }
  tabs[0]!.count = totalCount
  return tabs
})

async function refreshFacets() {
  if (!searchInput.value || searchInput.value.length < 2) return
  const fetcher = fetchSearchGrid(t, undefined, client)
  await fetcher({ page: 1, per_page: 1, search: searchInput.value })
}

async function doSearch(updateFacets = false) {
  if (!searchInput.value || searchInput.value.length < 2) {
    results.value = []
    meta.value = null
    return
  }

  loading.value = true
  try {
    const activeModule = moduleFilter.value === ALL_MODULES ? undefined : moduleFilter.value

    if (updateFacets && activeModule) {
      await refreshFacets()
    }

    const fetcher = fetchSearchGrid(t, activeModule, client)
    const response: PaginatedResponse<SearchGridRow> = await fetcher({
      page: page.value,
      per_page: perPage.value,
      search: searchInput.value
    })
    results.value = response.data
    meta.value = response.meta
  } catch {
    results.value = []
    meta.value = null
  } finally {
    loading.value = false
  }
}

watchDebounced(searchInput, () => {
  page.value = 1
  doSearch(true)
  router.replace({ query: { ...route.query, search: searchInput.value || undefined } })
}, { debounce: 300 })

watch(moduleFilter, () => {
  page.value = 1
  doSearch()
  router.replace({
    query: {
      ...route.query,
      module: moduleFilter.value === ALL_MODULES ? undefined : moduleFilter.value
    }
  })
})

watch(page, () => doSearch())
watch(perPage, () => {
  page.value = 1
  doSearch()
})

// Builder page quicklinker
const quicklinkerOpen = ref(false)
const quicklinkerPageUuid = ref('')
const quicklinkerPageName = ref('')

async function handleCardAction(key: string, id: number | string | null, meta: Record<string, unknown> | undefined) {
  if (key === 'link-navigation' && meta?.uuid) {
    quicklinkerPageUuid.value = meta.uuid as string
    quicklinkerPageName.value = (meta.name as string) ?? ''
    quicklinkerOpen.value = true
  } else if (key === 'publish' && id) {
    try {
      await client(`/api/v2/builder-pages/${id}/publication`, {
        method: 'PUT',
        body: { is_published: true }
      })
      toast.add({
        title: t('motor-builder.builder_pages.toast_published'),
        color: 'success',
        icon: 'i-lucide-globe'
      })
    } catch {
      toast.add({
        title: t('motor-builder.builder_pages.toast_publish_error'),
        color: 'error',
        icon: 'i-lucide-alert-circle'
      })
    }
  }
}

onMounted(() => {
  if (searchInput.value) doSearch(true)
})
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Sticky header: title + search + toolbar -->
    <div class="sticky top-0 z-10 bg-[var(--ui-bg)] px-6 pt-6 pb-4 border-b border-[var(--ui-border)]">
      <div class="flex items-center gap-2 mb-3">
        <UDashboardSidebarToggle class="lg:hidden shrink-0 -ml-2" />
      </div>

      <div class="flex items-baseline gap-3 mb-4">
        <h1 class="text-xl font-semibold">
          {{ t('motor-core.search.title') }}
        </h1>
        <span class="text-sm text-dimmed hidden sm:inline">
          {{ t('motor-core.search.subtitle') }}
        </span>
      </div>

      <div class="mb-4">
        <UInput
          v-model="searchInput"
          :placeholder="t('motor-core.search.placeholder')"
          icon="i-lucide-search"
          size="lg"
          autofocus
          class="w-full"
          :ui="{ base: 'w-full' }"
        />
      </div>

      <div class="flex items-start gap-3">
        <!-- Left: facet tabs -->
        <div
          v-if="facetTabs.length > 2"
          class="flex flex-wrap gap-1.5 flex-1 min-w-0"
        >
          <UButton
            v-for="tab in facetTabs"
            :key="tab.value"
            :label="tab.count > 0 ? `${tab.label} (${tab.count})` : tab.label"
            size="sm"
            :variant="moduleFilter === tab.value ? 'solid' : 'ghost'"
            :color="moduleFilter === tab.value ? 'primary' : 'neutral'"
            @click="moduleFilter = tab.value"
          />
        </div>

        <!-- Right: pagination -->
        <GridPagination
          compact
          :meta="meta"
          :per-page-options="[25, 50, 100]"
          @update:page="page = $event"
          @update:per-page="perPage = $event"
        />
      </div>
    </div>

    <!-- Results -->
    <div class="flex flex-col gap-4 px-6 pt-4 pb-8">
      <!-- Loading skeleton -->
      <div
        v-if="loading"
        class="flex flex-col gap-2"
      >
        <USkeleton
          v-for="i in 5"
          :key="i"
          class="h-[76px] w-full rounded-[var(--ui-radius)]"
        />
      </div>

      <!-- Empty: no search term -->
      <div
        v-else-if="!searchInput || searchInput.length < 2"
        class="flex flex-col items-center justify-center py-12 gap-3"
      >
        <UIcon
          name="i-lucide-search"
          class="size-8 text-[var(--ui-text-muted)]"
        />
        <p class="text-sm font-medium text-[var(--ui-text-muted)]">
          {{ t('motor-core.search.min_chars') }}
        </p>
      </div>

      <!-- Empty: no results -->
      <div
        v-else-if="results.length === 0"
        class="flex flex-col items-center justify-center py-12 gap-3"
      >
        <UIcon
          name="i-lucide-search-x"
          class="size-8 text-[var(--ui-text-muted)]"
        />
        <p class="text-sm font-medium text-[var(--ui-text-muted)]">
          {{ t('motor-core.search.no_results') }}
        </p>
        <p class="text-xs text-[var(--ui-text-dimmed)]">
          {{ t('motor-core.search.no_results_hint') }}
        </p>
      </div>

      <!-- Result cards -->
      <template v-else>
        <div class="flex flex-col gap-2 mb-6">
          <SearchResultCard
            v-for="row in results"
            :key="`${row.raw_module}-${row.raw_index}-${row.id}`"
            :title="row.title"
            :excerpt="row.excerpt"
            :icon="row.icon"
            :thumbnail-url="row.thumbnail_url"
            :module="row.module"
            :index-label="row.index_label"
            :to="row.to"
            :actions="row.actions"
            :file-id="row.raw_index === 'files' ? row.id : undefined"
            :entity-id="row.id"
            :entity-meta="row.entity_meta"
            @action="handleCardAction"
          />
        </div>
      </template>
    </div>

    <LazyBuilderNavigationQuickLinker
      v-if="quicklinkerOpen"
      v-model:open="quicklinkerOpen"
      :page-uuid="quicklinkerPageUuid"
      :page-name="quicklinkerPageName"
    />
  </div>
</template>
