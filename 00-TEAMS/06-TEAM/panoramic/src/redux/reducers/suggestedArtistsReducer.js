/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function suggestedArtistsReducer(artistList = [], action) {
  let newSuggestedArtistList = artistList;
  switch (action.type) {
    case actionTypes.LOAD_SUGGESTED_ARTISTS:
      newSuggestedArtistList = action.suggestedArtists?.map((artist) => artist);
      break;

    default:
      break;
  }
  return newSuggestedArtistList;
}
