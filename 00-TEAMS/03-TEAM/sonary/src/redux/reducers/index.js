/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import sonaryReducer from './sonary.reducer';
import songReducer from './song.reducer';
import favoriteReducer from './favoriteReducer';

// Estado y reducer que lo maneja.
export default combineReducers({
  sonary: sonaryReducer,
  song: songReducer,
  favorite: favoriteReducer
});
