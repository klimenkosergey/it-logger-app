import techs from '../fixtures/techs';
import techsReducer from '../../reducers/techs';

const defaultState = {
  techs,
  loading: false,
  error: null
};

it('should set default values', () => {
  expect(techsReducer(undefined, { type: '@@INIT' })).toEqual({
    ...defaultState,
    techs: [],
    loading: true
  });
});

it('should set techs', () => {
  expect(
    techsReducer(undefined, { type: 'GET_TECHS', payload: techs })
  ).toEqual(defaultState);
});

it('should add tech', () => {
  const newTech = {
    id: 4,
    firstName: 'Bruce',
    lastName: 'Banner'
  };
  expect(
    techsReducer(defaultState, { type: 'ADD_TECH', payload: newTech })
  ).toEqual({
    ...defaultState,
    techs: [...defaultState.techs, newTech]
  });
});

it('should edit tech with valid id', () => {
  const updTech = {
    ...techs[1],
    lastName: 'Snow'
  };
  expect(
    techsReducer(defaultState, { type: 'EDIT_TECH', payload: updTech })
  ).toEqual({
    ...defaultState,
    techs: defaultState.techs.map(tech =>
      tech.id === updTech.id ? updTech : tech
    )
  });
});

it('should not edit tech with invalid id', () => {
  const updTech = {
    ...techs[1],
    lastName: 'Snow',
    id: 10
  };
  expect(
    techsReducer(defaultState, { type: 'EDIT_TECH', payload: updTech })
  ).toEqual(defaultState);
});

it('should delete tech with valid id', () => {
  const id = techs[1];
  expect(
    techsReducer(defaultState, { type: 'DELETE_TECH', payload: id })
  ).toEqual({
    ...defaultState,
    techs: defaultState.techs.filter(tech => tech.id !== id)
  });
});

it('should not delete tech with invalid id', () => {
  const id = 10;
  expect(
    techsReducer(defaultState, { type: 'DELETE_TECH', payload: id })
  ).toEqual(defaultState);
});

it('should set error', () => {
  const error = 'Error adding tech';
  expect(
    techsReducer(defaultState, { type: 'SET_ERROR', payload: error })
  ).toEqual({
    ...defaultState,
    error
  });
});
