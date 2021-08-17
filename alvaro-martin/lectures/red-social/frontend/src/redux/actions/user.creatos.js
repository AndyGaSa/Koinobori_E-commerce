import axios from 'axios';
import actionTypes from './user.actioTypes';

export function loadUser() {
  return async (dispatch) => {
    const { data } = await axios('http://localhost:4300/api/users/611bb98982270562cdb7e11f');
    dispatch({
      type: actionTypes.LOAD_USER,
      data,
    });
  };
}
export function submitUser(value) {
  return async (dispatch) => {
    const { data } = await axios.put('http://localhost:4300/api/users/611bb98982270562cdb7e11f', { value });
    dispatch({
      type: actionTypes.SUBMIT_USER,
      data,
    });
  };
}
