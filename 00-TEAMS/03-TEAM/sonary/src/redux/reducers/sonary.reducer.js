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
      newChart = action.lyrics;
      console.log(newChart);
      break;
    default:
      break;
  }

  return newChart;
}
