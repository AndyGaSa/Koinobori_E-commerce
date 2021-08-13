import { combineReducers } from 'redux';
import sneakersReducer from './sneakers.reducer';

export default combineReducers({
  sneakers: sneakersReducer,
});
