require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');
const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use('/', express.static('build'));

app.use(ServerRenderer());

app.listen(PORT, () => console.info(`App running in production at http://localhost:${PORT}`));
