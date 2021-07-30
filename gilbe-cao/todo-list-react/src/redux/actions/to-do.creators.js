import axios from 'axios';
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

export function loadToDos() {
  return async (dispatch) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: actionTypes.LOAD_TODOS,
      toDos: data,
    });
  };
}

export function loadToDosWithAsync() {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const toDos = await response.json();

    dispatch({
      type: actionTypes.LOAD_TODOS,
      toDos,
    });
  };
}

export function loadToDosWithPromise() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((toDos) => dispatch({
        type: actionTypes.LOAD_TODOS,
        toDos,
      }));
  };
}
