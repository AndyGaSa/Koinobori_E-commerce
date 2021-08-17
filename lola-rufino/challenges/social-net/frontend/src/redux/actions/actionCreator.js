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
    const { data } = await axios.get('http://localhost:5000/api/users/611b928dd5f7864a10e2f790');

    dispatch({
      type: actionTypes.LOAD_USER,
      data
    });
  };
}
