module.exports = {
  title: 'kolor乐园',
  description: 'kolor的个人疯狂乐园',
  themeConfig: {
    // 导航栏
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/'
      },
      {
        text: 'Google',
        link: 'https://google.com'
      },
      {
        text: 'Languages',
        items: [{
            text: 'Chinese',
            link: '/language/chinese'
          },
          {
            text: 'Japanese',
            link: '/language/japanese'
          }
        ]
      },
      {
        text: 'Github',
        link: 'http://www.github.com/wykolor'
      }
    ],
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
}