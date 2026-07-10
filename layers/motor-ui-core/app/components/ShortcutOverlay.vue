<script setup lang="ts">
const { groups, isOverlayVisible } = useShortcutRegistry()
const { t } = useI18n()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOverlayVisible && groups.length > 0"
        class="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      >
        <!-- Backdrop (click-transparent so Cmd+Click interactions work beneath) -->
        <div class="absolute inset-0 bg-[var(--ui-bg)]/60 backdrop-blur-sm pointer-events-none" />

        <!-- Panel -->
        <div class="relative w-full max-w-lg mx-4 rounded-xl border border-[var(--ui-border)] bg-[var(--ui-bg)] shadow-2xl pointer-events-none">
          <!-- Header -->
          <div class="flex items-center gap-2 px-5 py-3 border-b border-[var(--ui-border)]">
            <UIcon
              name="i-lucide-keyboard"
              class="size-5 text-[var(--ui-text-muted)]"
            />
            <h3 class="text-sm font-semibold">
              {{ t('motor-core.shortcuts.title') }}
            </h3>
            <span class="ml-auto inline-flex items-center gap-1 text-xs text-[var(--ui-text-dimmed)]">
              {{ t('motor-core.shortcuts.hold_hint') }}
              <UKbd
                value="alt"
                size="sm"
              />
            </span>
          </div>

          <!-- Groups -->
          <div class="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            <div
              v-for="group in groups"
              :key="group.id"
            >
              <div class="flex items-center gap-2 mb-2">
                <UIcon
                  v-if="group.icon"
                  :name="group.icon"
                  class="size-4 text-[var(--ui-text-muted)]"
                />
                <span class="text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-muted)]">
                  {{ group.label }}
                </span>
              </div>
              <div class="space-y-1">
                <div
                  v-for="(shortcut, idx) in group.shortcuts"
                  :key="idx"
                  class="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-[var(--ui-bg-elevated)]"
                >
                  <div class="flex items-center gap-2">
                    <UIcon
                      v-if="shortcut.icon"
                      :name="shortcut.icon"
                      class="size-4 text-[var(--ui-text-muted)]"
                    />
                    <span class="text-sm">{{ shortcut.label }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <UKbd
                      v-for="(key, ki) in shortcut.keys"
                      :key="ki"
                      :value="key"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
