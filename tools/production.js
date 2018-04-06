const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use(compression());

// app.use('/assets', express.static('assets'));
app.use('/', express.static('build'));

app.use(ServerRenderer());

app.listen(3002, () => console.info(`App running in production at http://localhost:3002`));
