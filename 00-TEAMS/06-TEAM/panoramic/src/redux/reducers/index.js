import { combineReducers } from 'redux';
import suggestedArtistsReducer from './suggestedArtistsReducer';
import favouriteArtistsReducer from './favouriteArtistsReducer';

export default combineReducers({
  suggestedArtists: suggestedArtistsReducer,
  favouriteArtists: favouriteArtistsReducer
});
