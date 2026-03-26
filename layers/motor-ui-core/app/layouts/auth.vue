<script setup lang="ts">
const appConfig = useAppConfig()

const wordmark = computed(() => (appConfig as any).auth?.wordmark ?? 'motor')
const tagline = computed(() => (appConfig as any).auth?.tagline ?? 'the engine behind your content')
</script>

<template>
  <div class="auth-split">
    <div class="auth-split__brand">
      <div class="auth-split__brand-content">
        <MotorLogoParallax />
        <span class="auth-split__wordmark">{{ wordmark }}</span>
        <span class="auth-split__tagline">{{ tagline }}</span>
      </div>
    </div>
    <div class="auth-split__form">
      <div class="auth-split__form-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-split {
  --_auth-accent-1: var(--auth-gradient-accent-1, rgba(232, 160, 191, 0.15));
  --_auth-accent-2: var(--auth-gradient-accent-2, rgba(108, 92, 231, 0.12));
  --_auth-accent-3: var(--auth-gradient-accent-3, rgba(160, 112, 192, 0.1));

  display: flex;
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 20% 50%, var(--_auth-accent-1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 30%, var(--_auth-accent-2) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, var(--_auth-accent-3) 0%, transparent 50%),
    var(--auth-gradient-base, linear-gradient(135deg, #0E0E12 0%, #1A1528 40%, #110E2B 70%, #0E0E12 100%));
}

:root:not(.dark) .auth-split {
  --_auth-accent-1: var(--auth-gradient-accent-1-light, rgba(232, 160, 191, 0.2));
  --_auth-accent-2: var(--auth-gradient-accent-2-light, rgba(108, 92, 231, 0.15));
  --_auth-accent-3: var(--auth-gradient-accent-3-light, rgba(160, 112, 192, 0.12));

  background:
    radial-gradient(ellipse at 20% 50%, var(--_auth-accent-1) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 30%, var(--_auth-accent-2) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, var(--_auth-accent-3) 0%, transparent 50%),
    var(--auth-gradient-base-light, linear-gradient(135deg, #f0eeff 0%, #e8e0ff 40%, #f5f0ff 70%, #fafaff 100%));
}

.auth-split__brand {
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.auth-split__brand-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.auth-split__wordmark {
  font-family: var(--auth-wordmark-font, "Space Grotesk", sans-serif);
  font-weight: var(--auth-wordmark-weight, 400);
  font-size: 32px;
  letter-spacing: 2.5px;
  color: #FFFFFF;
}

:root:not(.dark) .auth-split__wordmark {
  color: #1C1D24;
}

.auth-split__tagline {
  font-family: var(--auth-tagline-font, "Space Grotesk", sans-serif);
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.5);
}

:root:not(.dark) .auth-split__tagline {
  color: #8B8D98;
}

.auth-split__form {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  margin: 2.5rem 0;
  background: var(--ui-bg);
  border-radius: 1.25rem 0 0 1.25rem;
  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.12), 0 4px 20px rgba(0, 0, 0, 0.08);
}

:root.dark .auth-split__form {
  background: var(--ui-bg-muted);
  position: relative;
  z-index: 1;
}

.auth-split__form-inner {
  width: 100%;
  max-width: 24rem;
}

@media (max-width: 768px) {
  .auth-split {
    flex-direction: column;
  }

  .auth-split__brand {
    min-height: 40vh;
    flex: none;
  }

  .auth-split__form {
    flex: 1;
    margin: 0 1.25rem 1.25rem;
    border-radius: 1.25rem;
    box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.12);
  }
}
</style>
