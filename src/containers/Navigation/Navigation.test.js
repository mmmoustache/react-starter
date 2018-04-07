import React from 'react';
import Navigation from '../Navigation';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store = configureStore([
    thunk,
])();

configure({ adapter: new Adapter() });
describe('Component: ContentWrapper', () => {
      
  const component = shallow(
    <Navigation updateNavVisibility={() => {}} navigationIsHidden store={store} />
  );

  it('Should render successfully', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should run handleResize function successfully', () => {
    component.dive().instance().handleResize();
  });

  it('Should run handleToggle function successfully', () => {
    component.dive().instance().handleToggle();
  });

  it('Should run componentWillUnmount function successfully', () => {
    component.dive().instance().componentWillUnmount();
  });
});