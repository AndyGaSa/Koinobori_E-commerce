import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadToDos() {
  return async (dispatch) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: actionTypes.LOAD_TODOS,
      toDos: data
    });
  };
}
