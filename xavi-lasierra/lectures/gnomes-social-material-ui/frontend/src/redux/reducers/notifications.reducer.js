/* eslint-disable no-underscore-dangle */
import userTypes from '../actions/user.actions';

function notificationsReducer(error = [], action) {
  let newError = error;

  switch (action.type) {
    case userTypes.LOGIN_ERROR:
    case userTypes.ERROR_GENERIC:
      newError = [action.data];
      break;
    case userTypes.CLEAR_NOTIFICATION:
      newError = [];
      break;
    default:
      break;
  }

  return newError;
}

export default notificationsReducer;
