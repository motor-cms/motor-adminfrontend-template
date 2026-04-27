/**
 * Grid column metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

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
    children: { type: 'ref[]', renderer: 'list', ref: 'CategoryResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
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
    children: { type: 'ref[]', renderer: 'list', ref: 'CategoryResource', labelKey: 'name' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
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
