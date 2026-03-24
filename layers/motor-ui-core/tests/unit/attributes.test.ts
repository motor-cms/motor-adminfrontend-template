// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { isTruthyAttr } from '../../app/utils/attributes'

describe('isTruthyAttr', () => {
  it('isTruthyAttr-true-boolean', () => {
    expect(isTruthyAttr(true)).toBe(true)
  })

  it('isTruthyAttr-true-string', () => {
    expect(isTruthyAttr('true')).toBe(true)
  })

  it('isTruthyAttr-false-boolean', () => {
    expect(isTruthyAttr(false)).toBe(false)
  })

  it('isTruthyAttr-null-undefined', () => {
    expect(isTruthyAttr(null)).toBe(false)
    expect(isTruthyAttr(undefined)).toBe(false)
  })
})
