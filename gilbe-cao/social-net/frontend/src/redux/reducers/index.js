import { combineReducers } from 'redux';
import users from './usersReducer';
import auth from './authReducer';

export default combineReducers({
  users,
  auth,
});
