import React from 'react';
import PropTypes from 'prop-types';
import s from './ContentWrapper.scss';

const ContentWrapper = ({ children }) => <div className={s.root}>{children}</div>;

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
