<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const snowEnabled = ref(true)
const cursorEnabled = ref(true)

const applySettings = () => {
  document.body.classList.toggle('no-snow', !snowEnabled.value)
  document.body.classList.toggle('no-cursor', !cursorEnabled.value)
}

const toggleSnow = () => {
  snowEnabled.value = !snowEnabled.value
  localStorage.setItem('manima_snow', snowEnabled.value)
  applySettings()
}

const toggleCursor = () => {
  cursorEnabled.value = !cursorEnabled.value
  localStorage.setItem('manima_cursor', cursorEnabled.value)
  applySettings()
}

onMounted(() => {
  const savedSnow = localStorage.getItem('manima_snow')
  const savedCursor = localStorage.getItem('manima_cursor')

  if (savedSnow !== null) snowEnabled.value = savedSnow === 'true'
  if (savedCursor !== null) cursorEnabled.value = savedCursor === 'true'

  applySettings()
})
</script>

<template>
  <div class="settings-wrapper">
    
    <button 
      class="settings-btn" 
      :class="{ active: isOpen }" 
      @click="isOpen = !isOpen"
      title="Настройки сайта"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>

    <Transition name="pop">
      <div v-if="isOpen" class="settings-menu">
        <div class="menu-title">Настройки вида</div>
        
        <div class="toggle-row" @click="toggleSnow">
          <span>❄️ Снег</span>
          <div class="switch" :class="{ on: snowEnabled }">
            <div class="knob"></div>
          </div>
        </div>

        <div class="toggle-row" @click="toggleCursor">
          <span>🖱️ Курсор</span>
          <div class="switch" :class="{ on: cursorEnabled }">
            <div class="knob"></div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.settings-wrapper {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99999;
}

.settings-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.settings-btn:hover, .settings-btn.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: rotate(45deg);
}

.settings-menu {
  position: absolute;
  bottom: 60px;
  right: 0;
  width: 220px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.menu-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.toggle-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  user-select: none;
}

.toggle-row span {
  font-size: 14px;
  font-weight: 500;
}

.switch {
  width: 44px;
  height: 24px;
  background: var(--vp-c-divider);
  border-radius: 20px;
  position: relative;
  transition: background 0.3s ease;
}

.switch.on {
  background: var(--vp-c-brand-1);
}

.knob {
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.switch.on .knob {
  transform: translateX(20px);
}

.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}
</style>