import { combineReducers } from 'redux';
import userListReducers from './userListReducers';

export default combineReducers({
  users: userListReducers
});
