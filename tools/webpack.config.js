const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const extensions = ['*', '.js', '.jsx', '.css', '.scss'];
const isDev = process.env.NODE_ENV !== 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const clientEntry = [
  './src/client.js'
];

const clientPlugins = [
  new ExtractTextPlugin({
    filename: 'client.css',
    allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env.__isBrowser__': true,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }),
  new CopyWebpackPlugin([
    { from: 'public/', to: '../build/' }
  ])
];

if (isDev) {
  clientEntry.push(
    'webpack-hot-middleware/client'
  );
  clientPlugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = [
  {
    name: 'client',
    entry: clientEntry,
    target: 'web',
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/',
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
        },
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    resolve: {
      extensions: extensions
    },
    plugins: clientPlugins
  },
  {
    name: 'server',
    target: 'node',
    entry: './src/server.js',
    output: {
      path: path.join(__dirname, '../build'),
      publicPath: '/',
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /(\.css|\.scss)$/,
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
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          loader: 'url-loader?limit=100000'
        }
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
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      }),
      new WriteFilePlugin(),
      new webpack.DefinePlugin({
        'process.env.__isBrowser__': false,
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
      })
    ]
  }
];