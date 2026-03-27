<script setup lang="ts">
const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  created: []
}>()

const { t } = useI18n()
const client = useSanctumClient()
const { can } = usePermissions()
const saving = ref(false)

const canWriteAnnouncements = computed(() => can('dashboard-announcements.write'))

const form = reactive({
  title: '',
  body: '',
  type: 'info',
  audience: 'self',
  target_user_ids: [] as number[],
  linkable_type: '',
  linkable_id: undefined as number | undefined,
  starts_at: undefined as string | undefined,
  expires_at: undefined as string | undefined,
})

const typeOptions = computed(() => [
  { label: t('motor-admin.dashboard.announcements.type_info'), value: 'info' },
  { label: t('motor-admin.dashboard.announcements.type_warning'), value: 'warning' },
  { label: t('motor-admin.dashboard.announcements.type_error'), value: 'error' },
])

const allAudienceOptions = computed(() => [
  { label: t('motor-admin.dashboard.announcements.audience_self'), value: 'self' },
  { label: t('motor-admin.dashboard.announcements.audience_users'), value: 'users' },
  { label: t('motor-admin.dashboard.announcements.audience_client'), value: 'client' },
])

const audienceOptions = computed(() =>
  canWriteAnnouncements.value
    ? allAudienceOptions.value
    : allAudienceOptions.value.filter(o => o.value === 'self')
)

const linkableTypeOptions = computed(() => [
  { label: t('motor-admin.dashboard.announcements.linkable_page'), value: 'Motor\\Builder\\Models\\BuilderPage' },
  { label: t('motor-admin.dashboard.announcements.linkable_navigation'), value: 'Motor\\Builder\\Models\\Navigation' },
  { label: t('motor-admin.dashboard.announcements.linkable_file'), value: 'Motor\\Media\\Models\\File' },
  { label: t('motor-admin.dashboard.announcements.linkable_content_type'), value: 'Motor\\ContentType\\Models\\CustomContentType' },
])

const userOptions = ref<Array<{ label: string; value: number }>>([])
const usersLoading = ref(false)
const usersFetched = ref(false)

watch(() => form.audience, async (audience) => {
  if (audience === 'users' && !usersFetched.value) {
    usersLoading.value = true
    try {
      const response = await client<{ data: Array<{ id: number; name: string }> }>('/api/v2/users?per_page=200')
      userOptions.value = response.data.map(u => ({
        label: u.name,
        value: u.id,
      }))
      usersFetched.value = true
    } finally {
      usersLoading.value = false
    }
  }
})

const linkableOptions = ref<Array<{ label: string; value: number }>>([])
const linkableLoading = ref(false)
const linkableSearchTerm = ref('')
let linkableSearchTimeout: ReturnType<typeof setTimeout>

const linkableEndpoints: Record<string, { endpoint: string; labelFn: (item: Record<string, any>) => string }> = {
  'Motor\\Builder\\Models\\BuilderPage': {
    endpoint: '/api/v2/builder-pages',
    labelFn: item => item.name ?? `#${item.id}`,
  },
  'Motor\\Builder\\Models\\Navigation': {
    endpoint: '/api/v2/navigation-items',
    labelFn: item => item.full_slug ? `${item.name} (${item.full_slug})` : item.name ?? `#${item.id}`,
  },
  'Motor\\Media\\Models\\File': {
    endpoint: '/api/v2/files',
    labelFn: item => item.description || item.file?.file_name || `#${item.id}`,
  },
  'Motor\\ContentType\\Models\\CustomContentType': {
    endpoint: '/api/v2/custom-content-types',
    labelFn: item => item.name ?? `#${item.id}`,
  },
}

async function fetchLinkableOptions(query: string) {
  const config = linkableEndpoints[form.linkable_type]
  if (!config) return

  linkableLoading.value = true
  try {
    const params = new URLSearchParams({ per_page: '20' })
    if (query) {
      params.set('search', query)
    }
    const response = await client<{ data: Array<Record<string, any>> }>(`${config.endpoint}?${params}`)
    linkableOptions.value = response.data.map(item => ({
      label: config.labelFn(item),
      value: item.id,
    }))
  } catch {
    linkableOptions.value = []
  } finally {
    linkableLoading.value = false
  }
}

watch(() => form.linkable_type, (type) => {
  form.linkable_id = undefined
  linkableOptions.value = []
  linkableSearchTerm.value = ''
  if (!type) return
  fetchLinkableOptions('')
})

watch(linkableSearchTerm, (term) => {
  clearTimeout(linkableSearchTimeout)
  linkableSearchTimeout = setTimeout(() => fetchLinkableOptions(term), 300)
})

async function handleSubmit() {
  saving.value = true
  try {
    const data: Record<string, unknown> = {
      title: form.title,
      body: form.body || null,
      type: form.type,
      audience: form.audience,
    }

    if (form.audience === 'users') {
      data.target_user_ids = form.target_user_ids
    }
    if (form.linkable_type && form.linkable_id) {
      data.linkable_type = form.linkable_type
      data.linkable_id = form.linkable_id
    }
    if (form.starts_at) {
      data.starts_at = form.starts_at
    }
    if (form.expires_at) {
      data.expires_at = form.expires_at
    }

    await client('/api/v2/dashboard/announcements', {
      method: 'POST',
      body: data,
    })

    Object.assign(form, {
      title: '',
      body: '',
      type: 'info',
      audience: 'self',
      target_user_ids: [],
      linkable_type: '',
      linkable_id: null,
      starts_at: null,
      expires_at: null,
    })

    emit('created')
    emit('update:open', false)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <UModal
    :open="open"
    class="sm:max-w-xl"
    @update:open="emit('update:open', $event)"
  >
    <template #header>
      <span class="font-heading font-semibold">{{ t('motor-admin.dashboard.announcements.modal_title') }}</span>
    </template>

    <template #body>
      <div class="flex flex-col gap-5">
        <UFormField :label="t('motor-admin.dashboard.announcements.field_title')" required>
          <UInput v-model="form.title" class="w-full" :placeholder="t('motor-admin.dashboard.announcements.field_title_placeholder')" />
        </UFormField>

        <UFormField :label="t('motor-admin.dashboard.announcements.field_body')">
          <UTextarea v-model="form.body" class="w-full" :placeholder="t('motor-admin.dashboard.announcements.field_body_placeholder')" :rows="3" />
        </UFormField>

        <div class="grid grid-cols-2 gap-4">
          <UFormField :label="t('motor-admin.dashboard.announcements.field_type')">
            <USelectMenu v-model="form.type" :items="typeOptions" value-key="value" class="w-full" />
          </UFormField>

          <UFormField :label="t('motor-admin.dashboard.announcements.field_audience')">
            <USelectMenu v-model="form.audience" :items="audienceOptions" value-key="value" class="w-full" />
          </UFormField>
        </div>

        <UFormField v-if="form.audience === 'users'" :label="t('motor-admin.dashboard.announcements.field_users')">
          <USelectMenu
            v-model="form.target_user_ids"
            :items="userOptions"
            value-key="value"
            multiple
            :loading="usersLoading"
            :placeholder="t('motor-admin.dashboard.announcements.field_users_placeholder')"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('motor-admin.dashboard.announcements.field_link')">
          <USelectMenu
            v-model="form.linkable_type"
            :items="linkableTypeOptions"
            value-key="value"
            :placeholder="t('motor-admin.dashboard.announcements.field_link_type_placeholder')"
            class="w-full"
          />
        </UFormField>

        <UFormField v-if="form.linkable_type" :label="t('motor-admin.dashboard.announcements.field_link_item')">
          <USelectMenu
            v-model="form.linkable_id"
            v-model:search-term="linkableSearchTerm"
            :items="linkableOptions"
            value-key="value"
            ignore-filter
            :loading="linkableLoading"
            :placeholder="t('motor-admin.dashboard.announcements.field_link_item_placeholder')"
            class="w-full"
          />
        </UFormField>

        <div class="grid grid-cols-2 gap-4">
          <UFormField :label="t('motor-admin.dashboard.announcements.field_starts_at')">
            <UInput v-model="form.starts_at" type="datetime-local" class="w-full" />
          </UFormField>
          <UFormField :label="t('motor-admin.dashboard.announcements.field_expires_at')">
            <UInput v-model="form.expires_at" type="datetime-local" class="w-full" />
          </UFormField>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton
          color="neutral"
          variant="outline"
          @click="emit('update:open', false)"
        >
          {{ t('motor-admin.dashboard.announcements.cancel') }}
        </UButton>
        <UButton
          color="primary"
          :loading="saving"
          :disabled="!form.title"
          @click="handleSubmit"
        >
          {{ t('motor-admin.dashboard.announcements.create') }}
        </UButton>
      </div>
    </template>
  </UModal>
</template>
