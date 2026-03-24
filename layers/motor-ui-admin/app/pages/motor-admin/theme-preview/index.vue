<script setup lang="ts">
definePageMeta({
  layout: 'default',
  permission: 'administration.read'
})

const { clientName } = useRuntimeConfig().public

type ThemeKey = 'professional' | 'bold' | 'brutalist' | 'neon' | 'geometric' | 'refined' | 'neonAmber' | 'neonViolet' | 'gradient' | 'glass'
type GlassBgKey = 'mesh' | 'aurora' | 'sunset' | 'ocean' | 'cosmic' | 'abstract' | 'energis'

const activeTheme = ref<ThemeKey>('professional')
const darkPreview = ref(false)
const glassBg = ref<GlassBgKey>('mesh')

const glassBgOptions: { key: GlassBgKey, label: string, preview: string }[] = [
  { key: 'mesh', label: 'Mesh', preview: 'linear-gradient(135deg, #EEF0F5 0%, #dde0e8 50%, #EEF0F5 100%)' },
  { key: 'aurora', label: 'Aurora', preview: 'linear-gradient(135deg, #0b3d2e 0%, #1a5276 30%, #6c3483 60%, #1a8a5c 100%)' },
  { key: 'sunset', label: 'Sunset', preview: 'linear-gradient(135deg, #ff6b35 0%, #d63384 40%, #7b2d8e 70%, #4a1a6b 100%)' },
  { key: 'ocean', label: 'Ocean', preview: 'linear-gradient(135deg, #0c2340 0%, #0d6986 40%, #1a9ca0 70%, #0c2340 100%)' },
  { key: 'cosmic', label: 'Cosmic', preview: 'linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 70%, #0f0c29 100%)' },
  { key: 'abstract', label: 'Abstract', preview: 'linear-gradient(135deg, #d62828 0%, #f5b700 25%, #003da5 50%, #d62828 75%, #f5b700 100%)' },
  { key: 'energis', label: 'Energis Orange', preview: 'linear-gradient(135deg, #F9C97C 0%, #F2A65A 35%, #E8895C 65%, #F9C97C 100%)' }
]

const themeGroups = [
  {
    label: 'Clean',
    themes: [
      { key: 'professional' as const, label: 'Professional & Clean', icon: 'i-lucide-briefcase' },
      { key: 'bold' as const, label: 'Bold & Modern', icon: 'i-lucide-zap' }
    ]
  },
  {
    label: 'Brutalist',
    themes: [
      { key: 'brutalist' as const, label: 'Asymmetric Brutalist', icon: 'i-lucide-square' },
      { key: 'refined' as const, label: 'Refined Brutalist', icon: 'i-lucide-leaf' }
    ]
  },
  {
    label: 'Terminal',
    themes: [
      { key: 'neon' as const, label: 'Neon Cyan', icon: 'i-lucide-terminal' },
      { key: 'neonAmber' as const, label: 'Neon Amber', icon: 'i-lucide-flame' },
      { key: 'neonViolet' as const, label: 'Neon Violet', icon: 'i-lucide-sparkles' }
    ]
  },
  {
    label: 'Geometric',
    themes: [
      { key: 'geometric' as const, label: 'Geometric Minimal', icon: 'i-lucide-circle' }
    ]
  },
  {
    label: 'Special',
    themes: [
      { key: 'gradient' as const, label: 'Gradient Flow', icon: 'i-lucide-waves' },
      { key: 'glass' as const, label: 'Liquid Glass', icon: 'i-lucide-gem' }
    ]
  }
]

type ThemeItem = { key: ThemeKey, label: string, icon: string }
const themes: ThemeItem[] = []
for (const group of themeGroups) {
  for (const t of group.themes) {
    themes.push({ key: t.key, label: t.label, icon: t.icon })
  }
}

// Color palettes for swatches
interface ColorSwatch {
  name: string
  hex: string
}

interface ThemePalette {
  primary: ColorSwatch[]
  semantic: ColorSwatch[]
  neutral?: ColorSwatch[]
  accent?: ColorSwatch[]
  secondary?: ColorSwatch[]
}

const palettes: Record<ThemeKey, ThemePalette> = {
  professional: {
    primary: [
      { name: 'Indigo 50', hex: '#eef2ff' },
      { name: 'Indigo 100', hex: '#e0e7ff' },
      { name: 'Indigo 200', hex: '#c7d2fe' },
      { name: 'Indigo 300', hex: '#a5b4fc' },
      { name: 'Indigo 400', hex: '#818cf8' },
      { name: 'Indigo 500', hex: '#6366f1' },
      { name: 'Indigo 600', hex: '#4f46e5' },
      { name: 'Indigo 700', hex: '#4338ca' },
      { name: 'Indigo 800', hex: '#3730a3' },
      { name: 'Indigo 900', hex: '#312e81' }
    ],
    neutral: [
      { name: 'Slate 50', hex: '#f8fafc' },
      { name: 'Slate 100', hex: '#f1f5f9' },
      { name: 'Slate 200', hex: '#e2e8f0' },
      { name: 'Slate 400', hex: '#94a3b8' },
      { name: 'Slate 600', hex: '#475569' },
      { name: 'Slate 800', hex: '#1e293b' },
      { name: 'Slate 900', hex: '#0f172a' }
    ],
    semantic: [
      { name: 'Success', hex: '#10b981' },
      { name: 'Warning', hex: '#f59e0b' },
      { name: 'Error', hex: '#ef4444' },
      { name: 'Info', hex: '#0ea5e9' }
    ]
  },
  bold: {
    primary: [
      { name: 'Violet 50', hex: '#f5f3ff' },
      { name: 'Violet 100', hex: '#ede9fe' },
      { name: 'Violet 200', hex: '#ddd6fe' },
      { name: 'Violet 300', hex: '#c4b5fd' },
      { name: 'Violet 400', hex: '#a78bfa' },
      { name: 'Violet 500', hex: '#8b5cf6' },
      { name: 'Violet 600', hex: '#7c3aed' },
      { name: 'Violet 700', hex: '#6d28d9' },
      { name: 'Violet 800', hex: '#5b21b6' },
      { name: 'Violet 900', hex: '#4c1d95' }
    ],
    neutral: [
      { name: 'Slate 50', hex: '#f8fafc' },
      { name: 'Slate 100', hex: '#f1f5f9' },
      { name: 'Slate 200', hex: '#e2e8f0' },
      { name: 'Slate 400', hex: '#94a3b8' },
      { name: 'Slate 700', hex: '#334155' },
      { name: 'Slate 900', hex: '#0f172a' },
      { name: 'Slate 950', hex: '#020617' }
    ],
    accent: [
      { name: 'Amber 300', hex: '#fcd34d' },
      { name: 'Amber 400', hex: '#fbbf24' },
      { name: 'Amber 500', hex: '#f59e0b' },
      { name: 'Amber 600', hex: '#d97706' },
      { name: 'Amber 700', hex: '#b45309' }
    ],
    semantic: [
      { name: 'Success', hex: '#10b981' },
      { name: 'Warning', hex: '#f59e0b' },
      { name: 'Error', hex: '#f43f5e' },
      { name: 'Info', hex: '#a78bfa' }
    ]
  },
  brutalist: {
    primary: [
      { name: 'Black', hex: '#09090b' },
      { name: 'White', hex: '#fafafa' },
      { name: 'Warm White', hex: '#fafaf9' },
      { name: 'Off-White', hex: '#f5f5f4' },
      { name: 'Border Gray', hex: '#d6d3d1' }
    ],
    accent: [
      { name: 'Lime 300', hex: '#bef264' },
      { name: 'Lime 400', hex: '#a3e635' },
      { name: 'Lime 500', hex: '#84cc16' },
      { name: 'Lime 600', hex: '#65a30d' }
    ],
    secondary: [
      { name: 'Pink 400', hex: '#f472b6' },
      { name: 'Pink 500', hex: '#ec4899' },
      { name: 'Pink 600', hex: '#db2777' }
    ],
    semantic: [
      { name: 'Success', hex: '#a3e635' },
      { name: 'Warning', hex: '#fbbf24' },
      { name: 'Error', hex: '#ec4899' },
      { name: 'Info', hex: '#38bdf8' }
    ]
  },
  neon: {
    primary: [
      { name: 'Void', hex: '#07080A' },
      { name: 'Surface 0', hex: '#0D0F14' },
      { name: 'Surface 1', hex: '#13161D' },
      { name: 'Surface 2', hex: '#1A1E27' },
      { name: 'Surface 3', hex: '#242832' }
    ],
    accent: [
      { name: 'Cyan', hex: '#00FFEE' },
      { name: 'Cyan Muted', hex: '#0ABDC6' },
      { name: 'Magenta', hex: '#FF00AA' },
      { name: 'Green', hex: '#39FF14' },
      { name: 'Yellow', hex: '#FFE600' },
      { name: 'Purple', hex: '#BD00FF' }
    ],
    semantic: [
      { name: 'Success', hex: '#39FF14' },
      { name: 'Warning', hex: '#FFE600' },
      { name: 'Error', hex: '#FF00AA' },
      { name: 'Info', hex: '#BD00FF' }
    ]
  },
  geometric: {
    primary: [
      { name: 'Bauhaus Red', hex: '#D62828' },
      { name: 'Bauhaus Blue', hex: '#003DA5' },
      { name: 'Bauhaus Yellow', hex: '#F5B700' },
      { name: 'Pure Black', hex: '#0A0A0A' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    neutral: [
      { name: 'Concrete', hex: '#F5F5F0' },
      { name: 'Graphite', hex: '#404040' },
      { name: 'Silver Line', hex: '#E0E0E0' }
    ],
    semantic: [
      { name: 'Action', hex: '#003DA5' },
      { name: 'Danger', hex: '#D62828' },
      { name: 'Attention', hex: '#F5B700' },
      { name: 'Success', hex: '#003DA5' }
    ]
  },
  refined: {
    primary: [
      { name: 'Charcoal', hex: '#262626' },
      { name: 'Stone', hex: '#fafaf9' },
      { name: 'Warm Cream', hex: '#f5f5f4' },
      { name: 'Mid Stone', hex: '#e7e5e4' },
      { name: 'Border Stone', hex: '#d6d3d1' }
    ],
    accent: [
      { name: 'Sage 100', hex: '#e8eeea' },
      { name: 'Sage 200', hex: '#c5d5cb' },
      { name: 'Sage 400', hex: '#7c9a84' },
      { name: 'Sage 500', hex: '#63806b' },
      { name: 'Sage 600', hex: '#4d6653' }
    ],
    secondary: [
      { name: 'Rose 100', hex: '#f2e4e6' },
      { name: 'Rose 300', hex: '#d4a0a8' },
      { name: 'Rose 400', hex: '#c4818b' },
      { name: 'Rose 500', hex: '#a8636d' }
    ],
    semantic: [
      { name: 'Success', hex: '#7c9a84' },
      { name: 'Warning', hex: '#c4a265' },
      { name: 'Error', hex: '#c4818b' },
      { name: 'Info', hex: '#c4a265' }
    ]
  },
  neonAmber: {
    primary: [
      { name: 'Void', hex: '#0A0806' },
      { name: 'Surface 0', hex: '#12100B' },
      { name: 'Surface 1', hex: '#1A1710' },
      { name: 'Surface 2', hex: '#241F16' },
      { name: 'Surface 3', hex: '#302A1E' }
    ],
    accent: [
      { name: 'Amber', hex: '#FFB800' },
      { name: 'Amber Muted', hex: '#C48A00' },
      { name: 'Orange', hex: '#FF6B00' },
      { name: 'Green', hex: '#39FF14' },
      { name: 'Yellow', hex: '#FFE066' },
      { name: 'Copper', hex: '#E8782A' }
    ],
    semantic: [
      { name: 'Success', hex: '#39FF14' },
      { name: 'Warning', hex: '#FFE066' },
      { name: 'Error', hex: '#FF6B00' },
      { name: 'Info', hex: '#E8782A' }
    ]
  },
  neonViolet: {
    primary: [
      { name: 'Void', hex: '#08060E' },
      { name: 'Surface 0', hex: '#0F0B19' },
      { name: 'Surface 1', hex: '#161122' },
      { name: 'Surface 2', hex: '#1E172E' },
      { name: 'Surface 3', hex: '#2A2140' }
    ],
    accent: [
      { name: 'Violet', hex: '#A855F7' },
      { name: 'Violet Bright', hex: '#C084FC' },
      { name: 'Blue', hex: '#60A5FA' },
      { name: 'Magenta', hex: '#F472B6' },
      { name: 'Green', hex: '#34D399' },
      { name: 'Yellow', hex: '#FBBF24' }
    ],
    semantic: [
      { name: 'Success', hex: '#34D399' },
      { name: 'Warning', hex: '#FBBF24' },
      { name: 'Error', hex: '#F472B6' },
      { name: 'Info', hex: '#60A5FA' }
    ]
  },
  gradient: {
    primary: [
      { name: 'Indigo 600', hex: '#4f46e5' },
      { name: 'Indigo 500', hex: '#6366f1' },
      { name: 'Violet 500', hex: '#8b5cf6' },
      { name: 'Teal 600', hex: '#0d9488' },
      { name: 'Cyan 500', hex: '#06b6d4' }
    ],
    accent: [
      { name: 'Rose 600', hex: '#e11d48' },
      { name: 'Orange 500', hex: '#f97316' },
      { name: 'Emerald 600', hex: '#059669' },
      { name: 'Amber 600', hex: '#d97706' }
    ],
    neutral: [
      { name: 'Slate 50', hex: '#f8fafc' },
      { name: 'Slate 200', hex: '#e2e8f0' },
      { name: 'Slate 500', hex: '#64748b' },
      { name: 'Slate 900', hex: '#0f172a' }
    ],
    semantic: [
      { name: 'Success', hex: '#10b981' },
      { name: 'Warning', hex: '#f59e0b' },
      { name: 'Error', hex: '#e11d48' },
      { name: 'Info', hex: '#06b6d4' }
    ]
  },
  glass: {
    primary: [
      { name: 'Background', hex: '#EEF0F5' },
      { name: 'Surface', hex: '#FFFFFF' },
      { name: 'Accent', hex: '#007AFF' },
      { name: 'Dark BG', hex: '#0A0A0F' },
      { name: 'Dark Surface', hex: '#1C1C1E' }
    ],
    accent: [
      { name: 'Blue', hex: '#007AFF' },
      { name: 'Green', hex: '#34C759' },
      { name: 'Orange', hex: '#FF9500' },
      { name: 'Red', hex: '#FF3B30' },
      { name: 'Cyan', hex: '#5AC8FA' }
    ],
    semantic: [
      { name: 'Success', hex: '#34C759' },
      { name: 'Warning', hex: '#FF9500' },
      { name: 'Error', hex: '#FF3B30' },
      { name: 'Info', hex: '#5AC8FA' }
    ]
  }
}

const currentPalette = computed(() => palettes[activeTheme.value])

// Config snippets for each theme
const configSnippets = {
  professional: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `export default defineNuxtConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'slate'
    }
  }
})`
  },
  bold: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'amber',
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `export default defineNuxtConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'amber',
      neutral: 'slate'
    }
  }
})`
  },
  brutalist: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
      secondary: 'pink',
      neutral: 'stone'
    }
  }
})`,
    nuxtConfig: `// Custom CSS required for thick borders,
// hard shadows, and asymmetric radii:
//   .shape-slash { border-radius: 0 24px 0 24px; }
//   .shadow-brutal { box-shadow: 6px 6px 0 0 #09090b; }
//   .btn-brutal { border: 3px solid #09090b; }`
  },
  neon: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      secondary: 'purple',
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `// Custom CSS tokens for the void backgrounds:
//   --neon-void: #07080A;
//   --neon-surface-0: #0D0F14;
//   --neon-cyan: #00FFEE;
//   --neon-magenta: #FF00AA;
// Glow effects via box-shadow + text-shadow`
  },
  geometric: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',   // Bauhaus Blue #003DA5
      secondary: 'red',  // Bauhaus Red #D62828
      neutral: 'neutral'
    }
  }
})`,
    nuxtConfig: `// Key rule: border-radius is ONLY 0 or 9999px.
// No rounded-md, rounded-lg. Binary shapes.
//
// Custom theme tokens:
//   --color-bauhaus-red: #D62828;
//   --color-bauhaus-blue: #003DA5;
//   --color-bauhaus-yellow: #F5B700;`
  },
  refined: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',  // Closest to sage
      secondary: 'rose',   // Dusty rose
      neutral: 'stone'     // Warm neutral
    }
  }
})`,
    nuxtConfig: `// Custom sage, rose, brass colors required:
//   --sage-400: #7c9a84;
//   --rose-400: #c4818b;
//   --brass-400: #c4a265;
// Shapes unchanged from Asymmetric Brutalist
// Borders reduced to 2px, shadows use sage`
  },
  neonAmber: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'orange',
      neutral: 'stone'
    }
  }
})`,
    nuxtConfig: `// Warm amber neon terminal variant
// Custom CSS tokens:
//   --amber-void: #0A0806;
//   --amber-neon: #FFB800;
//   --amber-orange: #FF6B00;
// Light mode: warm parchment tones`
  },
  neonViolet: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      secondary: 'blue',
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `// Purple neon terminal variant
// Custom CSS tokens:
//   --violet-void: #08060E;
//   --violet-neon: #A855F7;
//   --violet-magenta: #F472B6;
// Light mode: lavender-tinted surfaces`
  },
  gradient: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'teal',
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `// Gradient definitions:
//   --gradient-primary: linear-gradient(135deg, #4f46e5, #8b5cf6);
//   --gradient-secondary: linear-gradient(135deg, #0d9488, #06b6d4);
//   --gradient-warm: linear-gradient(135deg, #e11d48, #f97316);
// Use background-clip: text for gradient text`
  },
  glass: {
    appConfig: `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',    // Apple system blue
      neutral: 'slate'
    }
  }
})`,
    nuxtConfig: `// Glass effect CSS:
//   backdrop-filter: blur(16px) saturate(180%);
//   background: rgba(255, 255, 255, 0.62);
//   border: 1px solid rgba(255, 255, 255, 0.45);
// Three tiers: surface (16px), raised (24px), floating (40px)`
  }
}

const currentConfig = computed(() => configSnippets[activeTheme.value])

// Active config tab
const activeConfigTab = ref('appConfig')
</script>

<template>
  <UDashboardPanel id="theme-preview">
    <template #header>
      <UDashboardNavbar title="Theme Preview">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
        <template #left>
          <UButton
            :icon="darkPreview ? 'i-lucide-moon' : 'i-lucide-sun'"
            variant="ghost"
            size="sm"
            @click="darkPreview = !darkPreview"
          />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="space-y-8 p-6">
        <!-- Theme Selector Tabs (Grouped) -->
        <div class="flex flex-wrap gap-6">
          <div
            v-for="group in themeGroups"
            :key="group.label"
            class="flex flex-col gap-1.5"
          >
            <span class="text-xs font-semibold text-muted uppercase tracking-wider px-1">{{ group.label }}</span>
            <div class="flex flex-wrap gap-2">
              <UButton
                v-for="theme in group.themes"
                :key="theme.key"
                :icon="theme.icon"
                :label="theme.label"
                :variant="activeTheme === theme.key ? 'solid' : 'outline'"
                size="md"
                @click="activeTheme = theme.key"
              />
            </div>
          </div>
        </div>

        <!-- Glass Background Switcher (only when Liquid Glass is active) -->
        <div
          v-if="activeTheme === 'glass'"
          class="flex items-center gap-3"
        >
          <span class="text-xs font-semibold text-muted uppercase tracking-wider">Background</span>
          <div class="flex gap-2">
            <button
              v-for="bg in glassBgOptions"
              :key="bg.key"
              class="glass-bg-thumb"
              :class="{ 'glass-bg-thumb-active': glassBg === bg.key }"
              :style="{ background: bg.preview }"
              :title="bg.label"
              @click="glassBg = bg.key"
            >
              <span class="sr-only">{{ bg.label }}</span>
            </button>
          </div>
        </div>

        <!-- Theme Preview Area -->
        <div
          class="rounded-2xl border-2 border-default overflow-hidden transition-colors duration-300"
          :class="[
            `theme-${activeTheme}`,
            activeTheme === 'glass' ? `glass-bg-${glassBg}` : '',
            { 'dark-preview': darkPreview }
          ]"
        >
          <!-- Preview wrapper with scoped theme styles -->
          <div class="theme-preview-wrapper">
            <!-- Theme Header -->
            <div class="theme-header">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="theme-title">
                    {{ themes.find(theme => theme.key === activeTheme)?.label }}
                  </h2>
                  <p class="theme-subtitle">
                    <template v-if="activeTheme === 'professional'">
                      Stripe-inspired clean interface with Manrope + Inter
                    </template>
                    <template v-else-if="activeTheme === 'bold'">
                      High-energy violet &amp; amber with Space Grotesk + Inter
                    </template>
                    <template v-else-if="activeTheme === 'brutalist'">
                      Raw neobrutalist asymmetry with Space Grotesk + JetBrains Mono
                    </template>
                    <template v-else-if="activeTheme === 'neon'">
                      Cyberpunk terminal with JetBrains Mono + IBM Plex Sans
                    </template>
                    <template v-else-if="activeTheme === 'geometric'">
                      Bauhaus-inspired binary shapes with Syne + Plus Jakarta Sans
                    </template>
                    <template v-else-if="activeTheme === 'refined'">
                      Sophisticated brutalist shapes with muted sage &amp; rose, Space Grotesk + DM Sans
                    </template>
                    <template v-else-if="activeTheme === 'neonAmber'">
                      Warm amber CRT terminal -- parchment light mode, JetBrains Mono + IBM Plex Sans
                    </template>
                    <template v-else-if="activeTheme === 'neonViolet'">
                      Purple synthwave terminal -- lavender light mode, JetBrains Mono + IBM Plex Sans
                    </template>
                    <template v-else-if="activeTheme === 'gradient'">
                      Flowing gradients as design language, Plus Jakarta Sans + Inter
                    </template>
                    <template v-else-if="activeTheme === 'glass'">
                      Apple-inspired frosted glass with translucent surfaces, Inter
                    </template>
                  </p>
                </div>
                <div class="theme-mode-badge">
                  {{ darkPreview ? 'Dark Mode' : 'Light Mode' }}
                </div>
              </div>
            </div>

            <div class="theme-body">
              <!-- Mini Layout Preview: sidebar + content area -->
              <div class="layout-preview">
                <!-- Mini Sidebar -->
                <div class="mini-sidebar">
                  <div class="sidebar-logo">
                    <div class="sidebar-logo-icon">
                      E
                    </div>
                    <span class="sidebar-logo-text">{{ clientName }}</span>
                  </div>
                  <div class="sidebar-nav">
                    <div class="sidebar-section-label">
                      MAIN
                    </div>
                    <div class="sidebar-item active">
                      <span class="sidebar-icon">&#9632;</span>
                      Dashboard
                    </div>
                    <div class="sidebar-item">
                      <span class="sidebar-icon">&#9632;</span>
                      Users
                    </div>
                    <div class="sidebar-item">
                      <span class="sidebar-icon">&#9632;</span>
                      Content
                    </div>
                    <div class="sidebar-section-label">
                      SETTINGS
                    </div>
                    <div class="sidebar-item">
                      <span class="sidebar-icon">&#9632;</span>
                      Configuration
                    </div>
                    <div class="sidebar-item">
                      <span class="sidebar-icon">&#9632;</span>
                      Permissions
                    </div>
                  </div>
                </div>

                <!-- Mini Content Area -->
                <div class="mini-content">
                  <!-- Stat Cards Row -->
                  <div class="stat-cards">
                    <div class="stat-card">
                      <div class="stat-label">
                        Total Users
                      </div>
                      <div class="stat-value">
                        2,847
                      </div>
                    </div>
                    <div class="stat-card">
                      <div class="stat-label">
                        Active Sessions
                      </div>
                      <div class="stat-value">
                        384
                      </div>
                    </div>
                    <div class="stat-card accent">
                      <div class="stat-label">
                        New Today
                      </div>
                      <div class="stat-value">
                        42
                      </div>
                    </div>
                  </div>

                  <!-- Mini Table Preview -->
                  <div class="mini-table-wrapper">
                    <div class="mini-table-header">
                      <span>NAME</span>
                      <span>EMAIL</span>
                      <span>ROLE</span>
                      <span>STATUS</span>
                    </div>
                    <div class="mini-table-row">
                      <span>Jane Cooper</span>
                      <span>jane@example.com</span>
                      <span>Admin</span>
                      <span class="badge badge-success">Active</span>
                    </div>
                    <div class="mini-table-row">
                      <span>John Smith</span>
                      <span>john@example.com</span>
                      <span>Editor</span>
                      <span class="badge badge-primary">Active</span>
                    </div>
                    <div class="mini-table-row hover">
                      <span>Alice Johnson</span>
                      <span>alice@example.com</span>
                      <span>Viewer</span>
                      <span class="badge badge-warning">Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Typography Preview -->
              <div class="section">
                <h3 class="section-heading">
                  Typography
                </h3>
                <div class="type-preview">
                  <div class="type-sample">
                    <span class="type-label">Page Title (Heading)</span>
                    <div class="type-heading-xl">
                      Dashboard Overview
                    </div>
                  </div>
                  <div class="type-sample">
                    <span class="type-label">Section Title (Heading)</span>
                    <div class="type-heading-lg">
                      User Management
                    </div>
                  </div>
                  <div class="type-sample">
                    <span class="type-label">Card Header (Heading)</span>
                    <div class="type-heading-md">
                      Recent Activity
                    </div>
                  </div>
                  <div class="type-sample">
                    <span class="type-label">Body Text</span>
                    <div class="type-body">
                      The quick brown fox jumps over the lazy dog. This is how body text appears in tables, descriptions, and general content areas throughout the admin interface.
                    </div>
                  </div>
                  <div class="type-sample">
                    <span class="type-label">Caption / Small Text</span>
                    <div class="type-caption">
                      Last updated 3 minutes ago &middot; By admin &middot; Version 2.4.1
                    </div>
                  </div>
                </div>
              </div>

              <!-- Component Showcase -->
              <div class="section">
                <h3 class="section-heading">
                  Components
                </h3>

                <!-- Buttons -->
                <div class="component-group">
                  <h4 class="component-group-label">
                    Buttons
                  </h4>
                  <div class="component-row">
                    <button class="btn btn-primary">
                      Primary Action
                    </button>
                    <button class="btn btn-secondary">
                      Secondary
                    </button>
                    <button class="btn btn-ghost">
                      Ghost
                    </button>
                    <button class="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>

                <!-- Badges -->
                <div class="component-group">
                  <h4 class="component-group-label">
                    Badges
                  </h4>
                  <div class="component-row">
                    <span class="badge badge-primary">Primary</span>
                    <span class="badge badge-success">Success</span>
                    <span class="badge badge-warning">Warning</span>
                    <span class="badge badge-danger">Error</span>
                    <span class="badge badge-info">Info</span>
                    <span class="badge badge-neutral">Neutral</span>
                  </div>
                </div>

                <!-- Form Inputs -->
                <div class="component-group">
                  <h4 class="component-group-label">
                    Form Inputs
                  </h4>
                  <div class="form-preview">
                    <div class="form-field">
                      <label class="form-label">Full Name</label>
                      <input
                        class="form-input"
                        type="text"
                        placeholder="Enter your name"
                      >
                    </div>
                    <div class="form-field">
                      <label class="form-label">Email Address</label>
                      <input
                        class="form-input focused"
                        type="email"
                        value="admin@energis.dev"
                      >
                    </div>
                    <div class="form-field">
                      <label class="form-label">Role</label>
                      <div class="form-select">
                        Administrator
                        <span class="select-arrow">&#9662;</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Alerts -->
                <div class="component-group">
                  <h4 class="component-group-label">
                    Alerts
                  </h4>
                  <div class="alerts-preview">
                    <div class="alert alert-success">
                      <span class="alert-icon">&#10003;</span>
                      <div>
                        <div class="alert-title">
                          Changes saved
                        </div>
                        <div class="alert-description">
                          Your profile has been updated successfully.
                        </div>
                      </div>
                    </div>
                    <div class="alert alert-danger">
                      <span class="alert-icon">&#10007;</span>
                      <div>
                        <div class="alert-title">
                          Validation error
                        </div>
                        <div class="alert-description">
                          Please check the highlighted fields and try again.
                        </div>
                      </div>
                    </div>
                    <div class="alert alert-info">
                      <span class="alert-icon">&#8505;</span>
                      <div>
                        <div class="alert-title">
                          Tip
                        </div>
                        <div class="alert-description">
                          You can use keyboard shortcuts to navigate faster.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card -->
                <div class="component-group">
                  <h4 class="component-group-label">
                    Cards
                  </h4>
                  <div class="cards-preview">
                    <div class="preview-card">
                      <div class="preview-card-header">
                        <div class="type-heading-md">
                          User Details
                        </div>
                      </div>
                      <div class="preview-card-body">
                        <p class="type-body">
                          Manage user accounts, roles, and permissions. View activity logs and session history.
                        </p>
                      </div>
                      <div class="preview-card-footer">
                        <button class="btn btn-primary btn-sm">
                          View All
                        </button>
                        <button class="btn btn-ghost btn-sm">
                          Export
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Color Palette Swatches -->
              <div class="section">
                <h3 class="section-heading">
                  Color Palette
                </h3>
                <div class="palette-groups">
                  <div class="palette-group">
                    <h4 class="component-group-label">
                      Primary
                    </h4>
                    <div class="swatch-row">
                      <div
                        v-for="color in currentPalette.primary"
                        :key="color.name"
                        class="swatch"
                      >
                        <div
                          class="swatch-color"
                          :style="{ backgroundColor: color.hex }"
                        />
                        <div class="swatch-label">
                          {{ color.name }}
                        </div>
                        <div class="swatch-hex">
                          {{ color.hex }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="currentPalette.neutral"
                    class="palette-group"
                  >
                    <h4 class="component-group-label">
                      Neutral
                    </h4>
                    <div class="swatch-row">
                      <div
                        v-for="color in currentPalette.neutral"
                        :key="color.name"
                        class="swatch"
                      >
                        <div
                          class="swatch-color"
                          :style="{ backgroundColor: color.hex }"
                        />
                        <div class="swatch-label">
                          {{ color.name }}
                        </div>
                        <div class="swatch-hex">
                          {{ color.hex }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="currentPalette.accent"
                    class="palette-group"
                  >
                    <h4 class="component-group-label">
                      Accent
                    </h4>
                    <div class="swatch-row">
                      <div
                        v-for="color in currentPalette.accent"
                        :key="color.name"
                        class="swatch"
                      >
                        <div
                          class="swatch-color"
                          :style="{ backgroundColor: color.hex }"
                        />
                        <div class="swatch-label">
                          {{ color.name }}
                        </div>
                        <div class="swatch-hex">
                          {{ color.hex }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="currentPalette.secondary"
                    class="palette-group"
                  >
                    <h4 class="component-group-label">
                      Secondary
                    </h4>
                    <div class="swatch-row">
                      <div
                        v-for="color in currentPalette.secondary"
                        :key="color.name"
                        class="swatch"
                      >
                        <div
                          class="swatch-color"
                          :style="{ backgroundColor: color.hex }"
                        />
                        <div class="swatch-label">
                          {{ color.name }}
                        </div>
                        <div class="swatch-hex">
                          {{ color.hex }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="palette-group">
                    <h4 class="component-group-label">
                      Semantic
                    </h4>
                    <div class="swatch-row">
                      <div
                        v-for="color in currentPalette.semantic"
                        :key="color.name"
                        class="swatch"
                      >
                        <div
                          class="swatch-color"
                          :style="{ backgroundColor: color.hex }"
                        />
                        <div class="swatch-label">
                          {{ color.name }}
                        </div>
                        <div class="swatch-hex">
                          {{ color.hex }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Configuration Snippets -->
              <div class="section">
                <h3 class="section-heading">
                  Configuration
                </h3>
                <div class="config-tabs">
                  <button
                    class="config-tab"
                    :class="{ active: activeConfigTab === 'appConfig' }"
                    @click="activeConfigTab = 'appConfig'"
                  >
                    app.config.ts
                  </button>
                  <button
                    class="config-tab"
                    :class="{ active: activeConfigTab === 'nuxtConfig' }"
                    @click="activeConfigTab = 'nuxtConfig'"
                  >
                    nuxt.config.ts
                  </button>
                </div>
                <pre class="config-code"><code>{{ activeConfigTab === 'appConfig' ? currentConfig.appConfig : currentConfig.nuxtConfig }}</code></pre>
              </div>

              <!-- Font Information -->
              <div class="section">
                <h3 class="section-heading">
                  Font Pairing
                </h3>
                <div class="font-info">
                  <template v-if="activeTheme === 'professional'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Manrope', sans-serif; font-weight: 700;"
                      >
                        Manrope
                      </div>
                      <div class="font-pair-desc">
                        Geometric sans-serif, weights 600-700
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Inter', sans-serif; font-weight: 400;"
                      >
                        Inter
                      </div>
                      <div class="font-pair-desc">
                        Humanist sans-serif, weights 400-600
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'bold'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Space Grotesk', sans-serif; font-weight: 700;"
                      >
                        Space Grotesk
                      </div>
                      <div class="font-pair-desc">
                        Geometric grotesque, weights 500-700
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Inter', sans-serif; font-weight: 400;"
                      >
                        Inter
                      </div>
                      <div class="font-pair-desc">
                        Clean sans-serif, weights 400-600
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'brutalist'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Space Grotesk', sans-serif; font-weight: 700;"
                      >
                        Space Grotesk
                      </div>
                      <div class="font-pair-desc">
                        Geometric grotesque, Bold 700 only. Oversized (48px titles, 60px stats).
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'JetBrains Mono', monospace; font-weight: 400;"
                      >
                        JetBrains Mono
                      </div>
                      <div class="font-pair-desc">
                        Monospaced for ALL body text. Deliberate brutalist choice.
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'neon' || activeTheme === 'neonAmber' || activeTheme === 'neonViolet'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'JetBrains Mono', monospace; font-weight: 800;"
                      >
                        JetBrains Mono
                      </div>
                      <div class="font-pair-desc">
                        Monospace headings, ExtraBold 800, with neon glow. UPPERCASE h1.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'IBM Plex Sans', sans-serif; font-weight: 400;"
                      >
                        IBM Plex Sans
                      </div>
                      <div class="font-pair-desc">
                        Technical sans-serif, weights 400-600. Clean readability.
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'geometric'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Syne', sans-serif; font-weight: 800;"
                      >
                        Syne
                      </div>
                      <div class="font-pair-desc">
                        Experimental geometric sans-serif that widens as it bolds. ExtraBold 800.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400;"
                      >
                        Plus Jakarta Sans
                      </div>
                      <div class="font-pair-desc">
                        Modern geometric sans-serif, weights 400-600.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Mono
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Space Mono', monospace; font-weight: 400;"
                      >
                        Space Mono
                      </div>
                      <div class="font-pair-desc">
                        Geometric monospace for data and numbers.
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'refined'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Space Grotesk', sans-serif; font-weight: 700;"
                      >
                        Space Grotesk
                      </div>
                      <div class="font-pair-desc">
                        Geometric grotesque, Bold 700. Oversized but refined.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'DM Sans', sans-serif; font-weight: 400;"
                      >
                        DM Sans
                      </div>
                      <div class="font-pair-desc">
                        Proportional sans-serif with optical sizing. Clean, readable flow.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Mono
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'IBM Plex Mono', monospace; font-weight: 400;"
                      >
                        IBM Plex Mono
                      </div>
                      <div class="font-pair-desc">
                        Monospace for data cells and code snippets only.
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'gradient'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;"
                      >
                        Plus Jakarta Sans
                      </div>
                      <div class="font-pair-desc">
                        Geometric, rounded terminals that echo smooth gradient transitions.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Inter', sans-serif; font-weight: 400;"
                      >
                        Inter
                      </div>
                      <div class="font-pair-desc">
                        UI-optimized with optical sizing and tabular numbers.
                      </div>
                    </div>
                  </template>
                  <template v-else-if="activeTheme === 'glass'">
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Headings
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Inter', sans-serif; font-weight: 700;"
                      >
                        Inter
                      </div>
                      <div class="font-pair-desc">
                        Clean, Apple-like clarity. Bold 700 for headings, SemiBold 600 for subheads.
                      </div>
                    </div>
                    <div class="font-pair">
                      <div class="font-pair-label">
                        Body
                      </div>
                      <div
                        class="font-pair-name"
                        style="font-family: 'Inter', sans-serif; font-weight: 400;"
                      >
                        Inter
                      </div>
                      <div class="font-pair-desc">
                        Regular 400, optimized for screen readability at all sizes.
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UDashboardPanel>
</template>

<style>
/* Google Fonts imports for all themes */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=IBM+Plex+Mono:wght@400&display=swap');
</style>

<style>
/* ===== THEME VARIABLES ===== */

/* Professional & Clean (Light) */
.theme-professional .theme-preview-wrapper {
  --t-bg: #f8fafc;
  --t-bg-elevated: #ffffff;
  --t-bg-muted: #f1f5f9;
  --t-border: #e2e8f0;
  --t-text: #334155;
  --t-text-heading: #0f172a;
  --t-text-muted: #64748b;
  --t-text-caption: #94a3b8;
  --t-primary: #6366f1;
  --t-primary-hover: #4f46e5;
  --t-primary-light: #eef2ff;
  --t-primary-text: #ffffff;
  --t-secondary-bg: #f1f5f9;
  --t-secondary-text: #334155;
  --t-secondary-border: #e2e8f0;
  --t-ghost-text: #4f46e5;
  --t-ghost-hover: #f1f5f9;
  --t-danger: #ef4444;
  --t-danger-hover: #dc2626;
  --t-success: #10b981;
  --t-success-light: #ecfdf5;
  --t-success-text: #065f46;
  --t-warning: #f59e0b;
  --t-warning-light: #fffbeb;
  --t-warning-text: #92400e;
  --t-info: #0ea5e9;
  --t-info-light: #f0f9ff;
  --t-info-text: #0c4a6e;
  --t-danger-light: #fef2f2;
  --t-danger-text: #991b1b;
  --t-sidebar-bg: #ffffff;
  --t-sidebar-border: #e2e8f0;
  --t-sidebar-text: #64748b;
  --t-sidebar-active-bg: #eef2ff;
  --t-sidebar-active-text: #4f46e5;
  --t-sidebar-active-border: #6366f1;
  --t-sidebar-hover: #f8fafc;
  --t-sidebar-section: #94a3b8;
  --t-table-header-bg: #f8fafc;
  --t-table-header-text: #64748b;
  --t-table-border: #f1f5f9;
  --t-table-hover: #f8fafc;
  --t-input-bg: #ffffff;
  --t-input-border: #cbd5e1;
  --t-input-focus: #6366f1;
  --t-input-focus-ring: rgba(99, 102, 241, 0.2);
  --t-badge-primary-bg: #eef2ff;
  --t-badge-primary-text: #4338ca;
  --t-badge-neutral-bg: #f1f5f9;
  --t-badge-neutral-text: #475569;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.08);
  --t-font-heading: 'Manrope', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 8px;
  --t-radius-md: 12px;
  --t-radius-badge: 6px;
  --t-accent-bg: #eef2ff;
  --t-accent-text: #4338ca;
  --t-stat-value-color: #0f172a;
  --t-border-width: 1px;
  --t-heading-xl-size: 1.875rem;
  --t-heading-lg-size: 1.25rem;
  --t-heading-md-size: 1rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.025em;
  --t-body-size: 0.875rem;
  --t-btn-radius-primary: 8px;
  --t-btn-radius-secondary: 8px;
  --t-btn-radius-ghost: 8px;
  --t-btn-radius-danger: 8px;
  --t-btn-padding: 8px 16px;
  --t-btn-border: none;
  --t-btn-shadow: none;
  --t-card-radius: 12px;
  --t-card-border: 1px solid var(--t-border);
}

/* Professional & Clean (Dark) */
.theme-professional.dark-preview .theme-preview-wrapper {
  --t-bg: #0f172a;
  --t-bg-elevated: #1e293b;
  --t-bg-muted: #1e293b;
  --t-border: #334155;
  --t-text: #cbd5e1;
  --t-text-heading: #f8fafc;
  --t-text-muted: #94a3b8;
  --t-text-caption: #64748b;
  --t-primary: #818cf8;
  --t-primary-hover: #6366f1;
  --t-primary-light: rgba(99, 102, 241, 0.15);
  --t-secondary-bg: #334155;
  --t-secondary-text: #e2e8f0;
  --t-secondary-border: #475569;
  --t-ghost-text: #818cf8;
  --t-ghost-hover: #1e293b;
  --t-danger: #f87171;
  --t-success-light: rgba(16, 185, 129, 0.15);
  --t-success-text: #6ee7b7;
  --t-warning-light: rgba(245, 158, 11, 0.15);
  --t-warning-text: #fcd34d;
  --t-info-light: rgba(14, 165, 233, 0.15);
  --t-info-text: #7dd3fc;
  --t-danger-light: rgba(239, 68, 68, 0.15);
  --t-danger-text: #fca5a5;
  --t-sidebar-bg: #0f172a;
  --t-sidebar-border: #1e293b;
  --t-sidebar-text: #94a3b8;
  --t-sidebar-active-bg: rgba(99, 102, 241, 0.15);
  --t-sidebar-active-text: #a5b4fc;
  --t-sidebar-hover: #1e293b;
  --t-sidebar-section: #64748b;
  --t-table-header-bg: #1e293b;
  --t-table-header-text: #94a3b8;
  --t-table-border: #334155;
  --t-table-hover: #1e293b;
  --t-input-bg: #0f172a;
  --t-input-border: #475569;
  --t-badge-primary-bg: rgba(99, 102, 241, 0.2);
  --t-badge-primary-text: #a5b4fc;
  --t-badge-neutral-bg: #334155;
  --t-badge-neutral-text: #94a3b8;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.3);
  --t-accent-bg: rgba(99, 102, 241, 0.15);
  --t-accent-text: #a5b4fc;
  --t-stat-value-color: #f8fafc;
}

/* Bold & Modern (Light) */
.theme-bold .theme-preview-wrapper {
  --t-bg: #f8fafc;
  --t-bg-elevated: #ffffff;
  --t-bg-muted: #f1f5f9;
  --t-border: #e2e8f0;
  --t-text: #334155;
  --t-text-heading: #1e293b;
  --t-text-muted: #64748b;
  --t-text-caption: #94a3b8;
  --t-primary: #7c3aed;
  --t-primary-hover: #6d28d9;
  --t-primary-light: #f5f3ff;
  --t-primary-text: #ffffff;
  --t-secondary-bg: #f1f5f9;
  --t-secondary-text: #334155;
  --t-secondary-border: #e2e8f0;
  --t-ghost-text: #7c3aed;
  --t-ghost-hover: #f5f3ff;
  --t-danger: #f43f5e;
  --t-danger-hover: #e11d48;
  --t-success: #10b981;
  --t-success-light: #ecfdf5;
  --t-success-text: #065f46;
  --t-warning: #f59e0b;
  --t-warning-light: #fffbeb;
  --t-warning-text: #92400e;
  --t-info: #a78bfa;
  --t-info-light: #f5f3ff;
  --t-info-text: #5b21b6;
  --t-danger-light: #fff1f2;
  --t-danger-text: #9f1239;
  --t-sidebar-bg: linear-gradient(to bottom, #7c3aed, #4c1d95);
  --t-sidebar-border: transparent;
  --t-sidebar-text: rgba(255,255,255,0.7);
  --t-sidebar-active-bg: rgba(255,255,255,0.15);
  --t-sidebar-active-text: #ffffff;
  --t-sidebar-active-border: #fbbf24;
  --t-sidebar-hover: rgba(255,255,255,0.1);
  --t-sidebar-section: rgba(255,255,255,0.4);
  --t-table-header-bg: #f5f3ff;
  --t-table-header-text: #4c1d95;
  --t-table-border: #f1f5f9;
  --t-table-hover: rgba(139, 92, 246, 0.04);
  --t-input-bg: #ffffff;
  --t-input-border: #cbd5e1;
  --t-input-focus: #7c3aed;
  --t-input-focus-ring: rgba(124, 58, 237, 0.2);
  --t-badge-primary-bg: #ede9fe;
  --t-badge-primary-text: #6d28d9;
  --t-badge-neutral-bg: #f1f5f9;
  --t-badge-neutral-text: #475569;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.08);
  --t-font-heading: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 8px;
  --t-radius-md: 12px;
  --t-radius-badge: 9999px;
  --t-accent-bg: #fef3c7;
  --t-accent-text: #b45309;
  --t-stat-value-color: #7c3aed;
  --t-border-width: 1px;
  --t-heading-xl-size: 1.875rem;
  --t-heading-lg-size: 1.25rem;
  --t-heading-md-size: 1rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.025em;
  --t-body-size: 0.875rem;
  --t-btn-radius-primary: 8px;
  --t-btn-radius-secondary: 8px;
  --t-btn-radius-ghost: 8px;
  --t-btn-radius-danger: 8px;
  --t-btn-padding: 8px 16px;
  --t-btn-border: none;
  --t-btn-shadow: none;
  --t-card-radius: 12px;
  --t-card-border: 1px solid var(--t-border);
}

/* Bold & Modern (Dark) */
.theme-bold.dark-preview .theme-preview-wrapper {
  --t-bg: #020617;
  --t-bg-elevated: #0f172a;
  --t-bg-muted: #1e293b;
  --t-border: #1e293b;
  --t-text: #e2e8f0;
  --t-text-heading: #ffffff;
  --t-text-muted: #94a3b8;
  --t-text-caption: #64748b;
  --t-primary: #8b5cf6;
  --t-primary-hover: #7c3aed;
  --t-primary-light: rgba(139, 92, 246, 0.15);
  --t-secondary-bg: #1e293b;
  --t-secondary-text: #e2e8f0;
  --t-secondary-border: #334155;
  --t-ghost-text: #a78bfa;
  --t-ghost-hover: rgba(139, 92, 246, 0.1);
  --t-danger: #fb7185;
  --t-success-light: rgba(16, 185, 129, 0.15);
  --t-success-text: #6ee7b7;
  --t-warning-light: rgba(245, 158, 11, 0.15);
  --t-warning-text: #fcd34d;
  --t-info-light: rgba(167, 139, 250, 0.15);
  --t-info-text: #c4b5fd;
  --t-danger-light: rgba(244, 63, 94, 0.15);
  --t-danger-text: #fda4af;
  --t-sidebar-bg: linear-gradient(to bottom, #0f172a, #020617);
  --t-sidebar-border: #1e293b;
  --t-sidebar-text: #94a3b8;
  --t-sidebar-active-bg: rgba(139, 92, 246, 0.2);
  --t-sidebar-active-text: #c4b5fd;
  --t-sidebar-active-border: #fbbf24;
  --t-sidebar-hover: rgba(139, 92, 246, 0.1);
  --t-sidebar-section: #64748b;
  --t-table-header-bg: rgba(139, 92, 246, 0.08);
  --t-table-header-text: #c4b5fd;
  --t-table-border: #1e293b;
  --t-table-hover: rgba(139, 92, 246, 0.06);
  --t-input-bg: #0f172a;
  --t-input-border: #334155;
  --t-badge-primary-bg: rgba(139, 92, 246, 0.2);
  --t-badge-primary-text: #c4b5fd;
  --t-badge-neutral-bg: #1e293b;
  --t-badge-neutral-text: #94a3b8;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.4);
  --t-accent-bg: rgba(251, 191, 36, 0.15);
  --t-accent-text: #fbbf24;
  --t-stat-value-color: #a78bfa;
}

/* ===== ASYMMETRIC BRUTALIST (Light) ===== */
.theme-brutalist .theme-preview-wrapper {
  --t-bg: #fafaf9;
  --t-bg-elevated: #ffffff;
  --t-bg-muted: #f5f5f4;
  --t-border: #09090b;
  --t-text: #44403c;
  --t-text-heading: #09090b;
  --t-text-muted: #78716c;
  --t-text-caption: #a8a29e;
  --t-primary: #a3e635;
  --t-primary-hover: #84cc16;
  --t-primary-light: #ecfccb;
  --t-primary-text: #09090b;
  --t-secondary-bg: #fafafa;
  --t-secondary-text: #09090b;
  --t-secondary-border: #09090b;
  --t-ghost-text: #09090b;
  --t-ghost-hover: #f5f5f4;
  --t-danger: #ec4899;
  --t-danger-hover: #db2777;
  --t-success: #a3e635;
  --t-success-light: #ecfccb;
  --t-success-text: #365314;
  --t-warning: #fbbf24;
  --t-warning-light: #fef3c7;
  --t-warning-text: #92400e;
  --t-info: #38bdf8;
  --t-info-light: #e0f2fe;
  --t-info-text: #075985;
  --t-danger-light: #fce7f3;
  --t-danger-text: #9d174d;
  --t-sidebar-bg: #fafaf9;
  --t-sidebar-border: #09090b;
  --t-sidebar-text: #78716c;
  --t-sidebar-active-bg: #bef264;
  --t-sidebar-active-text: #09090b;
  --t-sidebar-active-border: #09090b;
  --t-sidebar-hover: #f5f5f4;
  --t-sidebar-section: #a8a29e;
  --t-table-header-bg: #09090b;
  --t-table-header-text: #ffffff;
  --t-table-border: #09090b;
  --t-table-hover: #ecfccb;
  --t-input-bg: #ffffff;
  --t-input-border: #09090b;
  --t-input-focus: #a3e635;
  --t-input-focus-ring: #a3e635;
  --t-badge-primary-bg: #bef264;
  --t-badge-primary-text: #09090b;
  --t-badge-neutral-bg: #e7e5e4;
  --t-badge-neutral-text: #09090b;
  --t-card-shadow: 6px 6px 0 0 #09090b;
  --t-font-heading: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'JetBrains Mono', monospace;
  --t-radius-sm: 0px;
  --t-radius-md: 0px;
  --t-radius-badge: 0px;
  --t-accent-bg: #bef264;
  --t-accent-text: #09090b;
  --t-stat-value-color: #09090b;
  --t-border-width: 3px;
  --t-heading-xl-size: 2.5rem;
  --t-heading-lg-size: 1.75rem;
  --t-heading-md-size: 1.25rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.04em;
  --t-body-size: 0.9375rem;
  --t-btn-radius-primary: 9999px 4px 4px 9999px;
  --t-btn-radius-secondary: 4px 9999px 9999px 4px;
  --t-btn-radius-ghost: 0px;
  --t-btn-radius-danger: 9999px 4px 4px 9999px;
  --t-btn-padding: 12px 24px;
  --t-btn-border: 3px solid #09090b;
  --t-btn-shadow: 4px 4px 0 0 #09090b;
  --t-card-radius: 0 24px 0 24px;
  --t-card-border: 3px solid #09090b;
}

/* Asymmetric Brutalist (Dark) */
.theme-brutalist.dark-preview .theme-preview-wrapper {
  --t-bg: #09090b;
  --t-bg-elevated: #171717;
  --t-bg-muted: #262626;
  --t-border: #d6d3d1;
  --t-text: #d6d3d1;
  --t-text-heading: #ffffff;
  --t-text-muted: #a8a29e;
  --t-text-caption: #78716c;
  --t-primary: #bef264;
  --t-primary-hover: #a3e635;
  --t-primary-light: rgba(190, 242, 100, 0.15);
  --t-primary-text: #09090b;
  --t-secondary-bg: #262626;
  --t-secondary-text: #f5f5f4;
  --t-secondary-border: #d6d3d1;
  --t-ghost-text: #f5f5f4;
  --t-ghost-hover: #262626;
  --t-danger: #f472b6;
  --t-success-light: rgba(163, 230, 53, 0.15);
  --t-success-text: #bef264;
  --t-warning-light: rgba(251, 191, 36, 0.15);
  --t-warning-text: #fcd34d;
  --t-info-light: rgba(56, 189, 248, 0.15);
  --t-info-text: #7dd3fc;
  --t-danger-light: rgba(236, 72, 153, 0.15);
  --t-danger-text: #f9a8d4;
  --t-sidebar-bg: #171717;
  --t-sidebar-border: #d6d3d1;
  --t-sidebar-text: #a8a29e;
  --t-sidebar-active-bg: rgba(163, 230, 53, 0.2);
  --t-sidebar-active-text: #bef264;
  --t-sidebar-active-border: #d6d3d1;
  --t-sidebar-hover: #262626;
  --t-sidebar-section: #78716c;
  --t-table-header-bg: #262626;
  --t-table-header-text: #f5f5f4;
  --t-table-border: #d6d3d1;
  --t-table-hover: rgba(163, 230, 53, 0.08);
  --t-input-bg: #09090b;
  --t-input-border: #d6d3d1;
  --t-input-focus-ring: #bef264;
  --t-badge-primary-bg: rgba(163, 230, 53, 0.2);
  --t-badge-primary-text: #bef264;
  --t-badge-neutral-bg: #262626;
  --t-badge-neutral-text: #a8a29e;
  --t-card-shadow: 6px 6px 0 0 #d6d3d1;
  --t-accent-bg: rgba(163, 230, 53, 0.15);
  --t-accent-text: #bef264;
  --t-stat-value-color: #bef264;
  --t-btn-shadow: 4px 4px 0 0 #d6d3d1;
}

/* ===== NEON TERMINAL ===== */
.theme-neon .theme-preview-wrapper {
  --t-bg: #07080A;
  --t-bg-elevated: #0D0F14;
  --t-bg-muted: #13161D;
  --t-border: #242832;
  --t-text: #E8ECF1;
  --t-text-heading: #E8ECF1;
  --t-text-muted: #8B95A5;
  --t-text-caption: #4A5568;
  --t-primary: #00FFEE;
  --t-primary-hover: #0ABDC6;
  --t-primary-light: rgba(0, 255, 238, 0.1);
  --t-primary-text: #07080A;
  --t-secondary-bg: #13161D;
  --t-secondary-text: #E8ECF1;
  --t-secondary-border: #242832;
  --t-ghost-text: #00FFEE;
  --t-ghost-hover: rgba(0, 255, 238, 0.05);
  --t-danger: #FF00AA;
  --t-danger-hover: #cc0088;
  --t-success: #39FF14;
  --t-success-light: rgba(57, 255, 20, 0.1);
  --t-success-text: #39FF14;
  --t-warning: #FFE600;
  --t-warning-light: rgba(255, 230, 0, 0.1);
  --t-warning-text: #FFE600;
  --t-info: #BD00FF;
  --t-info-light: rgba(189, 0, 255, 0.1);
  --t-info-text: #BD00FF;
  --t-danger-light: rgba(255, 0, 170, 0.1);
  --t-danger-text: #FF00AA;
  --t-sidebar-bg: #0D0F14;
  --t-sidebar-border: #242832;
  --t-sidebar-text: #8B95A5;
  --t-sidebar-active-bg: rgba(0, 255, 238, 0.05);
  --t-sidebar-active-text: #00FFEE;
  --t-sidebar-active-border: #00FFEE;
  --t-sidebar-hover: #1A1E27;
  --t-sidebar-section: #4A5568;
  --t-table-header-bg: #13161D;
  --t-table-header-text: #4A5568;
  --t-table-border: #242832;
  --t-table-hover: #1A1E27;
  --t-input-bg: #07080A;
  --t-input-border: #242832;
  --t-input-focus: #00FFEE;
  --t-input-focus-ring: rgba(0, 255, 238, 0.15);
  --t-badge-primary-bg: rgba(0, 255, 238, 0.1);
  --t-badge-primary-text: #00FFEE;
  --t-badge-neutral-bg: #1A1E27;
  --t-badge-neutral-text: #8B95A5;
  --t-card-shadow: none;
  --t-font-heading: 'JetBrains Mono', monospace;
  --t-font-body: 'IBM Plex Sans', sans-serif;
  --t-radius-sm: 2px;
  --t-radius-md: 0px;
  --t-radius-badge: 9999px;
  --t-accent-bg: rgba(0, 255, 238, 0.08);
  --t-accent-text: #00FFEE;
  --t-stat-value-color: #00FFEE;
  --t-border-width: 1px;
  --t-heading-xl-size: 2.25rem;
  --t-heading-lg-size: 1.5rem;
  --t-heading-md-size: 1.125rem;
  --t-heading-xl-weight: 800;
  --t-heading-tracking: -0.03em;
  --t-body-size: 0.9375rem;
  --t-btn-radius-primary: 9999px;
  --t-btn-radius-secondary: 9999px;
  --t-btn-radius-ghost: 9999px;
  --t-btn-radius-danger: 9999px;
  --t-btn-padding: 10px 28px;
  --t-btn-border: none;
  --t-btn-shadow: 0 0 5px rgba(0, 255, 238, 0.4), 0 0 20px rgba(0, 255, 238, 0.15);
  --t-card-radius: 0px;
  --t-card-border: 1px solid #242832;
}

/* Neon Terminal (Light -- rarely used, keep same as dark with lighter overlay) */
.theme-neon.dark-preview .theme-preview-wrapper {
  /* Neon is dark-first, so the "dark" toggle shows a lighter variant */
  --t-bg: #13161D;
  --t-bg-elevated: #1A1E27;
  --t-bg-muted: #242832;
  --t-border: #2D3341;
  --t-sidebar-bg: #13161D;
  --t-table-header-bg: #1A1E27;
  --t-input-bg: #0D0F14;
}

/* ===== GEOMETRIC MINIMAL (Light) ===== */
.theme-geometric .theme-preview-wrapper {
  --t-bg: #FFFFFF;
  --t-bg-elevated: #FFFFFF;
  --t-bg-muted: #F5F5F0;
  --t-border: #E0E0E0;
  --t-text: #404040;
  --t-text-heading: #0A0A0A;
  --t-text-muted: #404040;
  --t-text-caption: #999999;
  --t-primary: #003DA5;
  --t-primary-hover: #002B75;
  --t-primary-light: rgba(0, 61, 165, 0.08);
  --t-primary-text: #ffffff;
  --t-secondary-bg: transparent;
  --t-secondary-text: #0A0A0A;
  --t-secondary-border: #0A0A0A;
  --t-ghost-text: #0A0A0A;
  --t-ghost-hover: #F5F5F0;
  --t-danger: #D62828;
  --t-danger-hover: #b01f1f;
  --t-success: #003DA5;
  --t-success-light: rgba(0, 61, 165, 0.08);
  --t-success-text: #003DA5;
  --t-warning: #F5B700;
  --t-warning-light: rgba(245, 183, 0, 0.1);
  --t-warning-text: #8B6914;
  --t-info: #003DA5;
  --t-info-light: rgba(0, 61, 165, 0.08);
  --t-info-text: #003DA5;
  --t-danger-light: rgba(214, 40, 40, 0.08);
  --t-danger-text: #D62828;
  --t-sidebar-bg: #0A0A0A;
  --t-sidebar-border: transparent;
  --t-sidebar-text: #999999;
  --t-sidebar-active-bg: #003DA5;
  --t-sidebar-active-text: #ffffff;
  --t-sidebar-active-border: transparent;
  --t-sidebar-hover: rgba(255,255,255,0.05);
  --t-sidebar-section: #666666;
  --t-table-header-bg: #0A0A0A;
  --t-table-header-text: #ffffff;
  --t-table-border: #E0E0E0;
  --t-table-hover: #F5F5F0;
  --t-input-bg: #ffffff;
  --t-input-border: #E0E0E0;
  --t-input-focus: #003DA5;
  --t-input-focus-ring: rgba(0, 61, 165, 0.15);
  --t-badge-primary-bg: #003DA5;
  --t-badge-primary-text: #ffffff;
  --t-badge-neutral-bg: transparent;
  --t-badge-neutral-text: #0A0A0A;
  --t-card-shadow: none;
  --t-font-heading: 'Syne', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 0px;
  --t-radius-md: 0px;
  --t-radius-badge: 9999px;
  --t-accent-bg: #0A0A0A;
  --t-accent-text: #ffffff;
  --t-stat-value-color: #0A0A0A;
  --t-border-width: 2px;
  --t-heading-xl-size: 2.5rem;
  --t-heading-lg-size: 1.875rem;
  --t-heading-md-size: 1.25rem;
  --t-heading-xl-weight: 800;
  --t-heading-tracking: -0.02em;
  --t-body-size: 1rem;
  --t-btn-radius-primary: 9999px;
  --t-btn-radius-secondary: 0px;
  --t-btn-radius-ghost: 0px;
  --t-btn-radius-danger: 9999px;
  --t-btn-padding: 14px 36px;
  --t-btn-border: none;
  --t-btn-shadow: none;
  --t-card-radius: 0px;
  --t-card-border: 1px solid #E0E0E0;
}

/* Geometric Minimal (Dark) */
.theme-geometric.dark-preview .theme-preview-wrapper {
  --t-bg: #0A0A0A;
  --t-bg-elevated: #1A1A1A;
  --t-bg-muted: #262626;
  --t-border: #404040;
  --t-text: #E0E0E0;
  --t-text-heading: #F5F5F0;
  --t-text-muted: #999999;
  --t-text-caption: #666666;
  --t-primary: #003DA5;
  --t-primary-hover: #0050D4;
  --t-primary-light: rgba(0, 61, 165, 0.15);
  --t-secondary-bg: transparent;
  --t-secondary-text: #F5F5F0;
  --t-secondary-border: #F5F5F0;
  --t-ghost-text: #F5F5F0;
  --t-ghost-hover: #262626;
  --t-danger: #D62828;
  --t-success-light: rgba(0, 61, 165, 0.15);
  --t-success-text: #6B9FE8;
  --t-warning-light: rgba(245, 183, 0, 0.15);
  --t-warning-text: #F5B700;
  --t-info-light: rgba(0, 61, 165, 0.15);
  --t-info-text: #6B9FE8;
  --t-danger-light: rgba(214, 40, 40, 0.15);
  --t-danger-text: #E86B6B;
  --t-sidebar-bg: #0A0A0A;
  --t-sidebar-border: #404040;
  --t-sidebar-text: #666666;
  --t-sidebar-active-bg: #003DA5;
  --t-sidebar-active-text: #ffffff;
  --t-sidebar-hover: rgba(255,255,255,0.05);
  --t-sidebar-section: #555555;
  --t-table-header-bg: #1A1A1A;
  --t-table-header-text: #E0E0E0;
  --t-table-border: #404040;
  --t-table-hover: #262626;
  --t-input-bg: #0A0A0A;
  --t-input-border: #404040;
  --t-badge-primary-bg: #003DA5;
  --t-badge-primary-text: #ffffff;
  --t-badge-neutral-bg: #262626;
  --t-badge-neutral-text: #E0E0E0;
  --t-card-shadow: none;
  --t-accent-bg: #F5F5F0;
  --t-accent-text: #0A0A0A;
  --t-stat-value-color: #F5F5F0;
}

/* ===== REFINED BRUTALIST (Light) ===== */
.theme-refined .theme-preview-wrapper {
  --t-bg: #fafaf9;
  --t-bg-elevated: #ffffff;
  --t-bg-muted: #f5f5f4;
  --t-border: #262626;
  --t-text: #57534e;
  --t-text-heading: #262626;
  --t-text-muted: #78716c;
  --t-text-caption: #a8a29e;
  --t-primary: #7c9a84;
  --t-primary-hover: #63806b;
  --t-primary-light: #e8eeea;
  --t-primary-text: #ffffff;
  --t-secondary-bg: #fafaf9;
  --t-secondary-text: #262626;
  --t-secondary-border: #262626;
  --t-ghost-text: #262626;
  --t-ghost-hover: #f5f5f4;
  --t-danger: #c4818b;
  --t-danger-hover: #a8636d;
  --t-success: #7c9a84;
  --t-success-light: #e8eeea;
  --t-success-text: #3a4e3f;
  --t-warning: #c4a265;
  --t-warning-light: #eedcb5;
  --t-warning-text: #8a6000;
  --t-info: #c4a265;
  --t-info-light: #eedcb5;
  --t-info-text: #8a6000;
  --t-danger-light: #f2e4e6;
  --t-danger-text: #8c4a54;
  --t-sidebar-bg: #f5f5f4;
  --t-sidebar-border: #262626;
  --t-sidebar-text: #78716c;
  --t-sidebar-active-bg: #c5d5cb;
  --t-sidebar-active-text: #262626;
  --t-sidebar-active-border: #262626;
  --t-sidebar-hover: #e7e5e4;
  --t-sidebar-section: #a8a29e;
  --t-table-header-bg: #262626;
  --t-table-header-text: #f5f5f4;
  --t-table-border: #d6d3d1;
  --t-table-hover: #e8eeea;
  --t-input-bg: #ffffff;
  --t-input-border: #262626;
  --t-input-focus: #63806b;
  --t-input-focus-ring: #7c9a84;
  --t-badge-primary-bg: #c5d5cb;
  --t-badge-primary-text: #262626;
  --t-badge-neutral-bg: #e7e5e4;
  --t-badge-neutral-text: #262626;
  --t-card-shadow: 5px 5px 0 0 #7c9a84;
  --t-font-heading: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 0px;
  --t-radius-md: 0px;
  --t-radius-badge: 0px;
  --t-accent-bg: #e8eeea;
  --t-accent-text: #262626;
  --t-stat-value-color: #262626;
  --t-border-width: 2px;
  --t-heading-xl-size: 2.5rem;
  --t-heading-lg-size: 1.75rem;
  --t-heading-md-size: 1.25rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.04em;
  --t-body-size: 1rem;
  --t-btn-radius-primary: 9999px 4px 4px 9999px;
  --t-btn-radius-secondary: 4px 9999px 9999px 4px;
  --t-btn-radius-ghost: 0px;
  --t-btn-radius-danger: 9999px 4px 4px 9999px;
  --t-btn-padding: 10px 24px;
  --t-btn-border: 2px solid #262626;
  --t-btn-shadow: 3px 3px 0 0 #7c9a84;
  --t-card-radius: 0 24px 0 24px;
  --t-card-border: 2px solid #262626;
}

/* Refined Brutalist (Dark) */
.theme-refined.dark-preview .theme-preview-wrapper {
  --t-bg: #171717;
  --t-bg-elevated: #262626;
  --t-bg-muted: #333333;
  --t-border: #78716c;
  --t-text: #a8a29e;
  --t-text-heading: #f5f5f4;
  --t-text-muted: #78716c;
  --t-text-caption: #57534e;
  --t-primary: #7c9a84;
  --t-primary-hover: #63806b;
  --t-primary-light: rgba(124, 154, 132, 0.15);
  --t-primary-text: #ffffff;
  --t-secondary-bg: #333333;
  --t-secondary-text: #f5f5f4;
  --t-secondary-border: #78716c;
  --t-ghost-text: #f5f5f4;
  --t-ghost-hover: #333333;
  --t-danger: #d4a0a8;
  --t-success-light: rgba(124, 154, 132, 0.15);
  --t-success-text: #7c9a84;
  --t-warning-light: rgba(196, 162, 101, 0.15);
  --t-warning-text: #c4a265;
  --t-info-light: rgba(196, 162, 101, 0.15);
  --t-info-text: #c4a265;
  --t-danger-light: rgba(196, 129, 139, 0.15);
  --t-danger-text: #d4a0a8;
  --t-sidebar-bg: #171717;
  --t-sidebar-border: #78716c;
  --t-sidebar-text: #78716c;
  --t-sidebar-active-bg: rgba(124, 154, 132, 0.15);
  --t-sidebar-active-text: #7c9a84;
  --t-sidebar-active-border: #78716c;
  --t-sidebar-hover: #333333;
  --t-sidebar-section: #57534e;
  --t-table-header-bg: #333333;
  --t-table-header-text: #e7e5e4;
  --t-table-border: #78716c;
  --t-table-hover: rgba(124, 154, 132, 0.08);
  --t-input-bg: #171717;
  --t-input-border: #78716c;
  --t-input-focus-ring: #3a4e3f;
  --t-badge-primary-bg: rgba(124, 154, 132, 0.2);
  --t-badge-primary-text: #7c9a84;
  --t-badge-neutral-bg: #333333;
  --t-badge-neutral-text: #a8a29e;
  --t-card-shadow: 5px 5px 0 0 #3a4e3f;
  --t-accent-bg: rgba(124, 154, 132, 0.15);
  --t-accent-text: #7c9a84;
  --t-stat-value-color: #7c9a84;
  --t-btn-shadow: 3px 3px 0 0 #3a4e3f;
}

/* ===== NEON TERMINAL: AMBER (Dark - default) ===== */
.theme-neonAmber .theme-preview-wrapper {
  --t-bg: #0A0806;
  --t-bg-elevated: #12100B;
  --t-bg-muted: #1A1710;
  --t-border: #302A1E;
  --t-text: #F0E6D2;
  --t-text-heading: #F0E6D2;
  --t-text-muted: #A89478;
  --t-text-caption: #5C5040;
  --t-primary: #FFB800;
  --t-primary-hover: #C48A00;
  --t-primary-light: rgba(255, 184, 0, 0.1);
  --t-primary-text: #0A0806;
  --t-secondary-bg: #1A1710;
  --t-secondary-text: #F0E6D2;
  --t-secondary-border: #302A1E;
  --t-ghost-text: #FFB800;
  --t-ghost-hover: rgba(255, 184, 0, 0.05);
  --t-danger: #FF6B00;
  --t-danger-hover: #cc5500;
  --t-success: #39FF14;
  --t-success-light: rgba(57, 255, 20, 0.1);
  --t-success-text: #39FF14;
  --t-warning: #FFE066;
  --t-warning-light: rgba(255, 224, 102, 0.1);
  --t-warning-text: #FFE066;
  --t-info: #E8782A;
  --t-info-light: rgba(232, 120, 42, 0.1);
  --t-info-text: #E8782A;
  --t-danger-light: rgba(255, 107, 0, 0.1);
  --t-danger-text: #FF6B00;
  --t-sidebar-bg: #12100B;
  --t-sidebar-border: #302A1E;
  --t-sidebar-text: #A89478;
  --t-sidebar-active-bg: rgba(255, 184, 0, 0.05);
  --t-sidebar-active-text: #FFB800;
  --t-sidebar-active-border: #FFB800;
  --t-sidebar-hover: #241F16;
  --t-sidebar-section: #5C5040;
  --t-table-header-bg: #1A1710;
  --t-table-header-text: #5C5040;
  --t-table-border: #302A1E;
  --t-table-hover: #241F16;
  --t-input-bg: #0A0806;
  --t-input-border: #302A1E;
  --t-input-focus: #FFB800;
  --t-input-focus-ring: rgba(255, 184, 0, 0.15);
  --t-badge-primary-bg: rgba(255, 184, 0, 0.1);
  --t-badge-primary-text: #FFB800;
  --t-badge-neutral-bg: #241F16;
  --t-badge-neutral-text: #A89478;
  --t-card-shadow: none;
  --t-font-heading: 'JetBrains Mono', monospace;
  --t-font-body: 'IBM Plex Sans', sans-serif;
  --t-radius-sm: 2px;
  --t-radius-md: 0px;
  --t-radius-badge: 9999px;
  --t-accent-bg: rgba(255, 184, 0, 0.08);
  --t-accent-text: #FFB800;
  --t-stat-value-color: #FFB800;
  --t-border-width: 1px;
  --t-heading-xl-size: 2.25rem;
  --t-heading-lg-size: 1.5rem;
  --t-heading-md-size: 1.125rem;
  --t-heading-xl-weight: 800;
  --t-heading-tracking: -0.03em;
  --t-body-size: 0.9375rem;
  --t-btn-radius-primary: 9999px;
  --t-btn-radius-secondary: 9999px;
  --t-btn-radius-ghost: 9999px;
  --t-btn-radius-danger: 9999px;
  --t-btn-padding: 10px 28px;
  --t-btn-border: none;
  --t-btn-shadow: 0 0 5px rgba(255, 184, 0, 0.4), 0 0 20px rgba(255, 184, 0, 0.15);
  --t-card-radius: 0px;
  --t-card-border: 1px solid #302A1E;
}

/* Neon Terminal: Amber (Light) */
.theme-neonAmber.dark-preview .theme-preview-wrapper {
  --t-bg: #FAF5EA;
  --t-bg-elevated: #F3ECDD;
  --t-bg-muted: #EBE3D0;
  --t-border: #D5C9B0;
  --t-text: #6B5D48;
  --t-text-heading: #2C2416;
  --t-text-muted: #6B5D48;
  --t-text-caption: #A89880;
  --t-primary: #B07800;
  --t-primary-hover: #8A6000;
  --t-primary-light: rgba(176, 120, 0, 0.1);
  --t-primary-text: #ffffff;
  --t-secondary-bg: #EBE3D0;
  --t-secondary-text: #2C2416;
  --t-secondary-border: #D5C9B0;
  --t-ghost-text: #B07800;
  --t-ghost-hover: #EBE3D0;
  --t-danger: #C44800;
  --t-success: #3D7A1C;
  --t-success-light: rgba(61, 122, 28, 0.1);
  --t-success-text: #3D7A1C;
  --t-warning: #A67C00;
  --t-warning-light: rgba(166, 124, 0, 0.1);
  --t-warning-text: #A67C00;
  --t-info: #9A5B20;
  --t-info-light: rgba(154, 91, 32, 0.1);
  --t-info-text: #9A5B20;
  --t-danger-light: rgba(196, 72, 0, 0.1);
  --t-danger-text: #C44800;
  --t-sidebar-bg: #F3ECDD;
  --t-sidebar-border: #D5C9B0;
  --t-sidebar-text: #A89880;
  --t-sidebar-active-bg: rgba(176, 120, 0, 0.1);
  --t-sidebar-active-text: #B07800;
  --t-sidebar-active-border: #B07800;
  --t-sidebar-hover: #E2D8C3;
  --t-sidebar-section: #A89880;
  --t-table-header-bg: #2C2416;
  --t-table-header-text: #F0E6D2;
  --t-table-border: #D5C9B0;
  --t-table-hover: #E2D8C3;
  --t-input-bg: #F3ECDD;
  --t-input-border: #D5C9B0;
  --t-badge-primary-bg: rgba(176, 120, 0, 0.12);
  --t-badge-primary-text: #B07800;
  --t-badge-neutral-bg: #E2D8C3;
  --t-badge-neutral-text: #6B5D48;
  --t-card-shadow: none;
  --t-accent-bg: rgba(176, 120, 0, 0.08);
  --t-accent-text: #B07800;
  --t-stat-value-color: #2C2416;
  --t-btn-shadow: none;
}

/* ===== NEON TERMINAL: VIOLET (Dark - default) ===== */
.theme-neonViolet .theme-preview-wrapper {
  --t-bg: #08060E;
  --t-bg-elevated: #0F0B19;
  --t-bg-muted: #161122;
  --t-border: #2A2140;
  --t-text: #EDE9FE;
  --t-text-heading: #EDE9FE;
  --t-text-muted: #9F8BBF;
  --t-text-caption: #5B4A73;
  --t-primary: #A855F7;
  --t-primary-hover: #7C3AED;
  --t-primary-light: rgba(168, 85, 247, 0.1);
  --t-primary-text: #ffffff;
  --t-secondary-bg: #161122;
  --t-secondary-text: #EDE9FE;
  --t-secondary-border: #2A2140;
  --t-ghost-text: #A855F7;
  --t-ghost-hover: rgba(168, 85, 247, 0.05);
  --t-danger: #F472B6;
  --t-danger-hover: #ec4899;
  --t-success: #34D399;
  --t-success-light: rgba(52, 211, 153, 0.1);
  --t-success-text: #34D399;
  --t-warning: #FBBF24;
  --t-warning-light: rgba(251, 191, 36, 0.1);
  --t-warning-text: #FBBF24;
  --t-info: #60A5FA;
  --t-info-light: rgba(96, 165, 250, 0.1);
  --t-info-text: #60A5FA;
  --t-danger-light: rgba(244, 114, 182, 0.1);
  --t-danger-text: #F472B6;
  --t-sidebar-bg: #0F0B19;
  --t-sidebar-border: #2A2140;
  --t-sidebar-text: #9F8BBF;
  --t-sidebar-active-bg: rgba(168, 85, 247, 0.05);
  --t-sidebar-active-text: #C084FC;
  --t-sidebar-active-border: #A855F7;
  --t-sidebar-hover: #1E172E;
  --t-sidebar-section: #5B4A73;
  --t-table-header-bg: #161122;
  --t-table-header-text: #5B4A73;
  --t-table-border: #2A2140;
  --t-table-hover: #1E172E;
  --t-input-bg: #08060E;
  --t-input-border: #2A2140;
  --t-input-focus: #A855F7;
  --t-input-focus-ring: rgba(168, 85, 247, 0.15);
  --t-badge-primary-bg: rgba(168, 85, 247, 0.1);
  --t-badge-primary-text: #C084FC;
  --t-badge-neutral-bg: #1E172E;
  --t-badge-neutral-text: #9F8BBF;
  --t-card-shadow: none;
  --t-font-heading: 'JetBrains Mono', monospace;
  --t-font-body: 'IBM Plex Sans', sans-serif;
  --t-radius-sm: 2px;
  --t-radius-md: 0px;
  --t-radius-badge: 9999px;
  --t-accent-bg: rgba(168, 85, 247, 0.08);
  --t-accent-text: #C084FC;
  --t-stat-value-color: #A855F7;
  --t-border-width: 1px;
  --t-heading-xl-size: 2.25rem;
  --t-heading-lg-size: 1.5rem;
  --t-heading-md-size: 1.125rem;
  --t-heading-xl-weight: 800;
  --t-heading-tracking: -0.03em;
  --t-body-size: 0.9375rem;
  --t-btn-radius-primary: 9999px;
  --t-btn-radius-secondary: 9999px;
  --t-btn-radius-ghost: 9999px;
  --t-btn-radius-danger: 9999px;
  --t-btn-padding: 10px 28px;
  --t-btn-border: none;
  --t-btn-shadow: 0 0 5px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.15);
  --t-card-radius: 0px;
  --t-card-border: 1px solid #2A2140;
}

/* Neon Terminal: Violet (Light) */
.theme-neonViolet.dark-preview .theme-preview-wrapper {
  --t-bg: #F8F5FF;
  --t-bg-elevated: #FFFFFF;
  --t-bg-muted: #F3EEFF;
  --t-border: #DDD1F5;
  --t-text: #5B4A73;
  --t-text-heading: #1E103A;
  --t-text-muted: #5B4A73;
  --t-text-caption: #9F8BBF;
  --t-primary: #7C3AED;
  --t-primary-hover: #6D28D9;
  --t-primary-light: rgba(124, 58, 237, 0.1);
  --t-primary-text: #ffffff;
  --t-secondary-bg: #F3EEFF;
  --t-secondary-text: #1E103A;
  --t-secondary-border: #DDD1F5;
  --t-ghost-text: #7C3AED;
  --t-ghost-hover: #EDE5FC;
  --t-danger: #E11D48;
  --t-success: #059669;
  --t-success-light: rgba(5, 150, 105, 0.1);
  --t-success-text: #059669;
  --t-warning: #D97706;
  --t-warning-light: rgba(217, 119, 6, 0.1);
  --t-warning-text: #D97706;
  --t-info: #3B82F6;
  --t-info-light: rgba(59, 130, 246, 0.1);
  --t-info-text: #3B82F6;
  --t-danger-light: rgba(225, 29, 72, 0.1);
  --t-danger-text: #E11D48;
  --t-sidebar-bg: #FFFFFF;
  --t-sidebar-border: #DDD1F5;
  --t-sidebar-text: #9F8BBF;
  --t-sidebar-active-bg: rgba(124, 58, 237, 0.08);
  --t-sidebar-active-text: #7C3AED;
  --t-sidebar-active-border: #7C3AED;
  --t-sidebar-hover: #EDE5FC;
  --t-sidebar-section: #9F8BBF;
  --t-table-header-bg: #F3EEFF;
  --t-table-header-text: #5B4A73;
  --t-table-border: #DDD1F5;
  --t-table-hover: #EDE5FC;
  --t-input-bg: #FFFFFF;
  --t-input-border: #DDD1F5;
  --t-badge-primary-bg: rgba(124, 58, 237, 0.1);
  --t-badge-primary-text: #7C3AED;
  --t-badge-neutral-bg: #EDE5FC;
  --t-badge-neutral-text: #5B4A73;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.06);
  --t-accent-bg: rgba(124, 58, 237, 0.08);
  --t-accent-text: #7C3AED;
  --t-stat-value-color: #1E103A;
  --t-btn-shadow: none;
}

/* ===== GRADIENT FLOW (Light) ===== */
.theme-gradient .theme-preview-wrapper {
  --t-bg: #f8fafc;
  --t-bg-elevated: #ffffff;
  --t-bg-muted: #f1f5f9;
  --t-border: #e2e8f0;
  --t-text: #64748b;
  --t-text-heading: #0f172a;
  --t-text-muted: #94a3b8;
  --t-text-caption: #94a3b8;
  --t-primary: #6366f1;
  --t-primary-hover: #4f46e5;
  --t-primary-light: #eef2ff;
  --t-primary-text: #ffffff;
  --t-secondary-bg: #f0fdfa;
  --t-secondary-text: #0d9488;
  --t-secondary-border: #99f6e4;
  --t-ghost-text: #6366f1;
  --t-ghost-hover: #f1f5f9;
  --t-danger: #e11d48;
  --t-danger-hover: #be123c;
  --t-success: #10b981;
  --t-success-light: #ecfdf5;
  --t-success-text: #059669;
  --t-warning: #f59e0b;
  --t-warning-light: #fffbeb;
  --t-warning-text: #d97706;
  --t-info: #06b6d4;
  --t-info-light: #ecfeff;
  --t-info-text: #0891b2;
  --t-danger-light: #fff1f2;
  --t-danger-text: #e11d48;
  --t-sidebar-bg: linear-gradient(180deg, #4f46e5, #8b5cf6);
  --t-sidebar-border: transparent;
  --t-sidebar-text: rgba(255,255,255,0.7);
  --t-sidebar-active-bg: rgba(255,255,255,0.15);
  --t-sidebar-active-text: #ffffff;
  --t-sidebar-active-border: #ffffff;
  --t-sidebar-hover: rgba(255,255,255,0.1);
  --t-sidebar-section: rgba(255,255,255,0.4);
  --t-table-header-bg: linear-gradient(90deg, #4f46e5, #8b5cf6);
  --t-table-header-text: #ffffff;
  --t-table-border: #f1f5f9;
  --t-table-hover: rgba(99, 102, 241, 0.04);
  --t-input-bg: #ffffff;
  --t-input-border: #e2e8f0;
  --t-input-focus: #6366f1;
  --t-input-focus-ring: rgba(99, 102, 241, 0.2);
  --t-badge-primary-bg: #eef2ff;
  --t-badge-primary-text: #4338ca;
  --t-badge-neutral-bg: #f1f5f9;
  --t-badge-neutral-text: #475569;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.06);
  --t-font-heading: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 12px;
  --t-radius-md: 16px;
  --t-radius-badge: 8px;
  --t-accent-bg: #eef2ff;
  --t-accent-text: #4f46e5;
  --t-stat-value-color: #4f46e5;
  --t-border-width: 1px;
  --t-heading-xl-size: 2.25rem;
  --t-heading-lg-size: 1.5rem;
  --t-heading-md-size: 1.25rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.03em;
  --t-body-size: 1rem;
  --t-btn-radius-primary: 12px;
  --t-btn-radius-secondary: 12px;
  --t-btn-radius-ghost: 12px;
  --t-btn-radius-danger: 12px;
  --t-btn-padding: 10px 24px;
  --t-btn-border: none;
  --t-btn-shadow: none;
  --t-card-radius: 16px;
  --t-card-border: 1px solid #e2e8f0;
}

/* Gradient Flow (Dark) */
.theme-gradient.dark-preview .theme-preview-wrapper {
  --t-bg: #020617;
  --t-bg-elevated: #0f172a;
  --t-bg-muted: #1e293b;
  --t-border: #334155;
  --t-text: #94a3b8;
  --t-text-heading: #f1f5f9;
  --t-text-muted: #64748b;
  --t-text-caption: #475569;
  --t-primary: #818cf8;
  --t-primary-hover: #6366f1;
  --t-primary-light: rgba(99, 102, 241, 0.15);
  --t-secondary-bg: rgba(13, 148, 136, 0.1);
  --t-secondary-text: #5eead4;
  --t-secondary-border: rgba(13, 148, 136, 0.3);
  --t-ghost-text: #a5b4fc;
  --t-ghost-hover: #1e293b;
  --t-danger: #fb7185;
  --t-success-light: rgba(16, 185, 129, 0.15);
  --t-success-text: #6ee7b7;
  --t-warning-light: rgba(245, 158, 11, 0.15);
  --t-warning-text: #fcd34d;
  --t-info-light: rgba(6, 182, 212, 0.15);
  --t-info-text: #67e8f9;
  --t-danger-light: rgba(225, 29, 72, 0.15);
  --t-danger-text: #fda4af;
  --t-sidebar-bg: linear-gradient(180deg, #3730a3, #6d28d9);
  --t-sidebar-border: transparent;
  --t-sidebar-text: rgba(255,255,255,0.6);
  --t-sidebar-active-bg: rgba(255,255,255,0.12);
  --t-sidebar-active-text: #ffffff;
  --t-sidebar-active-border: #ffffff;
  --t-sidebar-hover: rgba(255,255,255,0.08);
  --t-sidebar-section: rgba(255,255,255,0.35);
  --t-table-header-bg: linear-gradient(90deg, #3730a3, #6d28d9);
  --t-table-header-text: rgba(255,255,255,0.9);
  --t-table-border: #334155;
  --t-table-hover: rgba(99, 102, 241, 0.06);
  --t-input-bg: #0f172a;
  --t-input-border: #334155;
  --t-badge-primary-bg: rgba(99, 102, 241, 0.2);
  --t-badge-primary-text: #a5b4fc;
  --t-badge-neutral-bg: #334155;
  --t-badge-neutral-text: #94a3b8;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.3);
  --t-accent-bg: rgba(99, 102, 241, 0.15);
  --t-accent-text: #a5b4fc;
  --t-stat-value-color: #a5b4fc;
}

/* ===== LIQUID GLASS (Light) ===== */
.theme-glass .theme-preview-wrapper {
  --t-bg: #EEF0F5;
  --t-bg-elevated: rgba(255, 255, 255, 0.62);
  --t-bg-muted: #F3F4F8;
  --t-border: rgba(255, 255, 255, 0.45);
  --t-text: #636366;
  --t-text-heading: #1C1C1E;
  --t-text-muted: #636366;
  --t-text-caption: #AEAEB2;
  --t-primary: #007AFF;
  --t-primary-hover: #0063D1;
  --t-primary-light: rgba(0, 122, 255, 0.1);
  --t-primary-text: #ffffff;
  --t-secondary-bg: rgba(255, 255, 255, 0.4);
  --t-secondary-text: #1C1C1E;
  --t-secondary-border: rgba(209, 213, 219, 0.35);
  --t-ghost-text: #007AFF;
  --t-ghost-hover: rgba(255, 255, 255, 0.5);
  --t-danger: #FF3B30;
  --t-danger-hover: #cc2f26;
  --t-success: #34C759;
  --t-success-light: rgba(52, 199, 89, 0.1);
  --t-success-text: #248A3D;
  --t-warning: #FF9500;
  --t-warning-light: rgba(255, 149, 0, 0.1);
  --t-warning-text: #C27500;
  --t-info: #5AC8FA;
  --t-info-light: rgba(90, 200, 250, 0.1);
  --t-info-text: #0077B5;
  --t-danger-light: rgba(255, 59, 48, 0.1);
  --t-danger-text: #D70015;
  --t-sidebar-bg: rgba(255, 255, 255, 0.62);
  --t-sidebar-border: rgba(255, 255, 255, 0.45);
  --t-sidebar-text: #636366;
  --t-sidebar-active-bg: rgba(0, 122, 255, 0.1);
  --t-sidebar-active-text: #007AFF;
  --t-sidebar-active-border: #007AFF;
  --t-sidebar-hover: rgba(255, 255, 255, 0.72);
  --t-sidebar-section: #AEAEB2;
  --t-table-header-bg: rgba(255, 255, 255, 0.5);
  --t-table-header-text: #636366;
  --t-table-border: rgba(209, 213, 219, 0.35);
  --t-table-hover: rgba(255, 255, 255, 0.72);
  --t-input-bg: rgba(255, 255, 255, 0.6);
  --t-input-border: rgba(209, 213, 219, 0.35);
  --t-input-focus: #007AFF;
  --t-input-focus-ring: rgba(0, 122, 255, 0.2);
  --t-badge-primary-bg: rgba(0, 122, 255, 0.12);
  --t-badge-primary-text: #007AFF;
  --t-badge-neutral-bg: rgba(255, 255, 255, 0.5);
  --t-badge-neutral-text: #636366;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.5);
  --t-font-heading: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --t-font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --t-radius-sm: 10px;
  --t-radius-md: 16px;
  --t-radius-badge: 8px;
  --t-accent-bg: rgba(0, 122, 255, 0.08);
  --t-accent-text: #007AFF;
  --t-stat-value-color: #1C1C1E;
  --t-border-width: 1px;
  --t-heading-xl-size: 1.75rem;
  --t-heading-lg-size: 1.375rem;
  --t-heading-md-size: 1.0625rem;
  --t-heading-xl-weight: 700;
  --t-heading-tracking: -0.02em;
  --t-body-size: 0.9375rem;
  --t-btn-radius-primary: 10px;
  --t-btn-radius-secondary: 10px;
  --t-btn-radius-ghost: 10px;
  --t-btn-radius-danger: 10px;
  --t-btn-padding: 8px 20px;
  --t-btn-border: none;
  --t-btn-shadow: none;
  --t-card-radius: 16px;
  --t-card-border: 1px solid rgba(255, 255, 255, 0.45);
}

/* Liquid Glass (Dark) */
.theme-glass.dark-preview .theme-preview-wrapper {
  --t-bg: #0A0A0F;
  --t-bg-elevated: rgba(28, 28, 30, 0.55);
  --t-bg-muted: rgba(44, 44, 46, 0.4);
  --t-border: rgba(255, 255, 255, 0.12);
  --t-text: #AEAEB2;
  --t-text-heading: #F2F2F7;
  --t-text-muted: #AEAEB2;
  --t-text-caption: #636366;
  --t-primary: #0A84FF;
  --t-primary-hover: #409CFF;
  --t-primary-light: rgba(10, 132, 255, 0.15);
  --t-secondary-bg: rgba(44, 44, 46, 0.5);
  --t-secondary-text: #F2F2F7;
  --t-secondary-border: rgba(255, 255, 255, 0.12);
  --t-ghost-text: #0A84FF;
  --t-ghost-hover: rgba(44, 44, 46, 0.5);
  --t-danger: #FF453A;
  --t-success: #30D158;
  --t-success-light: rgba(48, 209, 88, 0.15);
  --t-success-text: #30D158;
  --t-warning: #FF9F0A;
  --t-warning-light: rgba(255, 159, 10, 0.15);
  --t-warning-text: #FF9F0A;
  --t-info: #64D2FF;
  --t-info-light: rgba(100, 210, 255, 0.15);
  --t-info-text: #64D2FF;
  --t-danger-light: rgba(255, 69, 58, 0.15);
  --t-danger-text: #FF453A;
  --t-sidebar-bg: rgba(28, 28, 30, 0.55);
  --t-sidebar-border: rgba(255, 255, 255, 0.12);
  --t-sidebar-text: #AEAEB2;
  --t-sidebar-active-bg: rgba(10, 132, 255, 0.15);
  --t-sidebar-active-text: #0A84FF;
  --t-sidebar-active-border: #0A84FF;
  --t-sidebar-hover: rgba(44, 44, 46, 0.65);
  --t-sidebar-section: #636366;
  --t-table-header-bg: rgba(44, 44, 46, 0.5);
  --t-table-header-text: #AEAEB2;
  --t-table-border: rgba(255, 255, 255, 0.12);
  --t-table-hover: rgba(44, 44, 46, 0.65);
  --t-input-bg: rgba(28, 28, 30, 0.55);
  --t-input-border: rgba(255, 255, 255, 0.12);
  --t-badge-primary-bg: rgba(10, 132, 255, 0.2);
  --t-badge-primary-text: #0A84FF;
  --t-badge-neutral-bg: rgba(44, 44, 46, 0.5);
  --t-badge-neutral-text: #AEAEB2;
  --t-card-shadow: 0 1px 3px rgba(0,0,0,0.20), 0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06);
  --t-accent-bg: rgba(10, 132, 255, 0.12);
  --t-accent-text: #0A84FF;
  --t-stat-value-color: #F2F2F7;
  --t-card-border: 1px solid rgba(255, 255, 255, 0.12);
}

/* ===== STRUCTURAL STYLES ===== */

.theme-preview-wrapper {
  font-family: var(--t-font-body);
  color: var(--t-text);
  background-color: var(--t-bg);
  transition: all 0.3s ease;
}

.theme-header {
  padding: 24px 32px;
  background-color: var(--t-bg-elevated);
  border-bottom: var(--t-border-width, 1px) solid var(--t-border);
}

.theme-title {
  font-family: var(--t-font-heading);
  font-size: var(--t-heading-lg-size, 1.5rem);
  font-weight: var(--t-heading-xl-weight, 700);
  color: var(--t-text-heading);
  margin: 0;
  letter-spacing: var(--t-heading-tracking, -0.02em);
}

/* Neon glow on headings for neon theme */
.theme-neon .theme-title {
  text-shadow: 0 0 7px rgba(0, 255, 238, 0.4), 0 0 20px rgba(0, 255, 238, 0.15);
  color: #00FFEE;
  text-transform: uppercase;
}

/* Neon Amber glow on headings */
.theme-neonAmber .theme-title {
  text-shadow: 0 0 7px rgba(255, 184, 0, 0.4), 0 0 20px rgba(255, 184, 0, 0.15);
  color: #FFB800;
  text-transform: uppercase;
}

.theme-neonAmber.dark-preview .theme-title {
  text-shadow: none;
  color: #B07800;
}

/* Neon Violet glow on headings */
.theme-neonViolet .theme-title {
  text-shadow: 0 0 7px rgba(168, 85, 247, 0.6), 0 0 20px rgba(168, 85, 247, 0.3);
  color: #A855F7;
  text-transform: uppercase;
}

.theme-neonViolet.dark-preview .theme-title {
  text-shadow: none;
  color: #7C3AED;
}

.theme-subtitle {
  font-size: 0.875rem;
  color: var(--t-text-muted);
  margin-top: 4px;
}

.theme-mode-badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: var(--t-radius-badge);
  background-color: var(--t-badge-neutral-bg);
  color: var(--t-badge-neutral-text);
  white-space: nowrap;
}

/* Brutalist badge has border */
.theme-brutalist .theme-mode-badge {
  border: 2px solid var(--t-border);
}

/* Geometric badge outline variant */
.theme-geometric .theme-mode-badge {
  border: 2px solid var(--t-text-heading);
}

/* Neon badge glow */
.theme-neon .theme-mode-badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.6875rem;
  border: 1px solid rgba(0, 255, 238, 0.25);
}

.theme-body {
  padding: 32px;
}

/* Layout Preview */
.layout-preview {
  display: flex;
  border: var(--t-border-width, 1px) solid var(--t-border);
  border-radius: var(--t-radius-md);
  overflow: hidden;
  height: 380px;
  box-shadow: var(--t-card-shadow);
}

/* Brutalist layout has slash shape */
.theme-brutalist .layout-preview {
  border-radius: 0 24px 0 24px;
}

.mini-sidebar {
  width: 200px;
  min-width: 200px;
  padding: 16px 0;
  border-right: var(--t-border-width, 1px) solid var(--t-sidebar-border, var(--t-border));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--t-sidebar-bg);
}

/* Handle gradient background for bold theme sidebar */
.theme-bold .mini-sidebar {
  background: linear-gradient(to bottom, #7c3aed, #4c1d95);
}

.theme-bold.dark-preview .mini-sidebar {
  background: linear-gradient(to bottom, #0f172a, #020617);
  border-right-color: #1e293b;
}

.theme-professional .mini-sidebar {
  background-color: var(--t-sidebar-bg);
}

.theme-professional.dark-preview .mini-sidebar {
  background-color: var(--t-sidebar-bg);
}

/* Neon sidebar with grid background */
.theme-neon .mini-sidebar {
  background-color: var(--t-sidebar-bg);
  background-image: radial-gradient(circle, rgba(0, 255, 238, 0.03) 1px, transparent 1px);
  background-size: 16px 16px;
}

/* Geometric sidebar */
.theme-geometric .mini-sidebar {
  background-color: var(--t-sidebar-bg);
  color: #ffffff;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px;
  border-bottom: var(--t-border-width, 1px) solid var(--t-border);
  margin-bottom: 12px;
}

.theme-bold .sidebar-logo {
  border-bottom-color: rgba(255,255,255,0.1);
}

.theme-bold.dark-preview .sidebar-logo {
  border-bottom-color: #1e293b;
}

.theme-neon .sidebar-logo {
  border-bottom-color: #242832;
}

.theme-geometric .sidebar-logo {
  border-bottom-color: #333333;
}

.sidebar-logo-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background-color: var(--t-primary);
  color: var(--t-primary-text);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--t-font-heading);
  font-weight: 700;
  font-size: 0.875rem;
}

/* Neon logo glow */
.theme-neon .sidebar-logo-icon {
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(0, 255, 238, 0.4);
}

/* Geometric logo is a circle */
.theme-geometric .sidebar-logo-icon {
  border-radius: 9999px;
}

/* Brutalist logo sharp */
.theme-brutalist .sidebar-logo-icon {
  border-radius: 0;
  border: 2px solid var(--t-border);
}

.sidebar-logo-text {
  font-family: var(--t-font-heading);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--t-sidebar-active-text, var(--t-text-heading));
}

.theme-bold .sidebar-logo-text {
  color: #ffffff;
}

.theme-neon .sidebar-logo-text {
  color: #E8ECF1;
}

.theme-geometric .sidebar-logo-text {
  color: #ffffff;
  font-weight: 800;
}

.sidebar-nav {
  flex: 1;
  overflow: hidden;
}

.sidebar-section-label {
  padding: 12px 16px 4px;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--t-sidebar-section);
}

.theme-neon .sidebar-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--t-sidebar-text);
  cursor: pointer;
  transition: all 0.15s ease;
  border-left: 2px solid transparent;
}

/* Brutalist nav is bigger */
.theme-brutalist .sidebar-item {
  font-family: var(--t-font-heading);
  font-size: 0.9375rem;
  font-weight: 700;
  padding: 10px 16px;
}

/* Neon nav monospace */
.theme-neon .sidebar-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

/* Geometric nav */
.theme-geometric .sidebar-item {
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-left: none;
}

.sidebar-item:hover {
  background-color: var(--t-sidebar-hover);
}

.sidebar-item.active {
  background-color: var(--t-sidebar-active-bg);
  color: var(--t-sidebar-active-text);
  border-left-color: var(--t-sidebar-active-border);
}

/* Neon active glow */
.theme-neon .sidebar-item.active {
  text-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
}

/* Brutalist active has asymmetric radius */
.theme-brutalist .sidebar-item.active {
  border-radius: 24px 0 0 0;
  border-left-width: 4px;
}

/* Geometric active is full fill, no left border */
.theme-geometric .sidebar-item.active {
  border-left: none;
  font-weight: 600;
}

.sidebar-icon {
  font-size: 0.5rem;
  opacity: 0.5;
}

.sidebar-item.active .sidebar-icon {
  opacity: 1;
}

/* Mini Content */
.mini-content {
  flex: 1;
  padding: 20px;
  overflow: auto;
  background-color: var(--t-bg);
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

.stat-card {
  padding: 16px;
  border-radius: var(--t-radius-sm);
  background-color: var(--t-bg-elevated);
  border: var(--t-border-width, 1px) solid var(--t-border);
  box-shadow: var(--t-card-shadow);
}

/* Brutalist stat cards have slash shape */
.theme-brutalist .stat-card {
  border-radius: 0 16px 0 16px;
}

/* Neon stat cards with top accent */
.theme-neon .stat-card {
  border-top: 2px solid #242832;
}

.stat-card.accent {
  background-color: var(--t-accent-bg);
  border-color: transparent;
}

/* Geometric accent card is solid black */
.theme-geometric .stat-card.accent {
  background-color: #0A0A0A;
  border: none;
}

.theme-geometric.dark-preview .stat-card.accent {
  background-color: #F5F5F0;
}

/* Neon accent stat card */
.theme-neon .stat-card.accent {
  border-top: 2px solid #00FFEE;
  box-shadow: 0 0 10px rgba(0, 255, 238, 0.05);
}

.stat-label {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--t-text-muted);
  margin-bottom: 4px;
}

.stat-card.accent .stat-label {
  color: var(--t-accent-text);
}

.theme-geometric.dark-preview .stat-card.accent .stat-label {
  color: #0A0A0A;
}

/* Neon stat labels are monospace */
.theme-neon .stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
}

.stat-value {
  font-family: var(--t-font-heading);
  font-size: 1.5rem;
  font-weight: var(--t-heading-xl-weight, 700);
  color: var(--t-stat-value-color);
  letter-spacing: -0.03em;
}

/* Neon stat value glow */
.theme-neon .stat-value {
  text-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
}

/* Brutalist oversized stat values */
.theme-brutalist .stat-value {
  font-size: 1.75rem;
}

/* Geometric oversized stat values */
.theme-geometric .stat-value {
  font-size: 1.75rem;
  font-weight: 800;
}

.stat-card.accent .stat-value {
  color: var(--t-accent-text);
}

.theme-geometric.dark-preview .stat-card.accent .stat-value {
  color: #0A0A0A;
}

/* Mini Table */
.mini-table-wrapper {
  border: var(--t-border-width, 1px) solid var(--t-border);
  border-radius: var(--t-radius-sm);
  overflow: hidden;
}

/* Neon / Geometric table is sharp */
.theme-neon .mini-table-wrapper,
.theme-geometric .mini-table-wrapper {
  border-radius: 0;
}

.mini-table-header {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr;
  padding: 8px 12px;
  background-color: var(--t-table-header-bg);
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--t-table-header-text);
}

/* Neon table header monospace */
.theme-neon .mini-table-header {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
}

/* Geometric table header */
.theme-geometric .mini-table-header {
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 12px 16px;
}

.mini-table-row {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr 1fr;
  padding: 10px 12px;
  font-size: 0.75rem;
  color: var(--t-text);
  border-top: 1px solid var(--t-table-border);
  transition: background-color 0.15s ease;
  align-items: center;
}

/* Brutalist table rows have heavier borders */
.theme-brutalist .mini-table-row {
  border-top: 2px solid var(--t-table-border);
}

.mini-table-row.hover {
  background-color: var(--t-table-hover);
}

/* Sections */
.section {
  margin-top: 32px;
}

.section-heading {
  font-family: var(--t-font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--t-text-heading);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: var(--t-border-width, 1px) solid var(--t-border);
}

/* Brutalist section heading is oversized */
.theme-brutalist .section-heading {
  font-size: 1.5rem;
  font-weight: 700;
}

/* Neon section heading */
.theme-neon .section-heading {
  text-transform: uppercase;
  letter-spacing: -0.01em;
  border-bottom-color: #242832;
}

/* Geometric section heading with colored accent bar */
.theme-geometric .section-heading {
  font-weight: 800;
  font-size: 1.375rem;
  border-bottom: 3px solid #0A0A0A;
  padding-bottom: 12px;
}

.theme-geometric.dark-preview .section-heading {
  border-bottom-color: #F5F5F0;
}

/* Typography Preview */
.type-preview {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.type-sample {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.type-label {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--t-text-caption);
}

.type-heading-xl {
  font-family: var(--t-font-heading);
  font-size: var(--t-heading-xl-size, 1.875rem);
  font-weight: var(--t-heading-xl-weight, 700);
  color: var(--t-text-heading);
  letter-spacing: var(--t-heading-tracking, -0.025em);
}

/* Neon heading glow */
.theme-neon .type-heading-xl {
  text-shadow: 0 0 7px rgba(0, 255, 238, 0.5), 0 0 20px rgba(0, 255, 238, 0.2);
  color: #00FFEE;
  text-transform: uppercase;
}

.type-heading-lg {
  font-family: var(--t-font-heading);
  font-size: var(--t-heading-lg-size, 1.25rem);
  font-weight: 600;
  color: var(--t-text-heading);
  letter-spacing: -0.015em;
}

/* Brutalist / Geometric headings are bolder */
.theme-brutalist .type-heading-lg,
.theme-geometric .type-heading-lg {
  font-weight: 700;
}

.theme-geometric .type-heading-lg {
  font-weight: 800;
}

.type-heading-md {
  font-family: var(--t-font-heading);
  font-size: var(--t-heading-md-size, 1rem);
  font-weight: 600;
  color: var(--t-text-heading);
}

.theme-brutalist .type-heading-md,
.theme-geometric .type-heading-md {
  font-weight: 700;
}

.type-body {
  font-family: var(--t-font-body);
  font-size: var(--t-body-size, 0.875rem);
  font-weight: 400;
  color: var(--t-text);
  line-height: 1.6;
}

.type-caption {
  font-family: var(--t-font-body);
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--t-text-caption);
}

/* Component Groups */
.component-group {
  margin-top: 20px;
}

.component-group-label {
  font-family: var(--t-font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--t-text-muted);
  margin-bottom: 12px;
}

.component-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

/* Brutalist / Geometric need more gap for bigger buttons */
.theme-brutalist .component-row,
.theme-geometric .component-row {
  gap: 12px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--t-btn-padding, 8px 16px);
  font-family: var(--t-font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  border-radius: var(--t-radius-sm);
  border: var(--t-btn-border, 1px solid transparent);
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1;
  box-shadow: var(--t-btn-shadow, none);
}

/* Brutalist buttons use heading font */
.theme-brutalist .btn {
  font-family: var(--t-font-heading);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
}

/* Neon buttons are monospace uppercase */
.theme-neon .btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Geometric buttons are oversized */
.theme-geometric .btn {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 0.75rem;
}

.btn-primary {
  background-color: var(--t-primary);
  color: var(--t-primary-text);
  border-color: var(--t-primary);
  border-radius: var(--t-btn-radius-primary, var(--t-radius-sm));
}

.btn-primary:hover {
  background-color: var(--t-primary-hover);
  border-color: var(--t-primary-hover);
}

/* Neon primary button glow */
.theme-neon .btn-primary {
  box-shadow: 0 0 5px rgba(0, 255, 238, 0.4), 0 0 20px rgba(0, 255, 238, 0.15);
}

/* Brutalist primary has solid shadow */
.theme-brutalist .btn-primary {
  box-shadow: var(--t-btn-shadow);
}

/* Geometric primary button */
.theme-geometric .btn-primary {
  border: none;
}

.btn-secondary {
  background-color: var(--t-secondary-bg);
  color: var(--t-secondary-text);
  border-color: var(--t-secondary-border);
  border-radius: var(--t-btn-radius-secondary, var(--t-radius-sm));
}

/* Brutalist secondary has reversed pill shape */
.theme-brutalist .btn-secondary {
  box-shadow: var(--t-btn-shadow);
}

/* Geometric secondary is outlined sharp rectangle */
.theme-geometric .btn-secondary {
  border: 2px solid var(--t-text-heading);
}

.theme-geometric .btn-secondary:hover {
  background-color: var(--t-text-heading);
  color: var(--t-bg);
}

.btn-ghost {
  background-color: transparent;
  color: var(--t-ghost-text);
  border-radius: var(--t-btn-radius-ghost, var(--t-radius-sm));
}

.btn-ghost:hover {
  background-color: var(--t-ghost-hover);
}

/* Neon ghost with border */
.theme-neon .btn-ghost {
  border: 1px solid #242832;
}

.theme-neon .btn-ghost:hover {
  border-color: #00FFEE;
  box-shadow: 0 0 10px rgba(0, 255, 238, 0.15);
}

.btn-danger {
  background-color: var(--t-danger);
  color: #ffffff;
  border-color: var(--t-danger);
  border-radius: var(--t-btn-radius-danger, var(--t-radius-sm));
}

.btn-danger:hover {
  background-color: var(--t-danger-hover, var(--t-danger));
}

/* Neon danger glow */
.theme-neon .btn-danger {
  box-shadow: 0 0 5px rgba(255, 0, 170, 0.4), 0 0 20px rgba(255, 0, 170, 0.15);
}

/* Brutalist danger has shadow */
.theme-brutalist .btn-danger {
  box-shadow: var(--t-btn-shadow);
}

/* Use heading font for bold theme buttons */
.theme-bold .btn {
  font-family: var(--t-font-heading);
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  font-size: 0.6875rem;
  font-weight: 500;
  border-radius: var(--t-radius-badge);
  line-height: 1.4;
}

/* Brutalist badges have thick border */
.theme-brutalist .badge {
  border: 2px solid var(--t-border);
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.625rem;
}

/* Neon badges with border glow */
.theme-neon .badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.625rem;
}

/* Geometric badges are pill + bold */
.theme-geometric .badge {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 4px 14px;
}

.badge-primary {
  background-color: var(--t-badge-primary-bg);
  color: var(--t-badge-primary-text);
}

/* Neon primary badge border */
.theme-neon .badge-primary {
  border: 1px solid rgba(0, 255, 238, 0.25);
}

.badge-success {
  background-color: var(--t-success-light);
  color: var(--t-success-text);
}

/* Neon success badge border */
.theme-neon .badge-success {
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.badge-warning {
  background-color: var(--t-warning-light);
  color: var(--t-warning-text);
}

/* Neon warning badge border */
.theme-neon .badge-warning {
  border: 1px solid rgba(255, 230, 0, 0.25);
}

.badge-danger {
  background-color: var(--t-danger-light);
  color: var(--t-danger-text);
}

/* Neon danger badge border */
.theme-neon .badge-danger {
  border: 1px solid rgba(255, 0, 170, 0.25);
}

.badge-info {
  background-color: var(--t-info-light);
  color: var(--t-info-text);
}

/* Neon info badge border */
.theme-neon .badge-info {
  border: 1px solid rgba(189, 0, 255, 0.25);
}

.badge-neutral {
  background-color: var(--t-badge-neutral-bg);
  color: var(--t-badge-neutral-text);
}

/* Geometric neutral badge outline */
.theme-geometric .badge-neutral {
  border: 2px solid var(--t-text-heading);
}

/* Use heading font for bold theme badges */
.theme-bold .badge {
  font-family: var(--t-font-heading);
}

/* Forms */
.form-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--t-text);
}

/* Brutalist / Neon / Geometric labels are uppercase mono */
.theme-brutalist .form-label {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
}

.theme-neon .form-label {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.6875rem;
  color: var(--t-text-muted);
}

.theme-geometric .form-label {
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--t-text-muted);
}

.form-input {
  padding: 8px 12px;
  font-family: var(--t-font-body);
  font-size: 0.875rem;
  background-color: var(--t-input-bg);
  border: var(--t-border-width, 1px) solid var(--t-input-border);
  border-radius: var(--t-radius-sm);
  color: var(--t-text);
  outline: none;
  transition: all 0.15s ease;
}

.form-input::placeholder {
  color: var(--t-text-caption);
}

.form-input.focused {
  border-color: var(--t-input-focus);
  box-shadow: 0 0 0 3px var(--t-input-focus-ring);
}

/* Brutalist focused input has offset shadow */
.theme-brutalist .form-input.focused {
  box-shadow: 4px 4px 0 0 var(--t-input-focus-ring);
}

/* Neon focused input glow */
.theme-neon .form-input.focused {
  box-shadow: 0 0 0 1px #00FFEE, 0 0 15px rgba(0, 255, 238, 0.15);
}

/* Neon input caret color */
.theme-neon .form-input {
  caret-color: #00FFEE;
}

/* Geometric focused input -- crisp, no glow */
.theme-geometric .form-input.focused {
  border-color: #003DA5;
  box-shadow: none;
}

/* Geometric input taller */
.theme-geometric .form-input {
  padding: 12px 16px;
  font-size: 1rem;
  border-width: 2px;
}

.form-select {
  padding: 8px 12px;
  font-family: var(--t-font-body);
  font-size: 0.875rem;
  background-color: var(--t-input-bg);
  border: var(--t-border-width, 1px) solid var(--t-input-border);
  border-radius: var(--t-radius-sm);
  color: var(--t-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select-arrow {
  font-size: 0.75rem;
  color: var(--t-text-muted);
}

/* Alerts */
.alerts-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--t-radius-sm);
  border-left: 3px solid;
}

/* Brutalist alerts have thick border + sharp corners */
.theme-brutalist .alert {
  border: 3px solid var(--t-border);
  border-radius: 0 16px 0 16px;
  border-left: 6px solid;
}

/* Neon alerts sharp */
.theme-neon .alert {
  border-radius: 0px;
  background-color: var(--t-bg-muted);
}

/* Geometric alerts sharp with heavy left border */
.theme-geometric .alert {
  border-radius: 0px;
  border-left-width: 4px;
}

.alert-success {
  background-color: var(--t-success-light);
  border-left-color: var(--t-success);
}

.alert-danger {
  background-color: var(--t-danger-light);
  border-left-color: var(--t-danger);
}

.alert-info {
  background-color: var(--t-info-light);
  border-left-color: var(--t-info, var(--t-primary));
}

/* Neon alert glow */
.theme-neon .alert-success {
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.05);
}

.theme-neon .alert-danger {
  box-shadow: 0 0 10px rgba(255, 0, 170, 0.05);
}

.alert-icon {
  font-size: 1rem;
  line-height: 1;
  margin-top: 2px;
}

.alert-success .alert-icon { color: var(--t-success); }
.alert-danger .alert-icon { color: var(--t-danger); }
.alert-info .alert-icon { color: var(--t-info, var(--t-primary)); }

.alert-title {
  font-weight: 600;
  font-size: 0.8125rem;
  color: var(--t-text-heading);
  margin-bottom: 2px;
}

.alert-success .alert-title { color: var(--t-success-text); }
.alert-danger .alert-title { color: var(--t-danger-text); }
.alert-info .alert-title { color: var(--t-info-text); }

.alert-description {
  font-size: 0.8125rem;
  color: var(--t-text-muted);
}

.alert-success .alert-description { color: var(--t-success-text); opacity: 0.8; }
.alert-danger .alert-description { color: var(--t-danger-text); opacity: 0.8; }
.alert-info .alert-description { color: var(--t-info-text); opacity: 0.8; }

/* Cards Preview */
.cards-preview {
  max-width: 400px;
}

.preview-card {
  border: var(--t-card-border, 1px solid var(--t-border));
  border-radius: var(--t-card-radius, var(--t-radius-md));
  overflow: hidden;
  background-color: var(--t-bg-elevated);
  box-shadow: var(--t-card-shadow);
}

.theme-bold .preview-card {
  border-top: 2px solid var(--t-primary);
}

/* Neon card with top accent */
.theme-neon .preview-card {
  border-top: 2px solid #00FFEE;
}

.theme-neon .preview-card:hover {
  border-color: rgba(0, 255, 238, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 238, 0.05);
}

/* Geometric card with blue top accent */
.theme-geometric .preview-card {
  border-top: 4px solid #003DA5;
}

.preview-card-header {
  padding: 16px 20px 0;
}

/* Brutalist card header has bottom border */
.theme-brutalist .preview-card-header {
  padding: 16px 20px;
  border-bottom: 3px solid var(--t-border);
}

.preview-card-body {
  padding: 12px 20px;
}

.preview-card-footer {
  padding: 12px 20px 16px;
  display: flex;
  gap: 8px;
  border-top: 1px solid var(--t-border);
}

/* Brutalist card footer has thicker border */
.theme-brutalist .preview-card-footer {
  border-top: 3px solid var(--t-border);
}

/* Color Swatches */
.palette-groups {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.swatch-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.swatch {
  text-align: center;
}

.swatch-color {
  width: 52px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid var(--t-border);
}

/* Neon swatches have subtle glow */
.theme-neon .swatch-color {
  border-radius: 2px;
}

/* Brutalist swatches are sharp */
.theme-brutalist .swatch-color {
  border-radius: 0;
  border: 2px solid var(--t-border);
}

/* Geometric swatches -- either round or sharp */
.theme-geometric .swatch-color {
  border-radius: 0;
  border: 1px solid var(--t-border);
}

.swatch-label {
  font-size: 0.5625rem;
  font-weight: 500;
  color: var(--t-text-muted);
  margin-top: 4px;
  white-space: nowrap;
}

.swatch-hex {
  font-size: 0.5rem;
  color: var(--t-text-caption);
  font-family: monospace;
}

/* Config Code */
.config-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 0;
}

.config-tab {
  padding: 8px 16px;
  font-family: var(--t-font-body);
  font-size: 0.75rem;
  font-weight: 500;
  background-color: var(--t-bg-muted);
  color: var(--t-text-muted);
  border: 1px solid var(--t-border);
  border-bottom: none;
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: var(--t-radius-sm) var(--t-radius-sm) 0 0;
}

.config-tab.active {
  background-color: var(--t-bg-elevated);
  color: var(--t-text-heading);
  border-bottom-color: var(--t-bg-elevated);
}

.config-code {
  background-color: var(--t-bg-elevated);
  border: 1px solid var(--t-border);
  border-radius: 0 var(--t-radius-sm) var(--t-radius-sm) var(--t-radius-sm);
  padding: 16px 20px;
  overflow-x: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--t-text);
  margin: 0;
}

/* Font Info */
.font-info {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.font-pair {
  flex: 1;
  min-width: 200px;
  padding: 16px;
  background-color: var(--t-bg-elevated);
  border: var(--t-border-width, 1px) solid var(--t-border);
  border-radius: var(--t-radius-sm);
}

/* Brutalist font pair cards have slash shape */
.theme-brutalist .font-pair {
  border-radius: 0 16px 0 16px;
  box-shadow: var(--t-card-shadow);
}

/* Neon font pair cards */
.theme-neon .font-pair {
  border-radius: 0;
}

/* Geometric font pair cards */
.theme-geometric .font-pair {
  border-radius: 0;
}

.font-pair-label {
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--t-text-caption);
  margin-bottom: 4px;
}

.font-pair-name {
  font-size: 1.5rem;
  color: var(--t-text-heading);
  margin-bottom: 4px;
}

.font-pair-desc {
  font-size: 0.75rem;
  color: var(--t-text-muted);
}

/* ===== REFINED BRUTALIST OVERRIDES ===== */
.theme-refined .mini-sidebar {
  background-color: var(--t-sidebar-bg);
}

.theme-refined .layout-preview {
  border-radius: 0 24px 0 24px;
}

.theme-refined .stat-card {
  border-radius: 0 16px 0 16px;
}

.theme-refined .btn {
  font-family: var(--t-font-heading);
  font-weight: 500;
}

.theme-refined .btn-primary {
  box-shadow: var(--t-btn-shadow);
}

.theme-refined .btn-secondary {
  box-shadow: var(--t-btn-shadow);
}

.theme-refined .btn-danger {
  box-shadow: 3px 3px 0 0 #c4818b;
}

.theme-refined.dark-preview .btn-danger {
  box-shadow: 3px 3px 0 0 #8c4a54;
}

.theme-refined .badge {
  border: 2px solid var(--t-border);
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.625rem;
}

.theme-refined .form-label {
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  font-weight: 500;
}

.theme-refined .form-input.focused {
  box-shadow: 3px 3px 0 0 var(--t-input-focus-ring);
}

.theme-refined .sidebar-item {
  font-family: var(--t-font-heading);
  font-size: 1.0625rem;
  font-weight: 500;
  padding: 10px 16px;
}

.theme-refined .sidebar-item.active {
  border-radius: 24px 0 0 0;
  border-left-width: 3px;
}

.theme-refined .sidebar-logo-icon {
  border-radius: 0;
  border: 2px solid var(--t-border);
}

.theme-refined .section-heading {
  font-size: 1.5rem;
  font-weight: 700;
}

.theme-refined .mini-table-wrapper {
  border-radius: 0;
}

.theme-refined .mini-table-row {
  border-top: 1px solid var(--t-table-border);
}

.theme-refined .alert {
  border: 2px solid var(--t-border);
  border-radius: 0 16px 0 16px;
  border-left: 4px solid;
}

.theme-refined .font-pair {
  border-radius: 0 16px 0 16px;
  box-shadow: var(--t-card-shadow);
}

/* ===== NEON AMBER OVERRIDES ===== */
.theme-neonAmber .mini-sidebar {
  background-color: var(--t-sidebar-bg);
  background-image: radial-gradient(circle, rgba(255, 184, 0, 0.03) 1px, transparent 1px);
  background-size: 16px 16px;
}

.theme-neonAmber.dark-preview .mini-sidebar {
  background-image: none;
}

.theme-neonAmber .sidebar-logo-icon {
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(255, 184, 0, 0.4);
}

.theme-neonAmber.dark-preview .sidebar-logo-icon {
  box-shadow: none;
}

.theme-neonAmber .sidebar-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

.theme-neonAmber .sidebar-item.active {
  text-shadow: 0 0 10px rgba(255, 184, 0, 0.3);
}

.theme-neonAmber.dark-preview .sidebar-item.active {
  text-shadow: none;
}

.theme-neonAmber .sidebar-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.theme-neonAmber .btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.theme-neonAmber .btn-primary {
  box-shadow: 0 0 5px rgba(255, 184, 0, 0.4), 0 0 20px rgba(255, 184, 0, 0.15);
}

.theme-neonAmber.dark-preview .btn-primary {
  box-shadow: none;
}

.theme-neonAmber .btn-danger {
  box-shadow: 0 0 5px rgba(255, 107, 0, 0.4), 0 0 20px rgba(255, 107, 0, 0.15);
}

.theme-neonAmber.dark-preview .btn-danger {
  box-shadow: none;
}

.theme-neonAmber .btn-ghost {
  border: 1px solid var(--t-border);
}

.theme-neonAmber .badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.625rem;
}

.theme-neonAmber .badge-primary {
  border: 1px solid rgba(255, 184, 0, 0.25);
}

.theme-neonAmber .badge-success {
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.theme-neonAmber .badge-warning {
  border: 1px solid rgba(255, 224, 102, 0.25);
}

.theme-neonAmber .badge-danger {
  border: 1px solid rgba(255, 107, 0, 0.25);
}

.theme-neonAmber .badge-info {
  border: 1px solid rgba(232, 120, 42, 0.25);
}

.theme-neonAmber .stat-card {
  border-top: 2px solid var(--t-border);
}

.theme-neonAmber .stat-card.accent {
  border-top: 2px solid #FFB800;
  box-shadow: 0 0 10px rgba(255, 184, 0, 0.05);
}

.theme-neonAmber.dark-preview .stat-card.accent {
  border-top: 2px solid #B07800;
  box-shadow: none;
}

.theme-neonAmber .stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
}

.theme-neonAmber .stat-value {
  text-shadow: 0 0 10px rgba(255, 184, 0, 0.3);
}

.theme-neonAmber.dark-preview .stat-value {
  text-shadow: none;
}

.theme-neonAmber .mini-table-header {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
}

.theme-neonAmber .mini-table-wrapper {
  border-radius: 0;
}

.theme-neonAmber .section-heading {
  text-transform: uppercase;
  letter-spacing: -0.01em;
  border-bottom-color: var(--t-border);
}

.theme-neonAmber .form-label {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.6875rem;
  color: var(--t-text-muted);
}

.theme-neonAmber .form-input {
  caret-color: #FFB800;
}

.theme-neonAmber .form-input.focused {
  box-shadow: 0 0 0 1px #FFB800, 0 0 15px rgba(255, 184, 0, 0.15);
}

.theme-neonAmber.dark-preview .form-input.focused {
  box-shadow: 0 0 0 1px #B07800;
}

.theme-neonAmber .alert {
  border-radius: 0px;
  background-color: var(--t-bg-muted);
}

.theme-neonAmber .alert-success {
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.05);
}

.theme-neonAmber .alert-danger {
  box-shadow: 0 0 10px rgba(255, 107, 0, 0.05);
}

.theme-neonAmber .preview-card {
  border-top: 2px solid #FFB800;
}

.theme-neonAmber.dark-preview .preview-card {
  border-top: 2px solid #B07800;
}

.theme-neonAmber .theme-mode-badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.6875rem;
  border: 1px solid rgba(255, 184, 0, 0.25);
}

.theme-neonAmber.dark-preview .theme-mode-badge {
  border-color: var(--t-border);
}

.theme-neonAmber .font-pair {
  border-radius: 0;
}

.theme-neonAmber .swatch-color {
  border-radius: 2px;
}

.theme-neonAmber .type-heading-xl {
  text-shadow: 0 0 7px rgba(255, 184, 0, 0.5), 0 0 20px rgba(255, 184, 0, 0.2);
  color: #FFB800;
  text-transform: uppercase;
}

.theme-neonAmber.dark-preview .type-heading-xl {
  text-shadow: none;
  color: #B07800;
}

/* ===== NEON VIOLET OVERRIDES ===== */
.theme-neonViolet .mini-sidebar {
  background-color: var(--t-sidebar-bg);
  background-image: radial-gradient(circle, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 16px 16px;
}

.theme-neonViolet.dark-preview .mini-sidebar {
  background-image: none;
  background-color: var(--t-sidebar-bg);
}

.theme-neonViolet .sidebar-logo-icon {
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
}

.theme-neonViolet.dark-preview .sidebar-logo-icon {
  box-shadow: none;
}

.theme-neonViolet .sidebar-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

.theme-neonViolet .sidebar-item.active {
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
}

.theme-neonViolet.dark-preview .sidebar-item.active {
  text-shadow: none;
}

.theme-neonViolet .sidebar-section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.theme-neonViolet .btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.theme-neonViolet .btn-primary {
  box-shadow: 0 0 5px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.15);
}

.theme-neonViolet.dark-preview .btn-primary {
  box-shadow: none;
}

.theme-neonViolet .btn-danger {
  box-shadow: 0 0 5px rgba(244, 114, 182, 0.4), 0 0 20px rgba(244, 114, 182, 0.15);
}

.theme-neonViolet.dark-preview .btn-danger {
  box-shadow: none;
}

.theme-neonViolet .btn-ghost {
  border: 1px solid var(--t-border);
}

.theme-neonViolet .badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.625rem;
}

.theme-neonViolet .badge-primary {
  border: 1px solid rgba(168, 85, 247, 0.25);
}

.theme-neonViolet .badge-success {
  border: 1px solid rgba(52, 211, 153, 0.25);
}

.theme-neonViolet .badge-warning {
  border: 1px solid rgba(251, 191, 36, 0.25);
}

.theme-neonViolet .badge-danger {
  border: 1px solid rgba(244, 114, 182, 0.25);
}

.theme-neonViolet .badge-info {
  border: 1px solid rgba(96, 165, 250, 0.25);
}

.theme-neonViolet .stat-card {
  border-top: 2px solid var(--t-border);
}

.theme-neonViolet .stat-card.accent {
  border-top: 2px solid #A855F7;
  box-shadow: 0 0 10px rgba(168, 85, 247, 0.05);
}

.theme-neonViolet.dark-preview .stat-card.accent {
  border-top: 2px solid #7C3AED;
  box-shadow: none;
}

.theme-neonViolet .stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  letter-spacing: 0.08em;
}

.theme-neonViolet .stat-value {
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
}

.theme-neonViolet.dark-preview .stat-value {
  text-shadow: none;
}

.theme-neonViolet .mini-table-header {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.08em;
}

.theme-neonViolet .mini-table-wrapper {
  border-radius: 0;
}

.theme-neonViolet .section-heading {
  text-transform: uppercase;
  letter-spacing: -0.01em;
  border-bottom-color: var(--t-border);
}

.theme-neonViolet .form-label {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.6875rem;
  color: var(--t-text-muted);
}

.theme-neonViolet .form-input {
  caret-color: #A855F7;
}

.theme-neonViolet .form-input.focused {
  box-shadow: 0 0 0 1px #A855F7, 0 0 15px rgba(168, 85, 247, 0.15);
}

.theme-neonViolet.dark-preview .form-input.focused {
  box-shadow: 0 0 0 1px #7C3AED;
}

.theme-neonViolet .alert {
  border-radius: 0px;
  background-color: var(--t-bg-muted);
}

.theme-neonViolet .preview-card {
  border-top: 2px solid #A855F7;
}

.theme-neonViolet.dark-preview .preview-card {
  border-top: 2px solid #7C3AED;
}

.theme-neonViolet .theme-mode-badge {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.6875rem;
  border: 1px solid rgba(168, 85, 247, 0.25);
}

.theme-neonViolet.dark-preview .theme-mode-badge {
  border-color: var(--t-border);
}

.theme-neonViolet .font-pair {
  border-radius: 0;
}

.theme-neonViolet .swatch-color {
  border-radius: 2px;
}

.theme-neonViolet .type-heading-xl {
  text-shadow: 0 0 7px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.2);
  color: #A855F7;
  text-transform: uppercase;
}

.theme-neonViolet.dark-preview .type-heading-xl {
  text-shadow: none;
  color: #7C3AED;
}

/* ===== GRADIENT FLOW OVERRIDES ===== */
.theme-gradient .mini-sidebar {
  background: linear-gradient(180deg, #4f46e5, #8b5cf6);
}

.theme-gradient.dark-preview .mini-sidebar {
  background: linear-gradient(180deg, #3730a3, #6d28d9);
}

.theme-gradient .sidebar-logo-text {
  color: #ffffff;
}

.theme-gradient .sidebar-logo {
  border-bottom-color: rgba(255,255,255,0.1);
}

.theme-gradient .sidebar-logo-icon {
  border-radius: 8px;
}

.theme-gradient .btn-primary {
  background: linear-gradient(135deg, #4f46e5, #8b5cf6);
  border-color: transparent;
}

.theme-gradient .btn-primary:hover {
  background: linear-gradient(135deg, #4338ca, #7c3aed);
}

.theme-gradient.dark-preview .btn-primary {
  background: linear-gradient(135deg, #3730a3, #6d28d9);
}

.theme-gradient .btn-danger {
  background: linear-gradient(135deg, #e11d48, #f97316);
  border-color: transparent;
}

.theme-gradient .mini-table-header {
  background: linear-gradient(90deg, #4f46e5, #8b5cf6);
  color: #ffffff;
}

.theme-gradient.dark-preview .mini-table-header {
  background: linear-gradient(90deg, #3730a3, #6d28d9);
}

.theme-gradient .stat-card.accent {
  background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08));
}

.theme-gradient.dark-preview .stat-card.accent {
  background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15));
}

.theme-gradient .preview-card {
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #4f46e5, #8b5cf6) 1;
}

.theme-gradient .badge-primary {
  background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.12));
}

.theme-gradient .badge-success {
  background: linear-gradient(135deg, rgba(5,150,105,0.12), rgba(16,185,129,0.12));
}

.theme-gradient .badge-info {
  background: linear-gradient(135deg, rgba(13,148,136,0.12), rgba(6,182,212,0.12));
}

.theme-gradient .type-heading-xl {
  background: linear-gradient(135deg, #6366f1, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-gradient.dark-preview .type-heading-xl {
  background: linear-gradient(135deg, #818cf8, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-gradient .form-input.focused {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

/* ===== GLASS BACKGROUND SWITCHER THUMBNAILS ===== */
.glass-bg-thumb {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.glass-bg-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.glass-bg-thumb-active {
  border-color: var(--ui-primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.25);
  transform: scale(1.1);
}

/* ===== LIQUID GLASS OVERRIDES ===== */

/* --- Mesh (default) --- */
.theme-glass.glass-bg-mesh .theme-preview-wrapper {
  background-color: #EEF0F5;
  background-image:
    radial-gradient(ellipse at 20% 0%, rgba(0, 122, 255, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(175, 82, 222, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(90, 200, 250, 0.03) 0%, transparent 70%);
}

.theme-glass.glass-bg-mesh.dark-preview .theme-preview-wrapper {
  background-color: #0A0A0F;
  background-image:
    radial-gradient(ellipse at 15% 10%, rgba(10, 132, 255, 0.08) 0%, transparent 45%),
    radial-gradient(ellipse at 85% 90%, rgba(175, 82, 222, 0.06) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 50%, rgba(90, 200, 250, 0.03) 0%, transparent 60%);
}

/* --- Aurora --- */
.theme-glass.glass-bg-aurora .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 10% 80%, rgba(16, 185, 129, 0.7) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 10%, rgba(56, 189, 248, 0.6) 0%, transparent 45%),
    radial-gradient(ellipse at 80% 60%, rgba(139, 92, 246, 0.65) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 40%, rgba(52, 211, 153, 0.5) 0%, transparent 40%),
    linear-gradient(170deg, #064e3b 0%, #0c4a6e 30%, #3b0764 60%, #065f46 100%);
}

.theme-glass.glass-bg-aurora.dark-preview .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 10% 80%, rgba(16, 185, 129, 0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 10%, rgba(56, 189, 248, 0.35) 0%, transparent 45%),
    radial-gradient(ellipse at 80% 60%, rgba(139, 92, 246, 0.45) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 40%, rgba(52, 211, 153, 0.3) 0%, transparent 40%),
    linear-gradient(170deg, #022c22 0%, #082f49 30%, #1e0533 60%, #022c22 100%);
}

/* --- Sunset --- */
.theme-glass.glass-bg-sunset .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 20% 20%, rgba(251, 146, 60, 0.7) 0%, transparent 45%),
    radial-gradient(ellipse at 70% 30%, rgba(244, 114, 182, 0.65) 0%, transparent 50%),
    radial-gradient(ellipse at 40% 80%, rgba(192, 38, 211, 0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 90% 80%, rgba(124, 58, 237, 0.4) 0%, transparent 45%),
    linear-gradient(145deg, #ea580c 0%, #db2777 35%, #7c3aed 65%, #4c1d95 100%);
}

.theme-glass.glass-bg-sunset.dark-preview .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 20% 20%, rgba(251, 146, 60, 0.45) 0%, transparent 45%),
    radial-gradient(ellipse at 70% 30%, rgba(244, 114, 182, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 40% 80%, rgba(192, 38, 211, 0.35) 0%, transparent 50%),
    radial-gradient(ellipse at 90% 80%, rgba(124, 58, 237, 0.3) 0%, transparent 45%),
    linear-gradient(145deg, #7c2d12 0%, #831843 35%, #4c1d95 65%, #1e1b4b 100%);
}

/* --- Ocean --- */
.theme-glass.glass-bg-ocean .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 15% 15%, rgba(6, 182, 212, 0.6) 0%, transparent 45%),
    radial-gradient(ellipse at 75% 50%, rgba(20, 184, 166, 0.5) 0%, transparent 45%),
    radial-gradient(ellipse at 40% 90%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 10%, rgba(34, 211, 238, 0.35) 0%, transparent 40%),
    linear-gradient(160deg, #0c4a6e 0%, #0d6986 25%, #115e59 50%, #164e63 75%, #0c4a6e 100%);
}

.theme-glass.glass-bg-ocean.dark-preview .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 15% 15%, rgba(6, 182, 212, 0.35) 0%, transparent 45%),
    radial-gradient(ellipse at 75% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 45%),
    radial-gradient(ellipse at 40% 90%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 10%, rgba(34, 211, 238, 0.2) 0%, transparent 40%),
    linear-gradient(160deg, #042f2e 0%, #083344 25%, #052e16 50%, #0c4a6e 75%, #042f2e 100%);
}

/* --- Cosmic --- */
.theme-glass.glass-bg-cosmic .theme-preview-wrapper {
  background:
    radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.7) 0%, transparent 35%),
    radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.5) 0%, transparent 35%),
    radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 15% 70%, rgba(6, 182, 212, 0.35) 0%, transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
    linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 70%, #0f0c29 100%);
}

.theme-glass.glass-bg-cosmic.dark-preview .theme-preview-wrapper {
  background:
    radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.5) 0%, transparent 35%),
    radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.35) 0%, transparent 35%),
    radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 30%),
    radial-gradient(circle at 15% 70%, rgba(6, 182, 212, 0.2) 0%, transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, #07051a 0%, #1a1640 40%, #131127 70%, #07051a 100%);
}

/* --- Abstract --- */
.theme-glass.glass-bg-abstract .theme-preview-wrapper {
  background:
    linear-gradient(135deg, rgba(214, 40, 40, 0.8) 0%, rgba(214, 40, 40, 0.8) 18%, transparent 18%),
    linear-gradient(225deg, rgba(0, 61, 165, 0.75) 0%, rgba(0, 61, 165, 0.75) 22%, transparent 22%),
    linear-gradient(315deg, rgba(245, 183, 0, 0.7) 0%, rgba(245, 183, 0, 0.7) 20%, transparent 20%),
    radial-gradient(ellipse at 50% 50%, rgba(245, 183, 0, 0.5) 0%, transparent 60%),
    radial-gradient(ellipse at 30% 60%, rgba(214, 40, 40, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 40%, rgba(0, 61, 165, 0.45) 0%, transparent 50%),
    linear-gradient(180deg, #f0ebe3 0%, #ece6da 100%);
}

.theme-glass.glass-bg-abstract.dark-preview .theme-preview-wrapper {
  background:
    linear-gradient(135deg, rgba(214, 40, 40, 0.55) 0%, rgba(214, 40, 40, 0.55) 18%, transparent 18%),
    linear-gradient(225deg, rgba(0, 61, 165, 0.5) 0%, rgba(0, 61, 165, 0.5) 22%, transparent 22%),
    linear-gradient(315deg, rgba(245, 183, 0, 0.45) 0%, rgba(245, 183, 0, 0.45) 20%, transparent 20%),
    radial-gradient(ellipse at 50% 50%, rgba(245, 183, 0, 0.25) 0%, transparent 60%),
    radial-gradient(ellipse at 30% 60%, rgba(214, 40, 40, 0.2) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 40%, rgba(0, 61, 165, 0.25) 0%, transparent 50%),
    linear-gradient(180deg, #1a1a1a 0%, #111111 100%);
}

/* --- Energis Orange --- */
.theme-glass.glass-bg-energis .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 20% 15%, rgba(249, 201, 124, 0.85) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 25%, rgba(242, 166, 90, 0.7) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 75%, rgba(232, 137, 92, 0.6) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 80%, rgba(255, 183, 107, 0.5) 0%, transparent 40%),
    radial-gradient(ellipse at 15% 60%, rgba(252, 211, 149, 0.45) 0%, transparent 45%),
    linear-gradient(155deg, #F9C97C 0%, #F2A65A 30%, #E8895C 55%, #F5B574 80%, #FCD395 100%);
}

.theme-glass.glass-bg-energis.dark-preview .theme-preview-wrapper {
  background:
    radial-gradient(ellipse at 20% 15%, rgba(249, 201, 124, 0.35) 0%, transparent 50%),
    radial-gradient(ellipse at 75% 25%, rgba(242, 166, 90, 0.28) 0%, transparent 45%),
    radial-gradient(ellipse at 50% 75%, rgba(232, 137, 92, 0.22) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 80%, rgba(255, 183, 107, 0.18) 0%, transparent 40%),
    radial-gradient(ellipse at 15% 60%, rgba(252, 211, 149, 0.15) 0%, transparent 45%),
    linear-gradient(155deg, #2a1a08 0%, #1f1408 30%, #1a0f08 55%, #1c1208 80%, #211808 100%);
}

.theme-glass .mini-sidebar {
  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}

.theme-glass.dark-preview .mini-sidebar {
  background: rgba(28, 28, 30, 0.55);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}

.theme-glass .sidebar-logo {
  border-bottom-color: rgba(209, 213, 219, 0.35);
}

.theme-glass.dark-preview .sidebar-logo {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}

.theme-glass .sidebar-logo-icon {
  border-radius: 8px;
}

.theme-glass .stat-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5);
}

.theme-glass.dark-preview .stat-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06);
}

.theme-glass .preview-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5);
}

.theme-glass.dark-preview .preview-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06);
}

.theme-glass .layout-preview {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.45);
}

.theme-glass.dark-preview .layout-preview {
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.theme-glass .alert {
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-radius: 10px;
}

.theme-glass .form-input {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.theme-glass .form-select {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.6);
}

.theme-glass.dark-preview .form-select {
  background: rgba(28, 28, 30, 0.55);
}

.theme-glass .font-pair {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}

.theme-glass .theme-mode-badge {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>
