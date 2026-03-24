import type { ColumnDef } from '../types/grid'

export function createdAtColumn<T = Record<string, unknown>>(
  t: (key: string) => string,
  overrides?: Partial<ColumnDef<T>>
): ColumnDef<T> {
  return {
    key: 'created_at',
    label: t('motor-core.grid.column_created'),
    renderer: 'date',
    sortable: true,
    ...overrides
  }
}

export function updatedAtColumn<T = Record<string, unknown>>(
  t: (key: string) => string,
  overrides?: Partial<ColumnDef<T>>
): ColumnDef<T> {
  return {
    key: 'updated_at',
    label: t('motor-core.grid.column_updated'),
    renderer: 'date',
    sortable: true,
    ...overrides
  }
}
