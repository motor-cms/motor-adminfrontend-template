<script setup lang="ts">
import type { RendererProps } from '@motor-cms/ui-core/app/types/grid'

const props = defineProps<RendererProps<string | string[] | null>>()

const tags = computed(() => {
  if (!props.value) return []
  if (Array.isArray(props.value)) return props.value

  const raw = props.value.trim()
  if (!raw) return []

  // Try JSON parse first (e.g. '["tag1","tag2"]')
  if (raw.startsWith('[')) {
    try {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed.map(String)
    } catch {
      // fall through to comma split
    }
  }

  // Comma-separated
  return raw.split(',').map(s => s.trim()).filter(Boolean)
})
</script>

<template>
  <div
    v-if="tags.length > 0"
    class="flex flex-wrap gap-1"
  >
    <UBadge
      v-for="(tag, index) in tags"
      :key="index"
      color="neutral"
      variant="subtle"
      size="sm"
    >
      {{ tag }}
    </UBadge>
  </div>
  <span
    v-else
    class="text-[var(--ui-text-muted)]"
  >-</span>
</template>
