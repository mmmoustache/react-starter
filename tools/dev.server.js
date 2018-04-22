require('dotenv').config();
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const serverMiddleware = require('webpack-hot-server-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(middleware(compiler, {
  publicPath: '/',
}));

app.use(hotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client'), {
  hot: true,
  publicPath: '/'
}));

app.use(serverMiddleware(compiler));

app.listen(PORT, () => console.info(`App running in development at http://localhost:${PORT}`));
