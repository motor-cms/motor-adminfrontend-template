// ============================================
// Column Configuration
// ============================================

export type BadgeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'

// ============================================
// Per-Renderer Props
// ============================================

export interface BooleanRendererProps {
  trueLabel?: string
  falseLabel?: string
}

export interface DateRendererProps {
  showTime?: boolean
  locale?: string
}

export interface NumberRendererProps {
  locale?: string
  style?: 'decimal' | 'currency' | 'percent'
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  currency?: string
}

export interface LinkRendererProps {
  href?: string
  to?: (row: Record<string, unknown>) => string
}

export interface AvatarRendererProps {
  nameKey?: string
}

export interface BadgeRendererProps {
  color?: BadgeColor | ((value: string | null) => BadgeColor)
}

export interface ListRendererProps {
  itemKey?: string
  max?: number
}

// Renderers with no configurable props
export type TextRendererProps = Record<string, never>
export type IndentedTextRendererProps = Record<string, never>
export type TagsRendererProps = Record<string, never>

// ============================================
// Renderer Props Map
// ============================================

export interface RendererPropsMap {
  'boolean': BooleanRendererProps
  'date': DateRendererProps
  'number': NumberRendererProps
  'link': LinkRendererProps
  'avatar': AvatarRendererProps
  'badge': BadgeRendererProps
  'list': ListRendererProps
  'text': TextRendererProps
  'indented-text': IndentedTextRendererProps
  'tags': TagsRendererProps
}

export type RendererName = keyof RendererPropsMap

// ============================================
// ColumnDef with typed rendererProps
// ============================================

export interface ColumnDef<_T = Record<string, unknown>> {
  key: string
  label: string
  sortable?: boolean
  sortKey?: string
  renderer?: RendererName | (string & {})
  rendererProps?: RendererPropsMap[RendererName]
  width?: string
  align?: 'left' | 'center' | 'right'
  class?: string
  hideable?: boolean
  defaultHidden?: boolean
}

/**
 * Helper to create a column definition with typed rendererProps.
 * Usage: `typedColumn({ renderer: 'boolean', rendererProps: { trueLabel: 'Active' } })`
 */
export function typedColumn<R extends RendererName>(
  col: Omit<ColumnDef, 'renderer' | 'rendererProps'> & {
    renderer: R
    rendererProps?: RendererPropsMap[R]
  }
): ColumnDef {
  return col as ColumnDef
}

// ============================================
// Renderer Component Props (passed to all renderers)
// ============================================

export interface RendererProps<T = unknown> {
  value: T
  row: Record<string, unknown>
  column: ColumnDef
}

// ============================================
// Filter Configuration
// ============================================

export interface FilterOption {
  label: string
  value: string | number | boolean | null
}

export interface FilterDef {
  key: string
  label: string
  type: 'select' | 'boolean'
  options?: FilterOption[] | (() => Promise<FilterOption[]>)
  optionLabel?: string
  optionValue?: string
  multiple?: boolean
  searchable?: boolean
  placeholder?: string
  defaultValue?: unknown
}

// ============================================
// Actions Configuration
// ============================================

export interface BulkActionDef {
  key: string
  label: string
  icon?: string
  color?: 'primary' | 'error' | 'neutral'
  permission?: string
  confirm?: string | ((count: number) => string)
  handler: (ids: (string | number)[]) => Promise<void>
}

export interface RowActionDef<T = Record<string, unknown>> {
  key: string
  label: string | ((row: T) => string)
  icon?: string
  color?: 'primary' | 'error' | 'neutral'
  to?: string | ((row: T) => string)
  handler?: (row: T) => Promise<void> | void
  confirm?: string | ((row: T) => string)
  visible?: (row: T) => boolean
  enabled?: boolean
  silent?: boolean
}

// ============================================
// Renderer Value Types
// ============================================

export interface AvatarValue {
  url?: string
  name?: string
  conversions?: Record<string, { url: string }> | Array<{ name: string, url: string }>
}

export interface MediaValue {
  url?: string
  file_name?: string
  mime_type?: string
  conversions?: Record<string, { url: string }> | Array<{ name: string, url: string }>
}

// ============================================
// API Types
// ============================================

export interface GridParams {
  page: number
  per_page: number
  search?: string
  sort?: string
  direction?: 'asc' | 'desc'
  [key: string]: unknown
}

export interface PaginationMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
  from: number | null
  to: number | null
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}

// ============================================
// Grid State
// ============================================

export interface GridState {
  page: number
  perPage: number
  search: string
  sort: string | null
  direction: 'asc' | 'desc'
  filters: Record<string, unknown>
}

// ============================================
// Grid Props
// ============================================

export interface BaseGridProps<T = Record<string, unknown>> {
  id: string
  fetch: (params: GridParams) => Promise<PaginatedResponse<T>>
  rowKey?: string
  /** Row field used as display name in toasts (e.g. 'name', 'title'). Defaults to 'name'. */
  nameKey?: string
  columns: ColumnDef<T>[]
  filters?: FilterDef[]
  rowActions?: RowActionDef<T>[]
  bulkActions?: BulkActionDef[]
  basePath?: string
  perPage?: number
  perPageOptions?: number[]
  searchable?: boolean
  disableDefaultActions?: boolean
  emptyText?: string
  emptyIcon?: string
  addRoute?: string
  addLabel?: string
  writePermission?: string
  deletePermission?: string
  rowClickTo?: (row: T) => string
}
