import { combineReducers } from 'redux';
import gnomesReducer from './gnomesReducer';

export default combineReducers({
  gnomes: gnomesReducer
});
