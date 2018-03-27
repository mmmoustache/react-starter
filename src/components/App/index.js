import React from 'react';
import s from './App.scss';
import { hot } from 'react-hot-loader'
import Test from '../Test';

if (typeof(window) == 'undefined') {
	global.window = new Object();
}

const initialData = window ? window.__INITIAL_STATE__ : {};

const App = () => (
  <div className={s.root}>
    <Test />
  </div>
);

export default hot(module)(App);
