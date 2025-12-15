<script setup>
import { onMounted, ref } from 'vue'

const flakes = ref([])

onMounted(() => {
  const count = 50
  
  flakes.value = Array.from({ length: count }).map(() => ({
    style: {
      left: Math.random() * 100 + 'vw',
      animationDuration: 5 + Math.random() * 10 + 's',
      animationDelay: Math.random() * 5 + 's',
      opacity: 0.3 + Math.random() * 0.5,
      size: 4 + Math.random() * 6 + 'px'
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
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -20px;
  background: white;
  border-radius: 0;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-20px) translateX(0);
  }
  100% {
    transform: translateY(105vh) translateX(20px);
  }
}
</style>