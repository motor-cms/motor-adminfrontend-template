/**
 * Form field metadata — auto-generated from OpenAPI spec.
 * Do not edit manually. Run `npm run sync:api` to regenerate.
 */

export const aISystemPromptFormMeta = {
  post: {
    schemaName: 'AISystemPromptPostRequest',
    fields: {
      client_id: { input: 'select' },
      name: { input: 'text', required: true },
      prompt: { input: 'text', required: true }
    }
  },
  patch: {
    schemaName: 'AISystemPromptPatchRequest',
    fields: {
      client_id: { input: 'select' },
      name: { input: 'text', required: true },
      prompt: { input: 'text', required: true }
    }
  }
} as const

export const clientFormMeta = {
  post: {
    schemaName: 'ClientPostRequest',
    fields: {
      name: { input: 'text', required: true },
      slug: { input: 'text', required: true },
      address: { input: 'text', required: true },
      zip: { input: 'text', required: true },
      city: { input: 'text', required: true },
      country_iso_3166_1: { input: 'text', required: true },
      is_active: { input: 'toggle', required: true },
      contact_name: { input: 'text', required: true },
      contact_email: { input: 'email', required: true },
      contact_phone: { input: 'text', required: true },
      website: { input: 'text' },
      description: { input: 'textarea' }
    }
  },
  patch: {
    schemaName: 'ClientPatchRequest',
    fields: {
      name: { input: 'text', required: true },
      slug: { input: 'text', required: true },
      address: { input: 'text', required: true },
      zip: { input: 'text', required: true },
      city: { input: 'text', required: true },
      country_iso_3166_1: { input: 'text', required: true },
      is_active: { input: 'toggle', required: true },
      contact_name: { input: 'text', required: true },
      contact_email: { input: 'email', required: true },
      contact_phone: { input: 'text', required: true },
      website: { input: 'text' },
      description: { input: 'textarea' }
    }
  }
} as const

export const configVariableFormMeta = {
  post: {
    schemaName: 'ConfigVariablePostRequest',
    fields: {
      package: { input: 'text', required: true },
      group: { input: 'text', required: true },
      name: { input: 'text', required: true },
      value: { input: 'text', required: true },
      is_invisible: { input: 'toggle' }
    }
  },
  patch: {
    schemaName: 'ConfigVariablePatchRequest',
    fields: {
      package: { input: 'text', required: true },
      group: { input: 'text', required: true },
      name: { input: 'text', required: true },
      value: { input: 'text', required: true },
      is_invisible: { input: 'toggle' }
    }
  }
} as const

export const domainFormMeta = {
  post: {
    schemaName: 'DomainPostRequest',
    fields: {
      client_id: { input: 'select', required: true },
      is_active: { input: 'toggle', required: true },
      name: { input: 'text', required: true },
      protocol: { input: 'text', required: true },
      host: { input: 'text', required: true },
      port: { input: 'number', required: true },
      path: { input: 'text', required: true },
      is_preview_domain: { input: 'toggle' }
    }
  },
  patch: {
    schemaName: 'DomainPatchRequest',
    fields: {
      client_id: { input: 'select', required: true },
      is_active: { input: 'toggle', required: true },
      name: { input: 'text', required: true },
      protocol: { input: 'text', required: true },
      host: { input: 'text', required: true },
      port: { input: 'number', required: true },
      path: { input: 'text', required: true },
      is_preview_domain: { input: 'toggle' }
    }
  }
} as const

export const emailTemplateFormMeta = {
  post: {
    schemaName: 'EmailTemplatePostRequest',
    fields: {
      client_id: { input: 'select', required: true },
      language_id: { input: 'select', required: true },
      name: { input: 'text', required: true },
      slug: { input: 'text' },
      subject: { input: 'text', required: true },
      body_text: { input: 'textarea' },
      body_html: { input: 'textarea' },
      default_sender_name: { input: 'text' },
      default_sender_email: { input: 'email' },
      default_recipient_name: { input: 'text' },
      default_recipient_email: { input: 'email' },
      default_cc_email: { input: 'email' },
      default_bcc_email: { input: 'email' },
      default_replyto_name: { input: 'text' },
      default_replyto_email: { input: 'email' },
      has_body_html: { input: 'toggle' }
    }
  },
  patch: {
    schemaName: 'EmailTemplatePatchRequest',
    fields: {
      client_id: { input: 'select', required: true },
      language_id: { input: 'select', required: true },
      name: { input: 'text', required: true },
      slug: { input: 'text' },
      subject: { input: 'text', required: true },
      body_text: { input: 'textarea' },
      body_html: { input: 'textarea' },
      default_sender_name: { input: 'text' },
      default_sender_email: { input: 'email' },
      default_recipient_name: { input: 'text' },
      default_recipient_email: { input: 'email' },
      default_cc_email: { input: 'email' },
      default_bcc_email: { input: 'email' },
      default_replyto_name: { input: 'text' },
      default_replyto_email: { input: 'email' },
      has_body_html: { input: 'toggle' }
    }
  }
} as const

export const languageFormMeta = {
  post: {
    schemaName: 'LanguagePostRequest',
    fields: {
      iso_639_1: { input: 'text', required: true },
      english_name: { input: 'text', required: true },
      native_name: { input: 'text', required: true }
    }
  },
  patch: {
    schemaName: 'LanguagePatchRequest',
    fields: {
      iso_639_1: { input: 'text', required: true },
      english_name: { input: 'text', required: true },
      native_name: { input: 'text', required: true }
    }
  }
} as const

export const permissionFormMeta = {
  post: {
    schemaName: 'PermissionPostRequest',
    fields: {
      name: { input: 'text', required: true },
      guard_name: { input: 'text', required: true },
      permission_group_id: { input: 'select' }
    }
  },
  patch: {
    schemaName: 'PermissionPatchRequest',
    fields: {
      name: { input: 'text', required: true },
      guard_name: { input: 'text', required: true },
      permission_group_id: { input: 'select' }
    }
  }
} as const

export const permissionGroupFormMeta = {
  post: {
    schemaName: 'PermissionGroupPostRequest',
    fields: {
      name: { input: 'text', required: true },
      sort_position: { input: 'number' },
      permissions: { input: 'multi-select' }
    }
  },
  patch: {
    schemaName: 'PermissionGroupPatchRequest',
    fields: {
      name: { input: 'text', required: true },
      sort_position: { input: 'number' },
      permissions: { input: 'multi-select' }
    }
  }
} as const

export const roleFormMeta = {
  post: {
    schemaName: 'RolePostRequest',
    fields: {
      name: { input: 'text', required: true },
      guard_name: { input: 'text', required: true },
      permissions: { input: 'multi-select' }
    }
  },
  patch: {
    schemaName: 'RolePatchRequest',
    fields: {
      name: { input: 'text', required: true },
      guard_name: { input: 'text', required: true },
      permissions: { input: 'multi-select' }
    }
  }
} as const

export const userFormMeta = {
  post: {
    schemaName: 'UserPostRequest',
    fields: {
      name: { input: 'text', required: true },
      email: { input: 'email', required: true },
      password: { input: 'password', required: true },
      clients: { input: 'multi-select' },
      roles: { input: 'multi-select' },
      permissions: { input: 'multi-select' },
      avatar: { input: 'text' }
    }
  },
  patch: {
    schemaName: 'UserPatchRequest',
    fields: {
      name: { input: 'text', required: true },
      email: { input: 'email', required: true },
      password: { input: 'password' },
      clients: { input: 'multi-select' },
      roles: { input: 'multi-select' },
      permissions: { input: 'multi-select' },
      avatar: { input: 'text' }
    }
  }
} as const
