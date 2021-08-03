import axios from 'axios';
import actionTypes from './actionTypes';

const clientId = 'db90790a217e4f6781a7a4b05724c118';
const clientSecret = '87beccf61c874ccc8a3e4ee75acfbacd';

export default async function getSpotifyToken() {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
      },
      data: 'grant_type=client_credentials'
    });
    localStorage.setItem('token', JSON.stringify(data.access_token));
    return data.access_token;
  } catch (error) {
    return null;
  }
}

export function loadAxiosSuggestedArtists() {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/artists?ids=5Hsv8dUHHOdnn72q4XIVz7,375zxMmh2cSgUzFFnva0O7,3hfczsQRbhO3io1UwQFM1y',
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: actionTypes.LOAD_SUGGESTED_ARTISTS,
      suggestedArtists: data.artists
    });
  };
}
