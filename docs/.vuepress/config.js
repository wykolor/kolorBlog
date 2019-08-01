module.exports = {
  title: 'kolor',
  description: 'kolor的个人乐园',
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
        link: '/'
      },
      {
        text: 'Japanese',
        link: '/'
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