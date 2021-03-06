var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  externals: {
    zepto: 'window.$',
    requestAnimationFrame: 'window.requestAnimationFrame',
    TWEEN: 'window.TWEEN',
    echarts: 'window.echarts'
  },

  // 已修改
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
        "node_modules"
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src/'),
      'assets': path.resolve(__dirname, '../src/assets/'),
      'components': path.resolve(__dirname, '../src/components/'),
      'store': path.resolve(__dirname, '../src/store/')
    }
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.vue$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
          }
        }],
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: ['babel-loader','eslint-loader'],
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },


      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({ sourceMap: useCssSourceMap, extract: true }),
          postcss: [
            require('autoprefixer')({
              browsers: ['ie > 8', 'last 2 version']
            })
          ]
        },
        exclude: /static/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(projectRoot, 'src')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
}
