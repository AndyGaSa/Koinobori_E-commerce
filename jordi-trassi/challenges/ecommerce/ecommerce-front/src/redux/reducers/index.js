/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import products from './productsReducers';
import cart from './cartReducer';

export default combineReducers({
  products,
  cart,
});
