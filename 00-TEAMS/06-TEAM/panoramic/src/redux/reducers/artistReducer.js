import actionTypes from '../actions/actionTypes';

export default function artistReducer(artistList = ['appa'], action) {
  let newArtistList = artistList;
  switch (action.type) {
    case actionTypes.LOAD_ARTIST:
      newArtistList = action.artist?.map(({ title }) => title);
      break;

    default:
      break;
  }

  return newArtistList;
}
