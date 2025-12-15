import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'dark', 

  title: "Manima",
  description: "Manima Docs",
  cleanUrls: true,
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
  themeConfig: {
    search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: { displayDetails: 'Подробнее', resetButtonTitle: 'Сбросить', backButtonTitle: 'Закрыть', noResultsText: 'Ничего не найдено', footer: { selectText: 'выбрать', navigateText: 'перемещаться', closeText: 'закрыть' } }
            }
          }
        },
        notFound: {
              title: 'СТРАНИЦА НЕ НАЙДЕНА',
              quote: 'Кажется, вы забрели в Далекие Земли. Тут ничего нет.',
              linkLabel: 'Вернуться на спавн',
              linkText: 'Вернуться на спавн'
            },
    outline: {
          label: 'Содержание',
        },
    logo: '/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Википедия', link: '/wiki/' },
      { text: 'Галерея', link: '/gallery/' },
      { text: 'Магазин', link: 'https://shop.manima.ru', target: '_blank' }
    ],

        sidebar: [
          {
            text: 'ГЛАВНАЯ',
            items: [
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
              { text: '🎁 Ежедневные награды', link: '/info/rewards' },
              { text: '🖼️ Галерея', link: '/gallery' },
              { text: '📦 Наш модпак', link: '/info/modpack' },
              { text: '🗳️ Голосование', link: 'info/vote' }
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
              { text: '🌐 Вернуться на сайт', link: '/' } 
            ]
          }
        ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/ktRjwkR7yp' },
      { icon: 'telegram', link: 'https://t.me/manimaru' }
    ],
    footer: {
      message: '2025-2026 © От игроков для игроков.<br>Авторские права на Minecraft принадлежат Mojang Studios и никак не связаны с Manima.',
      copyright: ''
    }
  }
})
