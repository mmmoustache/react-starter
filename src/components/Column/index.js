import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, className, small, medium, large }) => <div className={`column${small ? ` small-${small}` : ''}${medium ? ` medium-${medium}` : ''}${large ? ` large-${large}` : ''}${className ? ` ${className}` : ''}`}>{children}</div>;

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
};

Column.defaultProps = {
  className: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
};

export default Column;
