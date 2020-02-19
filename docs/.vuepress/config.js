module.exports = {
  home: true,
  title: "kolor",
  description: "kolor的个人站点 记录开发之程",
  base: "/kolorBlog/", //github的项目名称
  dest: "./dist", // 设置输出目录
  repo: "https://wykolor.github.io/kolorBlog/",
  head: [
    ['link', {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    logo: "/kolor1.jpg",
    // 导航栏
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "前端三剑客",
        items: [{
            text: "HTML",
            link: "/HTML/"
          },
          {
            text: "CSS",
            link: "/CSS/"
          },
          {
            text: "JavaScript",
            link: "/JavaScript/"
          }
        ]
      },
      {
        text: "Github",
        link: "http://www.github.com/wykolor"
      }
    ],
    // 侧边栏
    sidebar: {
      "/JavaScript/": [
        "",
        "this",
        "arr",
        "precompile",
        "recursion",
        "errorDesc",
        "dom",
        "browser"
      ],
      "/CSS/": ["", "boxModel", "boxModelApplication", "rowBox", "cascading"]
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  }
};