import actionTypes from '../actions/actionTypes';
import todoList from '../../../mocks/todoList';

 interface ActionObject {
    type:string,
    toDo:any,
    index:number
 }
 interface ToDos{
    title: string,
    completed: boolean
 }
export default function todosReducer(toDoList = todoList, action:ActionObject):ToDos[] {
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
      break;
  }

  return newToDoList;
}
