import actionTypes from '../actions/actionTypes';

export default function beersReducer(beers = [], action) {
  if (action.type === actionTypes.LOAD_BEERS) {
    return action.data;
  }
  return beers;
}
