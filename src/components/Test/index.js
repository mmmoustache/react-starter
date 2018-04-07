import React from 'react';
import PropTypes from 'prop-types';

const Test = ({ updateTerm, activeTerm }) => (
  <div>
    <p>{ activeTerm ? activeTerm : `Hello there!` }</p>
    <button type="button" onClick={() => updateTerm('Tee-hee, that tickles!')}>Click Me!</button>
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
