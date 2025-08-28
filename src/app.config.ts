export default {
  pages: [
    'pages/index/index',
    'pages/about/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',

    list: [
      {
        pagePath: 'pages/index/index',
        text: '组件',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ]
  },


  subPackages: [
    {
      root: 'pagesSub',
      pages: ['other/index', 'login/index']
    }
  ]
}
