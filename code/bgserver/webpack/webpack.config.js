const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清除dist
module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', '../src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: '[name][hash].js',
    chunkFilename: '[name][id][hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /containers\/\.(js)?$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'bundle-loader',
          options: {
            lazy: true
          }
        }
      },
      {
        test: /\.css?$/,
        include: /src/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'         
        ]
      },
      {
        test: /\.less?$/,
        include: /src/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.sass?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: '../src/index.html'
    })
  ],
  resolve: { // 配置路径别名
    alias: {
      '@src': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
      '@containers': path.resolve(__dirname, '../src/containers/')
    }
  }
}