import React from 'react';
import { shallow } from 'enzyme';

import AddButton from '../../../components/layout/AddButton';

it('should render AddButton correctly', () => {
  const wrapper = shallow(<AddButton />);
  expect(wrapper).toMatchSnapshot();
});
