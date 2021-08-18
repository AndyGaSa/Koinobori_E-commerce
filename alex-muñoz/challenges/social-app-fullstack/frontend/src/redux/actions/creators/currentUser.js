import axios from 'axios';
import actionTypesCurrentUser from '../types/currentUser';

export default function loadCurrentUser(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/${userId}`);
    dispatch({
      type: actionTypesCurrentUser.LOAD_CURRENT_USER,
      currentUser: data
    });
  };
}
