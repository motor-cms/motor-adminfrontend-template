<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'horizontal' | 'stacked' | 'mark'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showSubtitle?: boolean
}>(), {
  variant: 'horizontal',
  size: 'md',
  showSubtitle: true
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const textColor = computed(() => isDark.value ? '#FFFFFF' : '#1C1D24')
</script>

<template>
  <!-- Mark only: stacked gradient cards -->
  <svg
    v-if="variant === 'mark'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 120"
    class="motor-logo-mark"
    :class="`motor-logo-mark--${size}`"
  >
    <defs>
      <linearGradient
        id="motor-gb"
        x1="0"
        y1="1"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stop-color="#E8614D"
        />
        <stop
          offset="100%"
          stop-color="#E8A0BF"
        />
      </linearGradient>
      <linearGradient
        id="motor-gm"
        x1="0"
        y1="1"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stop-color="#A070C0"
        />
        <stop
          offset="100%"
          stop-color="#D090D0"
        />
      </linearGradient>
      <linearGradient
        id="motor-gf"
        x1="0"
        y1="1"
        x2="1"
        y2="0"
      >
        <stop
          offset="0%"
          stop-color="#6C5CE7"
        />
        <stop
          offset="100%"
          stop-color="#8B7CE7"
        />
      </linearGradient>
    </defs>
    <rect
      x="8"
      y="8"
      width="56"
      height="38"
      rx="10"
      fill="url(#motor-gb)"
      opacity="0.45"
      transform="rotate(-5, 36, 27)"
    />
    <rect
      x="26"
      y="26"
      width="66"
      height="44"
      rx="10"
      fill="url(#motor-gm)"
      opacity="0.6"
      transform="rotate(-1, 59, 48)"
    />
    <rect
      x="42"
      y="42"
      width="76"
      height="52"
      rx="10"
      fill="url(#motor-gf)"
      opacity="0.85"
      transform="rotate(3, 80, 68)"
    />
  </svg>

  <!-- Horizontal: cards mark + wordmark side-by-side -->
  <div
    v-else-if="variant === 'horizontal'"
    class="motor-logo-hz"
    :class="`motor-logo-hz--${size}`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 120"
      class="motor-logo-hz__mark"
    >
      <defs>
        <linearGradient
          id="motor-hz-gb"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#E8614D"
          />
          <stop
            offset="100%"
            stop-color="#E8A0BF"
          />
        </linearGradient>
        <linearGradient
          id="motor-hz-gm"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#A070C0"
          />
          <stop
            offset="100%"
            stop-color="#D090D0"
          />
        </linearGradient>
        <linearGradient
          id="motor-hz-gf"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#6C5CE7"
          />
          <stop
            offset="100%"
            stop-color="#8B7CE7"
          />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="56"
        height="38"
        rx="10"
        fill="url(#motor-hz-gb)"
        opacity="0.45"
        transform="rotate(-5, 36, 27)"
      />
      <rect
        x="26"
        y="26"
        width="66"
        height="44"
        rx="10"
        fill="url(#motor-hz-gm)"
        opacity="0.6"
        transform="rotate(-1, 59, 48)"
      />
      <rect
        x="42"
        y="42"
        width="76"
        height="52"
        rx="10"
        fill="url(#motor-hz-gf)"
        opacity="0.85"
        transform="rotate(3, 80, 68)"
      />
    </svg>
    <div class="motor-logo-hz__text">
      <span
        class="motor-logo-hz__name"
        :style="{ color: textColor }"
      >motor</span>
      <span
        v-if="showSubtitle"
        class="motor-logo-hz__sub"
      >content management</span>
    </div>
  </div>

  <!-- Stacked: cards mark above wordmark -->
  <div
    v-else-if="variant === 'stacked'"
    class="motor-logo-st"
    :class="`motor-logo-st--${size}`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 120"
      class="motor-logo-st__mark"
    >
      <defs>
        <linearGradient
          id="motor-st-gb"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#E8614D"
          />
          <stop
            offset="100%"
            stop-color="#E8A0BF"
          />
        </linearGradient>
        <linearGradient
          id="motor-st-gm"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#A070C0"
          />
          <stop
            offset="100%"
            stop-color="#D090D0"
          />
        </linearGradient>
        <linearGradient
          id="motor-st-gf"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stop-color="#6C5CE7"
          />
          <stop
            offset="100%"
            stop-color="#8B7CE7"
          />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="56"
        height="38"
        rx="10"
        fill="url(#motor-st-gb)"
        opacity="0.45"
        transform="rotate(-5, 36, 27)"
      />
      <rect
        x="26"
        y="26"
        width="66"
        height="44"
        rx="10"
        fill="url(#motor-st-gm)"
        opacity="0.6"
        transform="rotate(-1, 59, 48)"
      />
      <rect
        x="42"
        y="42"
        width="76"
        height="52"
        rx="10"
        fill="url(#motor-st-gf)"
        opacity="0.85"
        transform="rotate(3, 80, 68)"
      />
    </svg>
    <div class="motor-logo-st__text">
      <span
        class="motor-logo-st__name"
        :style="{ color: textColor }"
      >motor</span>
      <span
        v-if="showSubtitle"
        class="motor-logo-st__sub"
      >content management</span>
    </div>
  </div>
</template>

<style scoped>
/* ===== Mark only ===== */
.motor-logo-mark--xs { width: 28px; }
.motor-logo-mark--sm { width: 40px; }
.motor-logo-mark--md { width: 64px; }
.motor-logo-mark--lg { width: 100px; }
.motor-logo-mark--xl { width: 140px; }

/* ===== Horizontal ===== */
.motor-logo-hz {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.motor-logo-hz__text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.motor-logo-hz__name {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
}

.motor-logo-hz__sub {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 400;
  color: #8B8D98;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.motor-logo-hz--xs .motor-logo-hz__mark { width: 22px; }
.motor-logo-hz--xs .motor-logo-hz__name { font-size: 12px; letter-spacing: 1px; }
.motor-logo-hz--xs .motor-logo-hz__sub  { font-size: 6px; }

.motor-logo-hz--sm .motor-logo-hz__mark { width: 28px; }
.motor-logo-hz--sm .motor-logo-hz__name { font-size: 15px; letter-spacing: 1.5px; }
.motor-logo-hz--sm .motor-logo-hz__sub  { font-size: 7px; }

.motor-logo-hz--md .motor-logo-hz__mark { width: 36px; }
.motor-logo-hz--md .motor-logo-hz__name { font-size: 18px; }
.motor-logo-hz--md .motor-logo-hz__sub  { font-size: 8px; }

.motor-logo-hz--lg .motor-logo-hz__mark { width: 48px; }
.motor-logo-hz--lg .motor-logo-hz__name { font-size: 22px; }
.motor-logo-hz--lg .motor-logo-hz__sub  { font-size: 9px; }

.motor-logo-hz--xl .motor-logo-hz__mark { width: 60px; }
.motor-logo-hz--xl .motor-logo-hz__name { font-size: 26px; letter-spacing: 2.5px; }
.motor-logo-hz--xl .motor-logo-hz__sub  { font-size: 10px; }

/* ===== Stacked ===== */
.motor-logo-st {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.motor-logo-st__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
}

.motor-logo-st__name {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 300;
  letter-spacing: 2.5px;
}

.motor-logo-st__sub {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  font-weight: 400;
  color: #8B8D98;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.motor-logo-st--xs .motor-logo-st__mark { width: 40px; }
.motor-logo-st--xs .motor-logo-st__name { font-size: 12px; }
.motor-logo-st--xs .motor-logo-st__sub  { font-size: 6px; }

.motor-logo-st--sm .motor-logo-st__mark { width: 56px; }
.motor-logo-st--sm .motor-logo-st__name { font-size: 16px; }
.motor-logo-st--sm .motor-logo-st__sub  { font-size: 7px; }

.motor-logo-st--md .motor-logo-st__mark { width: 72px; }
.motor-logo-st--md .motor-logo-st__name { font-size: 20px; }
.motor-logo-st--md .motor-logo-st__sub  { font-size: 8px; }

.motor-logo-st--lg .motor-logo-st__mark { width: 96px; }
.motor-logo-st--lg .motor-logo-st__name { font-size: 24px; }
.motor-logo-st--lg .motor-logo-st__sub  { font-size: 9px; }

.motor-logo-st--xl .motor-logo-st__mark { width: 120px; }
.motor-logo-st--xl .motor-logo-st__name { font-size: 28px; letter-spacing: 3px; }
.motor-logo-st--xl .motor-logo-st__sub  { font-size: 10px; }
</style>
