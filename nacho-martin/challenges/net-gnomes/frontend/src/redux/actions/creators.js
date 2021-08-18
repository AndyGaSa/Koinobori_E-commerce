import axios from 'axios';
import actionTypes from './types';

export default function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/gnomes');
    dispatch({
      type: actionTypes.LOAD_GNOMES,
      gnomes: data
    });
  };
}
