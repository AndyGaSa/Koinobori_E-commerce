import { combineReducers } from 'redux';
import { sneakersReducer, cartReducer } from './sneakers.reducer';

export default combineReducers({
  sneakers: sneakersReducer,
  cart: cartReducer,
});
