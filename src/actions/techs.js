export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({ type: 'GET_TECHS', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error getting technicians' });
  }
};

export const addTech = tech => async dispatch => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tech)
    });
    const data = await res.json();

    dispatch({ type: 'ADD_TECH', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error adding technician' });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });

    dispatch({ type: 'DELETE_TECH', payload: id });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: 'Error deleting technician' });
  }
};
