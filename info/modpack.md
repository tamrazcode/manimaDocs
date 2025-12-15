# 📦 Официальный модпак Manima

Мы создали идеальную сборку для игры на нашем сервере. Она не добавляет новых блоков (вы можете зайти и без неё), но она кардинально меняет **ощущения от игры**.

::: tip Зачем это нужно?
Эта сборка повышает FPS, добавляет голосовой чат, красивые анимации и прочие удобства.
:::

## Что в модпаке?

<div class="mod-grid">
  <div class="mod-card">
    <div class="icon">🎤</div>
    <h3>Голосовой чат</h3>
    <p>Plasmo Voice — разговаривай с игроками прямо на сервере.</p>
  </div>
  <div class="mod-card">
    <div class="icon">👋</div>
    <h3>Эмоции</h3>
    <p>Emotecraft — маши рукой, хлопай в ладоши или танцуй вместе с друзьями.</p>
  </div>
  <div class="mod-card">
    <div class="icon">🚀</div>
    <h3>Оптимизация</h3>
    <p>Sodium + Iris — твой FPS вырастет в 2-3 раза. Поддержка шейдеров включена.</p>
  </div>
  <div class="mod-card">
    <div class="icon">🗺️</div>
    <h3>Карта мира</h3>
    <p>Xaero's World Map — карта, чтобы не потеряться в нашем огромном мире.</p>
  </div>
  <div class="mod-card">
    <div class="icon">🔦</div>
    <h3>Свет в руке</h3>
    <p>LambDynamicLights — факел светится прямо в руке.</p>
  </div>
  <div class="mod-card">
    <div class="icon">➕</div>
    <h3>И прочие</h3>
    <p>3D скины, красивые частицы, плавный зум и плавные чанки.</p>
  </div>
</div>

## 📥 Как установить?

Мы используем платформу **Modrinth**, потому что это удобно и безопасно.

### Способ 1: XMCL / Prism / Modrinth App
Это самый надежный способ.

1.  Скачай нашу сборку (файл `.mrpack`) по кнопке ниже.
2.  Открой свой лаунчер.
3.  Нажми **"Добавить сборку"** -> **"Импорт из файла"**.
4.  Выбери скачанный файл. Готово!

<div style="text-align: center; margin: 30px 0;">
  <a href="https://modrinth.com/" target="_blank" class="btn-download">Скачать файл сборки (.mrpack)</a>
</div>

### Способ 2: TLauncher / Legacy
Если вы используете старые лаунчеры, установка чуть сложнее (вручную).

1.  Установи версию **Fabric 1.21.8**.
2.  Скачай архив с модами (zip) по ссылке ниже.
3.  Открой папку игры (обычно `%appdata%/.minecraft`).
4.  Перекинь всё из архива в папку `mods`.

::: warning Внимание
Убедись, что ты удалил старые моды перед установкой новых, чтобы избежать конфликтов!
:::

<style>
.mod-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 40px;
}

.mod-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 24px;
  border-radius: 16px;
  transition: transform 0.3s, border-color 0.3s;
}

.mod-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
}

.mod-card .icon {
  font-size: 32px;
  margin-bottom: 15px;
}

.mod-card h3 {
  margin: 0 0 10px 0;
  font-weight: 700;
}

.mod-card p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.btn-download {
  background: var(--vp-c-brand-1);
  color: white !important;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
  transition: opacity 0.2s;
  box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4);
}
.btn-download:hover {
  opacity: 0.9;
}
</style>