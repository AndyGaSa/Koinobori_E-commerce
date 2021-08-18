import axios from 'axios';

import userTypes from './user.actions';

export function logUser(userName) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/gnomes?name=${userName}`);
    const [newData] = data;

    dispatch({
      type: userTypes.LOAD_USER,
      data: newData
    });
  };
}

export function updateUser(updateData, id) {
  return async (dispatch) => {
    const { data } = await axios.put(`/api/gnomes/${id}`, updateData);

    dispatch({
      type: userTypes.UPDATE_USER,
      data
    });
  };
}
