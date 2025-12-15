<script setup>
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import VanillaTilt from 'vanilla-tilt'

const route = useRoute()

const initTilt = () => {
  nextTick(() => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.VPFeature, .VPTeamMembersItem, .step-card')
      if (cards.length > 0) {
        VanillaTilt.init(Array.from(cards), {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.02
        })
      }
    }, 100)
  })
}

onMounted(() => {
  initTilt()
})

watch(() => route.path, () => {
  initTilt()
})

onUnmounted(() => {
  const cards = document.querySelectorAll('.VPFeature, .VPTeamMembersItem, .step-card')
  cards.forEach(card => card.vanillaTilt && card.vanillaTilt.destroy())
})
</script>

<template>
</template>