module.exports = {
    base:'/sakura-ui/',
    title: 'Sakura UI',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
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
                  'components/notice/'
                ]
              },
          ]
      }
  }