export interface ParsedLinkProps {
  linkType: string
  url: string
  target: string
  anchor: string
  navigation: null
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
