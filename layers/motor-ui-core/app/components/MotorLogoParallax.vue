<script setup lang="ts">
const scene = ref<HTMLElement>()
const group = ref<HTMLElement>()
const cards = ref<HTMLElement[]>([])

const LAYERS = [
  { z: -30, parallax: 1.8, rot: -5 },
  { z: 0, parallax: 0.6, rot: -1 },
  { z: 30, parallax: -0.8, rot: 3 }
]
const STRENGTH = 10
const EASE = 0.06

let targetRotX = 0
let targetRotY = 0
let currentRotX = 0
let currentRotY = 0
let rafId = 0

const layerState = LAYERS.map(() => ({ tx: 0, ty: 0, cx: 0, cy: 0 }))

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function onMouseMove(e: MouseEvent) {
  const cx = window.innerWidth / 2
  const cy = window.innerHeight / 2
  const dx = (e.clientX - cx) / cx
  const dy = (e.clientY - cy) / cy

  targetRotX = -dy * 12
  targetRotY = dx * 12

  LAYERS.forEach((layer, i) => {
    layerState[i]!.tx = dx * layer.parallax * STRENGTH
    layerState[i]!.ty = dy * layer.parallax * STRENGTH
  })
}

function onMouseLeave() {
  targetRotX = 0
  targetRotY = 0
  layerState.forEach((s) => {
    s.tx = 0
    s.ty = 0
  })
}

function animate() {
  currentRotX = lerp(currentRotX, targetRotX, EASE)
  currentRotY = lerp(currentRotY, targetRotY, EASE)

  if (group.value) {
    group.value.style.transform
      = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`
  }

  cards.value.forEach((card, i) => {
    if (!card) return
    layerState[i]!.cx = lerp(layerState[i]!.cx, layerState[i]!.tx, EASE)
    layerState[i]!.cy = lerp(layerState[i]!.cy, layerState[i]!.ty, EASE)
    card.style.transform = `
      translateZ(${LAYERS[i]!.z}px)
      translate(${layerState[i]!.cx}px, ${layerState[i]!.cy}px)
      rotate(${LAYERS[i]!.rot}deg)
    `
  })

  rafId = requestAnimationFrame(animate)
}

function setCardRef(el: Element | ComponentPublicInstance | null, i: number) {
  if (el instanceof HTMLElement) cards.value[i] = el
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    ref="scene"
    class="plx-scene"
  >
    <div
      ref="group"
      class="plx-group"
    >
      <div
        :ref="(el) => setCardRef(el, 0)"
        class="plx-card plx-card--back"
      />
      <div
        :ref="(el) => setCardRef(el, 1)"
        class="plx-card plx-card--mid"
      />
      <div
        :ref="(el) => setCardRef(el, 2)"
        class="plx-card plx-card--front"
      />
    </div>
  </div>
</template>

<style scoped>
.plx-scene {
  perspective: 900px;
  width: 280px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plx-group {
  position: relative;
  width: 210px;
  height: 160px;
  transform-style: preserve-3d;
}

.plx-card {
  position: absolute;
  will-change: transform;
  border-radius: 14px;
}

.plx-card--back {
  width: 90px;
  height: 62px;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #E8A0BF, #E8614D);
  opacity: 0.45;
  box-shadow: 0 3px 14px rgba(232, 97, 77, 0.2);
  transform: translateZ(-30px) rotate(-5deg);
}

.plx-card--mid {
  width: 106px;
  height: 72px;
  top: 32px;
  left: 36px;
  background: linear-gradient(135deg, #D090D0, #A070C0);
  opacity: 0.6;
  box-shadow: 0 5px 18px rgba(160, 112, 192, 0.2);
  transform: translateZ(0px) rotate(-1deg);
}

.plx-card--front {
  width: 122px;
  height: 84px;
  top: 52px;
  left: 56px;
  background: linear-gradient(135deg, #8B7CE7, #6C5CE7);
  opacity: 0.85;
  box-shadow: 0 6px 28px rgba(108, 92, 231, 0.25);
  transform: translateZ(30px) rotate(3deg);
}
</style>
