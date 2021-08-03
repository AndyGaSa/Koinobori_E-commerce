import actionTypes from '../actions/actionTypes';

export default function suggestedArtistsReducer(artistList = [], action) {
  let newArtistList = artistList;
  switch (action.type) {
    case actionTypes.LOAD_SUGGESTED_ARTISTS:
      newArtistList = action.artist?.map(({ title }) => title);
      break;

    default:
      break;
  }
  return newArtistList;
}
