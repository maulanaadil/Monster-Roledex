import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../index';

describe('renders MainPage page', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<MainPage />);
  });

  it('should render same snapshots of MainPage page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
