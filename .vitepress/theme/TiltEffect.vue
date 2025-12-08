<script setup>
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress' // Импортируем роутер
import VanillaTilt from 'vanilla-tilt'

const route = useRoute() // Получаем текущую страницу

const initTilt = () => {
  nextTick(() => {
    // Ждем чуть дольше, чтобы Vue успел отрисовать карточки
    setTimeout(() => {
      const cards = document.querySelectorAll('.VPFeature, .VPTeamMembersItem, .step-card')
      if (cards.length > 0) {
        VanillaTilt.init(Array.from(cards), {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.02
        })
      }
    }, 100)
  })
}

// Запускаем при первой загрузке
onMounted(() => {
  initTilt()
})

// СЛЕДИМ ЗА ИЗМЕНЕНИЕМ СТРАНИЦЫ
// Как только route.path поменялся — перезапускаем эффект
watch(() => route.path, () => {
  initTilt()
})

onUnmounted(() => {
  const cards = document.querySelectorAll('.VPFeature, .VPTeamMembersItem, .step-card')
  cards.forEach(card => card.vanillaTilt && card.vanillaTilt.destroy())
})
</script>

<template>
  <!-- Этот компонент невидимый, он просто запускает скрипт -->
</template>