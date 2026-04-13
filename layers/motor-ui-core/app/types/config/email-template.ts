import type { FormFieldsFromMetaOptions } from '../../composables/formFieldUtils'
import type { ColumnsFromMetaOptions } from '../../composables/useResourceColumns'
import type { SelectOptionConfig } from '../../composables/useEntityForm'

export const emailTemplateSelectOptionConfigs: Record<string, SelectOptionConfig> = {
  client_id: { endpoint: '/api/v2/clients', labelKey: 'name' },
  language_id: { endpoint: '/api/v2/languages', labelKey: 'native_name' }
}

export const emailTemplateGridConfig: ColumnsFromMetaOptions<Record<string, unknown>> = {
  pick: ['name', 'subject', 'client', 'language', 'has_body_html', 'default_sender_email'],
  overrides: {
    name: { sortable: true, hideable: false },
    client: { key: 'client.name' },
    language: { key: 'language.native_name' },
    has_body_html: { renderer: 'boolean' },
    default_sender_email: { defaultHidden: true }
  }
}

export const emailTemplateFormConfig: FormFieldsFromMetaOptions = {
  overrides: {
    client_id: { input: 'search-select' },
    language_id: { input: 'search-select' },
    slug: { input: 'slug' },
    body_html: { class: 'font-mono', inputProps: { rows: 8 } },
    body_text: { inputProps: { rows: 6 } },
    default_cc_email: { input: 'text' },
    default_bcc_email: { input: 'text' }
  },
  groups: {
    basic: ['client_id', 'language_id', 'name', 'slug', 'subject'],
    content: ['body_text', 'has_body_html', 'body_html'],
    sender: ['default_sender_name', 'default_sender_email', 'default_replyto_name', 'default_replyto_email'],
    recipient: ['default_recipient_name', 'default_recipient_email', 'default_cc_email', 'default_bcc_email']
  }
}
