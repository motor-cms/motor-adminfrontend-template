<!-- app/pages/search.vue -->
<script setup lang="ts">
import type { SearchGridRow } from '@motor-cms/ui-core/app/types/search'
import type { ColumnDef } from '@motor-cms/ui-core/app/types/grid'

const { t } = useI18n()

const ALL_MODULES = '_all'
const moduleFilter = ref(ALL_MODULES)

const moduleFacets = useModuleFacets()
const moduleOptions = computed(() => {
  const options = [{ label: t('motor-core.search.filter_all_modules'), value: ALL_MODULES }]
  for (const [key, count] of Object.entries(moduleFacets.value)) {
    options.push({ label: `${resolveModuleLabel(key, t)} (${count})`, value: key })
  }
  return options
})

const activeModule = computed(() => moduleFilter.value === ALL_MODULES ? undefined : moduleFilter.value)
const fetchResults = computed(() => fetchSearchGrid(t, activeModule.value))

const columns: ColumnDef<SearchGridRow>[] = [
  {
    key: 'module',
    label: t('motor-core.search.column_module'),
    renderer: 'badge',
    width: 'w-[12%]'
  },
  {
    key: 'index_label',
    label: t('motor-core.search.column_type'),
    renderer: 'badge',
    rendererProps: { color: 'neutral' },
    width: 'w-[12%]'
  },
  {
    key: 'title',
    label: t('motor-core.search.column_title'),
    width: 'w-[30%]'
  },
  {
    key: 'excerpt',
    label: t('motor-core.search.column_excerpt')
  }
]
</script>

<template>
  <GridPage
    :title="t('motor-core.search.title')"
    :subtitle="t('motor-core.search.subtitle')"
  >
    <GridBase
      id="search-grid"
      :key="moduleFilter"
      :fetch="fetchResults"
      :columns="columns"
      :searchable="true"
      :row-click-to="(row: any) => row.to"
      :disable-default-actions="true"
    >
      <template #toolbar-extra>
        <USelectMenu
          v-model="moduleFilter"
          :items="moduleOptions"
          value-key="value"
          label-key="label"
          class="w-48"
          :clear="moduleFilter !== ALL_MODULES"
          @clear="moduleFilter = ALL_MODULES"
        />
      </template>

      <template #empty>
        <div class="flex flex-col items-center justify-center py-12 gap-3">
          <UIcon
            name="i-lucide-search"
            class="size-8 text-muted"
          />
          <p class="text-sm font-medium text-muted">
            {{ t('motor-core.search.min_chars') }}
          </p>
          <p class="text-xs text-dimmed">
            {{ t('motor-core.search.no_results_hint') }}
          </p>
        </div>
      </template>
    </GridBase>
  </GridPage>
</template>
