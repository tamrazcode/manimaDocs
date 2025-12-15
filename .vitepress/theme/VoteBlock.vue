<script setup>
const voteSites = [
  { name: 'HotMC', link: '#', color: '#ef4444' },
  { name: 'Monitoring', link: '#', color: '#3b82f6' },
  { name: 'TopCraft', link: '#', color: '#f59e0b' }
]
</script>

<template>
  <div class="vote-container">
    <div class="vote-card">
      
      <div class="glow-spot top-left"></div>
      <div class="glow-spot bottom-right"></div>
      <div class="noise-texture"></div>

      <div class="vote-content">
        <div class="header-row">
          <h2>Голосуй за сервер</h2>
        </div>
        
        <p>Поддержи нас и получай <strong>подарки в игре</strong> ежедневно.</p>
        
        <div class="actions-row">
          
          <div class="buttons-group">
            <a v-for="site in voteSites" :key="site.name" :href="site.link" target="_blank" class="vote-btn">
              <span class="status-dot" :style="{ backgroundColor: site.color, boxShadow: `0 0 10px ${site.color}` }"></span>
              {{ site.name }}
            </a>
          </div>

          <div class="divider"></div>

          <a href="/info/vote" class="info-link" title="Узнать подробнее">
            <span class="info-icon">?</span>
            <span class="link-text">Награда</span>
          </a>

        </div>
      </div>

      <div class="vote-visual">
        <div class="gift">🎁</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.vote-container {
  padding: 0 24px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}

.vote-card {
  width: 100%;
  max-width: 1152px;
  position: relative;
  overflow: hidden;
  background-color: #161618; 
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  
  padding: 30px 40px; 
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.glow-spot {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  filter: blur(100px);
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
}
.top-left { top: -150px; left: -100px; }
.bottom-right { bottom: -150px; right: -100px; background: #8b5cf6; }
.noise-texture {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0.03; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.vote-content { position: relative; z-index: 2; flex: 1; }

.header-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
}

h2 {
  font-size: 28px;
  font-weight: 800;
  color: var(--vp-c-brand-4);
  margin: 0;
  line-height: 1;
  border: none;
}

.badge {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--vp-c-brand-1);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

p {
  font-size: 15px;
  color: #a1a1aa;
  margin: 0 0 25px 0;
  max-width: 600px;
}
strong { color: var(--vp-c-brand-4); }

.actions-row {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.buttons-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.vote-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: var(--vp-c-brand-4) !important;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
}

.status-dot {
  width: 6px; height: 6px; border-radius: 50%;
}

.vote-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.divider {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
}

.info-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none !important;
  color: #a1a1aa;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}

.info-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-text-2);
}

.info-link:hover { color: var(--vp-c-brand-1); }
.info-link:hover .info-icon { 
  border-color: var(--vp-c-brand-1); 
  color: var(--vp-c-brand-1);
  background: rgba(255,255,255,0.05);
}

.vote-visual {
  position: relative;
  z-index: 2;
}

.gift {
    width: 150px;
  font-size: 100px;
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.5));
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@media (max-width: 860px) {
  .vote-card { flex-direction: column-reverse; padding: 30px 20px; text-align: center; }
  .header-row { justify-content: center; }
  .actions-row { justify-content: center; flex-direction: column; gap: 15px; }
  .divider { display: none; } /* Скрываем разделитель на мобилках */
}
</style>