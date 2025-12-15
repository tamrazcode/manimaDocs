# 🗳️ Голосование и Награды

Голосование — это самый простой способ поддержать сервер и получить ценные ресурсы **бесплатно**. Это занимает всего 1 минуту в день!

::: tip Важно
Чтобы получить награду, вы должны быть **онлайн** на сервере в момент голосования (или награда придет, когда вы зайдете).
:::

## 🎁 Что я получу?

За каждый голос на каждом мониторинге вы получаете **Бонус голосования**.
Голосуя на 3-х сайтах, вы получаете **х3 награды** ежедневно!

<div class="rewards-grid">
  
  <div class="reward-card">
    <div class="icon-box coin">💰</div>
    <div class="info">
      <h3>Валюта</h3>
      <p>От <strong>100</strong> до <strong>500</strong> монет на баланс.</p>
    </div>
  </div>

  <div class="reward-card">
    <div class="icon-box key">🔑</div>
    <div class="info">
      <h3>Ключ удачи</h3>
      <p>Шанс выбить кейс с донатом или редкими ресурсами.</p>
    </div>
  </div>

  <div class="reward-card">
    <div class="icon-box exp">✨</div>
    <div class="info">
      <h3>Опыт</h3>
      <p>Бутылочки опыта для починки вещей и зачарований.</p>
    </div>
  </div>

</div>

## 📝 Как голосовать?

1.  Перейдите по ссылкам на главной странице (или используйте команду `/vote` в игре).
2.  На сайте мониторинга введите свой **Никнейм**.
3.  Нажмите кнопку "Голосовать" (Vote).
4.  Готово! Проверьте чат в игре — награда придет автоматически.

::: info Команды
*   `/vote` — Показать ссылки на голосование.
*   `/vote total` — Посмотреть свою статистику голосов.
:::

<style>
.rewards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.reward-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s, border-color 0.3s;
}

.reward-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
}

.icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.coin { background: rgba(250, 204, 21, 0.15); color: #facc15; }
.key { background: rgba(168, 85, 247, 0.15); color: #a855f7; }
.exp { background: rgba(16, 185, 129, 0.15); color: #10b981; }

.info h3 { margin: 0 0 5px 0; font-size: 16px; font-weight: 700; }
.info p { margin: 0; font-size: 13px; color: var(--vp-c-text-2); line-height: 1.4; }
.info strong { color: var(--vp-c-text-1); }
</style>