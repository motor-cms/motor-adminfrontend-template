<script setup lang="ts">
defineProps<{ to?: string, label?: string }>()
</script>

<template>
  <UButton
    :to="to"
    color="neutral"
    variant="ghost"
    size="sm"
    icon="i-lucide-arrow-left"
    class="mb-2 -ml-2"
  >
    {{ label }}
  </UButton>
</template>
