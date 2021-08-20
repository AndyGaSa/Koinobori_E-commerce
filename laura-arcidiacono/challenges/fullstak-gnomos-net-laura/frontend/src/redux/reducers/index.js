import { combineReducers } from 'redux';
import users from './userReducers';
import auth from './authReducer';
import notification from './notificationReducer';

export default combineReducers({
  users,
  auth,
  notification
});
