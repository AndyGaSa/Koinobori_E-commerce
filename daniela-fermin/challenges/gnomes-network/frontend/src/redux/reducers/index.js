import { combineReducers } from 'redux';
import gnomesReducer from './gnomesReducer';
import currentGnomeReducer from './currentGnomeReducer';

export default combineReducers({
  gnomes: gnomesReducer,
  currentGnome: currentGnomeReducer
});
