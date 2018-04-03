const express = require('express');
const path = require('path');
const app = express();

const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use('/build', express.static(__dirname + '/build'));

app.use(ServerRenderer());

app.listen(3002);

