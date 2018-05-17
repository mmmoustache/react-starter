import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Navigation.scss';
import routes from '../../routes';
import Logo from './Logo.svg';
import Row from '../Row';
import Column from '../Column';

class Navigation extends React.Component {
  render() {
    const { navigationIsHidden, handleToggle, isMobile } = this.props;
    return (
			<header className={s.root}>
        <Row className="small-collapse large-uncollapse">
          <Column className="small-12">
            <Link to="/" className={s.logo} title="React Starter" onClick={isMobile ? handleToggle : () => {}}>
              <img src={Logo} alt="React Starter" className={s.logoImage} />
              <span className={s.logoText}>React Starter</span>
            </Link>
            <nav className={navigationIsHidden ? s.listHidden : s.list}>
              <ul className={s.listInner}>
                {
                  routes.filter(e => e.showInNav).map(e => 
                    <li key={e.path} className={s.listItem}>
                      <Link to={e.path} className={s.link} title={e.title} onClick={isMobile ? handleToggle : () => {}}>{e.title}</Link>
                    </li>
                  )
                }
              </ul>
            </nav>
            <button type="button" onClick={isMobile ? handleToggle : () => {}} className={s.toggle}>
              <span className={navigationIsHidden ? s.toggleInner : s.toggleInnerActive}>
                Menu
              </span>
            </button>
          </Column>
        </Row>
			</header>
		);
	}
}

Navigation.propTypes = {
  navigationIsHidden: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Navigation;
