import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Estado y reducer que lo maneja.
export default combineReducers({
  user: userReducer,
});
