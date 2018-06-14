import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Helmet} from "react-helmet";
import App from './components/App';
import Html from './components/Html';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';

const fs = require('fs');
const util = require('util'); 
const readFile = util.promisify(fs.readFile);

async function getStyles() {
	try {
		return await readFile('build/client.css', (err, data) => data);
	} catch(error) {
		return `Couldn't retrieve css: ${error}`;
	}
}

async function getJs() {
	try {
		return await readFile('build/client.js', (err, data) => data);
	} catch(error) {
		return `Couldn't retrieve js: ${error}`;
	}
}

export default function serverRenderer() {
	return async function (req, res) {

		const styles = await getStyles().then(data => data.toString());
		const script = await getJs().then(data => data.toString());

		const store = createStore(
			allReducers,
		);

    const context = {};

		const markup = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<Provider store={store}>
					<App />
				</Provider>
			</StaticRouter>
		);

		const meta = Helmet.renderStatic();

		res.status(200).send(Html({
			markup, 
			data: {},
			meta,
			styles,
			script, 
			env: process.env.NODE_ENV
		}));
	}
}
