<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
const ip = 'mc.manima.ru'

const handleCopy = (e) => {
  const link = e.target.closest('a')
  if (link && link.getAttribute('href') === '#copy') {
    e.preventDefault()
    navigator.clipboard.writeText(ip).then(() => {
      triggerNotification()
    })
  }
}

const triggerNotification = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}

onMounted(() => { window.addEventListener('click', handleCopy) })
onUnmounted(() => { window.removeEventListener('click', handleCopy) })
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="copy-toast">
      <span class="icon">✅</span> Скопировано
    </div>
  </Transition>
</template>

<style scoped>
.copy-toast {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  
  background: rgba(30, 30, 35, 0.6); 
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.15);
  
  border-radius: 50px;
  padding: 10px 24px;
  
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 10000;
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px) scale(0.95);
}
</style>