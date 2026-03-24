import type { GlobalSearchResponse, GlobalSearchResult, SearchGridRow } from '../types/search'
import type { PaginatedResponse } from '../types/grid'

type TFunc = (key: string) => string

// ============================================
// Route & Icon Registry
// ============================================
// Keyed by "module/index" (e.g. "motor-admin/users").
// Labels are resolved dynamically via i18n: t(`${module}.${index}.title`)

interface RouteEntry {
  route: string
  icon: string
}

const ROUTE_MAP: Record<string, RouteEntry> = {
  // motor-admin
  'motor-admin/users': { route: '/motor-admin/users/{id}/edit', icon: 'i-lucide-users' },
  'motor-admin/clients': { route: '/motor-admin/clients/{id}/edit', icon: 'i-lucide-building-2' },
  'motor-admin/roles': { route: '/motor-admin/roles/{id}/edit', icon: 'i-lucide-shield' },
  'motor-admin/languages': { route: '/motor-admin/languages/{id}/edit', icon: 'i-lucide-globe' },
  'motor-admin/permission_groups': { route: '/motor-admin/permission-groups/{id}/edit', icon: 'i-lucide-lock' },
  'motor-admin/email_templates': { route: '/motor-admin/email-templates/{id}/edit', icon: 'i-lucide-mail' },
  'motor-admin/ai_system_prompts': { route: '/motor-admin/ai-system-prompts/{id}/edit', icon: 'i-lucide-bot' },
  'motor-admin/domains': { route: '/motor-admin/domains/{id}/edit', icon: 'i-lucide-globe-2' },
  'motor-admin/config_variables': { route: '/motor-admin/config-variables/{id}/edit', icon: 'i-lucide-settings' },
  'motor-admin/category_trees': { route: '/motor-admin/category-trees/{id}', icon: 'i-lucide-folder-tree' },
  'motor-admin/categories': { route: '/motor-admin/category-trees/{id}', icon: 'i-lucide-folder' },
  // motor-media
  'motor-media/files': { route: '/motor-media/files/{id}/edit', icon: 'i-lucide-image' },
  // motor-builder
  'motor-builder/builder_pages': { route: '/motor-builder/builder-pages/{id}/edit', icon: 'i-lucide-file-text' },
  'motor-builder/builder_components': { route: '/motor-builder/builder-components/{id}/edit', icon: 'i-lucide-puzzle' },
  'motor-builder/navigation_trees': { route: '/motor-builder/navigation-trees/{id}', icon: 'i-lucide-list-tree' },
  'motor-builder/navigation_items': { route: '/motor-builder/navigation-trees/{id}', icon: 'i-lucide-list' },
  'motor-builder/search_configs': { route: '/motor-builder/search-configs/{id}/edit', icon: 'i-lucide-search' },
  'motor-builder/seo_redirects': { route: '/motor-builder/seo-redirects/{id}/edit', icon: 'i-lucide-arrow-right-left' },
  'motor-builder/publishing_times': { route: '/motor-builder/publishing-times/{id}/edit', icon: 'i-lucide-clock' },
  // motor-scoring
  'motor-scoring/topics': { route: '/motor-scoring/topics/{id}/edit', icon: 'i-lucide-trophy' },
  // motor-content-type
  'motor-content-type/content_types': { route: '#', icon: 'i-lucide-layout-template' }
}

// Module-level labels: motor-admin → "Administration", etc.
const MODULE_LABEL_KEYS: Record<string, string> = {
  'motor-admin': 'motor-core.global.administration',
  'motor-media': 'motor-media.global.media',
  'motor-builder': 'motor-builder.global.builder',
  'motor-scoring': 'motor-scoring.global.scoring'
}

// ============================================
// Lookups
// ============================================

function routeKey(module: string, index: string): string {
  return `${module}/${index}`
}

export function resolveRoute(result: GlobalSearchResult): string {
  const entry = ROUTE_MAP[routeKey(result.module, result.index)]
  if (!entry || result.id == null) return '#'
  return entry.route.replace('{id}', String(result.id))
}

export function resolveIcon(module: string, index: string): string {
  return ROUTE_MAP[routeKey(module, index)]?.icon ?? 'i-lucide-file'
}

/** Translate an index name via i18n: t(`${module}.${index}.title`) with fallback */
export function resolveIndexLabel(module: string, index: string, t: TFunc): string {
  const key = `${module}.${index}.title`
  const translated = t(key)
  // If t() returns the key itself, it means no translation exists — fall back
  if (translated === key) {
    return index.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }
  return translated
}

/** Translate a module name (e.g. "motor-admin" → "Administration") */
export function resolveModuleLabel(module: string, t: TFunc): string {
  const key = MODULE_LABEL_KEYS[module]
  if (key) return t(key)
  // Fallback: strip "motor-" prefix and capitalize
  return module.replace(/^motor-/, '').replace(/^\w/, c => c.toUpperCase())
}

// ============================================
// Command Palette Search
// ============================================

export interface PaletteItem {
  id: string
  label: string
  icon?: string
  avatar?: { src: string }
  suffix?: string
  to: string
}

export interface PaletteGroup {
  id: string
  label: string
  items: PaletteItem[]
}

export interface PaletteSearchResult {
  groups: PaletteGroup[]
  total: number
}

export async function searchPalette(query: string, t: TFunc, limit = 10): Promise<PaletteSearchResult> {
  const client = useSanctumClient()
  const response = await client<GlobalSearchResponse>('/api/v2/global-search', {
    query: { q: query, limit }
  })

  // Group results by index (entity type, e.g. "builder_pages" → "Seiten")
  const groupMap = new Map<string, { module: string, items: PaletteItem[] }>()

  for (const result of response.data) {
    const groupId = `${result.module}/${result.index}`
    if (!groupMap.has(groupId)) {
      groupMap.set(groupId, { module: result.module, items: [] })
    }
    const thumbnailUrl = result.meta?.thumbnail_url as string | undefined
    const item: PaletteItem = {
      id: `${result.module}-${result.index}-${result.id}`,
      label: result.title ?? '(Untitled)',
      icon: resolveIcon(result.module, result.index),
      to: resolveRoute(result)
    }
    if (thumbnailUrl) {
      item.avatar = { src: thumbnailUrl }
      delete item.icon
    }
    groupMap.get(groupId)!.items.push(item)
  }

  const groups: PaletteGroup[] = []
  for (const [groupId, { module, items }] of groupMap) {
    const index = groupId.split('/')[1]!
    groups.push({
      id: groupId,
      label: resolveIndexLabel(module, index, t),
      items
    })
  }

  return {
    groups,
    total: response.meta.total
  }
}

// ============================================
// Grid-Compatible Fetch (for search page)
// ============================================

const _moduleFacets = ref<Record<string, number>>({})

export function useModuleFacets() {
  return readonly(_moduleFacets)
}

export function fetchSearchGrid(
  t: TFunc,
  moduleFilter?: string
): (params: { page: number, per_page: number, search?: string }) => Promise<PaginatedResponse<SearchGridRow>> {
  const client = useSanctumClient()
  let fetchId = 0

  const emptyResponse: PaginatedResponse<SearchGridRow> = {
    data: [],
    meta: { current_page: 1, last_page: 1, per_page: 25, total: 0, from: null, to: null }
  }

  return async (params) => {
    // Skip API call when there's no search term
    if (!params.search) return emptyResponse

    const currentFetchId = ++fetchId

    const query: Record<string, unknown> = {
      q: params.search,
      page: params.page,
      limit: params.per_page
    }

    // Module prefix syntax: prepend "module: " to query if filter is active
    if (moduleFilter) {
      query.q = `${moduleFilter}: ${params.search || ''}`
    }

    const response = await client<GlobalSearchResponse>('/api/v2/global-search', { query })

    // Discard stale responses
    if (currentFetchId !== fetchId) {
      return { data: [], meta: { current_page: 1, last_page: 1, per_page: params.per_page, total: 0, from: null, to: null } }
    }

    // Update module facets as side-effect
    _moduleFacets.value = response.meta.modules

    // Transform to SearchGridRow
    const data: SearchGridRow[] = response.data.map(result => ({
      id: result.id,
      module: resolveModuleLabel(result.module, t),
      index: result.index,
      index_label: resolveIndexLabel(result.module, result.index, t),
      title: result.title,
      excerpt: result.excerpt,
      to: resolveRoute(result),
      score: result.score
    }))

    return {
      data,
      meta: {
        current_page: response.meta.page,
        last_page: response.meta.last_page,
        per_page: response.meta.per_page,
        total: response.meta.total,
        from: data.length > 0 ? (response.meta.page - 1) * response.meta.per_page + 1 : null,
        to: data.length > 0 ? (response.meta.page - 1) * response.meta.per_page + data.length : null
      }
    }
  }
}
