import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation';
import updateNavVisibility from '../../actions/updateNavVisibility';

class NavigationComponent extends React.Component {

  static propTypes = {
    updateNavVisibility: PropTypes.func.isRequired,
    navigationIsHidden: PropTypes.bool.isRequired,
  };

	constructor() {
		super();

    this.handleResize = this.handleResize.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillMount() {
    this.handleResize();
  }

	componentDidMount() {
    window.addEventListener('resize', this.handleResize);
	}

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: window.innerWidth < 768,
    });
  }

  handleToggle() {
    this.props.updateNavVisibility(this.props.navigationIsHidden);
  }

	render() {
    const { navigationIsHidden } = this.props;
    return (
      <Navigation 
        isMobile={this.state.isMobile}
        navigationIsHidden={navigationIsHidden} 
        handleToggle={this.handleToggle} />
    );
  }
}

function mapStateToProps(state) {
	return {
		navigationIsHidden: !state.navigationIsHidden,
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		updateNavVisibility: updateNavVisibility,
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps, null, { pure: false })(NavigationComponent);
