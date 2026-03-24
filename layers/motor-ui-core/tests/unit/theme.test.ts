// AI-generated — review before merging
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { useTheme } from '../../app/composables/useTheme'

describe('useTheme', () => {
  let themeRef: ReturnType<typeof ref<string>>
  let glassRef: ReturnType<typeof ref<string>>

  beforeEach(() => {
    themeRef = ref('default')
    glassRef = ref('mesh')
    vi.stubGlobal('useCookie', (name: string, opts?: { default?: () => unknown }) => {
      if (name === 'energis-theme') return themeRef
      if (name === 'energis-glass-bg') return glassRef
      return ref(opts?.default?.() ?? null)
    })
    vi.stubGlobal('useHead', vi.fn())
  })

  it('theme-default-value', () => {
    const { themeName } = useTheme()

    expect(themeName.value).toBe('default')
  })

  it('theme-setTheme-persists', () => {
    const { themeName, setTheme } = useTheme()

    setTheme('liquid-glass')

    expect(themeName.value).toBe('liquid-glass')
  })

  it('theme-toggleTheme-cycles', () => {
    const { themeName, toggleTheme } = useTheme()

    expect(themeName.value).toBe('default')
    toggleTheme()
    expect(themeName.value).toBe('liquid-glass')
  })

  it('theme-setGlassBg-persists', () => {
    const { glassBg, setGlassBg } = useTheme()

    setGlassBg('aurora')

    expect(glassBg.value).toBe('aurora')
  })

  it('theme-isLiquidGlass-flag', () => {
    themeRef.value = 'liquid-glass'
    const { isLiquidGlass } = useTheme()

    expect(isLiquidGlass.value).toBe(true)
  })

  it('theme-isNeonGrid-flag', () => {
    themeRef.value = 'neon-grid'
    const { isNeonGrid } = useTheme()

    expect(isNeonGrid.value).toBe(true)
  })

  it('toggleTheme cycles through all themes', () => {
    const { themeName, toggleTheme } = useTheme()

    expect(themeName.value).toBe('default')
    toggleTheme()
    expect(themeName.value).toBe('liquid-glass')
    toggleTheme()
    expect(themeName.value).toBe('neon-grid')
    toggleTheme()
    expect(themeName.value).toBe('default')
  })

  it('useHead receives correct htmlClasses for default theme', () => {
    const mockUseHead = vi.fn()
    vi.stubGlobal('useHead', mockUseHead)

    useTheme()

    expect(mockUseHead).toHaveBeenCalledWith(expect.objectContaining({
      htmlAttrs: expect.objectContaining({
        class: expect.anything()
      })
    }))
  })

  it('htmlClasses includes theme class for liquid-glass', () => {
    themeRef.value = 'liquid-glass'
    glassRef.value = 'aurora'

    const mockUseHead = vi.fn()
    vi.stubGlobal('useHead', mockUseHead)

    useTheme()

    const headCall = mockUseHead.mock.calls[0][0]
    const classes = headCall.htmlAttrs.class
    expect(classes.value).toContain('theme-liquid-glass')
    expect(classes.value).toContain('glass-bg-aurora')
  })

  it('htmlClasses includes theme class for neon-grid without glass bg', () => {
    themeRef.value = 'neon-grid'

    const mockUseHead = vi.fn()
    vi.stubGlobal('useHead', mockUseHead)

    useTheme()

    const headCall = mockUseHead.mock.calls[0][0]
    const classes = headCall.htmlAttrs.class
    expect(classes.value).toContain('theme-neon-grid')
    expect(classes.value).not.toContain('glass-bg-')
  })

  it('htmlClasses is empty for default theme', () => {
    themeRef.value = 'default'

    const mockUseHead = vi.fn()
    vi.stubGlobal('useHead', mockUseHead)

    useTheme()

    const headCall = mockUseHead.mock.calls[0][0]
    const classes = headCall.htmlAttrs.class
    expect(classes.value).toHaveLength(0)
  })

  it('toggleTheme defaults to default when theme is unknown', () => {
    themeRef.value = 'unknown-theme' as never
    const { toggleTheme, themeName } = useTheme()

    toggleTheme()

    expect(themeName.value).toBe('default')
  })

  it('useCookie default callbacks produce correct initial values', () => {
    let themeDefault: unknown
    let bgDefault: unknown
    vi.stubGlobal('useCookie', (name: string, opts?: { default?: () => unknown }) => {
      if (name === 'energis-theme') {
        themeDefault = opts?.default?.()
        return themeRef
      }
      if (name === 'energis-glass-bg') {
        bgDefault = opts?.default?.()
        return glassRef
      }
      return ref(null)
    })

    useTheme()

    expect(themeDefault).toBe('default')
    expect(bgDefault).toBe('mesh')
  })

  it('glassBgOptions exports all background options', async () => {
    const { glassBgOptions } = await import('../../app/composables/useTheme')
    expect(glassBgOptions).toHaveLength(7)
    expect(glassBgOptions.map((o: { key: string }) => o.key)).toEqual([
      'mesh', 'aurora', 'sunset', 'ocean', 'cosmic', 'abstract', 'energis'
    ])
  })
})
