import { combineReducers } from 'redux';
import beersReducer from './beersReducer';

export default combineReducers({
  beers: beersReducer
});
