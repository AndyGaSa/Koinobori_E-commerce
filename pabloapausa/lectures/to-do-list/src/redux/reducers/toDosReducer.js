import crud from '../actions/action.types';

export default function toDosReducer(oldToDoList = [], action) {
  let newToDoList = oldToDoList;
  switch (action.type) {
    case crud.CREATE_TODO:
      newToDoList = [...oldToDoList, action.toDo];
      break;
    case crud.UPDATE_TODO:
      newToDoList[action.index] = action.toDo;
      newToDoList = [...newToDoList];
      break;
    case crud.DELETE_TODO:
      newToDoList = oldToDoList.filter((toDo) => toDo !== action.toDo);
      break;
    default:
      break;
  }

  return newToDoList;
}
