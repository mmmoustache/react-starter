import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './test.scss';

export default class Hello extends React.Component {
  static propTypes = {
    test: PropTypes.string,
  };

  static defaultProps = {
    test: 'test',
  };

  render() {
    const numbers = [1, 2, 3];
    console.log(...numbers);

    return (
      <div className={styles.root}>
        Hello? {this.props.test}
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));
module.hot.accept();
