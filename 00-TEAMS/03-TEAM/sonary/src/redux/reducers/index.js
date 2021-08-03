/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import sonaryReducer from './sonary.reducer';

// Estado y reducer que lo maneja.
export default combineReducers({
  sonary: sonaryReducer
});
