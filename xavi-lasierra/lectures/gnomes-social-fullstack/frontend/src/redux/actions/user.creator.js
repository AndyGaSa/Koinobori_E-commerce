import axios from 'axios';

import userTypes from './user.actions';

export default function logUser(userName) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/gnomes?name=${userName}`);
    const [newData] = data;

    dispatch({
      type: userTypes.LOAD_USER,
      data: newData
    });
  };
}
