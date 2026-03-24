export function schemaNameToPrefix(schemaName: string, suffixPattern: RegExp): string {
  const base = schemaName.replace(suffixPattern, '')

  const snake = base
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .toLowerCase()

  const plural = snake + 's'

  return `motor-admin.${plural}`
}

export function humanizeKey(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

export function resolveHelp(
  te: (key: string) => boolean,
  t: (key: string) => string,
  prefix: string,
  key: string
): string | undefined {
  const helpKey = `${prefix}.help.${key}`
  return te(helpKey) ? t(helpKey) : undefined
}

export function resolveLabel(
  t: (key: string) => string,
  te: (key: string) => boolean,
  prefix: string,
  key: string
): string {
  // 1. Try resource-specific translation
  const resourceKey = `${prefix}.${key}`
  if (te(resourceKey)) return t(resourceKey)

  // 2. Try entity reference (e.g. client_id -> motor-admin.clients.client)
  const entity = key.endsWith('_id') ? key.slice(0, -3) : key
  const entityKey = `motor-admin.${entity}s.${entity}`
  if (te(entityKey)) return t(entityKey)

  // 3. Try global translation
  const globalKey = `motor-core.global.${key}`
  if (te(globalKey)) return t(globalKey)

  // 4. Humanize key as last resort
  return humanizeKey(key)
}
