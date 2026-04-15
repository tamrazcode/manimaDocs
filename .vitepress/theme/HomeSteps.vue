<template>
  <div class="quick-start-container">
      <div class="roadmap-header">
        <div class="badge-title">подключение</div>
      </div>
    <h2 class="section-title">Как начать играть?</h2>
    
    <div class="steps-grid">
      
      <div class="step-card reveal-up">
        <div class="step-number">1</div>
        <h3>Ознакомься с правилами</h3>
        <p>Мы стремимся создать безопасное место для общения и игры.</p>
      </div>

      <div class="step-card reveal-up delay-100">
        <div class="step-number">2</div>
        <h3>Скачай майнкрафт</h3>
        <p>Можно играть без лицензии и на любом лаунчере версии <strong>1.21+</strong>.</p>
      </div>

      <div class="step-card reveal-up delay-200">
        <div class="step-number">3</div>
        <h3>Добавь сервер</h3>
        <p>
          Копируй IP <a href="#copy" class="ip-copy-badge">mc.manima.ru</a> и скорее присоединяйся к приключениям.
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>

.badge-title {
  text-align: center;
  margin-bottom: -35px !important;
  color: var(--vp-c-brand-1);
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.8;
}

.quick-start-container {
  margin-top: 100px;
  margin-bottom: px;
  padding: 0 24px;
}

.section-title {
  text-align: center;
  font-size: 42px !important;
  font-weight: 900 !important;
  border: none !important;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1152px;
  margin: 0 auto;
}

.step-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  padding: 30px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s;
}

.step-card:hover {
  transform: translateY(-7px);
  border-color: var(--vp-c-brand-1);
}

.step-number {
  width: 50px; height: 50px;
  background: var(--vp-c-brand-1);
  color: white;
  font-size: 24px; font-weight: 800;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px auto;
  box-shadow: 0 5px 15px rgba(244, 114, 182, 0.4);
}

.step-card h3 { margin: 0 0 10px 0; font-size: 20px; font-weight: 700; }
.step-card p { margin: 0; color: var(--vp-c-text-2); line-height: 1.6; }

.ip-copy-badge {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  padding: 2px 8px;
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.9em;
}
.ip-copy-badge:hover { background: var(--vp-c-brand-1); color: white; }
</style>