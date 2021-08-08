import { combineReducers } from 'redux';
import comicsReducer from './comics.reducer';
import filterReducer from './filtered.reducer';
import charactersReducer from './characters.reducer';

export default combineReducers(
  {
    comics: comicsReducer,
    filter: filterReducer,
    characters: charactersReducer
  }
);
