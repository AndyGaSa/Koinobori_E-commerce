/* eslint-disable no-undef */
import actionType from '../actions/action.type';

export default function pointsReducer(driversPoints = [], action) {
  let newDriversPoints = driversPoints;
  switch (action.type) {
    case actionType.LOAD_DRIVERS_PTS:
      newDriversPoints = action.points?.map((Races) => Races);
      break;
    default:
      break;
  }
  return newDriversPoints;
}
