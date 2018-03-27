const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const serverMiddleware = require('webpack-hot-server-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  publicPath: '/build/',
}));

// Gets the client config from the webpack config file
app.use(hotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client'), {
  hot: true,
  publicPath: '/build/'
}));

app.use(serverMiddleware(compiler));


app.listen(3000, () => console.log('Listening on port 3000!'))
