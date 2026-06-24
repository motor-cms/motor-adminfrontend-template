<script setup lang="ts">
const { t } = useI18n()

// No `permission` meta on purpose: this page must stay reachable for any
// authenticated user so the permission middleware can redirect here instead of
// throwing a layout-less error. The default layout gives the user their
// permission-filtered sidebar + the user menu (logout) (ZRMDEV-236).
definePageMeta({ layout: 'default' })
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center min-h-[60vh]">
    <UIcon
      name="i-lucide-lock"
      class="size-10 text-[var(--ui-text-muted)]"
    />
    <h1 class="text-lg font-semibold">
      {{ t('motor-core.errors.access_denied') }}
    </h1>
    <p class="text-sm text-[var(--ui-text-muted)] max-w-md">
      {{ t('motor-core.errors.no_access_description') }}
    </p>
  </div>
</template>
