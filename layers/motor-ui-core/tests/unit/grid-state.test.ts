// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { isFilterValuePresent } from '../../app/composables/useGridState'

describe('useGridState', () => {
  describe('isFilterValuePresent', () => {
    it('isFilterValuePresent-truthy', () => {
      expect(isFilterValuePresent('hello')).toBe(true)
      expect(isFilterValuePresent(0)).toBe(true)
      expect(isFilterValuePresent(false)).toBe(true)
      expect(isFilterValuePresent([])).toBe(true)
      expect(isFilterValuePresent({})).toBe(true)
    })

    it('isFilterValuePresent-falsy', () => {
      expect(isFilterValuePresent(undefined)).toBe(false)
      expect(isFilterValuePresent(null)).toBe(false)
      expect(isFilterValuePresent('')).toBe(false)
    })
  })
})
