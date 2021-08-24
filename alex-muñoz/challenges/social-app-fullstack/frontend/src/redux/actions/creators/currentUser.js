/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypesCurrentUser from '../types/currentUser';
import loadUsers from './users';

export function loadCurrentUser(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/users/${userId}`);
    dispatch({
      type: actionTypesCurrentUser.LOAD_CURRENT_USER,
      currentUser: data
    });
    dispatch(loadUsers());
  };
}

export function addOrRemoveFriend(userId, personId, userFriends, type) {
  return async (dispatch) => {
    if (type === 'ADD_FRIEND') {
      const newFriends = [...userFriends, personId];
      await axios.put(`/api/users/${userId}`, { friends: newFriends });
    } else {
      const newFriends = userFriends.filter((friend) => friend._id !== personId);
      await axios.put(`/api/users/${userId}`, { friends: newFriends });
    }
    dispatch(loadCurrentUser(userId));
  };
}

export function addOrRemoveAdversarie(userId, personId, useradversaries, type) {
  return async (dispatch) => {
    let newAdversaries = useradversaries;
    switch (type) {
      case 'ADD_ADVERSARIE':
        newAdversaries = [...useradversaries, personId];
        await axios.put(`/api/users/${userId}`, { adversaries: newAdversaries });
        break;
      case 'REMOVE_ADVERSARIE':
        newAdversaries = useradversaries.filter((adversarie) => adversarie._id !== personId);
        await axios.put(`/api/users/${userId}`, { adversaries: newAdversaries });
        break;
      default:
        break;
    }
    dispatch(loadCurrentUser(userId));
  };
}
