import { combineReducers } from 'redux';

import logsReducer from './logs';
import techsReducer from './techs';

const rootReducer = combineReducers({
  logs: logsReducer,
  techs: techsReducer
});

export default rootReducer;
