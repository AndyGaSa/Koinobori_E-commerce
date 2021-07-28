import actionTypes from '../actions/action.types';

function toDosReducer(toDoList = [], action) {
  const newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:

      break;
    case actionTypes.DELETE_TODO:
      break;
    case actionTypes.UPDATE_TODO:
      break;
    default:
      break;
  }
  return newToDoList;
}

export default toDosReducer;
