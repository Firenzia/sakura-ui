module.exports = {
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
                collapsable: false,
                children: [
                  'guide/install.md',
                  'guide/get-started.md'
                ]
              },
              {
                title: '组件',
                collapsable: false,
                children: [
                  'components/basic/',
                ]
              },
          ]
      }
  }