import actionTypes from '../actions/actionTypes';

export default function itemsReducer(items = [], action) {
  let newItems = items;
  switch (action.type) {
    case actionTypes.LOAD_ITEMS:
      newItems = action.data;
      break;
    case actionTypes.ADD_ITEMS:
      newItems = action.data;
      break;
    default:
      break;
  }
  return newItems;
}
