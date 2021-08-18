/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionsType from './actionsType';

const loadUsers = async (dispatch) => {
  const { data } = await axios.get('/api/users');

  dispatch({
    type: actionsType.LOAD_USERS,
    data,
  });
};

export {
  loadUsers,
};
