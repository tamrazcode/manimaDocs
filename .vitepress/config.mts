import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Manima",
  description: "Manima Docs",
  cleanUrls: true,
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
  themeConfig: {
    outline: {
          label: 'Содержание',
        },
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Википедия', link: '/wiki/' },
      { text: 'Магазин', link: 'https://shop.gokota.ru', target: '_blank' }
    ],

    // Боковое меню
        sidebar: [
          {
            text: 'ГЛАВНАЯ', // Заголовок группы
            items: [
              // Ссылка на wiki/index.md
              { text: '🩷 Manima Wiki', link: '/wiki/' } 
            ]
          },
          {
            text: ' ПРАВИЛА',
            items: [
              { text: '📖 Правила проекта', link: '/rules/' }
            ]
          },
          {
            text: ' ИНФОРМАЦИЯ',
            items: [
              { text: 'ℹ️ О сервере', link: '/info/about' },
              { text: '💰 Экономика', link: '/info/economy' },
              { text: '👑 Привилегии', link: '/info/ranks' },
              { text: '🎁 Ежедневные награды', link: '/info/rewards' }
            ]
          },
          {
            text: ' ОСОБЕННОСТИ',
            items: [
              { text: '🏠 Приват территории', link: '/features/privates' },
              { text: '🏷️ Значки и титулы', link: '/features/tags' },
              { text: '🎤 Голосовой чат', link: '/features/voice' },
              { text: '🎨 Рисование', link: '/features/art' },
              { text: '👕 Скины', link: '/features/skins' }
            ]
          },
          {
            text: ' ПОДДЕРЖКА',
            items: [
              { text: '📈 Мониторинги', link: '/support/monitoring' },
              // Ссылка, которая ведет обратно на главную страницу лендинга
              { text: '🌐 Вернуться на сайт', link: '/' } 
            ]
          }
        ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/ktRjwkR7yp' },
      { icon: 'telegram', link: 'https://discord.com/invite/ktRjwkR7yp' }
    ],
    footer: {
      message: '2025-2026 © Manima — Твой любимый сервер.<br>Авторские права на Minecraft принадлежат Mojang Studios и никак не связаны с Manima.',
      copyright: ''
    }
  }
})
