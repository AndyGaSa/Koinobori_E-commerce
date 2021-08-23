import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/users');

    dispatch({
      type: actionTypes.LOAD_USERS,
      data
    });
  };
}
