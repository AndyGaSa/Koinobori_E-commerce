import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import cartReducer from './cart.reducer';
import usernameReducer from './username.reducer';

export default combineReducers({
  products: productListReducer,
  cartProducts: cartReducer,
  username: usernameReducer,
});
