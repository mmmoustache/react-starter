import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';
import { Provider } from 'react-redux';
import allReducers from "./reducers";
import { createStore } from "redux";

export default function serverRenderer() {
	return function (req, res) {

		const store = createStore(
			allReducers
		);

		const markup = ReactDOMServer.renderToString(
			<Provider store={store}>
				<App />
			</Provider>
		);

		res.status(200).send(Html({markup: markup}));

	}
}