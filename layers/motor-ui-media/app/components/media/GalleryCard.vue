<script setup lang="ts">
import type { FileResource } from '../../types/media'

const props = defineProps<{
  item: FileResource
  selected?: boolean
  selectable?: boolean
  /** Pre-measured thumbnail aspect ratio (width/height) — reserves the tile's final size before the image paints */
  ratio?: number
}>()

const emit = defineEmits<{
  'select': [id: number, selected: boolean]
  'show-usage': [fileId: number]
}>()

function handleCardClick(e: MouseEvent) {
  if (!props.selectable) return
  if (e.metaKey || e.ctrlKey) {
    e.preventDefault()
    e.stopPropagation()
    emit('select', props.item.id, !props.selected)
  }
}

const toast = useToast()
const { t, locale } = useI18n()

// Read the File record's own created_at (stable across file replacements), not
// the Spatie media-row date which bumps on every replacement (ZRMDEV-220).
// Format via the shared locale-aware formatter so it matches the list view's
// DateRenderer (e.g. "29.05.2026 13:55") instead of an ad-hoc locale format.
const createdAt = computed(() => {
  const raw = props.item.created_at
  if (!raw) return ''
  return formatDate(parseDate(raw), toIntlLocale(locale.value), true)
})

const lightboxOpen = ref(false)

const media = computed(() => props.item.file)

const runtimeConfig = useRuntimeConfig()
const backendBaseUrl = runtimeConfig.public.backendBaseUrl as string

// Same URL the gallery preloads for measuring — must match for a cache hit
const thumbnailUrl = computed(() => mediaThumbnailUrl(props.item, backendBaseUrl))

const isImage = computed(() => media.value?.mime_type?.startsWith('image/'))

const imageLoaded = ref(false)
const imageStyle = computed(() =>
  props.ratio ? { aspectRatio: String(props.ratio) } : undefined
)

const fileExtension = computed(() => {
  if (!media.value?.file_name) return ''
  return media.value.file_name.split('.').pop()?.toUpperCase() ?? ''
})

const mimeIcon = computed(() => {
  const mime = media.value?.mime_type ?? ''
  if (mime.startsWith('video/')) return 'i-lucide-film'
  if (mime.startsWith('audio/')) return 'i-lucide-music'
  if (mime.includes('pdf')) return 'i-lucide-file-text'
  if (mime.includes('zip') || mime.includes('archive') || mime.includes('compressed')) return 'i-lucide-archive'
  if (mime.includes('spreadsheet') || mime.includes('excel') || mime.includes('csv')) return 'i-lucide-table'
  if (mime.includes('document') || mime.includes('word') || mime.includes('text')) return 'i-lucide-file-text'
  return 'i-lucide-file'
})

const downloadUrl = computed(() => {
  if (!props.item.id) return undefined
  return `${backendBaseUrl}/download/${props.item.id}`
})

async function copyUrl() {
  const url = downloadUrl.value
  if (!url) return
  try {
    await navigator.clipboard.writeText(url)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = url
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
  toast.add({
    title: t('motor-media.files.url_copied'),
    icon: 'i-lucide-check',
    color: 'success'
  })
}

async function forceDownload() {
  const url = downloadUrl.value
  if (!url) return
  try {
    const response = await fetch(url, { credentials: 'include' })
    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = blobUrl
    a.download = media.value?.file_name ?? 'download'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(blobUrl)
  } catch {
    const a = document.createElement('a')
    a.href = url
    a.download = media.value?.file_name ?? 'download'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}

function onCheckboxChange(checked: boolean | 'indeterminate') {
  if (typeof checked === 'boolean') {
    emit('select', props.item.id, checked)
  }
}
</script>

<template>
  <div class="group">
    <div
      class="relative rounded-xl overflow-hidden ring-1 ring-[var(--ui-border)] bg-[var(--ui-bg-elevated)] shadow-sm hover:shadow-xl hover:ring-[var(--ui-border-accented)] transition-all duration-300"
      :class="{ 'ring-2 ring-[var(--ui-primary)]': selected }"
      @click="handleCardClick"
    >
      <!-- Selection checkbox -->
      <div
        v-if="selectable"
        class="absolute top-2.5 left-2.5 z-10 transition-opacity duration-200"
        :class="selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
        data-no-row-click
      >
        <UCheckbox
          :model-value="selected"
          @update:model-value="onCheckboxChange"
        />
      </div>

      <!-- File type badge -->
      <div
        v-if="fileExtension"
        class="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-black/50 text-white backdrop-blur-sm"
      >
        {{ fileExtension }}
      </div>

      <!-- Image thumbnail — the wrapper reserves the final tile size via
           aspect-ratio so the masonry never reflows when the image paints -->
      <NuxtLink
        v-if="isImage && thumbnailUrl"
        :to="`/motor-media/files/${item.id}/edit`"
        class="relative block overflow-hidden"
        :style="imageStyle"
      >
        <img
          :src="thumbnailUrl"
          :alt="item.description || media?.file_name || ''"
          class="w-full block transition-transform duration-300 group-hover:scale-105"
          :class="ratio ? 'absolute inset-0 h-full object-cover' : ''"
          loading="lazy"
          @load="imageLoaded = true"
        >
        <USkeleton
          v-if="ratio && !imageLoaded"
          class="absolute inset-0 rounded-none"
        />
      </NuxtLink>

      <!-- Non-image placeholder -->
      <NuxtLink
        v-else
        :to="`/motor-media/files/${item.id}/edit`"
        class="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-[var(--ui-bg-muted)]"
      >
        <UIcon
          :name="mimeIcon"
          class="size-12 text-[var(--ui-text-dimmed)]"
        />
        <span class="text-xs font-medium text-[var(--ui-text-muted)]">
          {{ media?.file_name }}
        </span>
      </NuxtLink>

      <!-- Hover overlay with actions -->
      <div class="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div class="flex items-center gap-2 pointer-events-auto">
          <button
            v-if="isImage"
            class="flex items-center justify-center size-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
            :title="t('motor-media.files.preview')"
            @click.prevent.stop="lightboxOpen = true"
          >
            <UIcon
              name="i-lucide-expand"
              class="size-5"
            />
          </button>
          <button
            class="flex items-center justify-center size-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
            :title="t('motor-core.global.download')"
            @click.prevent.stop="forceDownload"
          >
            <UIcon
              name="i-lucide-download"
              class="size-5"
            />
          </button>
          <button
            class="flex items-center justify-center size-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
            :title="t('motor-media.files.copy_url')"
            @click.prevent.stop="copyUrl"
          >
            <UIcon
              name="i-lucide-link"
              class="size-5"
            />
          </button>
          <button
            class="flex items-center justify-center size-10 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
            :title="t('motor-media.files.usage_title')"
            @click.prevent.stop="emit('show-usage', item.id)"
          >
            <UIcon
              name="i-lucide-network"
              class="size-5"
            />
          </button>
        </div>
      </div>

      <!-- Bottom info bar -->
      <div class="px-3 py-2.5 border-t border-[var(--ui-border)]">
        <NuxtLink
          :to="`/motor-media/files/${item.id}/edit`"
          class="block truncate text-sm font-medium text-[var(--ui-text)] hover:text-[var(--ui-primary)] transition-colors"
          :title="item.description || media?.file_name"
        >
          {{ item.description || media?.file_name || '-' }}
        </NuxtLink>
        <span
          v-if="createdAt"
          class="text-xs text-[var(--ui-text-muted)]"
        >
          {{ createdAt }}
        </span>
      </div>
    </div>

    <MediaLightbox
      v-if="isImage"
      v-model:open="lightboxOpen"
      :src="downloadUrl ?? ''"
      :alt="item.description || media?.file_name"
      :file-name="media?.file_name"
      :download-url="downloadUrl"
    />
  </div>
</template>
