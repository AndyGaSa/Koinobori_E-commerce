/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(state = [], action) {
  let sonary = state;
  switch (action.type) {
    case actionTypes.LOAD_DASHBOARD:
      sonary = action.track_list.map(({ track }) => track);
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
