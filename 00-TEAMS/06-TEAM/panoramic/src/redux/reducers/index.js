import { combineReducers } from 'redux';
import suggestedArtistsReducer from './suggestedArtistsReducer';

export default combineReducers({
  suggestedArtists: suggestedArtistsReducer
});
