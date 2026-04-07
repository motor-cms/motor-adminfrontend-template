export interface Permission {
  id: number
  name: string
  guard_name: string
  permission_group?: string
}

export interface Role {
  id: number
  name: string
  guard_name: string
  permissions: Permission[]
}

export interface Client {
  id: number
  name: string
  slug: string
  address?: string
  zip?: string
  city?: string
  country_iso_3166_1?: string
  website?: string
  description?: string
  is_active?: boolean
  contact_name?: string
  contact_phone?: string
  contact_email?: string
}

export interface MediaConversion {
  name: string
  url: string
}

export interface Media {
  collection: string
  name: string
  file_name: string
  size: number
  size_human?: string
  mime_type: string
  url: string
  path: string
  uuid: string
  created_at?: string
  // Conversions can be an array or an object keyed by conversion name
  conversions?: MediaConversion[] | Record<string, { url: string }>
}

export interface UserData {
  id: number
  name: string
  email: string
  show_onboarding?: boolean
  clients?: Client[]
  roles?: Role[]
  permissions?: Permission[]
  avatar?: Media | null
}

// API returns user wrapped in { data: ... }
export interface User {
  data: UserData
}
