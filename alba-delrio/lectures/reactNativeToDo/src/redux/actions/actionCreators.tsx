import actionTypes from './actionTypes';

export function createToDo(toDo:object) {
  return {
    type: actionTypes.CREATE_TODO,
    toDo
  };
}

export function deleteToDo(toDo:object) {
  return {
    type: actionTypes.DELETE_TODO,
    toDo
  };
}

export function updateToDo(toDo:object, index:number) {
  return {
    type: actionTypes.UPDATE_TODO,
    toDo,
    index
  };
}
