type Conversions = Record<string, { url: string }> | Array<{ name: string, url: string }>

export function getConversionUrl(
  conversions: Conversions | undefined,
  conversionName = 'thumb',
  fallbackUrl?: string
): string | undefined {
  if (conversions && typeof conversions === 'object' && !Array.isArray(conversions)) {
    return conversions[conversionName]?.url ?? fallbackUrl
  }

  if (Array.isArray(conversions)) {
    const match = conversions.find(c => c.name === conversionName)
    return match?.url ?? fallbackUrl
  }

  return fallbackUrl
}
