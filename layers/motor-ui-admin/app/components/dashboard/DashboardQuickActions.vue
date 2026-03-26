<script setup lang="ts">
const emit = defineEmits<{
  'create-page': []
  'upload-media': []
}>()
</script>

<template>
  <UPageCard>
    <template #header>
      <span class="text-sm font-heading font-semibold text-highlighted">Schnellaktionen</span>
    </template>
    <div class="flex flex-col gap-2">
      <UButton
        icon="i-lucide-plus"
        color="primary"
        block
        @click="emit('create-page')"
      >
        Neue Seite
      </UButton>
      <UButton
        icon="i-lucide-upload"
        color="neutral"
        variant="outline"
        block
        @click="emit('upload-media')"
      >
        Medien hochladen
      </UButton>
      <UButton
        icon="i-lucide-menu"
        color="neutral"
        variant="outline"
        block
        to="/motor-builder/navigation-trees"
      >
        Navigation
      </UButton>
    </div>
  </UPageCard>
</template>
