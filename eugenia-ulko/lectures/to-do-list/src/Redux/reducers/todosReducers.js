import actionTypes from '../actions/action.types';

export default function toDosReducer(toDoList = ['hello'], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newToDoList = [...toDoList, action.todo];
      break;

    case actionTypes.UPDATE_TODO:
      newToDoList[action.index] = action.todo;
      newToDoList = [
        ...newToDoList
      ];
      break;

    case actionTypes.DELETE_TODO:
      newToDoList = toDoList.filter((todo) => todo !== action.todo);
      break;

    default:

      break;
  }
  return newToDoList;
}
