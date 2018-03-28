import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import allReducers from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";

const store = createStore(
  allReducers
);

const render = (Component) => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
