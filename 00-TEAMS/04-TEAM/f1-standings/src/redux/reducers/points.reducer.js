import actionType from '../actions/action.type';

const pointReducer = (pointsList = [], action) => {
  let newPointsList = pointsList;

  switch (action.type) {
    case actionType.ADD_CHART_DRIVER:

      newPointsList = (!pointsList.find((e) => e.driverId === action.driver.driverId))
        // eslint-disable-next-line max-len
        ? [...pointsList, action.driver] : pointsList.filter((driver) => driver.driverId !== action.driver.driverId);

      break;

    case actionType.DELETE_CHART_DRIVER:
      newPointsList = pointsList.filter((driver) => driver.driverId !== action.driver.driverId);
      break;

    default:
      break;
  }
  return newPointsList;
};

export default pointReducer;
