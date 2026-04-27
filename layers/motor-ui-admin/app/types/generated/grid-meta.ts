/**
 * Grid column metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const aISystemPromptMeta = {
  schemaName: 'AISystemPromptResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    prompt: { type: 'string' },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    client_id: { type: 'integer', renderer: 'number' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const clientMeta = {
  schemaName: 'ClientResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    slug: { type: 'string' },
    address: { type: 'string' },
    zip: { type: 'string' },
    city: { type: 'string' },
    country_iso_3166_1: { type: 'string' },
    website: { type: 'string', renderer: 'link' },
    description: { type: 'string' },
    is_active: { type: 'boolean', renderer: 'boolean' },
    contact_name: { type: 'string' },
    contact_phone: { type: 'string' },
    contact_email: { type: 'string', renderer: 'link' },
    frontend_config: { type: 'unknown' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const configVariableMeta = {
  schemaName: 'ConfigVariableResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    package: { type: 'string' },
    group: { type: 'string' },
    name: { type: 'string', sortable: true, hideable: false },
    value: { type: 'string' },
    is_invisible: { type: 'boolean', renderer: 'boolean' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const domainMeta = {
  schemaName: 'DomainResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    client_id: { type: 'integer', renderer: 'number' },
    is_active: { type: 'boolean', renderer: 'boolean' },
    is_preview_domain: { type: 'boolean', renderer: 'boolean' },
    protocol: { type: 'string' },
    host: { type: 'string' },
    port: { type: 'integer', renderer: 'number' },
    path: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const emailTemplateMeta = {
  schemaName: 'EmailTemplateResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    slug: { type: 'string' },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    client_id: { type: 'integer', renderer: 'number' },
    language: { type: 'ref', renderer: 'text', ref: 'LanguageResource', labelKey: 'name' },
    language_id: { type: 'integer', renderer: 'number' },
    subject: { type: 'string' },
    body_text: { type: 'string' },
    body_html: { type: 'string' },
    has_body_html: { type: 'boolean', renderer: 'boolean' },
    default_sender_name: { type: 'string' },
    default_sender_email: { type: 'string', renderer: 'link' },
    default_recipient_name: { type: 'string' },
    default_recipient_email: { type: 'string', renderer: 'link' },
    default_cc_email: { type: 'string', renderer: 'link' },
    default_bcc_email: { type: 'string', renderer: 'link' },
    default_replyto_email: { type: 'string', renderer: 'link' },
    default_replyto_name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const emailTemplateUsageMeta = {
  schemaName: 'EmailTemplateUsageResource',
  fields: {
    form_config_id: { type: 'integer', renderer: 'number' },
    form_component_uuid: { type: 'string' },
    form_name: { type: 'string' },
    custom_content_type_id: { type: 'integer', renderer: 'number' },
    usage_type: { type: 'string' },
    builder_page: { type: 'string' }
  }
} as const

export const languageMeta = {
  schemaName: 'LanguageResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    iso_639_1: { type: 'string' },
    english_name: { type: 'string' },
    native_name: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const permissionGroupMeta = {
  schemaName: 'PermissionGroupResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    sort_position: { type: 'integer', renderer: 'number' },
    permission_names: { type: 'array' },
    permissions: { type: 'ref[]', renderer: 'list', ref: 'PermissionResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const permissionMeta = {
  schemaName: 'PermissionResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    guard_name: { type: 'string' },
    permission_group: { type: 'ref', renderer: 'text', ref: 'PermissionGroupResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const roleMeta = {
  schemaName: 'RoleResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    guard_name: { type: 'string' },
    permissions: { type: 'ref[]', renderer: 'list', ref: 'PermissionResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const userMeta = {
  schemaName: 'UserResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    email: { type: 'string', renderer: 'link' },
    avatar: { type: 'ref', renderer: 'avatar', ref: 'MediaResource' },
    clients: { type: 'ref[]', renderer: 'list', ref: 'ClientResource', labelKey: 'name' },
    roles: { type: 'ref[]', renderer: 'list', ref: 'RoleResource', labelKey: 'name' },
    permissions: { type: 'ref[]', renderer: 'list', ref: 'PermissionResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const
