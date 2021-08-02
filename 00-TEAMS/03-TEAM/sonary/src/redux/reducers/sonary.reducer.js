/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(oldChart = [], action) {
  let newChart = oldChart;
  switch (action.type) {
    case actionTypes.LOAD_SONARY:
      newChart = action.chart.map(({ track: { track_name } }) => track_name);
      break;
    default:
      break;
  }

  return newChart;
}
