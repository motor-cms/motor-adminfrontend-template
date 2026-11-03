/**
 * Adds the active navigation groups to the list of open sidebar groups.
 *
 * Always returns a fresh array when something changes: the list is bound via
 * v-model to UNavigationMenu (reka AccordionRoot), which does not pick up an
 * in-place push after hydration — the group then stayed closed on a hard load
 * and the first click "closed" it again.
 */
export function mergeOpenNavGroups(current: string[], active: string[]): string[] {
  const missing = active.filter((group, index) => !current.includes(group) && active.indexOf(group) === index)
  return missing.length ? [...current, ...missing] : current
}
