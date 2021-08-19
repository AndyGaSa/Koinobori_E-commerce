import actionTypes from '../actions/comics.types';

export default function filterReducer(comicsList = [], action) {
  let newComicList = comicsList;
  switch (action.type) {
    case actionTypes.FILTER_COMICS:
      newComicList = action.filtered;
      break;
    default:
      break;
  }
  return newComicList;
}
