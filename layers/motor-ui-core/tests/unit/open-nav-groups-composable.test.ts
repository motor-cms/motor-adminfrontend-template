import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

// AO-03: Die Gruppe der aktiven Seite blieb nach hartem Laden zu, der erste Klick „schloss“ sie.
// Ursache: Der Client setzte die offenen Gruppen schon vor der Hydration, das Server-HTML hatte sie zu;
// Vue korrigiert Attribut-Abweichungen beim Hydrieren nicht. Der Zustand kommt jetzt per useState vom Server
// und wird auf dem Client erst nach dem Mount ergänzt.
const states = new Map<string, ReturnType<typeof ref>>()
vi.stubGlobal('useState', (key: string, init: () => unknown) => {
  if (!states.has(key)) states.set(key, ref(init()))
  return states.get(key)
})
const mounted: (() => void)[] = []
vi.stubGlobal('onMounted', (cb: () => void) => { mounted.push(cb) })

const { useOpenNavGroups } = await import('../../app/composables/useOpenNavGroups')

describe('useOpenNavGroups', () => {
  it('ändert auf dem Client vor dem Mount nichts (Hydration passt zum Server-HTML)', async () => {
    states.clear(); mounted.length = 0
    const open = useOpenNavGroups(ref(['builder']), { server: false })
    expect(open.value).toEqual([])
    for (const cb of mounted) cb()
    expect(open.value).toEqual(['builder'])
  })

  it('öffnet die aktive Gruppe auf dem Server sofort', () => {
    states.clear(); mounted.length = 0
    const open = useOpenNavGroups(ref(['media']), { server: true })
    expect(open.value).toEqual(['media'])
  })

  it('übernimmt den Server-Zustand und folgt späteren Wechseln mit neuem Array', async () => {
    states.clear(); mounted.length = 0
    states.set('motor-open-nav-groups', ref(['builder']))
    const active = ref(['builder'])
    const open = useOpenNavGroups(active, { server: false })
    for (const cb of mounted) cb()
    const before = open.value
    active.value = ['builder', 'admin']
    await new Promise(r => setTimeout(r))
    expect(open.value).toEqual(['builder', 'admin'])
    expect(open.value).not.toBe(before)
  })
})
