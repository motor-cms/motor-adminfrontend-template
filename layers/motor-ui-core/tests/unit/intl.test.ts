// AI-generated — review before merging
import { describe, expect, it } from 'vitest'
import { formatDate, parseDate, toIntlLocale } from '../../app/utils/intl'

describe('intl utils', () => {
  it('toIntlLocale-maps-de', () => {
    expect(toIntlLocale('de')).toBe('de-DE')
  })

  it('toIntlLocale-maps-en', () => {
    expect(toIntlLocale('en')).toBe('en-US')
  })

  it('parseDate-iso-string', () => {
    const parsed = parseDate('2025-10-29T13:22:00Z')
    expect(parsed.toISOString()).toBe('2025-10-29T13:22:00.000Z')
  })

  it('parseDate-datetime-no-timezone', () => {
    const parsed = parseDate('2025-10-29 13:22:00')
    expect(parsed.toISOString()).toBe('2025-10-29T13:22:00.000Z')
  })

  it('formatDate-valid-date', () => {
    const date = new Date('2025-10-29T13:22:00.000Z')
    const expected = new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'Europe/Berlin'
    }).format(date)

    expect(formatDate(date, 'de-DE', false)).toBe(expected)
  })

  it('toIntlLocale-passthrough-unknown', () => {
    expect(toIntlLocale('fr')).toBe('fr')
  })

  it('formatDate-with-time', () => {
    const date = new Date('2025-10-29T13:22:00.000Z')
    const withTime = formatDate(date, 'de-DE', true)
    const withoutTime = formatDate(date, 'de-DE', false)

    expect(withTime).not.toBe(withoutTime)
    expect(withTime).toMatch(/\d{1,2}:\d{2}/)
  })
})
