import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadGnomes() {
  return async (dispatch) => {
    const { data } = await axios.get('/gnomesApi/gnomes');
    dispatch({
      type: actionTypes.LOAD_GNOMES,
      data
    });
  };
}
