import actionTypes from '../actions/actionTypes';

export default function artistDetailsReducer(artistDetails = [], action) {
  let newArtistDetails = artistDetails;
  switch (action.type) {
    case actionTypes.LOAD_ARTIST_DETAILS:
      newArtistDetails = action.artist.map((artist) => artist);
      break;

    default:
      break;
  }
  return newArtistDetails;
}
