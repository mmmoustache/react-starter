const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const serverMiddleware = require('webpack-hot-server-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  publicPath: '/',
}));

// Gets the client config from the webpack config file
app.use(hotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client'), {
  hot: true,
  publicPath: '/'
}));

app.use(serverMiddleware(compiler));

app.listen(3002, () => console.info(`App running in development at http://localhost:3002`));
