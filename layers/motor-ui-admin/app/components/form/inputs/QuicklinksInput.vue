<!-- app/components/form/inputs/QuicklinksInput.vue -->
<script setup lang="ts">
interface Quicklink {
  url: string
  url_label: string
  position: number
}

const props = defineProps<{
  modelValue: Quicklink[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: Quicklink[]]
}>()

const { t } = useI18n()

// Input state for adding a new link
const newUrl = ref('')
const newLabel = ref('')
const urlError = ref('')

const canAdd = computed(() => {
  if (!newUrl.value || !newLabel.value) return false
  try {
    new URL(newUrl.value)
    return true
  } catch {
    return false
  }
})

function validateUrl() {
  if (!newUrl.value) {
    urlError.value = ''
    return
  }
  try {
    new URL(newUrl.value)
    urlError.value = ''
  } catch {
    urlError.value = t('motor-core.global.validation_url')
  }
}

function addLink() {
  if (!canAdd.value) return
  const links = [...props.modelValue]
  links.push({
    url: newUrl.value,
    url_label: newLabel.value,
    position: links.length
  })
  emit('update:modelValue', links)
  newUrl.value = ''
  newLabel.value = ''
  urlError.value = ''
}

function removeLink(index: number) {
  const links = props.modelValue
    .filter((_, i) => i !== index)
    .map((link, i) => ({ ...link, position: i }))
  emit('update:modelValue', links)
}

// Drag reorder
const listRef = ref<HTMLElement | null>(null)
let sortableInstance: { destroy: () => void } | null = null

async function initSortable() {
  if (!listRef.value) return
  sortableInstance?.destroy()
  const { default: Sortable } = await import('sortablejs')
  sortableInstance = Sortable.create(listRef.value, {
    animation: 150,
    handle: '.drag-handle',
    onEnd(evt) {
      const { oldIndex, newIndex } = evt
      if (oldIndex == null || newIndex == null || oldIndex === newIndex) return

      // Revert DOM swap — let Vue re-render from updated data
      const parent = evt.item.parentNode!
      if (oldIndex < newIndex) {
        const refNode = parent.children[oldIndex] ?? null
        parent.insertBefore(evt.item, refNode)
      } else {
        const refNode = parent.children[oldIndex + 1] ?? null
        parent.insertBefore(evt.item, refNode)
      }

      const links = [...props.modelValue]
      const [moved] = links.splice(oldIndex, 1)
      if (moved) {
        links.splice(newIndex, 0, moved)
        emit('update:modelValue', links.map((l, i) => ({ ...l, position: i })))
      }
    }
  })
}

watch(() => props.modelValue.length, () => {
  nextTick(() => initSortable())
})

onMounted(() => {
  if (props.modelValue.length > 0) {
    nextTick(() => initSortable())
  }
})

onBeforeUnmount(() => {
  sortableInstance?.destroy()
})
</script>

<template>
  <div>
    <!-- Existing links -->
    <div
      v-if="modelValue.length > 0"
      ref="listRef"
      class="mb-4 divide-y divide-default rounded-lg ring-1 ring-[var(--ui-border)]"
    >
      <div
        v-for="(link, index) in modelValue"
        :key="index"
        class="flex items-center gap-3 px-3 py-2 group"
      >
        <UIcon
          name="i-lucide-grip-vertical"
          class="drag-handle size-4 text-muted cursor-grab shrink-0"
        />
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium truncate">
            {{ link.url_label }}
          </div>
          <div class="text-xs text-muted truncate">
            {{ link.url }}
          </div>
        </div>
        <UButton
          icon="i-lucide-trash-2"
          variant="ghost"
          color="error"
          size="xs"
          class="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          @click="removeLink(index)"
        />
      </div>
    </div>

    <!-- Add new link -->
    <div class="flex items-start gap-3">
      <div class="flex-1">
        <UInput
          v-model="newUrl"
          :placeholder="t('motor-builder.search_configs.link_url')"
          class="w-full"
          @blur="validateUrl"
          @keydown.enter.prevent="addLink"
        />
        <p
          v-if="urlError"
          class="text-xs text-[var(--ui-error)] mt-1"
        >
          {{ urlError }}
        </p>
      </div>
      <UInput
        v-model="newLabel"
        :placeholder="t('motor-builder.search_configs.link_url_label')"
        class="flex-1"
        @keydown.enter.prevent="addLink"
      />
      <UButton
        icon="i-lucide-plus"
        variant="outline"
        :disabled="!canAdd"
        class="shrink-0"
        @click="addLink"
      />
    </div>
  </div>
</template>
