/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(oldChart = [], action) {
  let newChart = oldChart;
  switch (action.type) {
    case actionTypes.LOAD_SONARY:
      newChart = action.chart.map(({
        track: {
          track_id, album_id, artist_id, track_name, album_name, artist_name
        }
      }) => {
        const track = {
          track_id, album_id, artist_id, track_name, album_name, artist_name
        };
        return track;
      });
      break;
    case actionTypes.LOAD_DETAILS:
      console.log(action.lyrics);
      newChart = action.lyrics.map(({ lyrics_body }) => lyrics_body);
      break;
    default:
      break;
  }

  return newChart;
}
