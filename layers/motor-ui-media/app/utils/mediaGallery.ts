import type { FileResource } from '../types/media'

export function mediaIsImage(item: FileResource): boolean {
  return item.file?.mime_type?.startsWith('image/') ?? false
}

/**
 * Resolve the best URL for gallery thumbnails: the 400px `thumb` conversion
 * when generated, otherwise the original file URL, otherwise the backend
 * download route. Gallery preloading and the card <img> must use the same
 * URL so the measured image is already in the browser cache when rendered.
 */
export function mediaThumbnailUrl(item: FileResource, backendBaseUrl: string): string | undefined {
  const conversions = item.file?.conversions
  let thumb: { url: string } | string | undefined
  if (Array.isArray(conversions)) {
    thumb = conversions.find(c => c.name === 'thumb')
  } else if (conversions && typeof conversions === 'object') {
    thumb = (conversions as Record<string, { url: string } | string>).thumb
  }
  const thumbUrl = typeof thumb === 'string' ? thumb : thumb?.url
  if (thumbUrl) return thumbUrl
  if (item.file?.url) return item.file.url
  if (item.id) return `${backendBaseUrl}/download/${item.id}`
  return undefined
}
