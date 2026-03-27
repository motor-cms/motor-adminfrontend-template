import { describe, expect, it } from 'vitest'
import { parseLinkProps } from '../../app/composables/useLinkParsing'

describe('parseLinkProps', () => {
  it('linkParsing-mailto', () => {
    const result = parseLinkProps('mailto:user@example.com', '_self')
    expect(result.linkType).toBe('mailto')
    expect(result.url).toBe('user@example.com')
    expect(result.anchor).toBe('')
    expect(result.navigation).toBeNull()
  })

  it('linkParsing-tel', () => {
    const result = parseLinkProps('tel:+491234', '_self')
    expect(result.linkType).toBe('tel')
    expect(result.url).toBe('+491234')
    expect(result.anchor).toBe('')
    expect(result.navigation).toBeNull()
  })

  it('linkParsing-anchor', () => {
    const result = parseLinkProps('#section', '_self')
    expect(result.linkType).toBe('anchor')
    expect(result.url).toBe('')
    expect(result.anchor).toBe('section')
    expect(result.navigation).toBeNull()
  })

  it('linkParsing-external-url', () => {
    const result = parseLinkProps('https://example.com', '_self')
    expect(result.linkType).toBe('url')
    expect(result.url).toBe('https://example.com')
    expect(result.anchor).toBe('')
    expect(result.navigation).toBeNull()
  })

  it('linkParsing-target-blank', () => {
    const result = parseLinkProps('https://example.com', '_blank')
    expect(result.target).toBe('_blank')
    expect(result.linkType).toBe('url')
    expect(result.url).toBe('https://example.com')
  })
})
