import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Snow from './Snow.vue' // Импортируем наш снег

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Оборачиваем стандартный Layout и добавляем компонент Snow
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(Snow)
    })
  }
}