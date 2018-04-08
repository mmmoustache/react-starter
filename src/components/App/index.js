import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import s from './App.scss';

/*eslint-disable */
/* Importing grid system, sass variables and mixins  */
import settings from '../../styles/settings.scss';
import tools from '../../styles/tools.scss';
import grid from '../../styles/grid.scss';
/*eslint-enable */

import routes from '../../routes';
import Navigation from '../../containers/Navigation';
import Footer from '../../components/Footer';
import PageNotFound from '../../templates/PageNotFound';

if (typeof(window) == 'undefined') {
	global.window = new Object();
}

class App extends React.Component {

  static propTypes = {
    navigationIsHidden: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className={this.props.navigationIsHidden ? s.root : s.rootNavOpen}>
        <a href="#main" className={s.skipToMain}>skip to main content</a>
        <Navigation />
        <main id="main" name="main" className={s.contentWrapper}>
          <Switch>
            {
              routes.map(({ path, exact, component: Component, ...rest }) => <Route key={path} path={path} exact={exact} render={props => <Component {...props} {...rest} />} />)
            }
            <Route render={() => <PageNotFound /> } />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		navigationIsHidden: !state.navigationIsHidden,
	};
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(connect(mapStateToProps, null, null, { pure: false })(App)) : withRouter(connect(mapStateToProps)(App)));
