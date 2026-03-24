import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const seoRedirectSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  domain_id: { endpoint: '/api/v2/domains', labelKey: 'name' }
}

export const seoRedirectHttpStatusOptions = [
  { label: '301 - Permanent Redirect', value: 301 },
  { label: '302 - Temporary Redirect', value: 302 },
  { label: '307 - Temporary Redirect', value: 307 },
  { label: '410 - Gone', value: 410 }
]

export const seoRedirectFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-builder.seo_redirects',
  overrides: {
    domain_id: { input: 'search-select' },
    http_status_code: { input: 'select' }
  },
  groups: {
    basic: ['domain_id', 'request_url', 'target_url', 'http_status_code', 'type']
  }
}
