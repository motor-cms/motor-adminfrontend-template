<!-- app/components/client/FooterSlotCard.vue -->
<script setup lang="ts">
import type { components } from '@motor-cms/ui-core/app/types/generated/api'
import { createFooterTemplate } from '../../data/footerTemplate'

type BuilderPageResource = components['schemas']['BuilderPageResource']

const props = defineProps<{
  clientId: number | string
  clientName: string
  languageId: number
  languageName?: string
  showLanguageLabel: boolean
  builderPageUuid: string | null
  disabled?: boolean
}>()

const emit = defineEmits<{
  'linked': [uuid: string, pageId: number]
  'unlinked': []
}>()

const client = useSanctumClient()
const router = useRouter()
const { t, locale } = useI18n()
const { success, error: notifyError } = useNotify()

// ============================================
// Page info state
// ============================================

interface PageInfo {
  id: number
  name: string
  is_published: boolean
  updated_at: string
}

const pageInfo = ref<PageInfo | null>(null)
const loadingPage = ref(false)
const creating = ref(false)

// ============================================
// Fetch page info on mount if UUID provided
// ============================================

async function fetchPageInfo(uuid: string): Promise<void> {
  loadingPage.value = true
  try {
    const response = await client<{ data: BuilderPageResource }>(
      `/api/v2/builder-pages/uuid/${uuid}`
    )
    const data = response.data
    pageInfo.value = {
      id: data.id,
      name: data.name,
      is_published: data.is_published,
      updated_at: data.updated_at,
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.errors.something_went_wrong')
    notifyError(t('motor-admin.clients.global_components.footer'), message)
  } finally {
    loadingPage.value = false
  }
}

onMounted(async () => {
  if (props.builderPageUuid) {
    await fetchPageInfo(props.builderPageUuid)
  }
})

// ============================================
// Helpers
// ============================================

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function buildPageName(): string {
  const base = `${props.clientName} - Footer`
  if (props.showLanguageLabel && props.languageName) {
    return `${base} (${props.languageName})`
  }
  return base
}

// ============================================
// Actions
// ============================================

async function onCreateFooter(): Promise<void> {
  creating.value = true
  try {
    const response = await client<{ data: BuilderPageResource }>('/api/v2/builder-pages', {
      method: 'POST',
      body: {
        name: buildPageName(),
        client_id: props.clientId,
        language_id: props.languageId,
        cache_type: 'always',
        ttl: 0,
        page_definition: JSON.stringify(createFooterTemplate()),
      },
    })
    const data = response.data
    emit('linked', data.uuid, data.id)
    success(t('motor-admin.clients.global_components.footer_created'))
    await router.push(`/motor-builder/builder-pages/${data.id}/edit`)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : t('motor-core.errors.create_failed')
    notifyError(t('motor-admin.clients.global_components.footer'), message)
  } finally {
    creating.value = false
  }
}

function onEditFooter(): void {
  if (pageInfo.value) {
    router.push(`/motor-builder/builder-pages/${pageInfo.value.id}/edit`)
  }
}

function onUnlinkFooter(): void {
  emit('unlinked')
}
</script>

<template>
  <div class="flex items-center justify-between gap-4 rounded-lg border border-default px-4 py-3">
    <!-- Left: info -->
    <div class="flex items-center gap-3 min-w-0">
      <UIcon name="i-lucide-panel-bottom" class="size-5 text-muted shrink-0" />

      <div class="min-w-0">
        <!-- Label -->
        <div class="text-sm font-medium text-highlighted">
          {{ t('motor-admin.clients.global_components.footer') }}
          <span v-if="showLanguageLabel && languageName" class="text-muted font-normal">
            ({{ languageName }})
          </span>
        </div>

        <!-- Footer details when page exists -->
        <template v-if="pageInfo">
          <div class="flex items-center flex-wrap gap-2 mt-0.5">
            <span class="text-sm text-muted truncate">{{ pageInfo.name }}</span>
            <UBadge
              v-if="pageInfo.is_published"
              color="success"
              variant="subtle"
              size="xs"
            >
              {{ t('motor-admin.clients.global_components.published') }}
            </UBadge>
            <UBadge
              v-else
              color="warning"
              variant="subtle"
              size="xs"
            >
              {{ t('motor-admin.clients.global_components.draft') }}
            </UBadge>
            <span class="text-xs text-dimmed">{{ formatDate(pageInfo.updated_at) }}</span>
          </div>
        </template>

        <!-- Loading state -->
        <template v-else-if="loadingPage">
          <div class="flex items-center gap-1.5 mt-0.5">
            <UIcon name="i-lucide-loader-2" class="size-3.5 animate-spin text-muted" />
            <span class="text-sm text-muted">{{ t('motor-core.global.loading') }}</span>
          </div>
        </template>

        <!-- No footer configured -->
        <template v-else>
          <div class="text-sm text-dimmed mt-0.5">
            {{ t('motor-admin.clients.global_components.no_footer') }}
          </div>
        </template>
      </div>
    </div>

    <!-- Right: actions -->
    <div class="flex items-center gap-2 shrink-0">
      <!-- Footer exists: Edit + Unlink -->
      <template v-if="pageInfo">
        <UButton
          variant="outline"
          size="sm"
          :disabled="disabled"
          @click="onEditFooter"
        >
          {{ t('motor-admin.clients.global_components.edit_footer') }}
        </UButton>
        <UButton
          variant="ghost"
          color="error"
          size="sm"
          :disabled="disabled"
          @click="onUnlinkFooter"
        >
          {{ t('motor-admin.clients.global_components.unlink_footer') }}
        </UButton>
      </template>

      <!-- No footer: Create -->
      <template v-else-if="!loadingPage">
        <UButton
          variant="outline"
          size="sm"
          :loading="creating"
          :disabled="disabled || creating"
          @click="onCreateFooter"
        >
          {{ t('motor-admin.clients.global_components.create_footer') }}
        </UButton>
      </template>
    </div>
  </div>
</template>
