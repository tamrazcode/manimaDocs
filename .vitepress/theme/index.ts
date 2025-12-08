import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Snow from './Snow.vue'
import CopyNotification from './CopyNotification.vue'
import HeroBadge from './HeroBadge.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      
      // Слот "Внизу сайта" (Снег и Уведомление)
      'layout-bottom': () => [
        h(Snow), 
        h(CopyNotification)
      ],

      // Слот "Над заголовком" (Наша плашка)
      'home-hero-info-before': () => h(HeroBadge)
    })
  }
}