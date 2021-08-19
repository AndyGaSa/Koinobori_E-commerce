import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import auth from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth,

});
