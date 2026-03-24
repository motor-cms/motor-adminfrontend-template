import { defineStore } from 'pinia'

interface GridSettings {
  perPage: number
  sort: string | null
  direction: 'asc' | 'desc'
  filters: Record<string, unknown>
  columnVisibility?: Record<string, boolean>
}

export const useGridSettingsStore = defineStore('gridSettings', () => {
  // Store settings keyed by grid ID
  const settings = ref<Record<string, GridSettings>>({})

  function getSettings(gridId: string): GridSettings | undefined {
    return settings.value[gridId]
  }

  function saveSettings(gridId: string, gridSettings: Partial<GridSettings>): void {
    settings.value[gridId] = {
      ...settings.value[gridId],
      ...gridSettings
    } as GridSettings
  }

  function clearSettings(gridId: string): void {
    const { [gridId]: _, ...rest } = settings.value
    settings.value = rest
  }

  function clearAll(): void {
    settings.value = {}
  }

  return {
    settings,
    getSettings,
    saveSettings,
    clearSettings,
    clearAll
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
    pick: ['settings']
  }
})
