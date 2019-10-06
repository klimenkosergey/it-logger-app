const techsReducerDefaultState = {
  techs: [],
  loading: true,
  error: null
};

const techsReducer = (state = techsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_TECHS':
      return {
        ...state,
        loading: false,
        techs: action.payload
      };
    case 'ADD_TECH':
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case 'EDIT_TECH':
      return {
        ...state,
        techs: state.techs.map(tech =>
          tech.id === action.payload.id ? action.payload : tech
        )
      };
    case 'DELETE_TECH':
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      };
    case 'SET_ERROR':
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default techsReducer;
