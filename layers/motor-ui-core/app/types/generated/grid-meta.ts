/**
 * Grid column metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const aIHelpMeta = {
  schemaName: 'AIHelpResource',
  fields: {
    message: { type: 'string' }
  }
} as const

export const approvalMeta = {
  schemaName: 'ApprovalResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    is_approved: { type: 'boolean', renderer: 'boolean' },
    is_rejected: { type: 'boolean', renderer: 'boolean' },
    to_be_published_at: { type: 'string' },
    comment: { type: 'string' },
    approved_by_client_id: { type: 'integer', renderer: 'number' },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    approved_at: { type: 'string' }
  }
} as const

export const builderCustomComponentMeta = {
  schemaName: 'BuilderCustomComponentResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    page_definition: { type: 'unknown' },
    uuid: { type: 'string' },
    is_current: { type: 'boolean', renderer: 'boolean' },
    is_published: { type: 'boolean', renderer: 'boolean' },
    admin_scss: { type: 'string' },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    client_id: { type: 'integer', renderer: 'number' },
    language: { type: 'ref', renderer: 'text', ref: 'LanguageResource', labelKey: 'name' },
    language_id: { type: 'integer', renderer: 'number' },
    tags: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' },
    global_css: { type: 'string' },
    global_scss: { type: 'string' },
    categories: { type: 'ref[]', renderer: 'list', ref: 'CategoryResource', labelKey: 'name' }
  }
} as const

export const builderPageReducedMeta = {
  schemaName: 'BuilderPageReducedResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    uuid: { type: 'string' },
    is_current: { type: 'boolean', renderer: 'boolean' },
    is_published: { type: 'boolean', renderer: 'boolean' },
    client_id: { type: 'integer', renderer: 'number' },
    language_id: { type: 'integer', renderer: 'number' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const builderPageSearchMeta = {
  schemaName: 'BuilderPageSearchResource',
  fields: {
    name: { type: 'unknown', sortable: true, hideable: false },
    teaser: { type: 'unknown' },
    full_slug: { type: 'unknown' },
    image: { type: 'unknown' }
  }
} as const

export const builderTemporaryPageMeta = {
  schemaName: 'BuilderTemporaryPageResource',
  fields: {
    uuid: { type: 'string' },
    id: { type: 'string', hideable: false },
    client_id: { type: 'string' },
    language_id: { type: 'string' },
    page_definition: { type: 'string' },
    global_css: { type: 'string' }
  }
} as const

export const categoryMeta = {
  schemaName: 'CategoryResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    scope: { type: 'string' },
    parent_id: { type: 'integer', renderer: 'number' },
    _lft: { type: 'integer', renderer: 'number' },
    _rgt: { type: 'integer', renderer: 'number' },
    level: { type: 'integer', renderer: 'number' },
    children: { type: 'ref[]', renderer: 'list', ref: 'CategoryResource', labelKey: 'name' }
  }
} as const

export const categorySummaryMeta = {
  schemaName: 'CategorySummaryResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    scope: { type: 'string' }
  }
} as const

export const categoryTreeMeta = {
  schemaName: 'CategoryTreeResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    scope: { type: 'string' },
    children: { type: 'ref[]', renderer: 'list', ref: 'Motor.Admin.Http.Resources.V2.CategoryResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const clientConfigMeta = {
  schemaName: 'ClientConfigResource',
  fields: {
    slug: { type: 'string' },
    colorScheme: { type: 'unknown' },
    logoSlug: { type: 'unknown' },
    brand: { type: 'object' },
    contact: { type: 'object' },
    features: { type: 'object' },
    social: { type: 'object' },
    seo: { type: 'object' }
  }
} as const

export const customContentFieldConditionalMeta = {
  schemaName: 'CustomContentFieldConditionalResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    field_id: { type: 'integer', renderer: 'number' },
    conditional: { type: 'string' },
    value: { type: 'string' }
  }
} as const

export const customContentFieldDataMeta = {
  schemaName: 'CustomContentFieldDataResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    field_id: { type: 'integer', renderer: 'number' },
    field_name: { type: 'string' },
    uuid: { type: 'string' },
    data: { type: 'array' }
  }
} as const

export const dashboardAnnouncementMeta = {
  schemaName: 'DashboardAnnouncementResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    title: { type: 'string', sortable: true, hideable: false },
    body: { type: 'string' },
    type: { type: 'string' },
    audience: { type: 'string' },
    target_user_ids: { type: 'array' },
    linkable_type: { type: 'string' },
    linkable_id: { type: 'integer', renderer: 'number' },
    linkable_name: { type: 'unknown' },
    linkable_url: { type: 'string', renderer: 'link' },
    is_active: { type: 'boolean', renderer: 'boolean' },
    starts_at: { type: 'string' },
    expires_at: { type: 'string' },
    created_by: { type: 'integer', renderer: 'number' },
    created_by_name: { type: 'unknown' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
} as const

export const fileUsageMeta = {
  schemaName: 'FileUsageResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    uuid: { type: 'string' },
    name: { type: 'string', sortable: true, hideable: false },
    is_published: { type: 'boolean', renderer: 'boolean' },
    block_types: { type: 'string' }
  }
} as const

export const formConfigMeta = {
  schemaName: 'FormConfigResource',
  fields: {
    save_in_database: { type: 'integer', renderer: 'number' },
    send_email_to_user: { type: 'integer', renderer: 'number' },
    target_email: { type: 'unknown' },
    target_email_template_id: { type: 'integer', renderer: 'number' },
    user_email_template_id: { type: 'integer', renderer: 'number' }
  }
} as const

export const navigationMeta = {
  schemaName: 'NavigationResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    name: { type: 'string', sortable: true, hideable: false },
    scope: { type: 'string' },
    slug: { type: 'string' },
    notification: { type: 'ref', renderer: 'text', ref: 'NotificationResource', labelKey: 'name' },
    full_slug: { type: 'string' },
    is_visible: { type: 'boolean', renderer: 'boolean' },
    is_active: { type: 'boolean', renderer: 'boolean' },
    hide_slug_from_url: { type: 'boolean', renderer: 'boolean' },
    link_type: { type: 'string' },
    link_target: { type: 'string' },
    link_url: { type: 'string', renderer: 'link' },
    click_event: { type: 'string' },
    builder_page: { type: 'ref', renderer: 'text', ref: 'BuilderPageResource', labelKey: 'name' },
    builder_page_uuid: { type: 'string' },
    builder_page_name: { type: 'string' },
    navigation_item_id: { type: 'integer', renderer: 'number' },
    has_builder_page: { type: 'boolean', renderer: 'boolean' },
    has_redirection: { type: 'boolean', renderer: 'boolean' },
    has_external_url: { type: 'boolean', renderer: 'boolean' },
    assistant_clickpath_id: { type: 'integer', renderer: 'number' },
    clickpath: { type: 'unknown' },
    client: { type: 'ref', renderer: 'text', ref: 'ClientResource', labelKey: 'name' },
    language: { type: 'ref', renderer: 'text', ref: 'LanguageResource', labelKey: 'name' },
    parent_id: { type: 'integer', renderer: 'number' },
    _lft: { type: 'integer', renderer: 'number' },
    _rgt: { type: 'integer', renderer: 'number' },
    level: { type: 'integer', renderer: 'number' },
    children: { type: 'ref[]', renderer: 'list', ref: 'NavigationResource', labelKey: 'name' },
    scorings: { type: 'ref[]', renderer: 'list', ref: 'ScoreResource', labelKey: 'name' },
    tags: { type: 'string' },
    css_classes: { type: 'array' },
    root_node: { type: 'string' },
    root_node_name: { type: 'string' },
    computed_link: { type: 'string' },
    main_navigation_item: { type: 'ref', renderer: 'text', ref: 'NavigationResource', labelKey: 'name' }
  }
} as const

export const notificationMeta = {
  schemaName: 'NotificationResource',
  fields: {
    id: { type: 'integer', renderer: 'number', hideable: false },
    headline: { type: 'string' },
    text: { type: 'string' },
    variante: { type: 'string' },
    link: { type: 'string' },
    button_text: { type: 'string' },
    can_be_hidden: { type: 'boolean', renderer: 'boolean' },
    is_active: { type: 'boolean', renderer: 'boolean' },
    navigation_id: { type: 'integer', renderer: 'number' },
    media_attributes: { type: 'object' },
    has_media: { type: 'string' }
  }
} as const
