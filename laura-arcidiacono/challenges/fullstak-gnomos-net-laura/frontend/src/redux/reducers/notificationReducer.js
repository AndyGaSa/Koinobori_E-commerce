import actionTypes from '../actions/actionTypes';

export default function notificationReducer(
  state = '',
  action
) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_ERROR:
    case actionTypes.ERROR_GENERIC:
      return action.message;

    case actionTypes.CLEAR_NOTIFICATION:
      return '';

    default:
      return state;
  }
}
