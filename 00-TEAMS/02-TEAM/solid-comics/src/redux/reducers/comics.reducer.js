/* eslint-disable no-console */
import actionTypes from '../actions/comics.types';

export default function comicsReducer(comicsList = [], action) {
  // eslint-disable-next-line prefer-const
  let newComicList = comicsList;
  switch (action.type) {
    case actionTypes.LOAD_COMICS:
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('+++++++++++++');
      console.log(`action: ${action}`);
      newComicList = action.comics?.map(({ title }) => title);
      break;
    default:
      break;
  }

  return newComicList;
}
