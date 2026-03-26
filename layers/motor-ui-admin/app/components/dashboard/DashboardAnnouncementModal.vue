<script setup lang="ts">
const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  created: []
}>()

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
  linkable_id: null as number | null,
  starts_at: null as string | null,
  expires_at: null as string | null,
})

const typeOptions = [
  { label: 'Info', value: 'info' },
  { label: 'Warnung', value: 'warning' },
  { label: 'Fehler', value: 'error' },
]

const allAudienceOptions = [
  { label: 'Nur für mich', value: 'self' },
  { label: 'Bestimmte Nutzer', value: 'users' },
  { label: 'Alle im Mandanten', value: 'client' },
]

const audienceOptions = computed(() =>
  canWriteAnnouncements.value
    ? allAudienceOptions
    : allAudienceOptions.filter(o => o.value === 'self')
)

const linkableTypeOptions = [
  { label: 'Seite', value: 'Motor\\Builder\\Models\\BuilderPage' },
  { label: 'Navigationspunkt', value: 'Motor\\Builder\\Models\\Navigation' },
  { label: 'Datei', value: 'Motor\\Media\\Models\\File' },
  { label: 'Inhaltstyp', value: 'Motor\\ContentType\\Models\\CustomContentType' },
]

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
  form.linkable_id = null
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
      <span class="font-heading font-semibold">Neue Meldung</span>
    </template>

    <template #body>
      <div class="flex flex-col gap-5">
        <UFormField label="Titel" required>
          <UInput v-model="form.title" class="w-full" placeholder="Meldung eingeben..." />
        </UFormField>

        <UFormField label="Beschreibung">
          <UTextarea v-model="form.body" class="w-full" placeholder="Optionale Details..." :rows="3" />
        </UFormField>

        <div class="grid grid-cols-2 gap-4">
          <UFormField label="Typ">
            <USelectMenu v-model="form.type" :items="typeOptions" value-key="value" class="w-full" />
          </UFormField>

          <UFormField label="Zielgruppe">
            <USelectMenu v-model="form.audience" :items="audienceOptions" value-key="value" class="w-full" />
          </UFormField>
        </div>

        <UFormField v-if="form.audience === 'users'" label="Nutzer auswählen">
          <USelectMenu
            v-model="form.target_user_ids"
            :items="userOptions"
            value-key="value"
            multiple
            :loading="usersLoading"
            placeholder="Nutzer suchen..."
            class="w-full"
          />
        </UFormField>

        <UFormField label="Verknüpfung (optional)">
          <USelectMenu
            v-model="form.linkable_type"
            :items="linkableTypeOptions"
            value-key="value"
            placeholder="Typ wählen..."
            class="w-full"
          />
        </UFormField>

        <UFormField v-if="form.linkable_type" label="Element">
          <USelectMenu
            v-model="form.linkable_id"
            v-model:search-term="linkableSearchTerm"
            :items="linkableOptions"
            value-key="value"
            ignore-filter
            :loading="linkableLoading"
            placeholder="Element suchen..."
            class="w-full"
          />
        </UFormField>

        <div class="grid grid-cols-2 gap-4">
          <UFormField label="Sichtbar ab">
            <UInput v-model="form.starts_at" type="datetime-local" class="w-full" />
          </UFormField>
          <UFormField label="Sichtbar bis">
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
          Abbrechen
        </UButton>
        <UButton
          color="primary"
          :loading="saving"
          :disabled="!form.title"
          @click="handleSubmit"
        >
          Erstellen
        </UButton>
      </div>
    </template>
  </UModal>
</template>
