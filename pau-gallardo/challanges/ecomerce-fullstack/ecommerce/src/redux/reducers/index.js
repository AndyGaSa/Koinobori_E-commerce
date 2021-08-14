import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
  products: productListReducer,
  cartProducts: cartReducer,
});
