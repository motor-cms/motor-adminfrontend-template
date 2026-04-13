<script setup lang="ts">
import { de, en } from '@nuxt/ui/locale'

const { locale } = useI18n()

const uiLocale = computed(() => locale.value === 'de' ? de : en)

const loading = ref(true)

onMounted(async () => {
  await nextTick()
  loading.value = false
})
</script>

<template>
  <UApp :locale="uiLocale" :toaster="{ position: 'bottom-right' }">
    <Transition name="loader-fade">
      <div
        v-if="loading"
        class="motor-loading-overlay"
      >
        <MotorLoader size="lg" />
      </div>
    </Transition>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style scoped>
.motor-loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafaff;
}

:root.dark .motor-loading-overlay {
  background: #0E0E12;
}

.loader-fade-leave-active {
  transition: opacity 0.3s ease;
}

.loader-fade-leave-to {
  opacity: 0;
}
</style>
