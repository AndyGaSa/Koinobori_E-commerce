/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import productsReducer from './productsReducers';
import cartsReducer from './cartsReducers';

export default combineReducers({
  products: productsReducer,
  carts: cartsReducer,
});
