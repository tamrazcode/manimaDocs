# Галерея сервера

Лучшие постройки наших игроков.

<div class="gallery">
  <div class="gallery-item"><img src="/images/spawn.png" alt="Спавн"></div>
  <div class="gallery-item"><img src="/images/arena.png" alt="Арена"></div>
  <div class="gallery-item"><img src="/images/shop.png" alt="Магазин"></div>
  <div class="gallery-item"><img src="/images/parkour.png" alt="Паркур"></div>
</div>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.gallery-item {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
  border-color: var(--vp-c-brand-1);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
</style>