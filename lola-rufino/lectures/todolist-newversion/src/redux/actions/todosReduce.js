import actionTypes from './actions.types';

export default function todosReducer(toDoList = [], action) {
  let newToDoList = toDoList;

  switch (action.type) {
    case actionTypes.CREATE_TODO:
      // Me quedo con todos lo que había, y añado el toDo de mi acción
      newToDoList = [...toDoList, action.toDo];
      break;
    case actionTypes.DELETE_TODO:
      // Filtro y me quedo con todos los toDo que no sean el que coincide con mi acción
      newToDoList = toDoList.filter((toDo) => toDo !== action.toDo);
      break;

    case actionTypes.UPDATE_TODO:
      newToDoList[action.index] = action.toDo;
      newToDoList = [
        ...newToDoList
      ];
      break;
    case actionTypes.LOAD_TODOS:
      newToDoList = action.toDos?.map(({ title }) => title);
      break;

    default:
      break;
  }
  return newToDoList;
}
