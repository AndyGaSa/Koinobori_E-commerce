/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
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
  return async () => {
    const response = await fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&country=us&apikey=ac9bd389d8c264b9d3fe211a16c14560');
    let a = await response.text();
    a = await JSON.parse(a.substring(9, (a.length - 2)));

    console.log(a);
    /*
    dispatch({
      type: actionTypes.LOAD_TODOS,
      toDos,
    });
    */
  };
}

export function loadToDosWithPromise() {
  return () => {
    fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&country=us&apikey=ac9bd389d8c264b9d3fe211a16c14560')
      .then((response) => response.text())
      .then((response) => response.substring(9, (response.length - 2)))
      .then((response) => JSON.parse(response))
      .then((response) => console.log(response));
  };
}
