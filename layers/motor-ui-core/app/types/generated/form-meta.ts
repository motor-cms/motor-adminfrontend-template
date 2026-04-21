/**
 * Form field metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const aIHelpFormMeta = {
  post: {
    schemaName: 'AIHelpPostRequest',
    fields: {
      prompt: { input: 'text', required: true },
      system_prompt: { input: 'number', required: true }
    }
  }
} as const

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

export const builderTemporaryPageForIDFormMeta = {
  post: {
    schemaName: 'BuilderTemporaryPageForIDRequest',
    fields: {
      pageUUID: { input: 'text', required: true },
      uuid: { input: 'text', required: true },
      client_id: { input: 'select', required: true }
    }
  },
  patch: {
    schemaName: 'BuilderTemporaryPageForIDRequest',
    fields: {
      pageUUID: { input: 'text', required: true },
      uuid: { input: 'text', required: true },
      client_id: { input: 'select', required: true }
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

export const clickpathAttachStepFormMeta = {
  post: {
    schemaName: 'ClickpathAttachStepPostRequest',
    fields: {
      step_id: { input: 'select', required: true },
      parent_id: { input: 'select' }
    }
  }
} as const

export const customContentFieldAttachFormMeta = {
  post: {
    schemaName: 'CustomContentFieldAttachPostRequest',
    fields: {
      child_field_id: { input: 'select', required: true }
    }
  }
} as const

export const customContentFieldConditionalFormMeta = {
  post: {
    schemaName: 'CustomContentFieldConditionalPostRequest',
    fields: {
      field_id: { input: 'select', required: true },
      conditional: { input: 'text', required: true },
      value: { input: 'text', required: true }
    }
  },
  patch: {
    schemaName: 'CustomContentFieldConditionalPatchRequest',
    fields: {
      field_id: { input: 'select', required: true },
      conditional: { input: 'text', required: true },
      value: { input: 'text', required: true }
    }
  }
} as const

export const customContentFieldDataFormMeta = {
  post: {
    schemaName: 'CustomContentFieldDataPostRequest',
    fields: {
      dataArr: { input: 'text', required: true }
    }
  },
  patch: {
    schemaName: 'CustomContentFieldDataPatchRequest',
    fields: {
      dataArr: { input: 'text', required: true }
    }
  }
} as const

export const customContentTypeAttachFormMeta = {
  post: {
    schemaName: 'CustomContentTypeAttachPostRequest',
    fields: {
      child_type_id: { input: 'select', required: true }
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

export const emailTemplateSendFormMeta = {
  post: {
    schemaName: 'EmailTemplateSendPostRequest',
    fields: {
      client_id: { input: 'select', required: true },
      language_id: { input: 'select', required: true },
      slug: { input: 'text', required: true },
      subject: { input: 'text' },
      body_text: { input: 'textarea' },
      body_html: { input: 'textarea' },
      sender_name: { input: 'text' },
      sender_email: { input: 'email' },
      recipient_name: { input: 'text' },
      recipient_email: { input: 'email' },
      cc_email: { input: 'email' },
      bcc_email: { input: 'email' },
      replyto_email: { input: 'email' },
      replyto_name: { input: 'text' },
      text_replace_data: { input: 'text' }
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

export const profileEditFormMeta = {
  post: {
    schemaName: 'ProfileEditRequest',
    fields: {
      name: { input: 'text', required: true },
      email: { input: 'email', required: true },
      password: { input: 'password' },
      avatar: { input: 'text' }
    }
  },
  patch: {
    schemaName: 'ProfileEditRequest',
    fields: {
      name: { input: 'text', required: true },
      email: { input: 'email', required: true },
      password: { input: 'password' },
      avatar: { input: 'text' }
    }
  }
} as const

export const scoreTriggerFormMeta = {
  post: {
    schemaName: 'ScoreTriggerRequest',
    fields: {
      score_id: { input: 'select', required: true }
    }
  },
  patch: {
    schemaName: 'ScoreTriggerRequest',
    fields: {
      score_id: { input: 'select', required: true }
    }
  }
} as const
