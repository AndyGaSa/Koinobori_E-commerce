import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  users: usersReducer,
  friends: friendsReducer,
  currentUser: currentUserReducer
});
