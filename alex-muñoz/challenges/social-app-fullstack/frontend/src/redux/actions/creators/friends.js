import axios from 'axios';
import actionTypesFriends from '../types/friends';

export function loadFriends() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/friends');
    dispatch({
      type: actionTypesFriends.LOAD_FRIENDS,
      friends: data
    });
  };
}

export function addFriend(user) {
  return async (dispatch) => {
    await axios.put('/api/friends', user);
    const { data } = await axios.get('/api/friends');
    dispatch({
      type: actionTypesFriends.ADD_USER_TO_FRIEND,
      friends: data
    });
  };
}
