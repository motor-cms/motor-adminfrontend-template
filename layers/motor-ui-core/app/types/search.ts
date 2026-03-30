// ============================================
// API Response Types (from /v2/global-search)
// ============================================

export interface GlobalSearchResult {
  module: string
  index: string
  id: number | string | null
  title: string | null
  excerpt: string | null
  meta: Record<string, unknown>
  score: number
}

export interface GlobalSearchMeta {
  api_version: string
  query: string
  parsed_module: string | null
  parsed_term: string
  total: number
  page: number
  per_page: number
  last_page: number
  modules: Record<string, number>
}

export interface GlobalSearchResponse {
  data: GlobalSearchResult[]
  meta: GlobalSearchMeta
}

// ============================================
// Search Action (entity-specific quick actions)
// ============================================

export interface SearchAction {
  key: string
  label: string
  icon: string
  to?: string
  /** When set, the action emits this event name instead of navigating */
  emit?: string
}

// ============================================
// Transformed Row for Search Grid Page
// ============================================

export interface SearchGridRow {
  id: number | string | null
  module: string
  raw_module: string
  index: string
  raw_index: string
  index_label: string
  suffix?: string
  title: string | null
  excerpt: string | null
  to: string
  icon: string
  thumbnail_url?: string
  score: number
  actions: SearchAction[]
  entity_meta: Record<string, unknown>
}
