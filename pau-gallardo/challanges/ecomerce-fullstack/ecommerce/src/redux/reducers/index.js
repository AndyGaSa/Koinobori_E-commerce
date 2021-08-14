import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';

export default combineReducers({
  cartProducts: productListReducer,
});
