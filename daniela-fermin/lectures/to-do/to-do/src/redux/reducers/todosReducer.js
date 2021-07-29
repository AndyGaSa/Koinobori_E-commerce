import actionTypes from '../actions/action.types';

export default function toDosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      newToDoList = [...toDoList, action.toDo];
      break;
    case actionTypes.UPDATE_TASK:
      newToDoList[action.index] = action.toDo;
      newToDoList = [
        ...newToDoList
      ];
      break;
    case actionTypes.DELETE_TASK:
      newToDoList = toDoList.filter((toDo) => toDo !== action.toDo);
      break;

    default:
      newToDoList = toDoList;
  }
  return newToDoList;
}
