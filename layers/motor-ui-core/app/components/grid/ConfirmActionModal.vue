<!-- app/components/grid/ConfirmActionModal.vue -->
<script setup lang="ts">
const open = defineModel<boolean>('open', { required: true })

defineProps<{
  message: string
  warning?: string
  color?: string
  loading?: boolean
}>()

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()

const { t } = useI18n()
</script>

<template>
  <UModal
    v-model:open="open"
    :title="t('motor-core.grid.confirm_action')"
    :description="message"
  >
    <template
      v-if="warning"
      #body
    >
      <p class="font-semibold">
        {{ warning }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-3">
        <UButton
          color="neutral"
          variant="outline"
          @click="emit('cancel')"
        >
          {{ t('motor-core.grid.cancel') }}
        </UButton>
        <UButton
          :color="(color as any) ?? 'primary'"
          :loading="loading"
          @click="emit('confirm')"
        >
          {{ t('motor-core.grid.confirm') }}
        </UButton>
      </div>
    </template>
  </UModal>
</template>
