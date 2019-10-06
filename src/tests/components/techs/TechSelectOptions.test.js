import React from 'react';
import { shallow } from 'enzyme';

import techs from '../../fixtures/techs';
import { TechSelectOptions } from '../../../components/techs/TechSelectOptions';

it('should render TechSelectOptions correctly', () => {
  const wrapper = shallow(<TechSelectOptions techs={techs} />);
  expect(wrapper).toMatchSnapshot();
});
