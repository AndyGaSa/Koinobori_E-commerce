import axios from 'axios';
import actionTypesFriends from '../types/friends';

export default function loadFriends() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/friends');
    dispatch({
      type: actionTypesFriends.LOAD_FRIENDS,
      friends: data
    });
  };
}
