import type { FilterDef, FilterOption } from '../types/grid'
import { fetchResourceOptions } from './useResourceOptions'

export function useClientFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'client_id',
    label: t('motor-core.grid.filter_client'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_clients'),
    options: () => fetchResourceOptions('/api/v2/clients', { labelKey: 'name' }),
    ...overrides
  }
}

export function useLanguageFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'language_id',
    label: t('motor-core.grid.filter_language'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_languages'),
    options: () => fetchResourceOptions('/api/v2/languages', { labelKey: 'native_name' }),
    ...overrides
  }
}

export function useDomainFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'domain_id',
    label: t('motor-core.grid.filter_domain'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_domains'),
    options: () => fetchResourceOptions('/api/v2/domains', { labelKey: 'name' }),
    ...overrides
  }
}

export function useIsPublishedFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'is_published',
    label: t('motor-core.grid.filter_published'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_published'),
    options: [
      { label: t('motor-core.grid.filter_yes'), value: 1 },
      { label: t('motor-core.grid.filter_no'), value: 0 }
    ],
    ...overrides
  }
}

export function useIsActiveFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'is_active',
    label: t('motor-core.grid.filter_active'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_active'),
    options: [
      { label: t('motor-core.grid.filter_yes'), value: 1 },
      { label: t('motor-core.grid.filter_no'), value: 0 }
    ],
    ...overrides
  }
}

export function useIsInvisibleFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'is_invisible',
    label: t('motor-core.grid.filter_invisible'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_invisible'),
    options: [
      { label: t('motor-core.grid.filter_yes'), value: 1 },
      { label: t('motor-core.grid.filter_no'), value: 0 }
    ],
    ...overrides
  }
}

export function useGuardNameFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'guard_name',
    label: t('motor-core.grid.filter_guard_name'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_guard_names'),
    options: [
      { label: 'web', value: 'web' },
      { label: 'api', value: 'api' }
    ],
    ...overrides
  }
}

export function useScopeFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'scope',
    label: t('motor-core.grid.filter_scope'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_scopes'),
    options: () => fetchResourceOptions('/api/v2/category-trees', { labelKey: 'scope', valueKey: 'scope' }),
    ...overrides
  }
}

export function usePackageFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'package',
    label: t('motor-core.grid.filter_package'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_packages'),
    options: () => fetchResourceOptions('/api/v2/config-variables', { labelKey: 'package', valueKey: 'package' }),
    ...overrides
  }
}

export function useGroupFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'group',
    label: t('motor-core.grid.filter_group'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_groups'),
    options: () => fetchResourceOptions('/api/v2/config-variables', { labelKey: 'group', valueKey: 'group' }),
    ...overrides
  }
}

export function useCategoryFilter(scope: string, overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'category_id',
    label: t('motor-core.grid.filter_category'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_categories'),
    options: () => fetchCategoryTreeOptions(scope),
    ...overrides
  }
}

async function fetchCategoryTreeOptions(scope: string): Promise<FilterOption[]> {
  const client = useSanctumClient()
  const res = await client<{ data: Array<{ id: number, name: string, level: number, _lft: number }> }>(
    `/api/v2/categories?scope=${scope}&per_page=0`
  )

  // Sort by _lft to ensure tree order, skip root node (level 0 = tree name)
  const sorted = [...res.data].sort((a, b) => a._lft - b._lft).filter(c => c.level > 0)

  return sorted.map((cat) => {
    const depth = cat.level - 1 // level 1 becomes top-level in the dropdown
    const prefix = depth > 0 ? `${'\u00A0\u00A0'.repeat(depth)}\u21B3 ` : ''
    return { label: `${prefix}${cat.name}`, value: cat.id }
  })
}

export function useHttpStatusCodeFilter(overrides?: Partial<FilterDef>): FilterDef {
  const { t } = useI18n()

  return {
    key: 'http_status_code',
    label: t('motor-core.grid.filter_http_status'),
    type: 'select',
    placeholder: t('motor-core.grid.filter_all_http_statuses'),
    options: [
      { label: '301 - Permanent Redirect', value: 301 },
      { label: '302 - Temporary Redirect', value: 302 },
      { label: '307 - Temporary Redirect', value: 307 },
      { label: '410 - Gone', value: 410 }
    ],
    ...overrides
  }
}
