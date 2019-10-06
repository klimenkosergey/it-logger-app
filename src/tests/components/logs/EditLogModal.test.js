import React from 'react';
import { shallow } from 'enzyme';

import { EditLogModal } from '../../../components/logs/EditLogModal';

let wrapper, editLog, current;

beforeEach(() => {
  editLog = jest.fn();
  current = {
    id: 1,
    message: 'Fixed hard drive',
    tech: 'Tony Stark',
    date: '2019-08-15T10:27:16.427Z'
  };
  wrapper = shallow(<EditLogModal editLog={editLog} current={current} />);
});

it('renders EditLogModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
