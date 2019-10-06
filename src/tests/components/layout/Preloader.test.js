import React from 'react';
import { shallow } from 'enzyme';

import Preloader from '../../../components/layout/Preloader';

it('should render Preloader correctly', () => {
  const wrapper = shallow(<Preloader />);
  expect(wrapper).toMatchSnapshot();
});
