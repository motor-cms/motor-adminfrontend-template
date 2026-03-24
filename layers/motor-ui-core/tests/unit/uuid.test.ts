// AI-generated — review before merging
import { describe, expect, it, vi } from 'vitest'
import { generateUuid } from '../../app/utils/uuid'

describe('generateUuid', () => {
  it('uuid-generates-valid-format', () => {
    const uuid = generateUuid()
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    expect(uuid).toMatch(uuidV4Regex)
  })

  it('uuid-generates-unique-values', () => {
    const uuids = new Set(Array.from({ length: 100 }, () => generateUuid()))
    expect(uuids.size).toBe(100)
  })

  it('uuid-fallback-without-crypto', () => {
    const original = crypto.randomUUID
    vi.stubGlobal('crypto', { ...crypto, randomUUID: undefined })

    const uuid = generateUuid()
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    expect(uuid).toMatch(uuidV4Regex)

    vi.stubGlobal('crypto', { ...crypto, randomUUID: original })
  })
})
