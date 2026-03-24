<!-- app/components/form/HelpTooltip.vue -->
<script setup lang="ts">
defineProps<{
  text?: string
}>()

const open = ref(false)
</script>

<template>
  <span
    class="inline-flex"
    tabindex="0"
    role="button"
    aria-label="Help"
    @mouseenter="open = true"
    @mouseleave="open = false"
    @focus="open = true"
    @blur="open = false"
    @click="open = !open"
  >
    <UPopover
      v-model:open="open"
      :content="{ side: 'top', align: 'center' }"
    >
      <UIcon
        name="i-lucide-info"
        class="size-4 text-[var(--ui-primary)] cursor-help shrink-0"
      />
      <template #content>
        <div class="max-w-xs p-2 text-sm bg-[var(--ui-primary)] text-white rounded">
          <slot>{{ text }}</slot>
        </div>
      </template>
    </UPopover>
  </span>
</template>
