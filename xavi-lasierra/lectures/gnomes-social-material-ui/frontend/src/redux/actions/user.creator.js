import axios from 'axios';

import userTypes from './user.actions';
import loginErrorTypes from './loginError.actions';

export function logUser(userName) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/login?name=${userName}`);

      dispatch({
        type: userTypes.LOAD_USER,
        data
      });
    } catch (error) {
      dispatch({
        type: loginErrorTypes.LOAD_ERROR
      });
    }
  };
}

export function updateUser(updateData, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/gnomes/${id}`, updateData);

      dispatch({
        type: userTypes.UPDATE_USER,
        data
      });
    } catch (error) {
      // TODO error
    }
  };
}

export function logoutUser() {
  return {
    type: userTypes.LOGOUT_USER
  };
}
