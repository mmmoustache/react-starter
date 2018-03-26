const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const extensions = ['*', '.js', '.jsx', '.css', '.scss'];
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  inject: 'body'
});

module.exports = [
  {
    name: 'client',
    entry: [
      'react-hot-loader/patch',
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
        }
      ]
    },
    resolve: {
      extensions: extensions
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      })
    ]
  },
  {
    name: 'server',
    target: 'node',
    entry: [
      './src/server.js'
    ],
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
        filename: '[name].css',
        allChunks: true
      })
    ]
  }
];