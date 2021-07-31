import axios from 'axios';
import actionTypes from './action.types';

export default function loadToDos() {
  return async (dispatch) => {
    const { data } = await axios('http://ergast.com/api/f1/drivers.json');

    dispatch({
      type: actionTypes.LOAD_TODOS,
      toDos: data
    });
  };
}
