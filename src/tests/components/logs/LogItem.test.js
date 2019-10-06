import React from 'react';
import { shallow } from 'enzyme';

import LogItem from '../../../components/logs/LogItem';

let wrapper, log, deleteLogSpy, setCurrentSpy;

beforeEach(() => {
  log = {
    id: 1,
    message: 'Fixed hard drive',
    tech: 'Tony Stark',
    date: '2019-08-15T10:27:16.427Z'
  };
  deleteLogSpy = jest.fn();
  setCurrentSpy = jest.fn();
  wrapper = shallow(
    <LogItem log={log} deleteLog={deleteLogSpy} setCurrent={setCurrentSpy} />
  );
});

it('should render LogItem correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle deleteLog', () => {
  wrapper
    .find('.secondary-content')
    .simulate('click', { preventDefault: jest.fn() });
  expect(deleteLogSpy).toHaveBeenCalledWith(log.id);
});

it('should handle setCurrent', () => {
  wrapper.find('.modal-trigger').simulate('click');
  expect(setCurrentSpy).toHaveBeenCalledWith(log);
});
