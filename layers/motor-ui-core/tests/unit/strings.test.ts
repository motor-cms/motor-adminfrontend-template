// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { toKebabCase } from '../../app/utils/strings'

describe('toKebabCase', () => {
  it('toKebabCase-basic', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world')
  })

  it('toKebabCase-special-chars', () => {
    expect(toKebabCase('Hello! @World#')).toBe('hello-world')
  })

  it('toKebabCase-multiple-spaces', () => {
    expect(toKebabCase('hello   world')).toBe('hello-world')
  })

  it('toKebabCase-trims-hyphens', () => {
    expect(toKebabCase('-hello world-')).toBe('hello-world')
  })

  it('toKebabCase-empty-string', () => {
    expect(toKebabCase('')).toBe('')
  })
})
