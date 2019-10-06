import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import techs from '../fixtures/techs';
import { getTechs, addTech, deleteTech } from '../../actions/techs';

const mockStore = configureMockStore([ReduxThunk]);

let store;

beforeEach(() => {
  store = mockStore({ techs: {} });
});

afterEach(() => {
  fetchMock.restore();
});

it('should get techs from server', async () => {
  fetchMock.getOnce('/techs', {
    body: techs,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(getTechs());
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'GET_TECHS',
    payload: techs
  });
});

it('should add tech to server', async () => {
  const newTech = techs[1];
  fetchMock.postOnce('/techs', {
    body: newTech,
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(addTech(newTech));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_TECH',
    payload: newTech
  });
  const lastCall = fetchMock.lastCall();
  expect(lastCall[1]).toEqual({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTech)
  });
});

it('should delete tech from server', async () => {
  const id = techs[2].id;
  fetchMock.deleteOnce(`/techs/${id}`, {
    body: { success: true },
    headers: { 'Content-Type': 'application/json' }
  });

  await store.dispatch(deleteTech(id));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'DELETE_TECH',
    payload: id
  });
  const lastCall = fetchMock.lastCall();
  expect(lastCall[0]).toBe(`/techs/${id}`);
  expect(lastCall[1]).toEqual({
    method: 'DELETE'
  });
});
