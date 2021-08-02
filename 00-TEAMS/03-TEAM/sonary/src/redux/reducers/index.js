/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import sonaryReducer from './sonary.reducer';

export default combineReducers({
  chart: sonaryReducer
});
