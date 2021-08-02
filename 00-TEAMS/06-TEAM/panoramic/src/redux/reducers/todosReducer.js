import actionTypes from '../actions/actionTypes';

export default function todosReducer(toDoList = [], action) {
  let newToDoList = toDoList;
  switch (action.type) {
    case actionTypes.LOAD_TODOS:
      newToDoList = action.toDos?.map(({ title }) => title);
      break;

    default:
      break;
  }

  return newToDoList;
}
