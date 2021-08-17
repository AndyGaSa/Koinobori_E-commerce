import { combineReducers } from 'redux';
import camerasReducer from './cameras.reducer';

export default combineReducers(
  {
    cameras: camerasReducer
  }
);
