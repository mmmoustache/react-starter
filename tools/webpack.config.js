const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const extensions = ['*', '.js', '.jsx', '.css', '.scss'];

module.exports = [
  {
    name: 'client',
    entry: [
      'webpack-hot-middleware/client',
      './src/client.js'
    ],
    target: 'web',
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/build/',
      filename: 'client.js'
    },
		devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  camelCase: 'dashes',
                  minimize: true,
                  sourceMap: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              },
              {
                loader: 'resolve-url-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          }))
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: extensions
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: 'client.css',
        allChunks: true
      }),
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: './src/server.js',
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/build/',
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  camelCase: 'dashes',
                  minimize: true,
                  sourceMap: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              },
              {
                loader: 'resolve-url-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
      ]
    },
    resolve: {
      extensions: extensions
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'server.css',
        allChunks: true,
      }),
      new WriteFilePlugin(),
    ]
  }
];