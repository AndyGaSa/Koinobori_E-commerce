import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  products: productsReducer,
  items: itemsReducer
});
