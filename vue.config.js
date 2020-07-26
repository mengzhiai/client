/*
 * @Author: your name
 * @Date: 2019-11-22 09:19:45
 * @LastEditTime: 2020-04-28 19:02:57
 * @LastEditors: jun
 * @Description: In User Settings Edit
 * @FilePath: \custom_html\vue.config.js
 */
const path = require("path");
module.exports = {
  //基本url
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  //打包的目录
  // outputDir: 'dist',
  outputDir: process.env.NODE_ENV,
  //静态资源放置目录
  assetsDir: 'assets',
  //HTML输出路径
  indexPath: 'index.html',
  //eslint保存时代码检查
  lintOnSave: false,
  //文件名使用哈希
  filenameHashing: true,
  // 是否使用包含运行时编译器的 Vue构建版本
  runtimeCompiler: true,
  //生产环境是否生成 SourceMap
  productionSourceMap: false,
  devServer: {
    //启动时自动打开浏览器
    open: false,
    //热加载
    hotOnly: false,
    //url/id
    host: 'localhost',
    //端口号
    port: 8080,
    //是否启动https
    https: false,
    //设置代理
    proxy: {
      '/api': {
        target: "http://114.116.111.227:20002",
        changeOrigin: true,
        ws: true, // proxy websockets
        pathRewrite: { //重写路径
          "^/api": ''
        }
      }
    },
    before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}