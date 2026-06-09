export interface MediaFile {
  url?: string
  file_name?: string
  mime_type?: string
  size_human?: string
  created_at?: string
  conversions?: Record<string, { url: string }> | Array<{ name: string, url: string }> | string
}

export interface FileResource {
  id: number
  description: string
  file: MediaFile | null
  /** File-record creation date (stable across file replacements). Prefer this over file.created_at. */
  created_at?: string
  updated_at?: string
  categories?: { id: number, name: string }[] | null
  [key: string]: unknown
}
