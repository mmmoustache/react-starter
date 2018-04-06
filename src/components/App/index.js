import React from 'react';
import s from './App.scss';
import { Route, Link, Switch } from 'react-router-dom';

/*eslint-disable */
/* Importing grid system, sass variables and mixins  */
import settings from '../../styles/settings.scss';
import tools from '../../styles/tools.scss';
import grid from '../../styles/grid.scss';
/*eslint-enable */

import { hot } from 'react-hot-loader'
import Test from '../../containers/Test';
import routes from '../../routes';

if (typeof(window) == 'undefined') {
	global.window = new Object();
}

const App = () => (
  <div className={s.root}>
    <div className="row test">
      <div className="column small-12">  
        <Test />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/sdfgsdfgdsfg">404</Link></li>
        </ul>
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

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
