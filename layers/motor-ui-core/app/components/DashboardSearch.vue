<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui'
import { searchPalette } from '../composables/useGlobalSearch'

const router = useRouter()
const { t } = useI18n()

const searchTerm = ref('')
const loading = ref(false)
const groups = ref<CommandPaletteGroup<CommandPaletteItem>[]>([])
const totalResults = ref(0)

watchDebounced(
  searchTerm,
  async (query) => {
    if (!query || query.length < 2) {
      groups.value = []
      totalResults.value = 0
      return
    }

    loading.value = true
    try {
      const result = await searchPalette(query, t)
      groups.value = result.groups.map(group => ({
        id: group.id,
        label: group.label,
        ignoreFilter: true,
        items: group.items.map(item => ({
          id: item.id,
          label: item.label,
          icon: item.icon,
          avatar: item.avatar,
          ...(item.avatar ? { ui: { itemLeadingAvatarSize: 'lg' as const, item: 'items-center' } } : {}),
          suffix: item.suffix,
          onSelect() {
            router.push(item.to)
          }
        }) satisfies CommandPaletteItem)
      }))
      totalResults.value = result.total
    } catch {
      groups.value = []
      totalResults.value = 0
    } finally {
      loading.value = false
    }
  },
  { debounce: 300 }
)

function showAllResults() {
  router.push({ path: '/search', query: { search: searchTerm.value } })
}
</script>

<template>
  <UDashboardSearch
    v-model:search-term="searchTerm"
    :groups="groups"
    :loading="loading"
    :color-mode="false"
    :placeholder="t('motor-core.search.placeholder')"
    :ui="{ content: 'flex flex-col flex-1 min-h-0', viewport: 'flex-1 overflow-y-auto', footer: 'mt-auto shrink-0' }"
  >
    <template #empty>
      <div class="flex flex-col items-center justify-center py-8 text-sm text-[var(--ui-text-muted)]">
        <template v-if="!searchTerm || searchTerm.length < 2">
          <UIcon
            name="i-lucide-search"
            class="size-6 mb-2"
          />
          <span>{{ t('motor-core.search.min_chars') }}</span>
        </template>
        <template v-else-if="loading">
          <UIcon
            name="i-lucide-loader-2"
            class="size-6 mb-2 animate-spin"
          />
        </template>
        <template v-else>
          <UIcon
            name="i-lucide-search-x"
            class="size-6 mb-2"
          />
          <span>{{ t('motor-core.search.no_results') }}</span>
          <span class="text-xs text-[var(--ui-text-dimmed)] mt-1">{{ t('motor-core.search.no_results_hint') }}</span>
        </template>
      </div>
    </template>

    <template
      v-if="totalResults > 0 && searchTerm.length >= 2"
      #footer
    >
      <div class="flex justify-center border-t border-[var(--ui-border)] p-2">
        <UButton
          :label="t('motor-core.search.show_all', { count: totalResults })"
          variant="ghost"
          color="primary"
          size="sm"
          icon="i-lucide-arrow-right"
          trailing
          @click="showAllResults"
        />
      </div>
    </template>
  </UDashboardSearch>
</template>
