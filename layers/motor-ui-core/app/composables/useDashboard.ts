import { createSharedComposable } from '@vueuse/core'

const _useDashboard = () => {
  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()

  const settingsOpen = ref(false)

  // Global keyboard shortcuts for navigation
  defineShortcuts({
    'g-h': () => router.push('/'),
    'g-s': () => { settingsOpen.value = true }
  })

  const { register } = useShortcutRegistry()
  register({
    id: 'global',
    label: t('motor-core.shortcuts.global'),
    icon: 'i-lucide-globe',
    shortcuts: [
      { keys: ['meta', 'K'], label: t('motor-core.shortcuts.search'), icon: 'i-lucide-search' },
      { keys: ['G', t('motor-core.shortcuts.then'), 'H'], label: t('motor-core.shortcuts.go_home'), icon: 'i-lucide-home' },
      { keys: ['G', t('motor-core.shortcuts.then'), 'S'], label: t('motor-core.shortcuts.go_settings'), icon: 'i-lucide-settings' }
    ]
  })

  return {
    route,
    router,
    settingsOpen
  }
}

export const useDashboard = createSharedComposable(_useDashboard)
