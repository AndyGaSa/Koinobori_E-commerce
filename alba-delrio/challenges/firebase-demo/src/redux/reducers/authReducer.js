import actionTypes from '../actions/actionTypes';

export default function authReducer(auth = { isAuthenticated: false }, action) {
  let nextAuthState = auth;
  switch (action.type) {
    case actionTypes.AUTH_USER:
      nextAuthState = {
        isAuthenticated: true
      };
      break;
    case actionTypes.AUTH_LOGOUT:
      nextAuthState = {
        isAuthenticated: false
      };
      break;
    default:
      break;
  }
  return nextAuthState;
}
