import React from 'react';
import s from './App.scss';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import settings from '../../styles/settings.scss';
import tools from '../../styles/tools.scss';
import grid from '../../styles/grid.scss';
import { hot } from 'react-hot-loader'
import Test from '../../containers/Test';
import routes from '../../routes';

if (typeof(window) == 'undefined') {
	global.window = new Object();
}

const App = () => (
  <div className={s.root}>
    <div className="row">
      <div className="column small-12">  
        <Test />
        <Switch>
          {
            routes.map(({ path, exact, component: Component, ...rest }) => <Route key={path} path={path} exact={exact} render={props => <Component {...props} {...rest} />} />)
          }
          <Route render={() => <div>404</div> } />
        </Switch>
      </div>
    </div>
  </div>
);

export default hot(module)(App);
