import axios from 'axios';
import actionTypes from './sneakers.types';
// import sneakers from '../../sneakers-data/data';

export default function loadSneakers() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/sneakers');
    console.log(data);
    dispatch({
      type: actionTypes.LOAD_SNEAKERS,
      sneakers: data,
    });
  };
}
