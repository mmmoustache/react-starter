import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import updateTerm from '../../actions/updateTerm';
import Test from '../../components/Test';

class TestComponent extends React.Component {
  static propTypes = {
    updateTerm: PropTypes.func.isRequired,
    activeTerm: PropTypes.string,
  };

  static defaultProps = {
    activeTerm: undefined,
  };

	constructor() {
		super();
    this.updateTerm = this.updateTerm.bind(this);
  }

  updateTerm(value) {
    this.props.updateTerm(value);
  }

	render() {
    return (
      <Test updateTerm={this.updateTerm} activeTerm={this.props.activeTerm} />
    );
  }
}

function mapStateToProps(state) {
	return {
		activeTerm: state.activeTerm,
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		updateTerm: updateTerm,
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TestComponent);
