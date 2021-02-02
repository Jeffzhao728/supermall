module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'router':'@/router', //router只在main.js中引用，没有必要
        // 'store':'@/store', //无需引用
        'views':'@/views',
      }
    }
  }
}