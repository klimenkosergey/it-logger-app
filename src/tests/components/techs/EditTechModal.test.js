import React from 'react';
import { shallow } from 'enzyme';

import EditTechModal from '../../../components/techs/EditTechModal';

it('should render EditTechModal correctly', () => {
  const wrapper = shallow(<EditTechModal />);
  expect(wrapper).toMatchSnapshot();
});
