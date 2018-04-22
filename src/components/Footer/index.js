import React from 'react';
import s from './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
			<footer className={s.root}>
        <div className="row">
          <div className="column small-12 text-center">
            <p>Made with love ❤</p>
          </div>
        </div>
      </footer>
		);
	}
}

export default Footer;
