import actionsTypes from '../actions/actions.types';

export default function todosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionsTypes.CREATE_TODO:
      newToDoList = [...toDoList, action.toDo];
      break;

    case actionsTypes.UPDATE_TODO:
      newToDoList[action.index] = action.toDo;
      newToDoList = [
        ...newToDoList,
      ];
      break;

    case actionsTypes.DELETE_TODO:
      newToDoList = toDoList.filter((toDo) => toDo !== action.toDo);
      break;

    default:
      break;
  }

  return newToDoList;
}
