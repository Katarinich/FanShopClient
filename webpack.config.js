var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var buildDir = 'build';
var targetDir = 'static/' + buildDir;
var publicPath = '/' + buildDir + '/';

var config = {
  devtool: 'cheap-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    "./node_modules/font-awesome/scss/font-awesome.scss",
    "./node_modules/swiper/dist/css/swiper.min.css",
    "./node_modules/swiper/dist/js/swiper.min.js",
    "./static/select_option1.css",
    "./static/jquery.selectbox-0.1.3.min.js",
    "bootstrap-sass!./bootstrap-sass.config.js",
    './app/index'
  ],
  output: {
    path: path.join(__dirname, targetDir),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/), // Isomorphic fetch workaround
    new webpack.IgnorePlugin(/iconv.*/), // Isomorphic fetch workaround
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),

    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', {
        allChunks: true
      })
  ],
  progress: true,
  //
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=25000' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.js$/, loader: 'eslint', include: [ path.join(__dirname, 'src') ] }
    ]
  },
  eslint: {
    emitWarning: true
  }
}

module.exports = config;
