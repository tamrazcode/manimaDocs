<script setup>
import { onMounted, ref } from 'vue'

const flakes = ref([])

onMounted(() => {
  // Настройки
  const count = 50 // Количество снежинок (не ставь больше 100, чтобы не лагало)
  
  // Генерируем случайные параметры для каждой снежинки
  flakes.value = Array.from({ length: count }).map(() => ({
    style: {
      left: Math.random() * 100 + 'vw', // Случайная позиция по горизонтали
      animationDuration: 5 + Math.random() * 10 + 's', // Скорость падения (от 5 до 15 сек)
      animationDelay: Math.random() * 5 + 's', // Случайная задержка старта
      opacity: 0.3 + Math.random() * 0.5, // Прозрачность
      size: 4 + Math.random() * 6 + 'px' // Размер от 4px до 10px
    }
  }))
})
</script>

<template>
  <div class="snow-container">
    <div 
      v-for="(flake, i) in flakes" 
      :key="i" 
      class="snowflake" 
      :style="{ 
        left: flake.style.left, 
        animationDuration: flake.style.animationDuration, 
        animationDelay: flake.style.animationDelay,
        opacity: flake.style.opacity,
        width: flake.style.size,
        height: flake.style.size
      }"
    ></div>
  </div>
</template>

<style scoped>
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* ВАЖНО: чтобы сквозь снег можно было кликать */
  z-index: 9999; /* Поверх всего */
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -20px;
  background: white;
  border-radius: 0; /* Квадратные (Minecraft style) */
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Анимация падения */
@keyframes fall {
  0% {
    transform: translateY(-20px) translateX(0);
  }
  100% {
    transform: translateY(105vh) translateX(20px); /* Падает вниз и чуть вбок */
  }
}
</style>