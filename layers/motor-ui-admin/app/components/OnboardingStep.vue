<script setup lang="ts">
import type { StepEntity } from 'v-onboarding'

const { t } = useI18n()

defineProps<{
  step: StepEntity | undefined
  isFirst: boolean
  isLast: boolean
  next: () => void
  previous: () => void
  skip: () => void
}>()
</script>

<template>
  <VOnboardingStep>
    <div class="v-onboarding-item">
      <div class="v-onboarding-item__header">
        <span v-if="step?.content?.title" class="v-onboarding-item__header-title">
          {{ step.content.title }}
        </span>
        <button type="button" class="v-onboarding-item__header-close" :aria-label="t('motor-admin.onboarding.skip')" @click="skip">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p v-if="step?.content?.description" class="v-onboarding-item__description">
        {{ step.content.description }}
      </p>
      <div class="v-onboarding-item__actions">
        <button v-if="!isFirst" type="button" class="v-onboarding-btn-secondary" @click="previous">
          {{ t('motor-admin.onboarding.previous') }}
        </button>
        <button type="button" class="v-onboarding-btn-primary" @click="next">
          {{ isLast ? t('motor-admin.onboarding.finish') : t('motor-admin.onboarding.next') }}
        </button>
      </div>
    </div>
  </VOnboardingStep>
</template>
