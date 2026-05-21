import type { ColumnDef } from '../types/grid'
import { schemaNameToPrefix, resolveLabel } from '../utils/i18n-helpers'

// ============================================
// Metadata types (matching grid-meta.ts shape)
// ============================================

export interface FieldMeta {
  readonly type: string
  readonly renderer?: string
  readonly sortable?: boolean
  readonly hideable?: boolean
  readonly ref?: string
  readonly labelKey?: string
}

export interface ResourceGridMeta {
  readonly schemaName: string
  readonly fields: Readonly<Record<string, FieldMeta>>
}

// ============================================
// Options for columnsFromMeta
// ============================================

export interface ColumnsFromMetaOptions<T> {
  pick?: string[]
  omit?: string[]
  overrides?: Record<string, Partial<ColumnDef<T>>>
  translationPrefix?: string
  /** vue-i18n te() for silent key-existence checks (avoids missing-key warnings) */
  te?: (key: string) => boolean
}

const GRID_SCHEMA_SUFFIX = /Resource$/

// ============================================
// Core function
// ============================================

export function columnsFromMeta<T = Record<string, unknown>>(
  meta: ResourceGridMeta,
  t: (key: string) => string,
  options?: ColumnsFromMetaOptions<T>
): ColumnDef<T>[] {
  const { pick, omit, overrides, translationPrefix, te: teProp } = options ?? {}
  const prefix = translationPrefix ?? schemaNameToPrefix(meta.schemaName, GRID_SCHEMA_SUFFIX)
  // Prefer explicit te from options; otherwise try vue-i18n's native te() to avoid missing-key warnings
  let teCheck: (key: string) => boolean
  if (teProp) {
    teCheck = teProp
  } else {
    try {
      const { te: i18nTe } = useI18n({ useScope: 'global' })
      teCheck = (key: string) => i18nTe(key)
    } catch {
      teCheck = (key: string) => t(key) !== key
    }
  }

  // Determine which field keys to include and in what order
  let fieldKeys: string[]

  if (pick) {
    // Only include picked fields, in the specified order
    fieldKeys = pick.filter(key => key in meta.fields)
  } else {
    fieldKeys = Object.keys(meta.fields)
  }

  if (omit) {
    const omitSet = new Set(omit)
    fieldKeys = fieldKeys.filter(key => !omitSet.has(key))
  }

  return fieldKeys.map((key) => {
    const field = meta.fields[key]!

    // Build the column key — for ref fields with a labelKey, use dot notation
    let columnKey = key
    if ((field.type === 'ref') && field.labelKey) {
      columnKey = `${key}.${field.labelKey}`
    }

    // Build base column definition from metadata
    const column: ColumnDef<T> = {
      key: columnKey,
      label: resolveLabel(t, teCheck, prefix, key)
    }

    // Apply renderer if specified in meta
    if (field.renderer) {
      column.renderer = field.renderer
    }

    // Apply sortable if specified
    if (field.sortable !== undefined) {
      column.sortable = field.sortable
    }

    // Apply hideable if specified
    if (field.hideable !== undefined) {
      column.hideable = field.hideable
    }

    // For ref[] with a labelKey, set rendererProps.itemKey
    if (field.type === 'ref[]' && field.labelKey) {
      column.rendererProps = { itemKey: field.labelKey }
    }

    // Merge overrides on top (using the original field key, not the dot-notation column key)
    const fieldOverrides = overrides?.[key]
    if (fieldOverrides) {
      Object.assign(column, fieldOverrides)
    }

    return column
  })
}
