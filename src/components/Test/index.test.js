import React from 'react';
import renderer from 'react-test-renderer';
import Test from '../Test';

describe('Component: Test', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Test updateTerm={() => {}} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});
