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
// Transformed Row for Search Grid Page
// ============================================

export interface SearchGridRow {
  id: number | string | null
  module: string
  index: string
  index_label: string
  title: string | null
  excerpt: string | null
  to: string
  score: number
}
