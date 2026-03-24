<!-- app/components/form/inputs/RichTextEditor.vue -->
<!-- Lightweight rich text editor with link modal support for use in forms -->
<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const linkEditorOpen = ref(false)
const linkEditorProps = ref<{
  linkType: string
  url: string
  target: string
  anchor: string
  navigation: number | null
}>({
  linkType: 'url',
  url: '',
  target: '_self',
  anchor: '',
  navigation: null
})

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit.configure({
      link: false,
      underline: false
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: { class: 'text-primary underline' },
      protocols: [
        { scheme: 'tel', optionalSlashes: true },
        'mailto'
      ]
    }),
    Underline
  ],
  editorProps: {
    attributes: {
      class: 'outline-none min-h-[160px] px-3 py-2 prose prose-sm max-w-none focus:outline-none'
    }
  },
  onUpdate: ({ editor: ed }) => {
    if (!ed.isDestroyed) {
      emit('update:modelValue', ed.getHTML())
    }
  }
})

watch(() => props.modelValue, (val) => {
  if (editor.value && !editor.value.isDestroyed && val !== editor.value.getHTML()) {
    editor.value.commands.setContent(val ?? '', { emitUpdate: false })
  }
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

function toggleLink() {
  const ed = editor.value
  if (!ed) return
  const attrs = ed.getAttributes('link')
  const href = attrs.href ?? ''
  const target = attrs.target ?? '_self'

  if (href) {
    linkEditorProps.value = parseLinkProps(href, target)
  } else {
    linkEditorProps.value = {
      linkType: 'url',
      url: '',
      target: '_self',
      anchor: '',
      navigation: null
    }
  }
  linkEditorOpen.value = true
}

function handleLinkApply(data: { link_type: string, url: string, target: string, anchor: string, navigation: number | null, href: string }) {
  const ed = editor.value
  if (!ed) return
  ed.chain().focus().extendMarkRange('link').setLink({ href: data.href, target: data.target }).run()
}

function handleLinkRemove() {
  const ed = editor.value
  if (!ed) return
  ed.chain().focus().extendMarkRange('link').unsetLink().run()
}
</script>

<template>
  <div class="rounded-[var(--ui-radius)] ring ring-inset ring-[var(--ui-border-accented)] focus-within:ring-2 focus-within:ring-[var(--ui-border-inverted)]">
    <!-- Toolbar -->
    <div
      v-if="editor"
      class="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-[var(--ui-border-muted)]"
    >
      <UButton
        icon="i-lucide-bold"
        :variant="editor.isActive('bold') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleBold().run()"
      />
      <UButton
        icon="i-lucide-italic"
        :variant="editor.isActive('italic') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleItalic().run()"
      />
      <UButton
        icon="i-lucide-underline"
        :variant="editor.isActive('underline') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleUnderline().run()"
      />
      <USeparator
        orientation="vertical"
        class="h-5 mx-0.5"
      />
      <UButton
        icon="i-lucide-heading-2"
        :variant="editor.isActive('heading', { level: 2 }) ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      />
      <UButton
        icon="i-lucide-heading-3"
        :variant="editor.isActive('heading', { level: 3 }) ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      />
      <USeparator
        orientation="vertical"
        class="h-5 mx-0.5"
      />
      <UButton
        icon="i-lucide-list"
        :variant="editor.isActive('bulletList') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleBulletList().run()"
      />
      <UButton
        icon="i-lucide-list-ordered"
        :variant="editor.isActive('orderedList') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleOrderedList().run()"
      />
      <USeparator
        orientation="vertical"
        class="h-5 mx-0.5"
      />
      <UButton
        icon="i-lucide-link"
        :variant="editor.isActive('link') ? 'soft' : 'ghost'"
        size="xs"
        @click="toggleLink"
      />
      <USeparator
        orientation="vertical"
        class="h-5 mx-0.5"
      />
      <UButton
        icon="i-lucide-text-quote"
        :variant="editor.isActive('blockquote') ? 'soft' : 'ghost'"
        size="xs"
        @click="editor.chain().focus().toggleBlockquote().run()"
      />
    </div>

    <!-- Editor content -->
    <EditorContent :editor="editor" />
  </div>

  <BuilderLinkEditorModal
    :open="linkEditorOpen"
    :link-type="linkEditorProps.linkType"
    :url="linkEditorProps.url"
    :target="linkEditorProps.target"
    :anchor="linkEditorProps.anchor"
    :navigation="linkEditorProps.navigation"
    @update:open="linkEditorOpen = $event"
    @apply="handleLinkApply"
    @remove="handleLinkRemove"
  />
</template>

<style scoped>
:deep(.tiptap) {
  min-height: 160px;
}

:deep(.tiptap p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
  color: var(--ui-text-dimmed);
}
</style>
