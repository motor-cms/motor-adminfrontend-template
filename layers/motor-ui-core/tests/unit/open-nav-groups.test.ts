import { describe, expect, it } from 'vitest'
import { mergeOpenNavGroups } from '../../app/utils/open-nav-groups'

describe('mergeOpenNavGroups', () => {
  it('returns a new array so v-model consumers re-render (no in-place push)', () => {
    const current = ['a']
    const next = mergeOpenNavGroups(current, ['b'])
    expect(next).toEqual(['a', 'b'])
    expect(next).not.toBe(current)
    expect(current).toEqual(['a'])
  })

  it('keeps the same array when nothing new is active', () => {
    const current = ['a', 'b']
    expect(mergeOpenNavGroups(current, ['b'])).toBe(current)
  })

  it('dedupes', () => {
    expect(mergeOpenNavGroups([], ['x', 'x'])).toEqual(['x'])
  })
})
