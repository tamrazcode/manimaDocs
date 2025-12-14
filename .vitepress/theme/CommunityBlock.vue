<script setup>
import { ref, onMounted } from 'vue'

// 1. ТВОЯ КАРТИНКА (Если файл лежит в public/images/skin.png)
// const skinUrl = '/images/skin.png' 

// Или оставь ссылку, если пока своей нет:
const skinUrl = '/images/hero-skin.png'

// 2. БАНК ФРАЗ (Можешь добавлять свои)
const phrasesPool = [
  { icon: '💍', text: 'Свадьбы' },
  { icon: '🛡️', text: 'Без вайпов' },
  { icon: '🏰', text: 'Кланы' },
  { icon: '⚔️', text: 'PvP Арена' },
  { icon: '🤝', text: 'Торговля' },
  { icon: '🎨', text: 'Рисование' },
  { icon: '🎉', text: 'Ивенты' },
  { icon: '👋', text: 'Эмоции' },
  { icon: '🎙️', text: 'Голосовой чат' },
  { icon: '👑', text: 'Титулы' },
  { icon: '🐲', text: 'Данжи' },
  { icon: '☕', text: 'Напитки' }
]

// Переменная для 3-х выбранных баджей (по умолчанию ставим заглушки)
const currentBadges = ref([
  { icon: '✨', text: 'Загрузка...' },
  { icon: '✨', text: 'Загрузка...' },
  { icon: '✨', text: 'Загрузка...' }
])

// Функция перемешивания и выбора
onMounted(() => {
  // Перемешиваем массив случайным образом
  const shuffled = [...phrasesPool].sort(() => 0.5 - Math.random())
  // Берем первые 3 штуки
  currentBadges.value = shuffled.slice(0, 3)
})
</script>

<template>
  <div class="community-wrapper">
    <div class="community-card">
      
      <!-- ЛЕВАЯ ЧАСТЬ: Текст -->
      <div class="text-side">
        <h2>Мы ценим именно тебя</h2>
        <p>
          <strong>Manima</strong> — это не просто сервер, это огромный мир, который меняется благодаря игрокам. 
          Мы строим комьюнити таким образом, чтобы каждый мог найти себе место.
        </p>
        
        <div class="stats-grid">
                  <!-- Карточка 1 -->
                  <div class="stat-card">
                    <div class="stat-icon">🌍</div>
                    <div class="stat-text">
                      <span class="stat-value">1.21+</span>
                      <span class="stat-label">Версия игры</span>
                    </div>
                  </div>
                  
                  <!-- Карточка 2 -->
                  <div class="stat-card">
                    <div class="stat-icon">⚡</div>
                    <div class="stat-text">
                      <span class="stat-value">24/7</span>
                      <span class="stat-label">Аптайм</span>
                    </div>
                  </div>
                </div>
      </div>

      <!-- ПРАВАЯ ЧАСТЬ -->
      <div class="visual-side">
        <img :src="skinUrl" class="character-img" alt="Character" />
        
        <!-- Баджики берут данные из переменной currentBadges -->
        
        <!-- 1. Розовый (Слева сверху) -->
        <div class="floating-badge b1">
          <span class="icon">{{ currentBadges[0].icon }}</span> {{ currentBadges[0].text }}
        </div>

        <!-- 2. Синий (Справа) -->
        <div class="floating-badge b2">
          <span class="icon">{{ currentBadges[1].icon }}</span> {{ currentBadges[1].text }}
        </div>

        <!-- 3. Желтый (Слева снизу) -->
        <div class="floating-badge b3">
          <span class="icon">{{ currentBadges[2].icon }}</span> {{ currentBadges[2].text }}
        </div>
        
        <div class="back-glow"></div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.community-wrapper {
  padding: 0 0px;
  margin-bottom: 80px;
  margin-top: 120px; 
  display: flex;
  justify-content: center;
}

.community-card {
  width: 100%;
  max-width: 1152px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow: visible; 
}

@media (max-width: 960px) {
  .community-card {
    flex-direction: column-reverse;
    text-align: center;
    padding-bottom: 40px;
  }
  .visual-side {
    height: 300px;
    width: 100%;
  }
  .stats { justify-content: center; }
}

.text-side { flex: 1; padding: 20px 0; }

.label {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

h2 {
  border-top: 0px;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  background-color: var(--vp-c-brand-4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1.6;
  max-width: 500px;
}

/* --- НОВАЯ СТАТИСТИКА --- */
.stats-grid {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  /* Убрали border-top */
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--vp-c-bg-soft); /* Мягкий фон */
  padding: 12px 20px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease, border-color 0.3s;
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1); /* Розовая обводка при наведении */
}

.stat-icon {
  font-size: 24px;
  background: var(--vp-c-bg);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Кружок */
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.stat-text {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1.1;
}

.stat-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Адаптив для телефонов */
@media (max-width: 480px) {
  .stats-grid {
    flex-direction: column; /* Карточки друг под другом */
    width: 100%;
  }
}

.visual-side {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-img {
  height: 110%;
  width: 80%;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
  position: relative;
  z-index: 2;
  transition: transform 0.3s;
  transform: translateX(20px); 
}
.character-img:hover { 
    transform: scale(1.05); 
    transform: translateX(20px) scale(1.05);
}

.back-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--vp-c-brand-1);
  opacity: 0.15;
  filter: blur(80px);
  border-radius: 50%;
  z-index: 1;
  
}

.floating-badge {
  position: absolute;
  padding: 10px 18px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
  
  /* Плавное появление текста при смене */
  transition: all 0.5s;
}

.icon { font-size: 18px; }

.b1 {
  top: 20%; left: 5%;
  background: rgba(244, 114, 182, 0.15); color: #f472b6;
  border-color: rgba(244, 114, 182, 0.3);
  animation-delay: 0s;
}

.b2 {
  top: 53%; right: 20%;
  background: rgba(59, 130, 246, 0.15); color: #5ea6ff;
  border-color: rgba(59, 130, 246, 0.3);
  animation-delay: 2s;
}

.b3 {
  bottom: 5%; left: 15%;
  background: rgba(234, 179, 8, 0.15); color: #facc15;
  border-color: rgba(234, 179, 8, 0.3);
  animation-delay: 4s;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>