import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadGnomos() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/users');
    dispatch({
      type: actionTypes.LOAD_GNOMOS,
      data
    });
  };
}
