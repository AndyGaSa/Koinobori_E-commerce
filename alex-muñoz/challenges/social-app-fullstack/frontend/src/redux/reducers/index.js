import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  users: usersReducer,
  friends: friendsReducer
});
