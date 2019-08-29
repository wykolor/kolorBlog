module.exports = {
  title: 'kolor',
  description: 'kolor的个人站点 记录开发之程',
  base: '/vuePress/', //github的项目名称
  dest: './dist', // 设置输出目录
  repo: 'https://wykolor.github.io/vuePress/',
  themeConfig: {
    // 导航栏
    nav: [{
        text: 'Home',
        link: '/'
      },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/HTML/' },
        { text: 'CSS', link: '/CSS/' },
        { text: 'JavaScript', link: '/JavaScript/' }
      ]},
      {
        text: '博客园',
        link: 'https://www.cnblogs.com/kolor/'
      },
      {
        text: 'Github',
        link: 'http://www.github.com/wykolor'
      }
    ],
    // 侧边栏
    sidebar: 'auto'
    // [
    //   {
    //     title: '前端三剑客',
    //     collapsable: false,
    //     children: [
    //       '/CSS/',
    //       '/HTML/',
    //       '/JavaScript/'
    //     ]
    //   },
    // ]
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
}