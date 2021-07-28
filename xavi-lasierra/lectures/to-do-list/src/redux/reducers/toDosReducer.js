import actionTypes from '../actions/action.types';

function toDosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newToDoList = [...newToDoList, action.newToDo];
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
