/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/notifications.actions';

function notificationsReducer(error = [], action) {
  let newError = error;

  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
    case actionTypes.ERROR_GENERIC:
      newError = [action.data];
      break;
    case actionTypes.CLEAR_NOTIFICATION:
      newError = [];
      break;
    default:
      break;
  }

  return newError;
}

export default notificationsReducer;
