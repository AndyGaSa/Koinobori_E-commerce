/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadArtist() {
  return async (dispatch) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: actionTypes.LOAD_ARTIST,
      artist: data
    });
  };
}
