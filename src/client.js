import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import allReducers from './reducers';

const isDev = process.env.NODE_ENV !== 'production';

if ('serviceWorker' in navigator) {

  if (isDev) console.info('CLIENT: service worker registration in progress.');

  navigator.serviceWorker.register('/service-worker.js').then(() => {
    if (isDev) console.info('CLIENT: service worker registration complete.');
  }, () => {
    if (isDev) console.info('CLIENT: service worker registration failure.');
  });

} else {
  if (isDev) console.info('CLIENT: service worker is not supported.');
}

const store = createStore(
  allReducers
);

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
