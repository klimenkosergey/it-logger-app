import React from 'react';
import { shallow, mount } from 'enzyme';

import logs from '../../fixtures/logs';
import { LogList } from '../../../components/logs/LogList';

let wrapper, logsFixedDate, loading, getLogsSpy, deleteLogSpy, setCurrentSpy;

beforeEach(() => {
  loading = false;
  logsFixedDate = logs.map(log => ({
    ...log,
    date: '2019-08-15T10:27:16.427Z'
  }));
  getLogsSpy = jest.fn();
  deleteLogSpy = jest.fn();
  setCurrentSpy = jest.fn();
  wrapper = shallow(
    <LogList
      logs={logsFixedDate}
      loading={loading}
      getLogs={getLogsSpy}
      deleteLog={deleteLogSpy}
      setCurrent={setCurrentSpy}
    />
  );
});

it('should render LogList correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render Preloader if loading', () => {
  wrapper = shallow(
    <LogList
      logs={logsFixedDate}
      loading={true}
      getLogs={getLogsSpy}
      deleteLog={deleteLogSpy}
      setCurrent={setCurrentSpy}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should handle getLogs when mounted', () => {
  wrapper = mount(
    <LogList
      logs={logsFixedDate}
      loading={loading}
      getLogs={getLogsSpy}
      deleteLog={deleteLogSpy}
      setCurrent={setCurrentSpy}
    />
  );
  expect(getLogsSpy).toHaveBeenCalled();
});

it('should handle deleteLog', () => {
  const logs = wrapper.find('LogItem');
  logs.forEach(log => log.prop('deleteLog')());
  expect(deleteLogSpy).toHaveBeenCalledTimes(logs.length);
});

it('should handle setCurrent', () => {
  const logs = wrapper.find('LogItem');
  logs.forEach(log => log.prop('setCurrent')());
  expect(setCurrentSpy).toHaveBeenCalledTimes(logs.length);
});
