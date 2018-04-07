import React from 'react';
import Test from '../Test';
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
    <Test updateTerm={() => {}} store={store} />
  );

  it('Should render successfully', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should run updateTerm function successfully', () => {
    component.dive().instance().updateTerm();
  });

});