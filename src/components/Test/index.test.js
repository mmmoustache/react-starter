import React from 'react';
import Test from '../Test';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Component: Test', () => {
  let component;

  it('Should render successfully', () => {
    component = shallow(
      <Test updateTerm={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('updateTerm should be called', () => {
    component.find('button').simulate('click');
    expect(component).toMatchSnapshot();
  });

});
