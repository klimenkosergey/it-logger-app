export const getLogs = () => async dispatch => {
  try {
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({ type: 'GET_LOGS', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error loading logs' });
  }
};

export const addLog = log => async dispatch => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    });
    const data = await res.json();

    dispatch({ type: 'ADD_LOG', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error adding log' });
  }
};

export const editLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    });
    const data = await res.json();

    dispatch({ type: 'EDIT_LOG', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error editing log' });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });

    dispatch({ type: 'DELETE_LOG', payload: id });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error removing log' });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    const res = await fetch(`/logs/?q=${text}`);
    const data = await res.json();

    dispatch({ type: 'SEARCH_LOGS', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error searching logs' });
  }
};

export const setCurrent = log => ({ type: 'SET_CURRENT', payload: log });
