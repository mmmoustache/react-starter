import React from 'react';
import renderer from 'react-test-renderer';
import Html from '../Html';

describe('Component: ContentWrapper', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Html />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});