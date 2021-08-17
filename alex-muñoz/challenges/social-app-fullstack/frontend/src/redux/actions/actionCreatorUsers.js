import axios from 'axios';
import actionTypesUsers from './actionTypesUsers';

export default function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/users');
    dispatch({
      type: actionTypesUsers.LOAD_USERS,
      users: data
    });
  };
}
