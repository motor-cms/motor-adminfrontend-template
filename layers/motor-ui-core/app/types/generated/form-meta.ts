/**
 * Form field metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const approvalFormMeta = {
  post: {
    schemaName: 'ApprovalPostRequest',
    fields: {
      is_approved: { input: 'toggle', required: true },
      is_rejected: { input: 'toggle', required: true },
      comment: { input: 'text' }
    }
  }
} as const

export const categoryFormMeta = {
  post: {
    schemaName: 'CategoryPostRequest',
    fields: {
      name: { input: 'text', required: true },
      parent_id: { input: 'select', required: true },
      previous_sibling_id: { input: 'select' },
      next_sibling_id: { input: 'select' }
    }
  },
  patch: {
    schemaName: 'CategoryPatchRequest',
    fields: {
      name: { input: 'text', required: true },
      parent_id: { input: 'select', required: true },
      previous_sibling_id: { input: 'select' },
      next_sibling_id: { input: 'select' }
    }
  }
} as const

export const categoryTreeFormMeta = {
  post: {
    schemaName: 'CategoryTreePostRequest',
    fields: {
      name: { input: 'text', required: true },
      scope: { input: 'text', required: true }
    }
  },
  patch: {
    schemaName: 'CategoryTreePatchRequest',
    fields: {
      name: { input: 'text', required: true },
      scope: { input: 'text', required: true }
    }
  }
} as const

export const dashboardAnnouncementFormMeta = {
  post: {
    schemaName: 'DashboardAnnouncementPostRequest',
    fields: {
      title: { input: 'text', required: true },
      body: { input: 'textarea' },
      type: { input: 'text', required: true },
      audience: { input: 'text', required: true },
      client_id: { input: 'select' },
      linkable_type: { input: 'text' },
      linkable_id: { input: 'select' },
      starts_at: { input: 'text' },
      expires_at: { input: 'text' },
      is_active: { input: 'toggle' },
      target_user_ids: { input: 'multi-select' }
    }
  }
} as const

export const dashboardAnnouncementPutFormMeta = {
  post: {
    schemaName: 'DashboardAnnouncementPutRequest',
    fields: {
      title: { input: 'text', required: true },
      body: { input: 'textarea' },
      type: { input: 'text', required: true },
      audience: { input: 'text', required: true },
      client_id: { input: 'select' },
      linkable_type: { input: 'text' },
      linkable_id: { input: 'select' },
      starts_at: { input: 'text' },
      expires_at: { input: 'text' },
      is_active: { input: 'toggle' },
      target_user_ids: { input: 'multi-select' }
    }
  },
  patch: {
    schemaName: 'DashboardAnnouncementPutRequest',
    fields: {
      title: { input: 'text', required: true },
      body: { input: 'textarea' },
      type: { input: 'text', required: true },
      audience: { input: 'text', required: true },
      client_id: { input: 'select' },
      linkable_type: { input: 'text' },
      linkable_id: { input: 'select' },
      starts_at: { input: 'text' },
      expires_at: { input: 'text' },
      is_active: { input: 'toggle' },
      target_user_ids: { input: 'multi-select' }
    }
  }
} as const

export const gridActionFormMeta = {
  post: {
    schemaName: 'GridActionRequest',
    fields: {
      action: { input: 'text', required: true },
      data: { input: 'text', required: true },
      all: { input: 'toggle', required: true }
    }
  },
  patch: {
    schemaName: 'GridActionRequest',
    fields: {
      action: { input: 'text', required: true },
      data: { input: 'text', required: true },
      all: { input: 'toggle', required: true }
    }
  }
} as const
