<script setup>
import { ref, onMounted } from 'vue'

const online = ref('...')
// ID твоего сервера Discord (можно взять в настройках виджета в самом Дискорде)
const serverId = '232904394620928012' // <--- ЗАМЕНИ НА СВОЙ ID
const inviteLink = 'https://discord.gg/XSPUjWz' // Твоя ссылка

onMounted(async () => {
  try {
    const res = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`)
    const data = await res.json()
    online.value = data.presence_count || '0'
  } catch (e) {
    online.value = 'OFF'
  }
})
</script>

<template>
  <div class="discord-box">
    <div class="top">
      <span class="title">Discord</span>
      <span class="count">🟢 {{ online }} онлайн</span>
    </div>
    <a :href="inviteLink" target="_blank" class="btn">Присоединиться</a>
  </div>
</template>

<style scoped>
.discord-box {
  margin: 20px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 500;
}

.count {
  color: var(--vp-c-text-2);
}

.btn {
  display: block;
  background: #5865F2; /* Цвет Дискорда */
  color: white !important;
  padding: 8px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: opacity 0.2s;
  text-decoration: none !important;
}

.btn:hover {
  opacity: 0.9;
}
</style>