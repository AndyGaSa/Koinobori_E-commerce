import { combineReducers } from 'redux';

import personReducer from './personReducer';
import userReducer from './userReducer';

export default combineReducers({
  persons: personReducer,
  user: userReducer
});
