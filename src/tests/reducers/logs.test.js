import logs from '../fixtures/logs';
import logsReducer from '../../reducers/logs';

const defaultState = {
  logs,
  current: null,
  loading: false,
  error: null
};

it('should set default values', () => {
  expect(logsReducer(undefined, { type: '@@INIT' })).toEqual({
    ...defaultState,
    logs: [],
    loading: true
  });
});

it('should set logs', () => {
  expect(logsReducer(undefined, { type: 'GET_LOGS', payload: logs })).toEqual(
    defaultState
  );
});

it('should add log', () => {
  const log = {
    id: 4,
    message: 'Replace router in server room',
    tech: 'Peter Parker',
    attention: true,
    date: new Date()
  };
  expect(logsReducer(defaultState, { type: 'ADD_LOG', payload: log })).toEqual({
    ...defaultState,
    logs: [...defaultState.logs, log]
  });
});

it('should edit log with valid id', () => {
  const updLog = {
    ...logs[1],
    message: 'Station 007 offline',
    tech: 'Stephen Strange'
  };
  expect(
    logsReducer(defaultState, { type: 'EDIT_LOG', payload: updLog })
  ).toEqual({
    ...defaultState,
    logs: defaultState.logs.map(log => (log.id === updLog.id ? updLog : log))
  });
});

it('should not edit log with invalid id', () => {
  const updLog = {
    ...logs[1],
    id: 10
  };
  expect(
    logsReducer(defaultState, { type: 'EDIT_LOG', payload: updLog })
  ).toEqual(defaultState);
});

it('should delete log with valid id', () => {
  const id = logs[1].id;
  expect(
    logsReducer(defaultState, { type: 'DELETE_LOG', payload: id })
  ).toEqual({
    ...defaultState,
    logs: defaultState.logs.filter(log => log.id !== id)
  });
});

it('should not delete log with invalid id', () => {
  const id = 10;
  expect(
    logsReducer(defaultState, { type: 'DELETE_LOG', payload: id })
  ).toEqual(defaultState);
});

it('should set searched logs', () => {
  const searchedLogs = [logs[1], logs[2]];
  expect(
    logsReducer(defaultState, { type: 'SEARCH_LOGS', payload: searchedLogs })
  ).toEqual({
    ...defaultState,
    logs: searchedLogs
  });
});

it('should set current log', () => {
  const current = logs[1];
  expect(
    logsReducer(defaultState, { type: 'SET_CURRENT', payload: current })
  ).toEqual({
    ...defaultState,
    current
  });
});

it('should set error', () => {
  const error = 'Error adding log';
  expect(
    logsReducer(defaultState, { type: 'SET_ERROR', payload: error })
  ).toEqual({
    ...defaultState,
    error
  });
});
