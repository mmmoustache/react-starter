import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';
import { Provider } from 'react-redux';
import allReducers from "./reducers";
import { createStore } from "redux";
import { StaticRouter, matchPath } from "react-router-dom";

export default function serverRenderer() {
	return function (req, res) {

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

		res.status(200).send(Html({markup: markup}));
		
	}
}