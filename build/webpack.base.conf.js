var path = require('path')
var config = require('./project')
var utils = require('./utils')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')
var rootPath = path.resolve(__dirname)
var srcPath = path.resolve( rootPath, '../src' )
var entries = {}
var plugins = []
config.dev.pages.forEach(function(page){
  entries[page] = path.resolve (srcPath, './pages/' + page + '/index.js')
})
config.dev.pages.forEach(function(page){
  var conf = {
    template : path.resolve(__dirname, '../src/pages/' + page + '/index.html' ),
    filename : page +'.html',
    chunks : 'static/js/' + page + '.js',
    chunksSortMode : 'dependency',
    inject : 'body'
  }
  plugins.push(new HtmlWebpackPlugin(conf))
})

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: 'static/js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: plugins,
  vue: {
    loaders: utils.cssLoaders()
  }
}
