import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => <div className={`row${className ? ` ${className}` : ''}`}>{children}</div>;

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,  
};

Row.defaultProps = {
  className: undefined,
};

export default Row;
