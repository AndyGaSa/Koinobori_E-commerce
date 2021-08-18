import axios from 'axios';
import actionTypes from './action.types';

export function loadFriends() {
  return async (dispatch) => {
    const { data } = await axios.get('api/user');
    dispatch({
      type: actionTypes.LOAD_FRIENDS,
      data,
    });
  };
}
export function loadAdversaries() {
  return async (dispatch) => {
    const { data } = await axios.get('api/user');
    dispatch({
      type: actionTypes.LOAD_ADVERSARIES,
      data,
    });
  };
}
export function loadUser() {
  return async (dispatch) => {
    const { data } = await axios.get('api/user/611c039e9a934687df7d2587');
    dispatch({
      type: actionTypes.LOAD_USER,
      data,
    });
  };
}
