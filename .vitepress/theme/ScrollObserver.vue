<script setup>
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
let observer = null

const initObserver = () => {
  nextTick(() => {
    // Ищем все элементы с классом reveal-up
    const elements = document.querySelectorAll('.reveal-up')

    if (observer) observer.disconnect()

    // Настраиваем наблюдателя
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Если блок появился на экране
        if (entry.isIntersecting) {
          entry.target.classList.add('active') // Включаем анимацию
          observer.unobserve(entry.target)     // Отключаем слежку (чтобы анимация была 1 раз)
        }
      })
    }, {
      threshold: 0.1, // Срабатывает, когда показалось 10% блока
      rootMargin: '0px 0px -50px 0px' // Чуть-чуть заранее
    })

    // Запускаем слежку за каждым элементом
    elements.forEach(el => observer.observe(el))
  })
}

// Запускаем при загрузке страницы
onMounted(initObserver)

// Перезапускаем, если перешли на другую страницу Вики и вернулись
watch(() => route.path, () => {
  setTimeout(initObserver, 100)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <!-- Компонент невидимый, он просто работает в фоне -->
</template>