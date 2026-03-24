<script setup lang="ts">
const props = defineProps<{
  open: boolean
  src: string
  alt?: string
  fileName?: string
  downloadUrl?: string
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const toast = useToast()
const { t } = useI18n()

const overlayRef = ref<HTMLElement>()

function close() {
  emit('update:open', false)
}

watch(() => props.open, (isOpen) => {
  if (isOpen) {
    nextTick(() => overlayRef.value?.focus())
  }
})

async function copyUrl() {
  const url = props.downloadUrl ?? props.src
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
  if (!props.src) return
  try {
    const response = await fetch(props.src)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = props.fileName ?? 'download'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch {
    window.open(props.src, '_blank')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        ref="overlayRef"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-8"
        tabindex="0"
        @click="close"
        @keydown.escape="close"
      >
        <UButton
          icon="i-lucide-x"
          variant="ghost"
          color="neutral"
          size="lg"
          class="absolute top-4 right-4 text-white hover:bg-white/20"
          @click="close"
        />
        <img
          :src="src"
          :alt="alt ?? ''"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          @click.stop
        >
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-full px-5 py-2.5">
          <span class="text-sm text-white/80 truncate max-w-64">{{ fileName }}</span>
          <div class="w-px h-4 bg-white/20" />
          <button
            class="flex items-center justify-center size-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            @click.stop="forceDownload"
          >
            <UIcon
              name="i-lucide-download"
              class="size-4"
            />
          </button>
          <button
            class="flex items-center justify-center size-8 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            @click.stop="copyUrl"
          >
            <UIcon
              name="i-lucide-link"
              class="size-4"
            />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
