/**
 * Grouping logic for the permission matrix (GroupedCheckboxInput).
 *
 * The backend delivers some permissions twice (`email-templates.read` and
 * `email_templates.read`) and uses `publisher` next to `publish`. Groups are
 * merged on a normalised key, actions are deduplicated (one checkbox toggles
 * all matching permission ids) and sorted like the legend.
 */
export const PERMISSION_ACTION_ORDER = ['read', 'write', 'delete', 'publish'] as const

export interface PermissionOption {
  value: string | number
  label: string
}

export interface PermissionActionOption {
  action: string
  actionLabel: string
  values: (string | number)[]
}

export interface PermissionGroup {
  key: string
  label: string
  options: PermissionActionOption[]
}

export function normalizePermissionGroupKey(key: string): string {
  return key.trim().toLowerCase().replace(/_/g, '-')
}

export function normalizePermissionAction(action: string): string {
  const normalized = action.trim().toLowerCase().replace(/_/g, '-')
  return normalized === 'publisher' ? 'publish' : normalized
}

function actionRank(action: string): number {
  const index = (PERMISSION_ACTION_ORDER as readonly string[]).indexOf(action)
  return index === -1 ? PERMISSION_ACTION_ORDER.length : index
}

export function buildPermissionGroups(
  options: PermissionOption[],
  separator: string,
  translateGroup: (key: string) => string,
  translateAction: (action: string) => string
): PermissionGroup[] {
  const map = new Map<string, Map<string, PermissionActionOption>>()

  for (const opt of options) {
    const sepIdx = opt.label.lastIndexOf(separator)
    const groupKey = normalizePermissionGroupKey(sepIdx > -1 ? opt.label.substring(0, sepIdx) : '')
    const action = normalizePermissionAction(sepIdx > -1 ? opt.label.substring(sepIdx + 1) : opt.label)

    if (!map.has(groupKey)) map.set(groupKey, new Map())
    const actions = map.get(groupKey)!
    const existing = actions.get(action)
    if (existing) {
      if (!existing.values.includes(opt.value)) existing.values.push(opt.value)
    } else {
      actions.set(action, { action, actionLabel: translateAction(action), values: [opt.value] })
    }
  }

  return Array.from(map.entries()).map(([key, actions]) => ({
    key,
    label: translateGroup(key),
    options: Array.from(actions.values()).sort((a, b) =>
      actionRank(a.action) - actionRank(b.action) || a.action.localeCompare(b.action)
    )
  }))
}
