/* eslint-disable no-undef */
import actionType from '../actions/action.type';

export default function driversReducer(drivesList = [], action) {
  let newDriversList = drivesList;
  switch (action.type) {
    case actionType.LOAD_DRIVERS:
      newDriversList = action.drivers?.map(({ driverId }) => driverId);
      break;
    default:
      break;
  }
  return newDriversList;
}
