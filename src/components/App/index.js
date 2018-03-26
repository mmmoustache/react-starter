import React from 'react';
import s from './App.scss';

if (typeof(window) == 'undefined') {
	global.window = new Object();
}

const initialData = window ? window.__INITIAL_STATE__ : {};

const App = () => (
  <div className={s.root}>
    Fart?
  </div>
);

export default App;
// module.hot.accept();

if (module.hot) {
  module.hot.accept();
}