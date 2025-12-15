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
      statusColor.value = '#10b981'
    } else {
      online.value = 'Сервер выключен'
      statusColor.value = '#ef4444'
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


@media (max-width: 639px) {
  .server-status {
    margin-top: 20px;
    width: 100%;
  }
}

@media (min-width: 960px) {
  .server-status {
    position: absolute; 
    
    left: 310px; 
    bottom: 12px;
    
    margin: 0;
  }
  
}
</style>