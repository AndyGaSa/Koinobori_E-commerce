import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadArtistDetails(artist) {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1&offset=0`,
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: actionTypes.LOAD_ARTIST_DETAILS,
      artist: data.artists.items
    });
  };
}
