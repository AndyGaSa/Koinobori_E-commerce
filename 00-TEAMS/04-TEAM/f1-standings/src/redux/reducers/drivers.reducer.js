/* eslint-disable no-undef */
import actionType from '../actions/action.type';

export default function driversReducer(drivesList = [], action) {
  let newDriversList = drivesList;
  switch (action.type) {
    case actionType.LOAD_DRIVER_STANDINGS:
      newDriversList = action.drivers?.map(({ DriverStandings }) => DriverStandings);
      break;
    default:
      break;
  }
  return newDriversList;
}
