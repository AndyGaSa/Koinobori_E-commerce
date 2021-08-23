import actionTypes from '../actions/actionTypes';

export default function randomReducer(ini = [], action) {
  let countryRandom = ini;
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      countryRandom = action.ini;
      return countryRandom;
    default:
      break;
  }
  return ini;
}
