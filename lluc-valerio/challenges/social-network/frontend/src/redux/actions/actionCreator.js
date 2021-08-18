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
