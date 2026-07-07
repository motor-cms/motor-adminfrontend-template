import { describe, expect, it } from 'vitest'
import { parseLinkProps, stripLinkPrefix } from '../../app/composables/useLinkParsing'

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

describe('stripLinkPrefix', () => {
  it('strips a leading tel: prefix', () => {
    expect(stripLinkPrefix('tel:068190698995')).toBe('068190698995')
  })

  it('strips a leading mailto: prefix', () => {
    expect(stripLinkPrefix('mailto:user@example.com')).toBe('user@example.com')
  })

  it('collapses a doubled tel: prefix from already-corrupted data', () => {
    expect(stripLinkPrefix('tel:tel:068190698995')).toBe('068190698995')
  })

  it('collapses a doubled mailto: prefix', () => {
    expect(stripLinkPrefix('mailto:mailto:user@example.com')).toBe('user@example.com')
  })

  it('collapses the corrupted "tel.:" prefix variant from legacy data', () => {
    expect(stripLinkPrefix('tel.:068190698990')).toBe('068190698990')
  })

  it('collapses a mixed tel:tel.: legacy value', () => {
    expect(stripLinkPrefix('tel:tel.:068190698990')).toBe('068190698990')
  })

  it('leaves a bare phone number untouched', () => {
    expect(stripLinkPrefix('068190698995')).toBe('068190698995')
  })

  it('leaves a url untouched', () => {
    expect(stripLinkPrefix('https://example.com')).toBe('https://example.com')
  })

  it('handles an empty value', () => {
    expect(stripLinkPrefix('')).toBe('')
  })
})
