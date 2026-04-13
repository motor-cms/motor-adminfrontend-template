import type { NavigationMenuItem } from '@nuxt/ui'

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

    // Deduplicate child routes across groups: if the same path appears in
    // multiple parent groups, only the first occurrence keeps its active state.
    // This prevents double-highlighting (e.g. email-templates in both Builder and Administration).
    const seenPaths = new Set<string>()
    for (const item of items) {
      if (!item.children) continue
      for (const child of item.children) {
        const childPath = child.to ? String(child.to) : null
        if (!childPath) continue
        if (seenPaths.has(childPath)) {
          child.active = false
        } else {
          seenPaths.add(childPath)
        }
      }
    }

    return items
  })

  // Compute which group values (slugs) should be expanded based on the current route
  const activeGroups = computed<string[]>(() => {
    return navigation.value
      .filter(item => item.children?.some(child =>
        child.to && (String(child.to) === '/' ? route.path === '/' : route.path.startsWith(String(child.to)))
      ))
      .map(item => item.value as string)
      .filter((value): value is string => !!value)
  })

  return {
    navigation,
    activeGroups,
    status,
    error,
    refresh
  }
}
