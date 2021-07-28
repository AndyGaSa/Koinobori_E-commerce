import actionTypes from '../actions/action.types';

export default function todosReducer(toDoList = [], action) {
  let newTodoList = toDoList;
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      newTodoList = [...newTodoList, action.toDo];
      break;

    case actionTypes.DELETE_TODO:
      newTodoList = newTodoList.filter((toDo) => toDo !== action.toDo);
      break;

    default:
      break;
  }
  return newTodoList;
}
