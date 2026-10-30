/** Permission that gates the Administration area as a whole (ZRMDEV-237). */
export const ADMINISTRATION_PERMISSION = 'administration.read'

const ADMINISTRATION_PREFIX = '/motor-admin'

// E-mail templates are also linked from the Builder group, so editors reach
// them with email-templates.read alone.
const ADMINISTRATION_EXEMPT_PREFIXES = ['/motor-admin/email-templates']

function isUnder(path: string, prefix: string): boolean {
  return path === prefix || path.startsWith(`${prefix}/`)
}

/**
 * Whether a route belongs to the Administration area and therefore needs
 * administration.read on top of the page's own permission.
 */
export function requiresAdministrationAccess(path: string | undefined): boolean {
  if (!path || !isUnder(path, ADMINISTRATION_PREFIX)) return false
  return !ADMINISTRATION_EXEMPT_PREFIXES.some(prefix => isUnder(path, prefix))
}
