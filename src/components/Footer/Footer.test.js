import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Component: ContentWrapper', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <Footer />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});