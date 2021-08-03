/* eslint-disable no-undef */
import actionType from '../actions/action.type';

export default function racesReducer(racesList = [], action) {
  let newRacesList = racesList;
  switch (action.type) {
    case actionType.LOAD_RACES:
      newRacesList = action.races?.map((Races) => Races);
      break;
    default:
      break;
  }
  return newRacesList;
}
