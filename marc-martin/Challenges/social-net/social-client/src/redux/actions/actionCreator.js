import axios from 'axios';
import actionTypes from './actionTypes';
import '../../mocks/mainUser.mock.json';

export default function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('http://localhost:5000/api/users');

    dispatch({
      type: actionTypes.LOAD_USERS,
      data
    });
  };
}
