import { combineReducers } from 'redux';
import productReducers from './productReducer';

combineReducers({
  product: productReducers
});
