import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import adversariesReducer from './adversariesReducer';
import friendsReducer from './friendsReducer';

export default combineReducers({
  users: usersReducer,
  adversaries: adversariesReducer,
  friends: friendsReducer,
});
