const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {  //webpack 配置 scss 根目录
        includePaths: [path.join(__dirname, 'style')]
      },
    }
  },
}