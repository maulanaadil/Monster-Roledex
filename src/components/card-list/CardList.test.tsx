import React from 'react';
import { shallow } from 'enzyme';
import CardList from './index';
import 'jest-styled-components';

describe('renders a Card', () => {
  const mockMonster = [
    {
      id: 1,
      name: 'Nata',
      email: 'nata@test.com',
    },
    {
      id: 2,
      name: 'Eca',
      email: 'eca@test.com',
    },
    {
      id: 3,
      name: 'Vasya',
      email: 'vasya@test.com',
    },
    {
      id: 4,
      name: 'Sabad',
      email: 'sabad@test.com',
    },
  ];

  const wrapper = shallow(<CardList monster={mockMonster} />);
  afterAll(() => wrapper.unmount());

  it('should render a card list component', () => {
    expect(wrapper).toHaveStyleRule('display', 'grid');
  });

  it('should render same snapshots of card list component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
