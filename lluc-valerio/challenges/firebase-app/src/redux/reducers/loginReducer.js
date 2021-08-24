import actionTypes from '../actions/actionTypes';

export default function loginReducer(loginStatus = { isAuthorized: false }, action) {
  let newloginStatus = {};
  switch (action.type) {
    case actionTypes.LOGIN:
      newloginStatus.isAuthorized = true;
      newloginStatus.user = action.user;
      break;
    case actionTypes.LOGOUT:
      newloginStatus.isAuthorized = false;
      break;
    default:
      newloginStatus = loginStatus;
      break;
  }
  return newloginStatus;
}
