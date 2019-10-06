import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import logs from '../fixtures/logs';
import {
  getLogs,
  addLog,
  editLog,
  deleteLog,
  searchLogs,
  setCurrent
} from '../../actions/logs';

const mockStore = configureMockStore([ReduxThunk]);
let store, logsDateString;

beforeEach(() => {
  store = mockStore({ logs: {} });
  // Change date property from object to string, cause server returns date as string
  logsDateString = logs.map(log => ({ ...log, date: log.date.toISOString() }));
});

afterEach(() => {
  fetchMock.restore();
});

it('should get logs from server', async () => {
  fetchMock.getOnce('/logs', {
    body: logs,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(getLogs());
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'GET_LOGS',
    payload: logsDateString
  });
});

it('should add log to server', async () => {
  const newLog = logsDateString[1];
  fetchMock.postOnce('/logs', {
    body: newLog,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(addLog(newLog));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_LOG',
    payload: newLog
  });
  const lastCall = fetchMock.lastCall();
  expect(lastCall[1]).toEqual({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newLog)
  });
});

it('should edit log on server', async () => {
  const updLog = logsDateString[0];
  fetchMock.putOnce(`/logs/${updLog.id}`, {
    body: updLog,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(editLog(updLog));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'EDIT_LOG',
    payload: updLog
  });
  const lastCall = fetchMock.lastCall();
  expect(lastCall[0]).toBe(`/logs/${updLog.id}`);
  expect(lastCall[1]).toEqual({
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updLog)
  });
});

it('should delete log on server', async () => {
  const delLog = logsDateString[2];
  fetchMock.deleteOnce(`/logs/${delLog.id}`, {
    body: { success: true },
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(deleteLog(delLog.id));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'DELETE_LOG',
    payload: delLog.id
  });
  const lastCall = fetchMock.lastCall();
  expect(lastCall[0]).toBe(`/logs/${delLog.id}`);
  expect(lastCall[1]).toEqual({
    method: 'DELETE'
  });
});

it('should search logs on server and return filtered logs', async () => {
  const text = 'network';
  fetchMock.getOnce(`/logs/?q=${text}`, {
    body: logs,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(searchLogs(text));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'SEARCH_LOGS',
    payload: logsDateString
  });
});

it('should set current log', () => {
  const curLog = logs[1];
  expect(setCurrent(curLog)).toEqual({
    type: 'SET_CURRENT',
    payload: curLog
  });
});
