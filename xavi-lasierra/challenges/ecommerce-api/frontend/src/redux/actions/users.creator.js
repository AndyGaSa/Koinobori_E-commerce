import axios from 'axios';

import actionTypes from './users.actions';

export default function getUser(userData) {
  return async (dispatch) => {
    const { data } = await axios.post('/api/users', userData);

    dispatch({
      type: actionTypes.LOAD_USER,
      data
    });
  };
}
