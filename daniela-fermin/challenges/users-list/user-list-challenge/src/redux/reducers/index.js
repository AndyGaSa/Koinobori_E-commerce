import { combineReducers } from 'redux';

import usersReducer from './userReducer';

export default combineReducers({
  users: usersReducer
});
