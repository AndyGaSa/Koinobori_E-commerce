/* eslint-disable no-underscore-dangle */
import toDosTypes from '../actions/toDos.actions';

interface Action {
    type: string,
    data: any
}

interface ToDo {
  toDo: string,
  id: string
}

function userReducer(toDos = [], action: Action): ToDo[] {
  let newToDos: ToDo[] = toDos;
  switch (action.type) {
    case toDosTypes.ADD_TODO:
      newToDos = [...newToDos, {
        toDo: action.data,
        id: `${newToDos.length}`
      }];
      break;
    default:
      break;
  }

  return newToDos;
}

export default userReducer;
