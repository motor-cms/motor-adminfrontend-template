<script setup lang="ts">
import type { SearchAction } from '../../types/search'

const props = defineProps<{
  title: string | null
  excerpt?: string | null
  icon: string
  thumbnailUrl?: string
  module: string
  indexLabel: string
  to: string
  actions: SearchAction[]
  compact?: boolean
  fileId?: number | string | null
  entityId?: number | string | null
  entityMeta?: Record<string, unknown>
}>()

const emit = defineEmits<{
  'action': [key: string, id: number | string | null, meta: Record<string, unknown> | undefined]
}>()

const router = useRouter()
const toast = useToast()
const { t } = useI18n()

const runtimeConfig = useRuntimeConfig()
const backendBaseUrl = runtimeConfig.public.backendBaseUrl as string

const lightboxOpen = ref(false)

const mimeType = computed(() => (props.entityMeta?.mime_type as string) ?? '')
const isImage = computed(() => mimeType.value.startsWith('image/'))
const showThumbnail = computed(() => isImage.value && !!props.thumbnailUrl)

const downloadUrl = computed(() => {
  if (!props.fileId) return undefined
  return `${backendBaseUrl}/download/${props.fileId}`
})

function navigate() {
  if (props.to && props.to !== '#') {
    router.push(props.to)
  }
}

function handleAction(action: SearchAction) {
  if (action.emit === 'lightbox') {
    lightboxOpen.value = true
  } else if (action.emit === 'download') {
    forceDownload()
  } else if (action.emit === 'copy-url') {
    copyUrl()
  } else if (action.emit) {
    emit('action', action.emit, props.entityId ?? null, props.entityMeta)
  } else if (action.to) {
    router.push(action.to)
  }
}

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
    a.download = (props.title ?? 'download')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(blobUrl)
  } catch {
    const a = document.createElement('a')
    a.href = url
    a.download = (props.title ?? 'download')
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
</script>

<template>
  <div
    class="group flex items-center gap-3 rounded-[var(--ui-radius)] border border-[var(--ui-border)] bg-[var(--ui-bg)] p-3 transition-colors hover:bg-[var(--ui-bg-elevated)] cursor-pointer"
    :class="compact ? 'p-2 gap-2' : 'p-3 gap-3'"
    role="link"
    tabindex="0"
    @click="navigate"
    @keydown.enter="navigate"
  >
    <!-- Leading: thumbnail or icon -->
    <div
      class="shrink-0 flex items-center justify-center rounded-[var(--ui-radius)] bg-[var(--ui-bg-elevated)] overflow-hidden"
      :class="compact ? 'size-8' : 'size-12'"
    >
      <img
        v-if="showThumbnail"
        :src="thumbnailUrl"
        :alt="title ?? ''"
        class="size-full object-cover"
      >
      <UIcon
        v-else
        :name="icon"
        class="text-[var(--ui-text-muted)]"
        :class="compact ? 'size-4' : 'size-5'"
      />
    </div>

    <!-- Center: title + excerpt + badges -->
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2">
        <span class="font-medium text-[var(--ui-text)] truncate text-sm">
          {{ title || $t('motor-core.search.untitled') }}
        </span>
      </div>

      <p
        v-if="excerpt && !compact"
        class="text-xs text-[var(--ui-text-muted)] mt-0.5 line-clamp-2"
      >
        {{ excerpt }}
      </p>

      <div class="flex items-center gap-1.5 mt-1">
        <UBadge
          :label="module"
          size="sm"
          variant="subtle"
          color="primary"
        />
        <UBadge
          :label="indexLabel"
          size="sm"
          variant="subtle"
          color="neutral"
        />
      </div>
    </div>

    <!-- Trailing: quick actions -->
    <div
      v-if="actions.length > 0"
      class="shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
      data-no-row-click
    >
      <UTooltip
        v-for="action in actions"
        :key="action.key"
        :text="action.label"
      >
        <UButton
          :icon="action.icon"
          :to="action.emit ? undefined : action.to"
          size="xs"
          variant="ghost"
          color="neutral"
          @click.stop="handleAction(action)"
        />
      </UTooltip>
    </div>
  </div>

  <!-- Lightbox for media files -->
  <MediaLightbox
    v-if="isImage && fileId"
    v-model:open="lightboxOpen"
    :src="downloadUrl ?? ''"
    :alt="title ?? ''"
    :file-name="title ?? ''"
    :download-url="downloadUrl"
  />
</template>
