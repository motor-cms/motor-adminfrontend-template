// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { columnsFromMeta } from '../../app/composables/useResourceColumns'

const meta = {
  schemaName: 'UserResource',
  fields: {
    name: { type: 'string', sortable: true },
    email: { type: 'string' },
    created_at: { type: 'datetime', renderer: 'date' }
  }
} as const

const t = (key: string) => key

describe('columnsFromMeta', () => {
  it('resourceColumns-builds-from-meta', () => {
    const columns = columnsFromMeta(meta, t)

    expect(columns).toHaveLength(3)
    expect(columns[0].key).toBe('name')
    expect(columns[0].sortable).toBe(true)
    expect(columns[0].label).toBe('Name')

    expect(columns[1].key).toBe('email')
    expect(columns[1].label).toBe('Email')

    expect(columns[2].key).toBe('created_at')
    expect(columns[2].renderer).toBe('date')
    expect(columns[2].label).toBe('Created At')
  })

  it('resourceColumns-pick-columns', () => {
    const columns = columnsFromMeta(meta, t, { pick: ['email', 'name'] })

    expect(columns).toHaveLength(2)
    expect(columns[0].key).toBe('email')
    expect(columns[1].key).toBe('name')
  })

  it('resourceColumns-omit-columns', () => {
    const columns = columnsFromMeta(meta, t, { omit: ['email'] })

    expect(columns).toHaveLength(2)
    expect(columns.map(c => c.key)).toEqual(['name', 'created_at'])
  })

  it('resourceColumns-overrides', () => {
    const columns = columnsFromMeta(meta, t, {
      overrides: {
        name: { label: 'Custom Name', sortable: false },
        email: { renderer: 'email' }
      }
    })

    const nameCol = columns.find(c => c.key === 'name')
    expect(nameCol?.label).toBe('Custom Name')
    expect(nameCol?.sortable).toBe(false)

    const emailCol = columns.find(c => c.key === 'email')
    expect(emailCol?.renderer).toBe('email')
  })

  it('resourceColumns-ref-field-with-labelKey-uses-dot-notation', () => {
    const refMeta = {
      schemaName: 'PostResource',
      fields: {
        author: { type: 'ref', labelKey: 'name', sortable: true },
        title: { type: 'string' }
      }
    } as const

    const columns = columnsFromMeta(refMeta, t)
    const authorCol = columns.find(c => c.key === 'author.name')
    expect(authorCol).toBeDefined()
    expect(authorCol!.key).toBe('author.name')
  })

  it('resourceColumns-ref-array-field-sets-rendererProps', () => {
    const refMeta = {
      schemaName: 'PostResource',
      fields: {
        tags: { type: 'ref[]', labelKey: 'name' }
      }
    } as const

    const columns = columnsFromMeta(refMeta, t)
    const tagsCol = columns.find(c => c.key === 'tags')
    expect(tagsCol).toBeDefined()
    expect(tagsCol!.rendererProps).toEqual({ itemKey: 'name' })
  })

  it('resourceColumns-hideable-field', () => {
    const hideableMeta = {
      schemaName: 'ItemResource',
      fields: {
        status: { type: 'string', hideable: true }
      }
    } as const

    const columns = columnsFromMeta(hideableMeta, t)
    expect(columns[0].hideable).toBe(true)
  })

  it('resourceColumns-custom-translationPrefix', () => {
    const customT = (key: string) => {
      if (key === 'custom.prefix.name') return 'Custom Name Label'
      return key
    }

    const columns = columnsFromMeta(meta, customT, { translationPrefix: 'custom.prefix' })
    expect(columns[0].label).toBe('Custom Name Label')
  })

  it('resourceColumns-pick-filters-non-existent-keys', () => {
    const columns = columnsFromMeta(meta, t, { pick: ['name', 'nonexistent'] })
    expect(columns).toHaveLength(1)
    expect(columns[0].key).toBe('name')
  })

  it('resourceColumns-pick-and-omit-combined', () => {
    const columns = columnsFromMeta(meta, t, {
      pick: ['name', 'email', 'created_at'],
      omit: ['email']
    })
    expect(columns).toHaveLength(2)
    expect(columns.map(c => c.key)).toEqual(['name', 'created_at'])
  })
})
