import actionTypes from '../actions/actionTypes';

 interface ActionObject {
    type:string,
    toDo:any,
    index:number
 }
export default function todosReducer(toDoList: object[], action:ActionObject) {
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
