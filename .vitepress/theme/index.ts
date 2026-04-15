import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import Snow from './Snow.vue'
import CopyNotification from './CopyNotification.vue'
import HeroBadge from './HeroBadge.vue'
import ServerStatus from './ServerStatus.vue'
import TiltEffect from './TiltEffect.vue'
import DiscordWidget from './DiscordWidget.vue'
import CustomCursor from './CustomCursor.vue'
import ImageZoom from './ImageZoom.vue'
import SiteSettings from './SiteSettings.vue'
import ScrollObserver from './ScrollObserver.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      
      
      'layout-bottom': () => [
        h(Snow), 
        h(CopyNotification),
        h(TiltEffect),
        h(CustomCursor),
        h(ImageZoom),
        h(SiteSettings),
        h(ScrollObserver),
      ],

      'home-hero-info-before': () => h(HeroBadge),
      
      'home-hero-actions-after': () => h(ServerStatus),

      'sidebar-nav-after': () => h(DiscordWidget),
    
      
    })
  }
}