import { z } from 'zod'
import type { FormFieldConfig, FormGroupConfig } from '@motor-cms/ui-core/app/types/form'

// ============================================
// FrontendConfig Interface (full JSON column)
// ============================================

export interface FrontendConfig {
  brand: {
    name: string
    logoAlt: string
  }
  colorScheme: string
  logoSlug: string
  contact: {
    contactUrl: string
    email: string
    whatsappUrl: string | null
  }
  features: {
    orderLine: boolean
    appointments: boolean
    clickpath: boolean
    footerMenu: boolean
  }
  social: {
    instagram: string | null
    facebook: string | null
  }
  seo: {
    siteName: string
  }
  globalComponents?: {
    footer?: Record<string, string> // language_id -> builder_page_uuid
  }
}

// ============================================
// Zod Schema (editable fields only, no globalComponents)
// ============================================

type TranslateFunction = (key: string) => string

function optionalUrlSchema(t: TranslateFunction) {
  return z.string().refine(
    (val) => val === '' || val === null || (() => { try { new URL(val); return true } catch { return false } })(),
    { message: t('motor-core.global.validation_url') }
  )
}

export function frontendConfigSchema(t: TranslateFunction) {
  return z.object({
    brand: z.object({
      name: z.string().min(1, { message: t('motor-core.global.validation_required') }),
      logoAlt: z.string().min(1, { message: t('motor-core.global.validation_required') })
    }),
    colorScheme: z.string().min(1, { message: t('motor-core.global.validation_required') }),
    logoSlug: z.string().min(1, { message: t('motor-core.global.validation_required') }),
    contact: z.object({
      contactUrl: z.string().url({ message: t('motor-core.global.validation_url') }),
      email: z.string().email({ message: t('motor-core.global.validation_email') }),
      whatsappUrl: optionalUrlSchema(t).nullable().optional().transform((v) => v ?? null)
    }),
    features: z.object({
      orderLine: z.boolean().default(false),
      appointments: z.boolean().default(false),
      clickpath: z.boolean().default(false),
      footerMenu: z.boolean().default(false)
    }),
    social: z.object({
      instagram: optionalUrlSchema(t).nullable().optional().transform((v) => v ?? null),
      facebook: optionalUrlSchema(t).nullable().optional().transform((v) => v ?? null)
    }),
    seo: z.object({
      siteName: z.string().min(1, { message: t('motor-core.global.validation_required') })
    })
  })
}

export type FrontendConfigFormState = z.infer<ReturnType<typeof frontendConfigSchema>>

// ============================================
// Form Field Definitions
// ============================================

export function frontendConfigFields(t: (key: string) => string): FormFieldConfig[] {
  return [
    // Brand group
    {
      key: 'brand.name',
      label: t('motor-admin.clients.frontend_config.brand_name'),
      input: 'text',
      required: true,
      group: 'fc_brand'
    },
    {
      key: 'brand.logoAlt',
      label: t('motor-admin.clients.frontend_config.brand_logo_alt'),
      input: 'text',
      required: true,
      group: 'fc_brand'
    },
    {
      key: 'colorScheme',
      label: t('motor-admin.clients.frontend_config.color_scheme'),
      input: 'select',
      required: true,
      group: 'fc_brand'
    },
    {
      key: 'logoSlug',
      label: t('motor-admin.clients.frontend_config.logo_slug'),
      input: 'select',
      required: true,
      group: 'fc_brand'
    },

    // Contact group
    {
      key: 'contact.contactUrl',
      label: t('motor-admin.clients.frontend_config.contact_url'),
      input: 'url',
      required: true,
      group: 'fc_contact'
    },
    {
      key: 'contact.email',
      label: t('motor-admin.clients.frontend_config.contact_email'),
      input: 'email',
      required: true,
      group: 'fc_contact'
    },
    {
      key: 'contact.whatsappUrl',
      label: t('motor-admin.clients.frontend_config.contact_whatsapp_url'),
      input: 'url',
      required: false,
      group: 'fc_contact'
    },

    // Features group
    {
      key: 'features.orderLine',
      label: t('motor-admin.clients.frontend_config.features_order_line'),
      input: 'toggle',
      required: false,
      group: 'fc_features'
    },
    {
      key: 'features.appointments',
      label: t('motor-admin.clients.frontend_config.features_appointments'),
      input: 'toggle',
      required: false,
      group: 'fc_features'
    },
    {
      key: 'features.clickpath',
      label: t('motor-admin.clients.frontend_config.features_clickpath'),
      input: 'toggle',
      required: false,
      group: 'fc_features'
    },
    {
      key: 'features.footerMenu',
      label: t('motor-admin.clients.frontend_config.features_footer_menu'),
      input: 'toggle',
      required: false,
      group: 'fc_features'
    },

    // Social group
    {
      key: 'social.instagram',
      label: t('motor-admin.clients.frontend_config.social_instagram'),
      input: 'url',
      required: false,
      group: 'fc_social'
    },
    {
      key: 'social.facebook',
      label: t('motor-admin.clients.frontend_config.social_facebook'),
      input: 'url',
      required: false,
      group: 'fc_social'
    },

    // SEO group
    {
      key: 'seo.siteName',
      label: t('motor-admin.clients.frontend_config.seo_site_name'),
      input: 'text',
      required: true,
      group: 'fc_seo'
    }
  ]
}

// ============================================
// Form Group Definitions
// ============================================

export function frontendConfigGroups(t: (key: string) => string): FormGroupConfig[] {
  return [
    {
      key: 'fc_brand',
      label: t('motor-admin.clients.frontend_config.group_brand')
    },
    {
      key: 'fc_contact',
      label: t('motor-admin.clients.frontend_config.group_contact')
    },
    {
      key: 'fc_features',
      label: t('motor-admin.clients.frontend_config.group_features')
    },
    {
      key: 'fc_social',
      label: t('motor-admin.clients.frontend_config.group_social')
    },
    {
      key: 'fc_seo',
      label: t('motor-admin.clients.frontend_config.group_seo')
    }
  ]
}

// ============================================
// Default Empty State
// ============================================

export function emptyFrontendConfig(): FrontendConfigFormState {
  return {
    brand: {
      name: '',
      logoAlt: ''
    },
    colorScheme: '',
    logoSlug: '',
    contact: {
      contactUrl: '',
      email: '',
      whatsappUrl: null
    },
    features: {
      orderLine: false,
      appointments: false,
      clickpath: false,
      footerMenu: false
    },
    social: {
      instagram: null,
      facebook: null
    },
    seo: {
      siteName: ''
    }
  }
}
