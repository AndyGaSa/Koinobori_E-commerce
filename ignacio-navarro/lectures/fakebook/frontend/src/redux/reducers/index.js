import { combineReducers } from 'redux';
import friendsReducer from './friends.reducer';
import adversariesReducer from './adversaries.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  friends: friendsReducer,
  user: userReducer,
  adversaries: adversariesReducer,
});
