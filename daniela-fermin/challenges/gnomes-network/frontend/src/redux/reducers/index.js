import { combineReducers } from 'redux';
import gnomesReducer from './gnomesReducer';
import friendsReducer from './friendsReducer';
import adversariesReducer from './adversariesReducers';

export default combineReducers({
  gnomes: gnomesReducer,
  friends: friendsReducer,
  adversaries: adversariesReducer
});
