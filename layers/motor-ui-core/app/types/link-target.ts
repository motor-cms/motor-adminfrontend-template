/**
 * Canonical HTML link-target values. Used wherever a navigation item,
 * link atom, button atom, or rich-text link decides where the URL opens.
 * Import these constants instead of using the string literals so the set
 * of valid values stays discoverable and centrally documented.
 */
export const LINK_TARGET = {
  Self: '_self',
  Blank: '_blank'
} as const

export type LinkTarget = typeof LINK_TARGET[keyof typeof LINK_TARGET]
