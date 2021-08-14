/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import productsReducer from './productsReducers';

export default combineReducers({
  products: productsReducer,
});
