const logsReducerDefaultState = {
  logs: [],
  current: null,
  loading: true,
  error: null
};

const logsReducer = (state = logsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_LOGS':
      return {
        ...state,
        loading: false,
        logs: action.payload
      };
    case 'SEARCH_LOGS':
      return {
        ...state,
        logs: action.payload
      };
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload]
      };
    case 'EDIT_LOG':
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case 'DELETE_LOG':
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload)
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default logsReducer;
