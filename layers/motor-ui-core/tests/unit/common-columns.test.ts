// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { createdAtColumn, updatedAtColumn } from '../../app/composables/useCommonColumns'

describe('useCommonColumns', () => {
  const t = (key: string) => key

  it('commonColumns-createdAt', () => {
    const column = createdAtColumn(t)
    expect(column.key).toBe('created_at')
    expect(column.label).toBe('motor-core.grid.column_created')
    expect(column.renderer).toBe('date')
    expect(column.sortable).toBe(true)
  })

  it('commonColumns-updatedAt', () => {
    const column = updatedAtColumn(t)
    expect(column.key).toBe('updated_at')
    expect(column.label).toBe('motor-core.grid.column_updated')
    expect(column.renderer).toBe('date')
    expect(column.sortable).toBe(true)
  })
})
