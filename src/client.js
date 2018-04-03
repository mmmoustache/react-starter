import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import allReducers from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';

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
