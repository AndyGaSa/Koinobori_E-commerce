import actionTypes from '../actions/actionTypes';

export default function authenticationReducer(authentication = { isAuthenticated: false }, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        isAuthenticated: true
      };
    case actionTypes.LOGOUT:
      return {
        isAuthenticated: false
      };
    default:
      return authentication;
  }
}
