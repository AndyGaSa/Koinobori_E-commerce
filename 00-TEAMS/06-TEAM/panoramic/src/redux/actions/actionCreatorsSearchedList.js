import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadSearchedArtists(inputValue) {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${inputValue}&type=artist&limit=10&offset=0`,
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: actionTypes.LOAD_SEARCHED_ARTISTS,
      artist: data.artists.items
    });
  };
}
