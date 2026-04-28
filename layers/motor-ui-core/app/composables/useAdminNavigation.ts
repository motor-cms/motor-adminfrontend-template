import type { NavigationMenuItem } from '@nuxt/ui'

// Frontend-only layers can register sidebar nav items via this registry.
// Items appear under a "Plugins" separator at the bottom of the sidebar.
// Use `labelKey` (i18n key) instead of `label` so translations stay reactive.
export interface PluginNavItem extends NavigationMenuItem {
  permission?: string
  labelKey?: string
  children?: (NavigationMenuItem & { labelKey?: string })[]
}

const _pluginNavItems = ref<PluginNavItem[]>([])

export function registerPluginNavigation(item: PluginNavItem) {
  const exists = _pluginNavItems.value.some(i => i.value === item.value)
  if (!exists) _pluginNavItems.value.push(item)
}

interface ApiNavigationItem {
  name: string
  slug: string
  icon?: string
  route?: string | null
  roles?: string[]
  permissions?: string[]
  items?: Record<string, ApiNavigationItem>
}

interface ApiResponse {
  data: Record<string, ApiNavigationItem>
}

// Map icon names to lucide icons
function mapIcon(icon?: string): string | undefined {
  if (!icon) return undefined

  // Remove 'fa fa-' prefix if present
  const cleanIcon = icon.replace(/^fa fa-/, '')

  // Map common icons
  const iconMap: Record<string, string> = {
    'home': 'house',
    'cogs': 'settings',
    'plus': 'plus',
    'user': 'user',
    'globe': 'globe',
    'file': 'file',
    'cubes': 'boxes',
    'photo-video': 'image',
    'hands-helping': 'hand-helping'
  }

  const mapped = iconMap[cleanIcon] || cleanIcon
  return `i-lucide-${mapped}`
}

// Convert Laravel route name to URL path
function routeToPath(route?: string | null): string | undefined {
  if (!route) return undefined
  if (route.startsWith('/')) return route

  // Convert route like 'admin.motor-admin.users' to '/motor-admin/users'
  // Remove 'admin.' prefix and convert dots to slashes
  return '/' + route
    .replace(/^admin\./, '')
    .replace(/\./g, '/')
}

// Format fallback label from translation key
function formatFallbackLabel(key: string): string {
  // 'motor-admin.users.users' → 'Users'
  const parts = key.split('.')
  const lastPart = parts[parts.length - 1] ?? key
  return lastPart
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

export function useAdminNavigation() {
  const client = useSanctumClient()
  const { t } = useI18n()
  const route = useRoute()
  const { can } = usePermissions()

  const { data, status, error, refresh } = useAsyncData<ApiResponse>(
    'admin-navigations',
    () => client('/api/v2/admin-navigations'),
    {
      lazy: true,
      default: () => ({ data: {} })
    }
  )

  function isItemVisible(item: ApiNavigationItem): boolean {
    if (!item.permissions || item.permissions.length === 0) return true
    return item.permissions.some(p => can(p))
  }

  function filterNavItems(items: Record<string, ApiNavigationItem>): Record<string, ApiNavigationItem> {
    const filtered: Record<string, ApiNavigationItem> = {}

    for (const [key, item] of Object.entries(items)) {
      let filteredItem = item

      if (filteredItem.items && Object.keys(filteredItem.items).length > 0) {
        const filteredChildren = filterNavItems(filteredItem.items)
        if (Object.keys(filteredChildren).length === 0) continue
        // Parent group with surviving children — always show as container
        filtered[key] = { ...filteredItem, items: filteredChildren }
        continue
      }

      if (isItemVisible(filteredItem)) {
        filtered[key] = filteredItem
      }
    }

    return filtered
  }

  function transformNavItem(item: ApiNavigationItem, isChild = false): NavigationMenuItem {
    // Try translation first - if it returns the key itself, use fallback
    // Normalize hyphens to underscores in key segments (except the package prefix)
    // e.g. 'motor-content-type.content-types.content_types' → 'motor-content-type.content_types.content_types'
    const normalizedName = item.name.replace(/\./g, '\0').split('\0').map((part, i) =>
      i === 0 ? part : part.replace(/-/g, '_')
    ).join('.')
    const translated = t(normalizedName)
    const label = translated !== normalizedName ? translated : formatFallbackLabel(item.name)

    const path = routeToPath(item.route)
    const navItem: NavigationMenuItem = {
      value: item.slug,
      label,
      icon: isChild ? undefined : mapIcon(item.icon),
      to: path,
      active: path ? (path === '/' ? route.path === '/' : route.path.startsWith(path)) : false
    }

    // Handle nested items (object with numeric keys)
    if (item.items && Object.keys(item.items).length > 0) {
      const sortedKeys = Object.keys(item.items).sort((a, b) => Number(a) - Number(b))
      navItem.children = sortedKeys
        .map(key => item.items?.[key])
        .filter((child): child is ApiNavigationItem => child !== undefined)
        .map(child => transformNavItem(child, true))

      // Auto-expand groups that contain the currently active route
      const hasActiveChild = navItem.children.some(child =>
        child.to && (String(child.to) === '/' ? route.path === '/' : route.path.startsWith(String(child.to)))
      )
      navItem.defaultOpen = hasActiveChild
    }

    return navItem
  }

  const navigation = computed<NavigationMenuItem[]>(() => {
    if (!data.value?.data || typeof data.value.data !== 'object') return []

    const navData = filterNavItems(data.value.data)
    const sortedKeys = Object.keys(navData).sort((a, b) => Number(a) - Number(b))
    const items = sortedKeys
      .map(key => navData[key])
      .filter((item): item is ApiNavigationItem => item !== undefined)
      .map(item => transformNavItem(item))

    // Resolve duplicate child routes across groups (e.g. "E-Mail-Vorlagen"
    // appearing under both Builder and Administration). A child is considered
    // "at home" when the parent group's own path is a prefix of the child's
    // path; duplicates that aren't at home are dropped. Falls back to first-
    // seen wins when no parent prefix matches any copy.
    const childAppearances = new Map<string, Array<{ parent: NavigationMenuItem, child: NavigationMenuItem }>>()
    for (const item of items) {
      if (!item.children) continue
      for (const child of item.children) {
        const childPath = child.to ? String(child.to) : null
        if (!childPath) continue
        const list = childAppearances.get(childPath) ?? []
        list.push({ parent: item, child })
        childAppearances.set(childPath, list)
      }
    }

    const toRemove = new Set<NavigationMenuItem>()
    for (const [childPath, appearances] of childAppearances) {
      if (appearances.length < 2) continue
      const athome = appearances.filter(({ parent }) => {
        const parentPath = parent.to ? String(parent.to) : null
        return parentPath && childPath.startsWith(parentPath + '/')
      })
      const keep = athome[0] ?? appearances[0]
      for (const appearance of appearances) {
        if (appearance !== keep) toRemove.add(appearance.child)
      }
    }

    for (const item of items) {
      if (!item.children) continue
      item.children = item.children.filter(child => !toRemove.has(child))
    }

    return items
  })

  const pluginNavigation = computed<NavigationMenuItem[]>(() => {
    const visiblePlugins = _pluginNavItems.value.filter(pi =>
      !pi.permission || can(pi.permission)
    )

    return visiblePlugins.map(pluginItem => {
      const pi = { ...pluginItem }
      if (pi.labelKey) {
        pi.label = t(pi.labelKey)
      }
      if (pi.children) {
        pi.children = pi.children.map(child => {
          const c = { ...child } as PluginNavItem
          if (c.labelKey) {
            c.label = t(c.labelKey)
          }
          return c
        })
        const hasActiveChild = pi.children.some(child =>
          child.to && (String(child.to) === '/' ? route.path === '/' : route.path.startsWith(String(child.to)))
        )
        pi.defaultOpen = hasActiveChild
        pi.active = false
      } else {
        pi.active = pi.to ? route.path.startsWith(String(pi.to)) : false
      }
      return pi
    })
  })

  const activeGroups = computed<string[]>(() => {
    return [...navigation.value, ...pluginNavigation.value]
      .filter(item => item.children?.some(child =>
        child.to && (String(child.to) === '/' ? route.path === '/' : route.path.startsWith(String(child.to)))
      ))
      .map(item => item.value as string)
      .filter((value): value is string => !!value)
  })

  return {
    navigation,
    pluginNavigation,
    activeGroups,
    status,
    error,
    refresh
  }
}
