import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import oneBeerReducer from './oneBeerReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  oneBeer: oneBeerReducer,
  user: userReducer,
  cart: cartReducer,
});
