const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap:false,

  lintOnSave:false , // 修改成false 就是不检查
  //代理跨域
  devServer: {
    open: true,

    host: 'localhost',
    port: 8080,
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        pathRewrite:{'^/api':''},
      }
    }
  }
})
