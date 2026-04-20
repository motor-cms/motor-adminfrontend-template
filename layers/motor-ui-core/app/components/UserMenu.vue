<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { User } from '../types/auth'
import { de, en } from '@nuxt/ui/locale'

defineProps<{
  collapsed?: boolean
}>()

const { user, logout } = useSanctumAuth<User>()
const colorMode = useColorMode()
const { themeName, glassBg, isLiquidGlass, setTheme, setGlassBg } = useTheme()
const { t, locale, setLocale } = useI18n()
const appSettings = useAppSettingsStore()
const { settingsOpen } = useDashboard()

// Theme picker is hidden by default so customers don't see WIP themes.
// Devs can flip NUXT_PUBLIC_SHOW_THEME_PICKER=true to expose it.
const runtimeConfig = useRuntimeConfig()
const showThemePicker = computed(() => Boolean(runtimeConfig.public.showThemePicker))

function changeLocale(code: 'de' | 'en') {
  setLocale(code)
  appSettings.locale = code
}

const toasterPositionItems = computed(() => [
  { value: 'top-left', label: g('toaster_position_top_left') },
  { value: 'top-center', label: g('toaster_position_top_center') },
  { value: 'top-right', label: g('toaster_position_top_right') },
  { value: 'bottom-left', label: g('toaster_position_bottom_left') },
  { value: 'bottom-center', label: g('toaster_position_bottom_center') },
  { value: 'bottom-right', label: g('toaster_position_bottom_right') }
])

const formLayoutItems = computed(() => [
  { value: 'comfortable', label: g('form_layout_comfortable') },
  { value: 'compact', label: g('form_layout_compact') }
])

// Helper to access user data
const userData = computed(() => user.value?.data)

// Get avatar URL, preferring thumb conversion if available
const avatarUrl = computed(() => {
  const avatar = userData.value?.avatar
  if (!avatar) return undefined
  // Handle conversions as object (e.g., { thumb: { url: '...' } }) or array
  const conversions = avatar.conversions
  if (conversions && typeof conversions === 'object' && !Array.isArray(conversions)) {
    return (conversions as Record<string, { url: string }>).thumb?.url ?? avatar.url
  }
  if (Array.isArray(conversions)) {
    const thumbConversion = conversions.find(c => c.name === 'thumb')
    return thumbConversion?.url ?? avatar.url
  }
  return avatar.url
})

const g = (key: string) => t(`motor-core.global.${key}`)

const items = computed<DropdownMenuItem[][]>(() => [
  [{
    label: userData.value?.email || 'User',
    slot: 'account',
    disabled: true
  }],
  [{
    label: g('profile'),
    icon: 'i-lucide-user',
    to: '/profile'
  }, {
    label: g('settings'),
    icon: 'i-lucide-settings',
    onSelect: () => { settingsOpen.value = true }
  }],
  [{
    label: g('appearance'),
    icon: colorMode.value === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun',
    children: [
      {
        label: g('light'),
        icon: 'i-lucide-sun',
        type: 'checkbox',
        checked: colorMode.preference === 'light',
        onUpdateChecked() {
          colorMode.preference = 'light'
        }
      },
      {
        label: g('dark'),
        icon: 'i-lucide-moon',
        type: 'checkbox',
        checked: colorMode.preference === 'dark',
        onUpdateChecked() {
          colorMode.preference = 'dark'
        }
      },
      {
        label: g('system'),
        icon: 'i-lucide-monitor',
        type: 'checkbox',
        checked: colorMode.preference === 'system',
        onUpdateChecked() {
          colorMode.preference = 'system'
        }
      }
    ]
  }],
  ...(showThemePicker.value
    ? [[{
        label: g('theme'),
        icon: isLiquidGlass.value ? 'i-lucide-gem' : 'i-lucide-palette',
        children: [
          {
            label: g('default'),
            icon: 'i-lucide-palette',
            type: 'checkbox' as const,
            checked: themeName.value === 'default',
            onUpdateChecked() {
              setTheme('default')
            }
          },
          {
            label: g('theme_liquid_glass'),
            icon: 'i-lucide-gem',
            type: 'checkbox' as const,
            checked: themeName.value === 'liquid-glass',
            onUpdateChecked() {
              setTheme('liquid-glass')
            }
          }
        ]
      },
      ...(isLiquidGlass.value
        ? [{
            label: g('background'),
            icon: 'i-lucide-image',
            children: glassBgOptions.map(opt => ({
              label: opt.label,
              icon: opt.icon,
              type: 'checkbox' as const,
              checked: glassBg.value === opt.key,
              onUpdateChecked() {
                setGlassBg(opt.key)
              }
            }))
          }]
        : [])]]
    : []),
  [{
    label: g('log_out'),
    icon: 'i-lucide-log-out',
    onSelect: () => logout()
  }]
])
</script>

<template>
  <UDropdownMenu
    :items="items"
    :ui="{ content: 'w-48' }"
  >
    <UButton
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      :label="collapsed ? undefined : (userData?.name || userData?.email || 'User')"
      :class="collapsed ? undefined : 'justify-start'"
    >
      <template #leading>
        <UAvatar
          :src="avatarUrl"
          :alt="userData?.name || userData?.email || 'User'"
          size="xs"
        />
      </template>
      <template
        v-if="!collapsed"
        #trailing
      >
        <UIcon
          name="i-lucide-chevrons-up-down"
          class="size-4 text-muted"
        />
      </template>
    </UButton>

    <template #account>
      <div class="flex items-center gap-2">
        <UAvatar
          :src="avatarUrl"
          :alt="userData?.name || userData?.email || 'User'"
          size="xs"
        />
        <div class="flex flex-col">
          <span class="text-sm font-medium truncate">{{ userData?.name || 'User' }}</span>
          <span class="text-xs text-muted truncate">{{ userData?.email }}</span>
        </div>
      </div>
    </template>
  </UDropdownMenu>

  <USlideover
    v-model:open="settingsOpen"
    :title="g('settings')"
    :description="g('settings_description')"
  >
    <template #body>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-default">{{ g('language') }}</label>
          <ULocaleSelect
            :model-value="locale"
            :locales="[de, en]"
            class="w-full"
            @update:model-value="changeLocale($event as 'de' | 'en')"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-default">{{ g('toaster_position') }}</label>
          <USelectMenu
            v-model="appSettings.toasterPosition"
            :items="toasterPositionItems"
            value-key="value"
            :search-input="false"
            class="w-full"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-default">{{ g('form_layout') }}</label>
          <USelectMenu
            v-model="appSettings.formLayout"
            :items="formLayoutItems"
            value-key="value"
            :search-input="false"
            class="w-full"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <UButton
          color="neutral"
          variant="outline"
          size="sm"
          @click="settingsOpen = false"
        >
          {{ g('close') }}
        </UButton>
      </div>
    </template>
  </USlideover>
</template>
