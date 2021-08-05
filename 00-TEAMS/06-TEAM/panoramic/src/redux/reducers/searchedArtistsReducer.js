import actionTypes from '../actions/actionTypes';

export default function searchedArtistsReducer(filterList = [], action) {
  let newFilterList = filterList;
  switch (action.type) {
    case actionTypes.LOAD_SEARCHED_ARTISTS:
      newFilterList = action.artist.map((artist) => artist);
      break;

    default:
      break;
  }
  return newFilterList;
}
