<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md'
})
</script>

<template>
  <div
    class="motor-loader motor-loader--shuffle"
    :class="`motor-loader--${size}`"
  >
    <div class="motor-loader__card motor-loader__card--back" />
    <div class="motor-loader__card motor-loader__card--mid" />
    <div class="motor-loader__card motor-loader__card--front" />
  </div>
</template>

<style scoped>
.motor-loader {
  position: relative;
}

.motor-loader--sm { width: 60px; height: 50px; }
.motor-loader--md { width: 90px; height: 75px; }
.motor-loader--lg { width: 120px; height: 100px; }

.motor-loader__card {
  position: absolute;
  border-radius: 8px;
  top: 0;
  left: 0;
  will-change: transform, opacity;
}

.motor-loader__card--back {
  width: 38%;
  height: 31%;
  background: linear-gradient(135deg, #E8A0BF, #E8614D);
}

.motor-loader__card--mid {
  width: 45%;
  height: 36%;
  background: linear-gradient(135deg, #D090D0, #A070C0);
}

.motor-loader__card--front {
  width: 52%;
  height: 42%;
  background: linear-gradient(135deg, #8B7CE7, #6C5CE7);
}

.motor-loader--shuffle .motor-loader__card--back {
  animation: motor-shuffle-back 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.motor-loader--shuffle .motor-loader__card--mid {
  animation: motor-shuffle-mid 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.motor-loader--shuffle .motor-loader__card--front {
  animation: motor-shuffle-front 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes motor-shuffle-back {
  0%,   5%  { transform: translate(5%, 5%) rotate(-5deg);   opacity: 0.45; z-index: 1; }
  30%, 38%  { transform: translate(27%, 30%) rotate(3deg);  opacity: 0.85; z-index: 3; }
  63%, 71%  { transform: translate(17%, 18%) rotate(-1deg); opacity: 0.6;  z-index: 2; }
  95%, 100% { transform: translate(5%, 5%) rotate(-5deg);   opacity: 0.45; z-index: 1; }
}

@keyframes motor-shuffle-mid {
  0%,   5%  { transform: translate(17%, 18%) rotate(-1deg); opacity: 0.6;  z-index: 2; }
  30%, 38%  { transform: translate(5%, 5%) rotate(-5deg);   opacity: 0.45; z-index: 1; }
  63%, 71%  { transform: translate(27%, 30%) rotate(3deg);  opacity: 0.85; z-index: 3; }
  95%, 100% { transform: translate(17%, 18%) rotate(-1deg); opacity: 0.6;  z-index: 2; }
}

@keyframes motor-shuffle-front {
  0%,   5%  { transform: translate(27%, 30%) rotate(3deg);  opacity: 0.85; z-index: 3; }
  30%, 38%  { transform: translate(17%, 18%) rotate(-1deg); opacity: 0.6;  z-index: 2; }
  63%, 71%  { transform: translate(5%, 5%) rotate(-5deg);   opacity: 0.45; z-index: 1; }
  95%, 100% { transform: translate(27%, 30%) rotate(3deg);  opacity: 0.85; z-index: 3; }
}
</style>
