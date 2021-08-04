import actionTypes from './actionTypes';

export default function loadFavArtists() {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/artists?ids=5Hsv8dUHHOdnn72q4XIVz7,375zxMmh2cSgUzFFnva0O7,3hfczsQRbhO3io1UwQFM1y,4QVBYiagIaa6ZGSPMbybpy,28gNT5KBp7IjEOQoevXf9N',
      headers: { Authorization: `Bearer ${token}` }
    });

    dispatch({
      type: actionTypes.LOAD_FAVOURITE_ARTISTS,
      favArtists: data.artists
    });
  };
}
