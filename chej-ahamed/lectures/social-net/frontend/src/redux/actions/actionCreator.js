/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionsTypes';

export function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/users');
    dispatch({
      type: actionTypes.LOAD_USERS,
      data
    });
  };
}
