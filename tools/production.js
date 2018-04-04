const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

const ClientCSSSPath = path.join(__dirname, '../build/client.css');
const ClientJsSPath = path.join(__dirname, '../build/client.js');
const ServerRendererPath = path.join(__dirname, '../build/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use(compression());

/* 
  Currently manually mapping asset requests to minified versions
*/
app.get("/client.css", (req, res) => res.sendFile(ClientCSSSPath));
app.get("/client.js", (req, res) => res.sendFile(ClientJsSPath));

app.use(ServerRenderer());

app.listen(3002, () => console.log(`App running in production mode on on port 3002!`));
