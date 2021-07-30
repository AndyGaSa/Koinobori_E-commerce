import actionTypes from './to-do.types';

export function createToDo(toDo) {
  return {
    type: actionTypes.CREATE_TODO,
    toDo,
  };
}

export function deleteToDo(toDo) {
  return {
    type: actionTypes.DELETE_TODO,
    toDo,
  };
}

export function updateToDo(toDo, index) {
  return {
    type: actionTypes.UPDATE_TODO,
    toDo,
    index,
  };
}
