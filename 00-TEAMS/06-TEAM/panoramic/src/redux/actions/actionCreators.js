import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadArtist() {
  return async (dispatch) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: actionTypes.LOAD_ARTIST,
      artist: data
    });
  };
}
