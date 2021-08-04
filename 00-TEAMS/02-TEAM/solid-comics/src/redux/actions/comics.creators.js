import axios from 'axios';
import actionTypes from './comics.types';

function loadComics() {
  const baseUrl = 'http://gateway.marvel.com/v1/public/';
  const items = {
    characters: 'characters',
    comics: 'comics',
    creators: 'creators',
    events: 'events',
    series: 'series',
    stories: 'stories'
  };
  const limit = 'limit=2';
  const offset = 'offset=200';
  const apikey = 'apikey=a717c0f1c6c7e9f36248d126d74b8f67';
  const hash = 'hash=6afa5ea281d51757fc165b2dd77446c5';

  return async (dispatch) => {
    const { data } = await axios(
      `${baseUrl}${items.comics}?ts=1&${limit}&${offset}&${apikey}&${hash}`
    );

    dispatch({
      type: actionTypes.LOAD_COMICS,
      comics: data
    });
  };
}
function filterComics(url) {
  return async (dispatch) => {
    const { data } = await axios(url);

    dispatch({
      type: actionTypes.FILTER_COMICS,
      filtered: data
    });
  };
}

export {
  loadComics,
  filterComics
};
