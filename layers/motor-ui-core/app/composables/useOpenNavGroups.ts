import type { Ref } from 'vue'
import { mergeOpenNavGroups } from '../utils/open-nav-groups'

/**
 * Offene Sidebar-Gruppen (v-model der UNavigationMenu-Akkordeons).
 *
 * Der Zustand liegt in useState, damit der Client mit genau dem Stand hydriert, den der Server gerendert hat.
 * Auf dem Client kommen aktive Gruppen erst nach dem Mount dazu: Vorher gesetzt, wich der Zustand vom
 * Server-HTML ab, Vue korrigiert das beim Hydrieren nicht – die Gruppe blieb zu, der erste Klick „schloss“ sie (AO-03).
 */
export function useOpenNavGroups(activeGroups: Ref<string[]>, opts: { server?: boolean } = {}) {
  const isServer = opts.server ?? import.meta.server
  const openNavGroups = useState<string[]>('motor-open-nav-groups', () => [])

  const sync = (groups: string[]) => {
    openNavGroups.value = mergeOpenNavGroups(openNavGroups.value, groups)
  }

  if (isServer) {
    sync(activeGroups.value)
  } else {
    onMounted(() => {
      watch(activeGroups, sync, { immediate: true })
    })
  }

  return openNavGroups
}
