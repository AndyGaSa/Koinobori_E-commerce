import { combineReducers } from 'redux';
import cart from './cart.reducer';
import products from './products.reducer';
import user from './users.reducer';
import randomProduct from './randomProduct.reducer';

export default combineReducers({
  products,
  user,
  cart,
  randomProduct
});
