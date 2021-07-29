import ToDoList from '../../pages/ToDoList';
import actionTypes from '../actions/actionsTypes';

export default function todosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newToDoList = [...toDoList, action.toDo];

      break;
    case actionTypes.UPDATE_TODO:
      newToDoList[action.index] = action.toDo;
      newToDoList = [
        ...newToDoList
      ];

      break;
    case actionTypes.DELETE_TODO:
      newToDoList = toDoList.filter((toDo) => toDo !== action.toDo);

      break;

    default:
      newToDoList = ToDoList;
      break;
  }
  return newToDoList;
}
