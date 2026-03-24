<script setup lang="ts">
import type { RendererProps, MediaValue } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<MediaValue | null>>()

const toast = useToast()
const { t } = useI18n()
const lightboxOpen = ref(false)

const runtimeConfig = useRuntimeConfig()
const backendBaseUrl = runtimeConfig.public.backendBaseUrl as string

const downloadUrl = computed(() => {
  const fileId = props.row?.id
  if (!fileId) return undefined
  return `${backendBaseUrl}/download/${fileId}`
})

const thumbnailUrl = computed(() => {
  // Prefer API url (actual storage/CDN URL) when available
  if (props.value?.url) return props.value.url
  if (!props.row?.id) return undefined
  return `${backendBaseUrl}/download/${props.row.id}`
})

const isImage = computed(() => {
  return props.value?.mime_type?.startsWith('image/')
})

const fileExtension = computed(() => {
  if (!props.value?.file_name) return ''
  return props.value.file_name.split('.').pop()?.toUpperCase() ?? ''
})

const mimeIcon = computed(() => {
  const mime = props.value?.mime_type ?? ''
  if (mime.startsWith('video/')) return 'i-lucide-film'
  if (mime.startsWith('audio/')) return 'i-lucide-music'
  if (mime.includes('pdf')) return 'i-lucide-file-text'
  if (mime.includes('zip') || mime.includes('archive') || mime.includes('compressed')) return 'i-lucide-archive'
  if (mime.includes('spreadsheet') || mime.includes('excel') || mime.includes('csv')) return 'i-lucide-table'
  if (mime.includes('document') || mime.includes('word') || mime.includes('text')) return 'i-lucide-file-text'
  return 'i-lucide-file'
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
    a.download = props.value?.file_name ?? 'download'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(blobUrl)
  } catch {
    const a = document.createElement('a')
    a.href = url
    a.download = props.value?.file_name ?? 'download'
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
</script>

<template>
  <div
    v-if="value"
    class="py-2"
  >
    <!-- Thumbnail container: fixed size, hover to enlarge -->
    <div class="group/thumb relative size-28 rounded-lg overflow-hidden ring-1 ring-[var(--ui-border)] bg-[var(--ui-bg-elevated)] shadow-sm hover:shadow-lg hover:ring-[var(--ui-border-accented)] transition-all duration-300 cursor-pointer">
      <!-- Image thumbnail -->
      <img
        v-if="isImage && thumbnailUrl"
        :src="thumbnailUrl"
        :alt="value.file_name ?? ''"
        class="size-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
        @click.stop="lightboxOpen = true"
      >
      <!-- Non-image file placeholder -->
      <div
        v-else
        class="size-full flex flex-col items-center justify-center gap-1 bg-[var(--ui-bg-muted)]"
      >
        <UIcon
          :name="mimeIcon"
          class="size-7 text-[var(--ui-text-dimmed)]"
        />
        <span
          v-if="fileExtension"
          class="text-[9px] font-bold tracking-wider text-[var(--ui-text-dimmed)] uppercase"
        >
          {{ fileExtension }}
        </span>
      </div>

      <!-- Hover overlay with actions -->
      <div class="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
        <button
          v-if="isImage"
          class="flex items-center justify-center size-9 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
          :title="t('motor-media.files.preview')"
          @click.stop="lightboxOpen = true"
        >
          <UIcon
            name="i-lucide-expand"
            class="size-4"
          />
        </button>
        <button
          class="flex items-center justify-center size-9 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
          :title="t('motor-core.global.download')"
          @click.stop="forceDownload"
        >
          <UIcon
            name="i-lucide-download"
            class="size-4"
          />
        </button>
        <button
          class="flex items-center justify-center size-9 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition-colors"
          :title="t('motor-media.files.copy_url')"
          @click.stop="copyUrl"
        >
          <UIcon
            name="i-lucide-link"
            class="size-4"
          />
        </button>
      </div>
    </div>

    <MediaLightbox
      v-if="isImage"
      v-model:open="lightboxOpen"
      :src="downloadUrl ?? ''"
      :alt="value.file_name"
      :file-name="value.file_name"
      :download-url="downloadUrl"
    />
  </div>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
