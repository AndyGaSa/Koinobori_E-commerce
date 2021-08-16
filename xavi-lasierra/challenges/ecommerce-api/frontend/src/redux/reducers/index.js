import { combineReducers } from 'redux';
import cart from './cart.reducer';
import products from './products.reducer';
import user from './users.reducer';

export default combineReducers({
  products,
  user,
  cart
});
