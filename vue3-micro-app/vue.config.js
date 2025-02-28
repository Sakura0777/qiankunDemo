const { name } = require('./package');
module.exports = {
  devServer: {
    //监听端口
    port:9999,
    //关闭主机检测，使微应用可以被fetch
    allowedHosts:['all'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-vue3`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
};