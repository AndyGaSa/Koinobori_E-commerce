import actionTypes from '../actions/to-do.types';

export default function todosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.LOAD_TODOS:
      newToDoList = action.toDos?.map(({ title }) => title);
      break;
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
      break;
  }

  return newToDoList;
}
