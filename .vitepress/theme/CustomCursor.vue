<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const trailingX = ref(0)
const trailingY = ref(0)

const updateMouse = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}

// Плавное движение (Lerp)
const animate = () => {
  // Курсор "догоняет" мышку. Чем меньше 0.15, тем медленнее
  trailingX.value += (x.value - trailingX.value) * 0.15
  trailingY.value += (y.value - trailingY.value) * 0.15
  
  requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse)
})
</script>

<template>
  <div class="custom-cursor" 
       :style="{ left: trailingX + 'px', top: trailingY + 'px' }">
  </div>
  <!-- Фоновый эффект (пятно света) -->
  <div class="cursor-glow"
       :style="{ left: trailingX + 'px', top: trailingY + 'px' }">
  </div>
</template>

<style scoped>
/* Сам кружок */
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-1); /* Твой розовый цвет */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Чтобы можно было кликать сквозь него */
  z-index: 9999;
  transition: width 0.2s, height 0.2s; /* Анимация при кликах если захочешь */
}

/* Эффект свечения на фоне */
.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--vp-c-brand-1) 0%, transparent 70%);
  opacity: 0.07; /* Очень слабое свечение */
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0; /* На самом дне, под текстом */
  filter: blur(40px);
}

/* Скрываем на мобильных, там нет мышки */
@media (max-width: 768px) {
  .custom-cursor, .cursor-glow { display: none; }
}
</style>