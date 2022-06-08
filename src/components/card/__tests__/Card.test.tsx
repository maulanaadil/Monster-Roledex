import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';
import 'jest-styled-components';

describe('renders a Card', () => {
  const initProps = {
    id: 1,
    name: 'test',
    email: 'test@test.com',
  };

  const wrapper = shallow(<Card {...initProps} />);

  it('should render a card components if props presents', () => {
    expect(wrapper).toHaveStyleRule('background-color', '#95dada');
    expect(wrapper.find('h2').text()).toContain(initProps.name);
    expect(wrapper.find('p').text()).toContain(initProps.email);
    expect(wrapper.find('img').prop('src')).toBe(
      `https://robohash.org/${initProps.id}?set=set2&size=180x180`
    );
  });

  it('should render same snapshots of card component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
