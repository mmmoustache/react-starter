import React from 'react';
import s from './Footer.scss';
import { Row, Column } from 'react-foundation';

class Footer extends React.Component {
  render() {
    return (
			<footer className={s.root}>
        <Row>
          <Column small={12} className="text-center">
            <p>Made with love ❤</p>
          </Column>
        </Row>
      </footer>
		);
	}
}

export default Footer;
