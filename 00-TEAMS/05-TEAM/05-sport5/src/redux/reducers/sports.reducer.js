import actionTypes from '../actions/sports.types';

export default function sportsReducer(sport = [], action) {
  let newSport = sport;
  switch (action.type) {
    case actionTypes.LOAD_LEAGUES:
      newSport = action.leaguesByCountries;
      break;
    default:
      break;
  }
  return newSport;
}
