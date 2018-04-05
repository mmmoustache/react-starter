import React from 'react';
import PropTypes from 'prop-types';
import s from './Test.scss';

const Test = ({ updateTerm, activeTerm }) => (
  <div className={s.root}>
    <p>
      {
        activeTerm ? `Active term: ${activeTerm}` : 'No active term'
      }
    </p>
    <button type="button" onClick={() => updateTerm('Test')}>Click</button>
  </div>
);

Test.propTypes = {
  updateTerm: PropTypes.func.isRequired,
  activeTerm: PropTypes.string,
};

Test.defaultProps = {
  activeTerm: undefined,
};

export default Test;
