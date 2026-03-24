<!-- app/pages/motor-admin/index.vue -->
<script setup lang="ts">
definePageMeta({ permission: 'administration.read' })
</script>

<template>
  <SectionLanding
    section-prefix="motor-admin"
    title-key="motor-core.global.administration"
    subtitle-key="motor-core.global.section_subtitle"
  />
</template>
