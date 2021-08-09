import { combineReducers } from 'redux';
import suggestedArtistsReducer from './suggestedArtistsReducer';
import favouriteArtistsReducer from './favouriteArtistsReducer';
import searchedArtistsReducer from './searchedArtistsReducer';
import artistDetailsReducer from './artistDetailsReducer';

export default combineReducers({
  suggestedArtists: suggestedArtistsReducer,
  favouriteArtists: favouriteArtistsReducer,
  searchedArtists: searchedArtistsReducer,
  artistDetails: artistDetailsReducer
});
