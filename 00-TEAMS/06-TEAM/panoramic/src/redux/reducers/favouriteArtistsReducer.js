import actionTypes from '../actions/actionTypes';

export default function favouriteArtistsReducer(favArtistList = [], action) {
  let newFavArtisList = favArtistList;
  switch (action.type) {
    case actionTypes.LOAD_FAVOURITE_ARTISTS:
      newFavArtisList = action.favArtists?.map((artist) => artist);
      break;

    default:
      break;
  }
  return newFavArtisList;
}
