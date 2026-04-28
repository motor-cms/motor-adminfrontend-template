<script setup lang="ts">
const props = defineProps<{
  configurableType: string
  configurableId: number | string
}>()

const { t } = useI18n()
const client = useSanctumClient()
const { success: notifySuccess, error: notifyError } = useNotify()

interface ConfigVariable {
  id: number
  package: string
  group: string
  name: string
  value: string
}

interface EntityConfiguration {
  id: number
  configurable_type: string
  configurable_id: number
  config_variable_id: number
  config_variable?: ConfigVariable
  value: string | null
}

const configurations = ref<EntityConfiguration[]>([])
const configVariables = ref<ConfigVariable[]>([])
const loading = ref(false)
const saving = ref(false)
const removing = ref<number | null>(null)

const newConfigVariableId = ref<number | null>(null)
const newValue = ref('')

async function loadConfigurations() {
  loading.value = true
  try {
    const response = await client<{ data: EntityConfiguration[] }>('/api/v2/entity-configurations', {
      query: {
        configurable_type: props.configurableType,
        configurable_id: props.configurableId,
        per_page: 100
      }
    })
    configurations.value = response.data ?? []
  } catch {
    configurations.value = []
  } finally {
    loading.value = false
  }
}

async function loadConfigVariables() {
  try {
    const response = await client<{ data: ConfigVariable[] }>('/api/v2/config-variables', {
      query: { per_page: 200 }
    })
    configVariables.value = response.data ?? []
  } catch {
    configVariables.value = []
  }
}

const availableConfigVariables = computed(() => {
  const usedIds = new Set(configurations.value.map(c => c.config_variable_id))
  return configVariables.value
    .filter(v => !usedIds.has(v.id))
    .map(v => ({
      label: `${v.package}.${v.group}.${v.name}`,
      value: v.id
    }))
})

const canAdd = computed(() => newConfigVariableId.value !== null)

async function addConfiguration() {
  if (!canAdd.value) return
  saving.value = true
  try {
    await client('/api/v2/entity-configurations', {
      method: 'POST',
      body: {
        configurable_type: props.configurableType,
        configurable_id: props.configurableId,
        config_variable_id: newConfigVariableId.value,
        value: newValue.value || null
      }
    })
    newConfigVariableId.value = null
    newValue.value = ''
    await loadConfigurations()
    notifySuccess(
      t('motor-admin.entity_configurations.title'),
      t('motor-admin.entity_configurations.saved')
    )
  } catch (e) {
    notifyError(
      t('motor-admin.entity_configurations.title'),
      (e as Error).message
    )
  } finally {
    saving.value = false
  }
}

async function removeConfiguration(config: EntityConfiguration) {
  removing.value = config.id
  try {
    await client(`/api/v2/entity-configurations/${config.id}`, {
      method: 'DELETE'
    })
    await loadConfigurations()
    notifySuccess(
      t('motor-admin.entity_configurations.title'),
      t('motor-admin.entity_configurations.removed')
    )
  } catch (e) {
    notifyError(
      t('motor-admin.entity_configurations.title'),
      (e as Error).message
    )
  } finally {
    removing.value = null
  }
}

function formatVariableName(cv: ConfigVariable | undefined): string {
  if (!cv) return '—'
  return `${cv.package}.${cv.group}.${cv.name}`
}

onMounted(() => {
  loadConfigurations()
  loadConfigVariables()
})
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold">
          {{ t('motor-admin.entity_configurations.title') }}
        </h3>
        <span
          v-if="configurations.length > 0"
          class="text-xs text-[var(--ui-text-muted)]"
        >
          {{ configurations.length }}
        </span>
      </div>
    </template>

    <div
      v-if="loading"
      class="flex items-center justify-center py-6"
    >
      <UIcon
        name="i-lucide-loader-2"
        class="size-5 animate-spin text-[var(--ui-text-muted)]"
      />
    </div>

    <div v-else>
      <!-- Existing configurations -->
      <div
        v-if="configurations.length > 0"
        class="mb-4 space-y-2"
      >
        <div
          v-for="config in configurations"
          :key="config.id"
          class="flex items-center gap-4 py-2.5 px-3 rounded-lg ring-1 ring-[var(--ui-border)] group"
        >
          <UIcon
            name="i-lucide-link"
            class="size-3.5 text-emerald-500 shrink-0"
          />
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium truncate">
              {{ formatVariableName(config.config_variable) }}
            </p>
          </div>
          <div class="shrink-0 max-w-xs">
            <span class="text-sm text-[var(--ui-text-muted)] font-mono truncate">
              {{ config.value ?? '—' }}
            </span>
          </div>
          <UButton
            icon="i-lucide-unlink"
            variant="ghost"
            color="error"
            size="xs"
            :loading="removing === config.id"
            class="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
            @click="removeConfiguration(config)"
          />
        </div>
      </div>

      <p
        v-else
        class="text-sm text-[var(--ui-text-muted)] mb-4"
      >
        {{ t('motor-admin.entity_configurations.no_configurations') }}
      </p>

      <!-- Add new configuration -->
      <div class="flex items-start gap-3">
        <USelect
          v-model="newConfigVariableId"
          :items="availableConfigVariables"
          :placeholder="t('motor-admin.entity_configurations.select_variable')"
          class="flex-1"
        />
        <UInput
          v-model="newValue"
          :placeholder="t('motor-admin.entity_configurations.value')"
          class="flex-1"
          @keydown.enter.prevent="addConfiguration"
        />
        <UButton
          icon="i-lucide-plus"
          variant="outline"
          :disabled="!canAdd"
          :loading="saving"
          class="shrink-0"
          @click="addConfiguration"
        />
      </div>
    </div>
  </UCard>
</template>
