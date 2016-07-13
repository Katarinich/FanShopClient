var path = require('path')
var webpack = require('webpack')

var config = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/), // Isomorphic fetch workaround
    new webpack.IgnorePlugin(/iconv.*/), // Isomorphic fetch workaround
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/, 
        include: __dirname
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [
          path.join(__dirname, 'src')
        ]
      }
    ]
  },
  eslint: {
    emitWarning: true
  }
}

module.exports = config;
