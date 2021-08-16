import { combineReducers } from 'redux';
import products from './productsReducer';
import randomBeer from './randomBeerReducer';
import cart from './cartReducer';

export default combineReducers({
  products,
  randomBeer,
  cart,
});
