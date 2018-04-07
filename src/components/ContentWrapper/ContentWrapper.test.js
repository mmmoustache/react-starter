import React from 'react';
import renderer from 'react-test-renderer';
import ContentWrapper from '../ContentWrapper';

describe('Component: ContentWrapper', () => {

  it('Should render successfully', () => {
    const component = renderer.create(
      <ContentWrapper>
        <p>Test</p>
        <p>Test</p>
      </ContentWrapper>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

});