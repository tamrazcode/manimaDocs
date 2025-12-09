---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
pageClass: home

hero:
  name: ""
  text: "Тот самый сервер<br>в Minecraft, который<br>ты полюбишь"
  tagline: "Увлекательная игра с уникальным геймплеем"
  
  image:
    src: /main.png
    alt: Manima Logo

  actions:
      - theme: brand
        text: "Википедия"
        link: /wiki/
        
      - theme: alt
        text: "Скопировать IP"
        link: "#copy"

features:
  - icon: 🏠
    title: С приватом или без
    details: Хочешь играть без привата? Мы следим за каждым блоком и воришкой.
    link: /features/privates

  - icon: 🎤
    title: Голосовой чат
    details: Используй голосовой чат для общения с другими игроками в реальном времени.
    link: /info/voice

  - icon: ✨
    title: Уникальный геймплей
    details: Эмоции, свадьбы, профили — это лишь малая часть нашего уникального геймплея.
    link: /info/about

  - icon: 👑
    title: Система рангов
    details: Получи доступ к уникальным командам, расширенным регионам и точкам дома.
    link: /info/ranks

  - icon: 🚀
    title: Стабильность 24/7
    details: Мощное оборудование и защита от атак гарантируют плавную игру без сбоев.
    link: /support/monitoring

  - icon: ❤️
    title: Уютное комьюнити
    details: Мы строим сообщество на принципах уважения и взаимной поддержки.
    link: https://discord.gg/manima
---


<div class="quick-start-container">
<h2 class="section-title">⚡ Как начать играть?</h2>

<div class="steps-grid">

<!-- Шаг 1 -->
<div class="step-card">
    <div class="step-number">1</div>
    <h3>Ознакомься с правилами</h3>
    <p>Мы стремимся создать безопасное и приятное место для общения и игры.</p>
</div>

<!-- Шаг 2 -->
<div class="step-card">
    <div class="step-number">2</div>
    <h3>Скачай майнкрафт</h3>
    <p>Можно играть без лицензии и на любом лаунчере версии <strong>1.21+.</strong></p>
</div>

<!-- Шаг 3 -->
<div class="step-card">
    <div class="step-number">3</div>
    <h3>Добавь сервер</h3>
    <p>Копируй IP <code><a href="#copy" class="ip-copy-badge">mc.manima.ru</a></code> и скорее присоединяйся к приключениям.</p>
</div>

</div>
</div>

<style>
/* Отступы для всего блока */ 
.quick-start-container {
margin-top: 80px;  /* Отступ от features */
margin-bottom: 80px; /* Отступ до FAQ */
padding: 0 24px;
}

/* Заголовок */
.section-title {
text-align: center;
font-size: 36px !important;
font-weight: 700;
border: none !important; /* Убираем линию снизу */
margin-bottom: 60px !important;
}

.section-title2 {
font-size: 32px;
font-weight: 700;
border: none !important; /* Убираем линию снизу */
margin-bottom: 40px !important;
}

/* Сетка карточек */
.steps-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Адаптивно: на телефоне 1 в ряд, на ПК 3 */
gap: 30px;
max-width: 1152px;
margin: 0 auto;
}

/* Карточка шага */
.step-card {
background: var(--vp-c-bg-soft); /* Мягкий цвет фона темы */
border: 1px solid var(--vp-c-divider);
border-radius: 20px;
padding: 30px 24px;
text-align: center;
transition: transform 0.3s ease, border-color 0.3s;
position: relative;
overflow: hidden;
}

/* Эффект при наведении */
.step-card:hover {
transform: translateY(-5px);
border-color: var(--vp-c-brand-1); /* Твой розовый цвет */
}

/* Кружок с цифрой */
.step-number {
width: 50px;
height: 50px;
background: var(--vp-c-brand-2);
color: white;
font-size: 24px;
font-weight: 800;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto 20px auto;
box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4); /* Розовая тень */
}

.step-card h3 {
margin: 0 0 10px 0;
font-size: 20px;
font-weight: 600;
}

.step-card p {
margin: 0;
color: var(--vp-c-text-2); /* Серый текст */
line-height: 1.6;
}

.ip-text {
color: var(--vp-c-brand-1);
font-weight: bold;
}
</style>


<!--<h2 class="section-title2">Часто задаваемые вопросы</h2>

::: details 🏴‍☠️ Можно ли играть с пиратки?
Да, конечно! Мы поддерживаем вход с любых лаунчеров (TLauncher, Legacy и др). Лицензия не обязательна.
:::

::: details 📅 Когда был последний вайп?
Мы стараемся не делать вайпы без критической необходимости. Последнее обновление мира было **12.12.2025**.
:::

::: details 🎮 Какая версия нужна?
Мы рекомендуем играть на **1.21.8**, но зайти можно с любой версии выше 1.21
:::-->