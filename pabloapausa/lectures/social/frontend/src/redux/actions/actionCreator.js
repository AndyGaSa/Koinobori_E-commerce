import axios from 'axios';
import actionTypes from './actionTypes';

export default function readUsers() {
  return async (dispatch) => {
    const { users } = await axios.get('https://localhost:6000/api/users/');
    dispatch({
      type: actionTypes.READ_USERS, // Evitar errores de tipo.
      users,
    });
  };
}
