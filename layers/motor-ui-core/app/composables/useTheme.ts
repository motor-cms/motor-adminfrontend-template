/**
 * Theme composable for switching between visual themes.
 *
 * Persists the selected theme and background in cookies.
 * Applies CSS classes directly to document.documentElement.
 */

export type ThemeName = 'default' | 'liquid-glass' | 'neon-grid'
export type GlassBg = 'mesh' | 'aurora' | 'sunset' | 'ocean' | 'cosmic' | 'abstract' | 'energis'

const THEME_CLASSES: Record<Exclude<ThemeName, 'default'>, string> = {
  'liquid-glass': 'theme-liquid-glass',
  'neon-grid': 'theme-neon-grid'
}
const BG_PREFIX = 'glass-bg-'

export const glassBgOptions: { key: GlassBg, label: string, icon: string }[] = [
  { key: 'mesh', label: 'Mesh', icon: 'i-lucide-cloud' },
  { key: 'aurora', label: 'Aurora', icon: 'i-lucide-rainbow' },
  { key: 'sunset', label: 'Sunset', icon: 'i-lucide-sunset' },
  { key: 'ocean', label: 'Ocean', icon: 'i-lucide-waves' },
  { key: 'cosmic', label: 'Cosmic', icon: 'i-lucide-star' },
  { key: 'abstract', label: 'Abstract', icon: 'i-lucide-shapes' },
  { key: 'energis', label: 'Energis Orange', icon: 'i-lucide-zap' }
]

export function useTheme() {
  const themeName = useCookie<ThemeName>('energis-theme', {
    default: () => 'default' as ThemeName,
    watch: true
  })

  const glassBg = useCookie<GlassBg>('energis-glass-bg', {
    default: () => 'mesh' as GlassBg,
    watch: true
  })

  const isLiquidGlass = computed(() => themeName.value === 'liquid-glass')
  const isNeonGrid = computed(() => themeName.value === 'neon-grid')

  const htmlClasses = computed(() => {
    const classes: string[] = []
    const themeClass = themeName.value !== 'default' ? THEME_CLASSES[themeName.value] : null
    if (themeClass) {
      classes.push(themeClass)
    }
    if (themeName.value === 'liquid-glass') {
      classes.push(`${BG_PREFIX}${glassBg.value}`)
    }
    return classes
  })

  useHead({
    htmlAttrs: {
      class: htmlClasses
    }
  })

  function setTheme(name: ThemeName) {
    themeName.value = name
  }

  const themeOrder: ThemeName[] = ['default', 'liquid-glass', 'neon-grid']

  function toggleTheme() {
    const idx = themeOrder.indexOf(themeName.value)
    themeName.value = themeOrder[(idx + 1) % themeOrder.length] ?? 'default'
  }

  function setGlassBg(bg: GlassBg) {
    glassBg.value = bg
  }

  return {
    themeName,
    glassBg,
    isLiquidGlass,
    isNeonGrid,
    toggleTheme,
    setTheme,
    setGlassBg
  }
}
