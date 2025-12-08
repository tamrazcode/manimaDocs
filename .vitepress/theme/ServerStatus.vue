<script setup>
import { ref, onMounted } from 'vue'

const online = ref('Загрузка...')
const statusColor = ref('gray')

const fetchOnline = async () => {
  try {
    const response = await fetch('https://api.mcstatus.io/v2/status/java/mc.manima.ru')
    const data = await response.json()
    
    if (data.online) {
      online.value = `${data.players.online} игроков онлайн`
      statusColor.value = '#10b981' // Зеленый
    } else {
      online.value = 'Сервер выключен'
      statusColor.value = '#ef4444' // Красный
    }
  } catch (e) {
    online.value = 'Сервер недоступен'
  }
}

onMounted(fetchOnline)
</script>

<template>
  <div class="server-status">
    <span class="dot" :style="{ background: statusColor }"></span>
    <span class="text">{{ online }}</span>
  </div>
</template>

<style scoped>
.server-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  color: var(--vp-c-text-2);
  
  /* Анимация появления */
  animation: fade-in 1s ease;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* --- НАСТРОЙКА ПОЗИЦИИ --- */

/* На мобильных (телефонах) оставляем снизу, так красивее */
@media (max-width: 639px) {
  .server-status {
    margin-top: 20px;
    width: 100%;
  }
}

/* На планшетах и ПК ставим СПРАВА от кнопок */
@media (min-width: 640px) {
  .server-status {
    /* Вырываем из потока и ставим руками */
    position: absolute; 
    
    /* Подбираем координаты (зависит от длины текста кнопок) */
    /* Если наедет на кнопки - увеличивай left */
    left: 310px; 
    bottom: 12px; /* Выравниваем по высоте кнопок */
    
    /* Убираем лишние отступы */
    margin: 0;
  }
  
  /* Нужно добавить relative родителю, чтобы позиция работала корректно */
  /* Это делается через глобальный CSS, см. шаг ниже */
}
</style>