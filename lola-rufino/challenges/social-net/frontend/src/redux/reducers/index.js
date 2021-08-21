import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userReducer from './userReducer';

export default combineReducers({
  users: usersReducer,
  user: userReducer
});
