import actionTypes from '../actions/actionTypes';

export default function loginReducer(loginState = { isAuthorized: false }, action) {
  let newLoginState = {};
  switch (action.type) {
    case actionTypes.LOGIN:
      newLoginState.isAuthorized = true;
      break;
    case actionTypes.LOGOUT:
      newLoginState.isAuthorized = false;
      break;
    default:
      newLoginState = loginState;
      break;
  }
  return newLoginState;
}
