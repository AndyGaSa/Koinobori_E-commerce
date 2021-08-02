import { combineReducers } from 'redux';
import comicsReducer from './comics.reducer';

export default combineReducers(
  {
    comics: comicsReducer
  }
);
