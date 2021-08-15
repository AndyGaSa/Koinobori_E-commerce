import { combineReducers } from 'redux';
import productReducers from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productReducers,
  carts: cartReducer
});
