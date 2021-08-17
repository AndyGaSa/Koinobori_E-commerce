import { combineReducers } from 'redux';
import productListreducer from './productListreducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productsList: productListreducer,
  cart: cartReducer,
});
