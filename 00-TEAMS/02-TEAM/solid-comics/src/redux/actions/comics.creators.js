import axios from 'axios';
import actionTypes from './comics.types';

export default function loadComics() {
  return async (dispatch) => {
    const { data } = await axios('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d94eaf06538ee1fbb8dd6605e28f9bd0&hash=769e38a7605236ad957ed87b13ed64a5');

    dispatch({
      type: actionTypes.LOAD_COMICS,
      comics: data
    });
  };
}
