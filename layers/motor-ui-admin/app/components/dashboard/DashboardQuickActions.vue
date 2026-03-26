<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits<{
  'create-page': []
  'upload-media': []
}>()
</script>

<template>
  <UPageCard>
    <template #header>
      <span class="text-sm font-heading font-semibold text-highlighted">{{ t('motor-admin.dashboard.quick_actions.title') }}</span>
    </template>
    <div class="flex flex-col gap-2">
      <UButton
        icon="i-lucide-plus"
        color="primary"
        block
        @click="emit('create-page')"
      >
        {{ t('motor-admin.dashboard.quick_actions.new_page') }}
      </UButton>
      <UButton
        icon="i-lucide-upload"
        color="neutral"
        variant="outline"
        block
        @click="emit('upload-media')"
      >
        {{ t('motor-admin.dashboard.quick_actions.upload_media') }}
      </UButton>
      <UButton
        icon="i-lucide-menu"
        color="neutral"
        variant="outline"
        block
        to="/motor-builder/navigation-trees"
      >
        {{ t('motor-admin.dashboard.quick_actions.navigation') }}
      </UButton>
    </div>
  </UPageCard>
</template>
