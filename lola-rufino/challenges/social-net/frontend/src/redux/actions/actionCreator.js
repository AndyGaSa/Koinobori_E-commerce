import axios from 'axios';
import actionTypes from './actionTypes';

export function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/api/users');

    dispatch({
      type: actionTypes.LOAD_USERS,
      data
    });
  };
}

export function loadUser() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/api/users/611bb254dbe2a924243964a6');

    dispatch({
      type: actionTypes.LOAD_USER,
      data
    });
  };
}
