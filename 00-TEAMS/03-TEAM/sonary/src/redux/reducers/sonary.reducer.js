/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(state = [], action) {
  let sonary = state;
  switch (action.type) {
    case actionTypes.LOAD_DASHBOARD:
      sonary = action.dashboard.map(({
        track: {
          track_id, album_id, artist_id, track_name, album_name, artist_name
        }
      }) => {
        const tracks = {
          track_id, album_id, artist_id, track_name, album_name, artist_name
        };
        return tracks;
      });
      break;
    case actionTypes.LOAD_DETAILS:
      sonary = action.details.lyrics_body;
      sonary = sonary.split('\n');
      break;
    default:
      break;
  }

  return sonary;
}
