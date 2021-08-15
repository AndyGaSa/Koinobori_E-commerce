import { combineReducers } from 'redux';
import productReducers from './productReducer';

export default combineReducers({
  products: productReducers
});
