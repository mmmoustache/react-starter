import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = (Component) => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};

render(App);
