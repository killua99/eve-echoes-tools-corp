const path = require('path')
const vueSrc = './src'

module.exports = {
  runtimeCompiler: true,
  publicPath: '/eve-echoes-tools-corp/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json'],
      alias: {
        '@': path.join(__dirname, vueSrc)
      }
    }
  }
}
