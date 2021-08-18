import { combineReducers } from 'redux';
import userReducer from './todosReducers';

export default combineReducers({
  users: userReducer
});
