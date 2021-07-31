import actionTypes from '../actions/sports.types';

export default function sportsReducer(sport = [], action) {
  const newSport = sport;
  switch (action.types) {
    case actionTypes.LOAD_LEAGUES:
      break;
    default:
      break;
  }
  return newSport;
}
