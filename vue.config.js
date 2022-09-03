module.exports = {
  // 打包
  outputDir: './build',
  // publicPath: './',
  // 配置: 和webpack属性完全一致, 最后会进行合并
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
