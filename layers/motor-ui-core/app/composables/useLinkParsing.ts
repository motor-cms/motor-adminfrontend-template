export interface ParsedLinkProps {
  linkType: string
  url: string
  target: string
  anchor: string
  navigation: null
}

/**
 * Strip any leading `tel:` / `mailto:` scheme(s) from a stored link value,
 * returning the bare value (phone number or email address).
 *
 * The builder stores the bare value in the atom's `url` attribute and the
 * scheme is (re)applied at render time. This helper normalises values that
 * were previously stored with the scheme baked in — including the historical
 * double-prefixed data (`tel:tel:…`) — so the property panel and the link
 * editor only ever show the bare value.
 *
 * Also tolerates the corrupted "tel.:" variant seen in legacy data (the
 * "Tel.:" display label having leaked into the stored href).
 */
export function stripLinkPrefix(value: string): string {
  return value.replace(/^(?:tel\.?:|mailto:)+/i, '')
}

export function parseLinkProps(href: string, target: string): ParsedLinkProps {
  if (href.startsWith('mailto:')) {
    return { linkType: 'mailto', url: href.slice(7), target, anchor: '', navigation: null }
  }
  if (href.startsWith('tel:')) {
    return { linkType: 'tel', url: href.slice(4), target, anchor: '', navigation: null }
  }
  if (href.startsWith('#')) {
    return { linkType: 'anchor', url: '', target, anchor: href.slice(1), navigation: null }
  }
  return { linkType: 'url', url: href, target, anchor: '', navigation: null }
}
