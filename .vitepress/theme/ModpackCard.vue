<template>
  <div class="modpack-wrapper reveal-up">
    <div class="modpack-card">
      
      <div class="content">
        <div class="badges">
          <span class="badge new">Рекомендуем</span>
          <span class="badge optional">Необязательно</span>
        </div>
        
        <h2>Готовая сборка модов</h2>
        <p>
          Собрали за тебя все моды в кучку для комфортной игры.<br> 
          Но можно играть и на ванильной версии Minecraft.
        </p>
        
        <div class="features-list">
          <div class="feat">🎤 Голосовой чат</div>
          <div class="feat">👋 Эмоции</div>
          <div class="feat">🚀 Оптимизация</div>
          <div class="feat">🗺️ Миникарта</div>
        </div>
      </div>

            <div class="action">
              <a href="https://modrinth.com/" target="_blank" class="download-btn">
                <span>Скачать сборку</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
              
              <a href="/info/modpack" class="install-link">
                Как установить? <span class="arrow">→</span>
              </a>
              
              <div class="sub-text">Fabric 1.21.8 • Установка в 2 клика</div>
            </div>

      <div class="glow-bg"></div>
    </div>
  </div>
</template>

<style scoped>
.modpack-wrapper {
  padding: 0 24px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
}

.modpack-card {
  width: 100%;
  max-width: 1152px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .modpack-card {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
    gap: 30px;
  }
  .features-list { justify-content: center; }
  .badges { justify-content: center; }
}

.content {
  position: relative;
  z-index: 2;
  flex: 1;
}

.badges {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.badge {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.badge.new {
  background: var(--vp-c-brand-1);
  color: white;
}

.badge.optional {
  background: rgba(128, 128, 128, 0.2);
  color: var(--vp-c-text-2);
}

h2 {
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 10px 0;
  line-height: 1.2;
  
  border-top: none !important;
  padding-top: 0 !important;
  margin-top: 0 !important;
}

p {
  color: var(--vp-c-text-2);
  margin: 0 0 24px 0;
  font-size: 16px;
  max-width: 500px;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.feat {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.action {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 250px;
}

.download-btn {
  background: var(--vp-c-brand-3);
  color: white !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 32px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

}

.download-btn:hover {
  transform: translateY(-2px);
}

.sub-text {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.glow-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
  filter: blur(40px);
}

@keyframes downloadArrow {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  35% {
    transform: translateY(5px);
    opacity: 0;
  }
  40% {
    transform: translateY(-5px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.download-btn:hover svg {
  animation: downloadArrow 0.6s ease; 
}

.install-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
  margin-top: 5px;
}

.install-link:hover {
  color: var(--vp-c-brand-1);
}

.install-link:hover .arrow {
  transform: translateX(3px);
}

.arrow {
  transition: transform 0.2s;
  font-weight: bold;
}
</style>