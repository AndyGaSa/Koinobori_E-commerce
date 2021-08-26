import { combineReducers } from 'redux';
import beersReducer from './beersReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  beers: beersReducer,
  cart: cartReducer
});
