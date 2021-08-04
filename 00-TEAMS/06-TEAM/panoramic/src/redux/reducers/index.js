import { combineReducers } from 'redux';
import suggestedArtistsReducer from './suggestedArtistsReducer';
import favouriteArtistsReducer from './favouriteArtistsReducer';
import searchedArtistsReducer from './searchedArtistsReducer';

export default combineReducers({
  suggestedArtists: suggestedArtistsReducer,
  favouriteArtists: favouriteArtistsReducer,
  searchedArtists: searchedArtistsReducer
});
