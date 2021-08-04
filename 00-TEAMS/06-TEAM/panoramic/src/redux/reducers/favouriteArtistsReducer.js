import actionTypes from '../actions/actionTypes';

export default function favouriteArtistsReducer(favArtistList = [], action) {
  let newFavArtisList = favArtistList;
  switch (action.type) {
    case actionTypes.LOAD_FAVOURITE_ARTISTS:
      newFavArtisList = action.favArtists?.map((artist) => artist);
      break;
    case actionTypes.DELETE_FAVOURITE_ARTISTS:
      newFavArtisList = favArtistList.filter((artist) => artist.name !== action.artist.name);
      break;
    case actionTypes.ADD_FAVOURITE_ARTISTS:
      if (!favArtistList.some((artist) => artist.name === action.artist.name)) {
        newFavArtisList = [...favArtistList, action.artist];
      }
      break;
    default:
      break;
  }
  return newFavArtisList;
}
