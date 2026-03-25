<script setup lang="ts">
import { watchDebounced, useEventListener } from '@vueuse/core'
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui'
import { searchPalette, resolveModuleLabel } from '../composables/useGlobalSearch'
import type { PaletteItem, PaletteSearchResult } from '../composables/useGlobalSearch'

const router = useRouter()
const toast = useToast()
const { t } = useI18n()
const runtimeConfig = useRuntimeConfig()
const backendBaseUrl = runtimeConfig.public.backendBaseUrl as string

const searchRef = ref<{ commandPaletteRef: { el: HTMLElement } } | null>(null)
const open = ref(false)
const searchTerm = ref('')
const loading = ref(false)
const groups = ref<CommandPaletteGroup<CommandPaletteItem>[]>([])
const totalResults = ref(0)
const moduleFacets = ref<Record<string, number>>({})

const paletteItemsById = ref<Map<string, PaletteItem>>(new Map())

const highlightedItem = ref<string | null>(null)

function onHighlight(payload: { ref: HTMLElement, value: unknown } | undefined) {
  highlightedItem.value = payload ? String((payload.value as Record<string, unknown>)?.id ?? '') : null
}

function onEnter() {
  if (searchTerm.value.length < 2) return
  if (highlightedItem.value) return
  showAllResults()
}

useEventListener('keydown', (e: KeyboardEvent) => {
  if (!open.value) return
  if (e.key !== 'Enter') return
  onEnter()
})

watchDebounced(
  searchTerm,
  async (query) => {
    if (!query || query.length < 2) {
      groups.value = []
      totalResults.value = 0
      moduleFacets.value = {}
      paletteItemsById.value = new Map()
      return
    }

    loading.value = true
    try {
      const result: PaletteSearchResult = await searchPalette(query, t)

      const itemMap = new Map<string, PaletteItem>()
      groups.value = result.groups.map(group => ({
        id: group.id,
        label: group.label,
        ignoreFilter: true,
        items: group.items.map((item) => {
          itemMap.set(item.id, item)
          return {
            id: item.id,
            label: item.label,
            icon: item.icon,
            avatar: item.avatar,
            description: item.excerpt,
            ...(item.avatar ? { ui: { itemLeadingAvatarSize: 'lg' as const, item: 'items-start' } } : {}),
            onSelect() {
              router.push(item.to)
            }
          } satisfies CommandPaletteItem
        })
      }))

      paletteItemsById.value = itemMap
      totalResults.value = result.total
      moduleFacets.value = result.moduleFacets
    } catch {
      groups.value = []
      totalResults.value = 0
      moduleFacets.value = {}
      paletteItemsById.value = new Map()
    } finally {
      loading.value = false
    }
  },
  { debounce: 300 }
)

const facetChips = computed(() => {
  return Object.entries(moduleFacets.value)
    .sort(([, a], [, b]) => b - a)
    .map(([key, count]) => ({
      module: key,
      label: resolveModuleLabel(key, t),
      count
    }))
})

function getFileId(item: PaletteItem): string | undefined {
  if (item.index !== 'files') return undefined
  return item.id.split('-').pop()
}

async function handleEmitAction(action: { key: string, emit?: string }, item: PaletteItem) {
  const fileId = getFileId(item)
  if (!fileId) return
  const downloadUrl = `${backendBaseUrl}/download/${fileId}`

  if (action.emit === 'download') {
    try {
      const response = await fetch(downloadUrl, { credentials: 'include' })
      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = item.label ?? 'download'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(blobUrl)
    } catch {
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = item.label ?? 'download'
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  } else if (action.emit === 'copy-url') {
    try {
      await navigator.clipboard.writeText(downloadUrl)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = downloadUrl
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    toast.add({
      title: t('motor-media.files.url_copied'),
      icon: 'i-lucide-check',
      color: 'success'
    })
  }
}

function showAllResults(moduleKey?: string) {
  const query: Record<string, string> = { search: searchTerm.value }
  if (moduleKey) query.module = moduleKey
  open.value = false
  nextTick(() => {
    router.push({ path: '/search', query })
  })
}
</script>

<template>
  <UDashboardSearch
    ref="searchRef"
    v-model:open="open"
    v-model:search-term="searchTerm"
    @highlight="onHighlight"
    :groups="groups"
    :loading="loading"
    :color-mode="false"
    :placeholder="t('motor-core.search.placeholder')"
    :ui="{
      root: 'flex flex-col min-h-0 min-w-0 divide-y divide-default h-full',
      content: 'flex flex-col flex-1 min-h-0 order-2',
      viewport: 'flex-1 overflow-y-auto min-h-0',
      footer: 'order-1 !p-0 empty:hidden',
      item: 'cursor-pointer',
      itemDescription: 'line-clamp-1'
    }"
  >
    <template #item-trailing="{ item }">
      <div class="flex items-center gap-1">
        <template v-if="paletteItemsById.get(item.id as string)?.actions?.length">
          <UTooltip
            v-for="action in paletteItemsById.get(item.id as string)!.actions.filter(a => a.to || a.emit === 'download' || a.emit === 'copy-url')"
            :key="action.key"
            :text="action.label"
          >
            <UButton
              :icon="action.icon"
              :to="action.emit ? undefined : action.to"
              size="xs"
              variant="ghost"
              color="neutral"
              @click.stop="action.emit ? handleEmitAction(action, paletteItemsById.get(item.id as string)!) : undefined"
            />
          </UTooltip>
        </template>
      </div>
    </template>

    <template #empty>
      <div class="flex flex-col items-center justify-center py-8 text-sm text-[var(--ui-text-muted)]">
        <template v-if="!searchTerm || searchTerm.length < 2">
          <UIcon
            name="i-lucide-search"
            class="size-6 mb-2"
          />
          <span>{{ t('motor-core.search.min_chars') }}</span>
          <span class="text-xs text-[var(--ui-text-dimmed)] mt-1">{{ t('motor-core.search.keyboard_hint') }}</span>
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
      v-if="searchTerm.length >= 2"
      #footer
    >
      <div class="border-b border-[var(--ui-border)] px-3 py-1.5 flex items-center gap-2">
        <div
          v-if="totalResults > 0"
          class="flex items-center gap-1.5 flex-1 min-w-0 overflow-x-auto"
        >
          <UBadge
            :label="`${totalResults}`"
            size="sm"
            variant="subtle"
            color="primary"
            class="cursor-pointer hover:bg-[var(--ui-bg-elevated)] transition-colors shrink-0"
            @click.stop.prevent="showAllResults()"
          />
          <template v-if="facetChips.length > 1">
            <span class="w-px h-3.5 bg-[var(--ui-border)] shrink-0" />
            <UBadge
              v-for="chip in facetChips"
              :key="chip.module"
              :label="`${chip.label} ${chip.count}`"
              size="sm"
              variant="subtle"
              color="neutral"
              class="cursor-pointer hover:bg-[var(--ui-bg-elevated)] transition-colors shrink-0"
              @click.stop.prevent="showAllResults(chip.module)"
            />
          </template>
        </div>
        <div
          v-else-if="!loading"
          class="flex-1"
        />

        <div class="flex items-center gap-2.5 text-xs text-[var(--ui-text-dimmed)] shrink-0 ml-auto">
          <span class="inline-flex items-center gap-1">
            <UKbd size="sm" value="enter" />
            <span>{{ highlightedItem ? t('motor-core.search.keyboard_hint_open') : t('motor-core.search.keyboard_hint_all') }}</span>
          </span>
          <span class="inline-flex items-center gap-1">
            <UKbd size="sm" value="escape" />
            <span>{{ t('motor-core.search.keyboard_hint_close') }}</span>
          </span>
        </div>
      </div>
    </template>
  </UDashboardSearch>
</template>
