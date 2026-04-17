<!-- app/components/client/GlobalComponentsSection.vue -->
<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  clientId: number | string
  clientName: string
  footerMap: Record<string, string> | undefined
  languages: { id: number, name: string }[]
  isMultiLanguage: boolean
  languagesLoading: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  'footer-linked': [languageId: number, uuid: string, pageId: number]
  'footer-unlinked': [languageId: number]
}>()

function getFooterUuid(languageId: number): string | null {
  return props.footerMap?.[String(languageId)] ?? null
}
</script>

<template>
  <UPageCard :title="t('motor-admin.clients.global_components.title')">
    <div v-if="languagesLoading" class="flex items-center gap-2 text-muted py-4">
      <UIcon name="i-lucide-loader-2" class="size-4 animate-spin" />
      <span class="text-sm">{{ t('motor-core.global.loading') }}</span>
    </div>
    <div v-else-if="languages.length === 0" class="text-sm text-muted py-4">
      {{ t('motor-admin.clients.global_components.no_languages') }}
    </div>
    <template v-else>
      <ClientFooterSlotCard
        v-for="lang in languages"
        :key="lang.id"
        :client-id="clientId"
        :client-name="clientName"
        :language-id="lang.id"
        :language-name="lang.name"
        :show-language-label="isMultiLanguage"
        :builder-page-uuid="getFooterUuid(lang.id)"
        :disabled="disabled"
        @linked="(uuid: string, pageId: number) => emit('footer-linked', lang.id, uuid, pageId)"
        @unlinked="emit('footer-unlinked', lang.id)"
      />
    </template>
  </UPageCard>
</template>
