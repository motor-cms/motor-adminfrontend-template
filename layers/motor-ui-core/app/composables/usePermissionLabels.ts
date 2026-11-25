import { permissionLabel } from '../utils/permission-groups'

/**
 * Labels of permission groups and actions as the permission matrix shows them
 * (`motor-core.global.perm_group_<key>`, `motor-core.global.<action>`), plus a whole permission name.
 */
export function usePermissionLabels() {
  const { t, te } = useI18n({ useScope: 'global' })

  function translateGroup(key: string): string {
    // Permissions without a group (no separator) are listed under "Other"
    const i18nKey = `motor-core.global.perm_group_${key || 'other'}`
    if (te(i18nKey)) return t(i18nKey)
    return key.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  }

  function translateAction(action: string): string {
    const i18nKey = `motor-core.global.${action}`
    if (te(i18nKey)) return t(i18nKey)
    return action.charAt(0).toUpperCase() + action.slice(1)
  }

  return {
    translateGroup,
    translateAction,
    permissionLabel: (name: string, separator = '.') => permissionLabel(name, translateGroup, translateAction, separator)
  }
}
