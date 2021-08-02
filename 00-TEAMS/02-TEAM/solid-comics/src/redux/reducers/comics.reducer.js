import actionTypes from '../actions/comics.types';

export default function comicsReducer(comicsList = [], action) {
  let newComicList = comicsList;
  switch (action.type) {
    case actionTypes.LOAD_COMICS:
      newComicList = action.comics.data.results?.map((comic) => comic);
      break;
    default:
      break;
  }
  return newComicList;
}
