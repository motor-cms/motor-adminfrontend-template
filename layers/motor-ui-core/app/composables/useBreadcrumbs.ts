export interface BreadcrumbItem {
  label: string
  to?: string
  icon?: string
}

// Map top-level route packages to i18n keys
const segmentTranslationMap: Record<string, string> = {
  'motor-admin': 'motor-core.global.administration',
  'motor-builder': 'motor-builder.global.builder',
  'motor-content-type': 'motor-content-type.global.content_type',
  'motor-assistant': 'motor-assistant.global.assistant',
  'motor-media': 'motor-media.global.media',
  'motor-scoring': 'motor-scoring.global.scoring'
}

/**
 * Auto-generate breadcrumbs from the current route path.
 * Accepts optional explicit breadcrumbs that take priority.
 *
 * Rules:
 * - Section segments (motor-admin, motor-builder, etc.) are non-clickable labels
 * - Module segments link to their grid page on edit/create pages
 * - "edit"/"create" segments become their own breadcrumb with a translated title
 *   (e.g. "Benutzer bearbeiten", "Benutzer erstellen")
 * - ID segments are skipped
 */
export function useBreadcrumbs(explicitBreadcrumbs?: Ref<BreadcrumbItem[] | undefined> | BreadcrumbItem[]) {
  const { t, te } = useI18n({ useScope: 'global' })
  const route = useRoute()

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    // Use explicit breadcrumbs if provided
    const explicit = isRef(explicitBreadcrumbs) ? explicitBreadcrumbs.value : explicitBreadcrumbs
    if (explicit) return explicit

    const path = route.path
    const segments = path.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [
      { label: t('motor-core.global.dashboard'), to: '/' }
    ]

    // Pre-compute: collect visible (non-ID) segment indices
    const visibleIndices: number[] = []
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i]!
      if (/^\d+$/.test(seg) || /^[0-9a-f-]{36}$/.test(seg)) continue
      visibleIndices.push(i)
    }

    const packageSegment = segments.find(s => s.startsWith('motor-'))
    let currentPath = ''

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]!
      currentPath += `/${segment}`

      // Skip dynamic ID segments (numeric or UUID-like)
      if (/^\d+$/.test(segment) || /^[0-9a-f-]{36}$/.test(segment)) continue

      const isLastVisible = i === visibleIndices[visibleIndices.length - 1]

      // Handle edit/create — own breadcrumb with translated title
      if (segment === 'edit' || segment === 'create') {
        // Walk backwards to find the nearest module segment for the translation key
        let moduleKey = ''
        for (let j = i - 1; j >= 0; j--) {
          const s = segments[j]!
          if (!/^\d+$/.test(s) && !/^[0-9a-f-]{36}$/.test(s) && !s.startsWith('motor-')) {
            moduleKey = s.replace(/-/g, '_')
            break
          }
        }

        // Try e.g. "motor-admin.users.edit_title" → "Benutzer bearbeiten"
        const titleKey = packageSegment && moduleKey
          ? `${packageSegment}.${moduleKey}.${segment}_title`
          : ''
        const label = titleKey && te(titleKey)
          ? t(titleKey)
          : (segment === 'edit' ? t('motor-core.global.edit') : t('motor-core.global.create'))

        items.push({ label })
        continue
      }

      // Section segments (motor-admin, motor-builder, etc.) — always non-clickable
      const sectionKey = segmentTranslationMap[segment]
      if (sectionKey) {
        items.push({ label: t(sectionKey) })
        continue
      }

      // Module/sub-module segments — translate and link (unless it's the current page)
      const moduleKey = segment.replace(/-/g, '_')
      const tryKey = packageSegment ? `${packageSegment}.${moduleKey}.title` : ''
      let translated = (tryKey && te(tryKey)) ? t(tryKey) : ''

      // If direct key didn't work, try nested under parent module
      // e.g. "fields" under "content-types" → motor-content-type.content_types.fields.title
      if (!translated) {
        let parentModuleKey = ''
        for (let j = i - 1; j >= 0; j--) {
          const s = segments[j]!
          if (!/^\d+$/.test(s) && !/^[0-9a-f-]{36}$/.test(s) && !s.startsWith('motor-')) {
            parentModuleKey = s.replace(/-/g, '_')
            break
          }
        }
        if (parentModuleKey && packageSegment) {
          const nestedKey = `${packageSegment}.${parentModuleKey}.${moduleKey}.title`
          if (te(nestedKey)) {
            translated = t(nestedKey)
          }
        }
      }

      const label = (translated && translated !== tryKey)
        ? translated
        : segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

      let to: string | undefined
      if (!isLastVisible) {
        // If the previous segment was a skipped ID, this is a nested resource
        // under [id]/ (e.g. "categories" under category-trees/[id]).
        // Link to the parent [id] page instead of the namespace folder.
        const prevSegment = i > 0 ? segments[i - 1]! : ''
        const isNestedUnderDynamicId = /^\d+$/.test(prevSegment) || /^[0-9a-f-]{36}$/.test(prevSegment)

        if (isNestedUnderDynamicId) {
          // Strip the current segment from the path to get the [id] page path
          to = currentPath.slice(0, currentPath.lastIndexOf('/'))
        } else {
          to = currentPath
        }
      }

      items.push({ label, to })
    }

    // Deduplicate consecutive items with the same label
    // (e.g. section and module both translate to "Inhaltstypen")
    const deduped: BreadcrumbItem[] = []
    for (const item of items) {
      const prev = deduped[deduped.length - 1]
      if (prev && prev.label === item.label) {
        // Keep the one with a link, or prefer the newer one (which has the link to the grid)
        if (item.to) {
          prev.to = item.to
        }
        continue
      }
      deduped.push(item)
    }

    return deduped
  })

  return { breadcrumbs }
}
