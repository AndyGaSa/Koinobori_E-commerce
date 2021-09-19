import { combineReducers } from 'redux';
import stockReducer from './stock.reducer';

export default combineReducers({
  stock: stockReducer
});
