// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { getConversionUrl } from '../../app/composables/useConversionUrl'

describe('getConversionUrl', () => {
  it('conversionUrl-resolves-from-object', () => {
    const conversions = {
      thumb: { url: '/media/thumb.jpg' },
      large: { url: '/media/large.jpg' }
    }
    const result = getConversionUrl(conversions, 'thumb')
    expect(result).toBe('/media/thumb.jpg')
  })

  it('conversionUrl-resolves-from-array', () => {
    const conversions = [
      { name: 'thumb', url: '/media/thumb.jpg' },
      { name: 'large', url: '/media/large.jpg' }
    ]
    const result = getConversionUrl(conversions, 'large')
    expect(result).toBe('/media/large.jpg')
  })

  it('conversionUrl-fallback-url', () => {
    const conversions = {
      thumb: { url: '/media/thumb.jpg' }
    }
    const result = getConversionUrl(conversions, 'nonexistent', '/fallback.jpg')
    expect(result).toBe('/fallback.jpg')
  })

  it('conversionUrl-undefined-conversions', () => {
    const result = getConversionUrl(undefined)
    expect(result).toBeUndefined()
  })

  it('conversionUrl-undefined-conversions-with-fallback', () => {
    const result = getConversionUrl(undefined, 'thumb', '/fallback.jpg')
    expect(result).toBe('/fallback.jpg')
  })

  it('conversionUrl-array-not-found-with-fallback', () => {
    const conversions = [{ name: 'thumb', url: '/thumb.jpg' }]
    const result = getConversionUrl(conversions, 'large', '/fallback.jpg')
    expect(result).toBe('/fallback.jpg')
  })

  it('conversionUrl-array-not-found-no-fallback', () => {
    const conversions = [{ name: 'thumb', url: '/thumb.jpg' }]
    const result = getConversionUrl(conversions, 'large')
    expect(result).toBeUndefined()
  })

  it('conversionUrl-defaults-to-thumb', () => {
    const conversions = {
      thumb: { url: '/thumb.jpg' },
      large: { url: '/large.jpg' }
    }
    const result = getConversionUrl(conversions)
    expect(result).toBe('/thumb.jpg')
  })

  it('conversionUrl-object-fallback-when-key-missing', () => {
    const conversions = { thumb: { url: '/thumb.jpg' } }
    const result = getConversionUrl(conversions, 'medium', '/fallback.jpg')
    expect(result).toBe('/fallback.jpg')
  })
})
