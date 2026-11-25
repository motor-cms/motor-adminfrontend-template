import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const seoRedirectSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  domain_id: { endpoint: '/api/v2/domains', labelKey: 'name' }
}

export const seoRedirectHttpStatusOptions = [
  // Labels are i18n keys, translated by the select input (form/Base.vue)
  { label: 'motor-core.global.http_status_301', value: 301 },
  { label: 'motor-core.global.http_status_302', value: 302 },
  { label: 'motor-core.global.http_status_307', value: 307 },
  { label: 'motor-core.global.http_status_410', value: 410 }
]

export const seoRedirectTypeOptions = [
  { label: 'motor-core.global.redirect_type_redirect', value: 'redirect' },
  { label: 'motor-core.global.redirect_type_short_link', value: 'short_link' }
]

export const seoRedirectFormConfig: FormFieldsFromMetaOptions = {
  translationPrefix: 'motor-builder.seo_redirects',
  omit: ['categories'],
  overrides: {
    domain_id: { input: 'search-select' },
    http_status_code: { input: 'select', staticOptions: seoRedirectHttpStatusOptions },
    type: { input: 'select', staticOptions: seoRedirectTypeOptions },
    categories: { hidden: true }
  },
  groups: {
    basic: ['domain_id', 'request_url', 'target_url', 'http_status_code', 'type']
  }
}
