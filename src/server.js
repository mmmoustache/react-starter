import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';
import { Provider } from 'react-redux';
import allReducers from "./reducers";
import { createStore } from "redux";
import { StaticRouter } from "react-router-dom";
const fs = require('fs');
const util = require('util'); 
const readFile = util.promisify(fs.readFile);

async function getStyles() {
  return await readFile('build/client.css', (err, data) => data);
}

async function getJs() {
  return await readFile('build/client.js', (err, data) => data);
}

export default function serverRenderer() {
	return async function (req, res) {

		/* For inline styling in production - not yet implemented */
		const styles = await getStyles().then(data => data.toString());
		const script = await getJs().then(data => data.toString());

		const store = createStore(
			allReducers
		);

    const context = {};

		const markup = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<Provider store={store}>
					<App />
				</Provider>
			</StaticRouter>
		);

		res.status(200).send(Html({markup: markup, data: {}, styles: styles, script: script}));
	}
}