<template>
  <div class="hero-badge-container">
    <div class="hero-badge">
      С любовью для игроков 🩷
    </div>
  </div>
</template>

<style scoped>
.hero-badge-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 10;
}

@media (min-width: 960px) {
  .hero-badge-container {
    justify-content: flex-start;
  }
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  
  color: #ffffff;
  
  background-color: rgb(84, 19, 49);
  
  border: 1px solid rgba(244, 114, 182, 0.3); 
  
  background-image: linear-gradient(
    120deg,
    transparent 45%,      
    rgba(255, 255, 255, 0.4) 50%, 
    transparent 55%       
  );
  
  background-size: 220% 100%;
  animation: shine 3s infinite linear;
}

@keyframes shine {
  to {
    background-position-x: -250%;
  }
}
</style>