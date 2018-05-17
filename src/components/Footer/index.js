import React from 'react';
import s from './Footer.scss';
import Row from '../Row';
import Column from '../Column';

class Footer extends React.Component {
  render() {
    return (
			<footer className={s.root}>
        <Row>
          <Column className="small-12 text-center">
            <p>Made with love ❤</p>
          </Column>
        </Row>
      </footer>
		);
	}
}

export default Footer;
