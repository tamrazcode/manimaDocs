<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

const route = useRoute()

const initZoom = () => {
  nextTick(() => {
    // Применяем зум ко всем картинкам в статьях, кроме логотипов
    mediumZoom('.main img', { background: 'rgba(0,0,0,0.8)' })
  })
}

onMounted(initZoom)
watch(() => route.path, initZoom)
</script>
<template></template>