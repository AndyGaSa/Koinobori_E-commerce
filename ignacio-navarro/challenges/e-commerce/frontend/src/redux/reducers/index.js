import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import oneBeerReducer from './oneBeerReducer';

export default combineReducers({
  products: productsReducer,
  oneBeer: oneBeerReducer,
});
