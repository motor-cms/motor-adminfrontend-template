import type { GlobalSearchResponse, GlobalSearchResult, SearchAction, SearchGridRow } from '../types/search'
import type { PaginatedResponse } from '../types/grid'

type TFunc = (key: string) => string

// ============================================
// Route & Icon Registry
// ============================================

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
  'motor-builder/builder_custom_components': { route: '/motor-builder/builder-components/{id}/edit', icon: 'i-lucide-puzzle' },
  'motor-builder/navigation_trees': { route: '/motor-builder/navigation-trees/{id}', icon: 'i-lucide-list-tree' },
  'motor-builder/navigation_items': { route: '/motor-builder/navigation-trees/{meta.navigation_tree_id}/navigation-items/{id}/edit', icon: 'i-lucide-list' },
  'motor-builder/search_configs': { route: '/motor-builder/search-configs/{id}/edit', icon: 'i-lucide-search' },
  'motor-builder/seo_redirects': { route: '/motor-builder/seo-redirects/{id}/edit', icon: 'i-lucide-arrow-right-left' },
  // motor-assistant
  'motor-assistant/clickpaths': { route: '/motor-assistant/clickpaths/{id}/edit', icon: 'i-lucide-mouse-pointer-click' },
  // motor-scoring
  'motor-scoring/topics': { route: '/motor-scoring/topics/{id}/edit', icon: 'i-lucide-trophy' },
  // motor-content-type
  'motor-content-type/custom_content_types': { route: '/motor-content-type/content-types/{id}/edit', icon: 'i-lucide-layout-template' }
}

// ============================================
// Entity-Specific Actions
// ============================================

type ActionFactory = (result: GlobalSearchResult, t: TFunc) => SearchAction[]

const ACTIONS_MAP: Record<string, ActionFactory> = {
  // Builder pages intentionally have no quick actions on search results.
  // Linking and publishing are handled on the builder-pages list / detail
  // page; surfacing them here was confusing in the search context.
  'motor-media/files': (result, t) => {
    const mime = (result.meta?.mime_type as string) ?? ''
    const actions: SearchAction[] = []
    if (mime.startsWith('image/')) {
      actions.push({ key: 'lightbox', label: t('motor-media.files.preview'), icon: 'i-lucide-expand', emit: 'lightbox' })
    }
    actions.push(
      { key: 'download', label: t('motor-core.global.download'), icon: 'i-lucide-download', emit: 'download' },
      { key: 'copy-url', label: t('motor-media.files.copy_url'), icon: 'i-lucide-link', emit: 'copy-url' }
    )
    return actions
  },
  'motor-builder/navigation_trees': (result, t) => [
    { key: 'view', label: t('motor-core.search.action_view_tree'), icon: 'i-lucide-list-tree', to: resolveRoute(result) }
  ],
  'motor-admin/category_trees': (result, t) => [
    { key: 'view', label: t('motor-core.search.action_view_tree'), icon: 'i-lucide-folder-tree', to: resolveRoute(result) }
  ]
}

function defaultActions(_result: GlobalSearchResult, _t: TFunc): SearchAction[] {
  return []
}

export function resolveActions(result: GlobalSearchResult, t: TFunc): SearchAction[] {
  const key = routeKey(result.module, result.index)
  const factory = ACTIONS_MAP[key]
  return factory ? factory(result, t) : defaultActions(result, t)
}

// ============================================
// Module Labels
// ============================================

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

/**
 * Rewrites thumbnail URLs from the search API.
 * The backend may return URLs with http://localhost which don't resolve
 * in the browser. Replace the origin with the configured backendBaseUrl.
 */
export function resolveBackendUrl(url: string | undefined): string | undefined {
  if (!url) return undefined
  try {
    const parsed = new URL(url)
    if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1') {
      const config = useRuntimeConfig()
      const base = (config.public.backendBaseUrl as string).replace(/\/$/, '')
      return `${base}${parsed.pathname}`
    }
    return url
  } catch {
    return url
  }
}

export function resolveRoute(result: GlobalSearchResult): string {
  const entry = ROUTE_MAP[routeKey(result.module, result.index)]
  if (!entry || result.id == null) return '#'
  return entry.route
    .replace('{id}', String(result.id))
    .replace(/\{meta\.(\w+)\}/g, (_, key) => String(result.meta?.[key] ?? ''))
}

function resolveMimeIcon(mimeType: string): string {
  if (mimeType.startsWith('image/')) return 'i-lucide-image'
  if (mimeType === 'application/pdf') return 'i-lucide-file-text'
  if (mimeType.startsWith('video/')) return 'i-lucide-film'
  if (mimeType.startsWith('audio/')) return 'i-lucide-music'
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel') || mimeType === 'text/csv') return 'i-lucide-sheet'
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return 'i-lucide-presentation'
  if (mimeType.includes('word') || mimeType.includes('document')) return 'i-lucide-file-text'
  if (mimeType.includes('zip') || mimeType.includes('compressed') || mimeType.includes('archive')) return 'i-lucide-file-archive'
  if (mimeType.startsWith('text/')) return 'i-lucide-file-code'
  return 'i-lucide-file'
}

export function resolveIcon(module: string, index: string, meta?: Record<string, unknown>): string {
  if (meta?.mime_type && typeof meta.mime_type === 'string') {
    return resolveMimeIcon(meta.mime_type)
  }
  return ROUTE_MAP[routeKey(module, index)]?.icon ?? 'i-lucide-file'
}

export function resolveSuffix(result: GlobalSearchResult): string | undefined {
  const treeName = result.meta?.navigation_tree_name as string | undefined
  if (treeName) return treeName
  return undefined
}

export function resolveIndexLabel(module: string, index: string, t: TFunc): string {
  const key = `${module}.${index}.title`
  const translated = t(key)
  if (translated === key) {
    return index.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }
  return translated
}

export function resolveModuleLabel(module: string, t: TFunc): string {
  const key = MODULE_LABEL_KEYS[module]
  if (key) return t(key)
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
  excerpt?: string
  to: string
  module: string
  index: string
  actions: SearchAction[]
}

export interface PaletteGroup {
  id: string
  label: string
  items: PaletteItem[]
}

export interface PaletteSearchResult {
  groups: PaletteGroup[]
  total: number
  moduleFacets: Record<string, number>
}

export async function searchPalette(query: string, t: TFunc, limit = 10): Promise<PaletteSearchResult> {
  const client = useSanctumClient()
  const response = await client<GlobalSearchResponse>('/api/v2/global-search', {
    query: { q: query, limit }
  })

  const groupMap = new Map<string, { module: string, items: PaletteItem[] }>()

  for (const result of response.data) {
    const groupId = `${result.module}/${result.index}`
    if (!groupMap.has(groupId)) {
      groupMap.set(groupId, { module: result.module, items: [] })
    }
    const thumbnailUrl = resolveBackendUrl(result.meta?.thumbnail_url as string | undefined)
    const item: PaletteItem = {
      id: `${result.module}-${result.index}-${result.id}`,
      label: result.title ?? '(Untitled)',
      icon: resolveIcon(result.module, result.index, result.meta),
      suffix: resolveSuffix(result),
      excerpt: result.excerpt ?? undefined,
      to: resolveRoute(result),
      module: result.module,
      index: result.index,
      actions: resolveActions(result, t)
    }
    const mimeType = (result.meta?.mime_type as string) ?? ''
    if (thumbnailUrl && mimeType.startsWith('image/')) {
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
    total: response.meta.total,
    moduleFacets: response.meta.modules
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
  moduleFilter?: string,
  preClient?: ReturnType<typeof useSanctumClient>
): (params: { page: number, per_page: number, search?: string }) => Promise<PaginatedResponse<SearchGridRow>> {
  const client = preClient ?? useSanctumClient()
  let fetchId = 0

  const emptyResponse: PaginatedResponse<SearchGridRow> = {
    data: [],
    meta: { current_page: 1, last_page: 1, per_page: 25, total: 0, from: null, to: null }
  }

  return async (params) => {
    if (!params.search) return emptyResponse

    const currentFetchId = ++fetchId

    const query: Record<string, unknown> = {
      q: params.search,
      page: params.page,
      limit: params.per_page
    }

    if (moduleFilter) {
      query.module = moduleFilter
    }

    const response = await client<GlobalSearchResponse>('/api/v2/global-search', { query })

    if (currentFetchId !== fetchId) {
      return { data: [], meta: { current_page: 1, last_page: 1, per_page: params.per_page, total: 0, from: null, to: null } }
    }

    if (!moduleFilter) {
      _moduleFacets.value = response.meta.modules
    }

    const data: SearchGridRow[] = response.data.map(result => ({
      id: result.id,
      module: resolveModuleLabel(result.module, t),
      raw_module: result.module,
      index: result.index,
      raw_index: result.index,
      index_label: resolveIndexLabel(result.module, result.index, t),
      suffix: resolveSuffix(result),
      title: result.title,
      excerpt: result.excerpt,
      to: resolveRoute(result),
      icon: resolveIcon(result.module, result.index, result.meta),
      thumbnail_url: resolveBackendUrl(result.meta?.thumbnail_url as string | undefined),
      score: result.score,
      actions: resolveActions(result, t),
      entity_meta: result.meta
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
