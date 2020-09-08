const path = require('path')
const vueSrc = './src'

module.exports = {
  runTimeCompiler: true,
  publicPath: '/eve-echoes-tools-corp/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.join(__dirname, vueSrc)
      }
    }
  }
}
