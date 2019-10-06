import React from 'react';
import { shallow } from 'enzyme';

import { AddTechModal } from '../../../components/techs/AddTechModal';

it('should render AddTechModal correctly', () => {
  const addTechSpy = jest.fn();
  const wrapper = shallow(<AddTechModal addTech={addTechSpy} />);
  expect(wrapper).toMatchSnapshot();
});
