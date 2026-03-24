const localeMap: Record<string, string> = {
  de: 'de-DE',
  en: 'en-US'
}

/**
 * Maps a short i18n locale (e.g. 'de') to a full Intl locale (e.g. 'de-DE').
 * Returns the input unchanged if no mapping exists.
 */
export function toIntlLocale(locale: string): string {
  return localeMap[locale] ?? locale
}

/**
 * Parses a date string into a Date object with consistent cross-environment behavior.
 * Strings without timezone info (e.g. "2025-10-29 13:22:00") are treated as UTC.
 */
export function parseDate(value: string | Date): Date {
  if (value instanceof Date) return value
  // Normalize space-separated datetime to ISO format and treat as UTC if no timezone
  let s = value.replace(' ', 'T')
  if (!/[Z+-]\d{0,2}:?\d{0,2}$/.test(s)) {
    s += 'Z'
  }
  return new Date(s)
}

/**
 * Formats a Date using Intl.DateTimeFormat with day/month/year and optional time.
 */
export function formatDate(date: Date, intlLocale: string, showTime: boolean): string {
  const opts: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Europe/Berlin'
  }
  if (showTime) {
    opts.hour = '2-digit'
    opts.minute = '2-digit'
    opts.hour12 = false
  }
  const fmt = new Intl.DateTimeFormat(intlLocale, opts)
  if (!showTime) return fmt.format(date)
  // formatToParts to drop the comma between date and time
  const parts = fmt.formatToParts(date)
  return parts.map(p => p.type === 'literal' && p.value.includes(',') ? ' ' : p.value).join('')
}
