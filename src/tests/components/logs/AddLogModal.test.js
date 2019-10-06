import React from 'react';
import { shallow } from 'enzyme';

import { AddLogModal } from '../../../components/logs/AddLogModal';

let wrapper, addLog;

beforeEach(() => {
  addLog = jest.fn();
  wrapper = shallow(<AddLogModal addLog={addLog} />);
});

it('renders AddLogModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
