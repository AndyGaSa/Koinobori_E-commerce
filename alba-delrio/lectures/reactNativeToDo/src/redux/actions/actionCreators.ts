import actionTypes from './actionTypes';

function createToDo(toDo:object) {
  return {
    type: actionTypes.CREATE_TODO,
    toDo
  };
}

function deleteToDo(toDo:object) {
  return {
    type: actionTypes.DELETE_TODO,
    toDo
  };
}

function updateToDo(toDo:object, index:number) {
  return {
    type: actionTypes.UPDATE_TODO,
    toDo,
    index
  };
}

module.exports = { updateToDo, deleteToDo, createToDo };
