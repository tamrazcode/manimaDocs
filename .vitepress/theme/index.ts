import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Snow from './Snow.vue'
import CopyNotification from './CopyNotification.vue'
import HeroBadge from './HeroBadge.vue'
import ServerStatus from './ServerStatus.vue'
import TiltEffect from './TiltEffect.vue'
import CustomCursor from './CustomCursor.vue'
import ImageZoom from './ImageZoom.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      
      // Слот "Внизу сайта" (Снег и Уведомление)
      'layout-bottom': () => [
        h(Snow), 
        h(CustomCursor),
        h(ImageZoom),
        h(CopyNotification)
      ],
      'layout-top': () => [
        h(TiltEffect)
      ],

      // Слот "Над заголовком" (Наша плашка)
      'home-hero-info-before': () => [
        h(HeroBadge),
      ],
      
      'home-hero-actions-after': () => h(ServerStatus)
    })
  }
}