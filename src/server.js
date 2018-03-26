import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';
import Html from './components/Html';

export default function serverRenderer() {
	return function (req, res, next) {
    
    const data = {
      stuff: "arse"
    };
    
		const markup = ReactDOMServer.renderToString(
      <App />
		);

		res.status(200).send(Html({markup: markup}));

	}
}