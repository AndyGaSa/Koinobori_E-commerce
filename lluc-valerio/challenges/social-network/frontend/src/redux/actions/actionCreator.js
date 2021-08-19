/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadPerson() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/user/');
    dispatch({
      type: actionTypes.LOAD_PERSONS,
      data
    });
  };
}

export function setUser(user) {
  return async (dispatch) => {
    if (user) {
      dispatch({
        type: actionTypes.LOAD_USER,
        data: user
      });
    }
  };
}

export function updateUser(userId, objectUser) {
  console.log(objectUser);
  return async (dispatch) => {
    const { data } = await axios.put(`/api/user/${userId}`, objectUser);
    dispatch({
      type: actionTypes.UPDATE_USER,
      data
    });
  };
}
