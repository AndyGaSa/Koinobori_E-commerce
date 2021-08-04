/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(state = [], action) {
  let sonary = state;
  switch (action.type) {
    case actionTypes.LOAD_DASHBOARD:
      sonary = state;
      sonary = action.dashboard.map(({
        track
      }) => track);
      break;

    default:
      break;
  }
  return sonary;
}
