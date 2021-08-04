import { combineReducers } from 'redux';
import events from './eventReducer';
import users from './userReducer';

export default combineReducers({
  events,
  users
});
