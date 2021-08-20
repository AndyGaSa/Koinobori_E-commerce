import axios from 'axios';
import actionTypes from './actionTypes';

export function login(name) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/login', { name });
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data,
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message,
        });
      }

      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message,
      });
    }
  };
}
export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/users');

    dispatch({
      type: actionTypes.LOAD_USERS,
      data,
    });
  };
}

export function deleteFriend() {
  return async (dispatch) => {
    const { datat } = await axios.delete('/api/users/user');

    dispatch({
      type: actionTypes.DELETE_FRIEND,
      data,
    });
  };
}
