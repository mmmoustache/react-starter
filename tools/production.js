const express = require('express');
const path = require('path');
const app = express();

const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use(ServerRenderer());

app.listen(3002);