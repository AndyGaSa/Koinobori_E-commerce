/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './comics.types';

export default function loadComics() {
  return async (dispatch) => {
    const { data } = await axios('https://comicvine.gamespot.com/api/characters/?api_key=1e4f849e914bd7a89652ea26d7dad6e83d1789c5&filter=name:lobo');
    // const data = await axios('https://jsonplaceholder.typicode.com/todos');
    console.log('*****************');
    console.log(`data: ${data}`);
    dispatch({
      type: actionTypes.LOAD_COMICS,
      comics: data
    });
  };
}
