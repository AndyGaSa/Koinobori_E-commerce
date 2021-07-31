import actionTypes from '../actions/action.types';

function toDosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newToDoList = [...newToDoList, action.newToDo];
      break;
    case actionTypes.DELETE_TODO:
      newToDoList.splice(action.toDoIndex, 1);
      newToDoList = [...newToDoList];
      break;
    case actionTypes.UPDATE_TODO:
      newToDoList = newToDoList
        .map((toDo, index) => (index === +action.toDoIndex ? action.newToDo : toDo));
      break;
    default:
      break;
  }
  return newToDoList;
}

export default toDosReducer;
