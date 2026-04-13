<script setup lang="ts">
const collapsed = inject<Ref<boolean>>('sidebar-collapsed')
</script>

<template>
  <UButton
    v-if="collapsed !== undefined"
    :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'"
    color="neutral"
    variant="ghost"
    size="xs"
    class="hidden lg:inline-flex shrink-0 -ml-2"
    @click="collapsed = !collapsed"
  />
</template>
