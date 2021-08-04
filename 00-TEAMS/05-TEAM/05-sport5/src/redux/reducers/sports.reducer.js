import actionTypes from '../actions/sports.types';

export default function sportsReducer(data = {}, action) {
  let newData = data;
  switch (action.type) {
    case actionTypes.LOAD_LEAGUES:
      newData = action.leaguesByCountries;
      break;
    case actionTypes.LOAD_TEAMS:
      newData = action.leagueTeamsList;
      break;
    case actionTypes.LOAD_DETAILS:
      newData = action.details;
      break;
    default:
      break;
  }
  return newData;
}
