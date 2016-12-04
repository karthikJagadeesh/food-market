const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/build/'
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}
