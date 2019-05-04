module.exports = {
    base:'/sakura-ui/',
    title: 'Sakura UI',
    description: 'Inspiration from heian sakura',
    head: [
      ['link', { rel: 'icon', href: './favicon.png' }]
   ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        // { text: 'Guide', link: '/guide/' },
        { text: 'Github', link: 'https://github.com/Firenzia/sakura-ui/' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: true,
              children: [
                'guide/install.md',
                'guide/get-started.md'
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'components/basic/',
                'components/form/',
                'components/navigation/',
                'components/notice/',
                'components/other/'
              ]
            },
        ]
      }
  }