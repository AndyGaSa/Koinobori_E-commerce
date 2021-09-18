import actionTypes from '../actions/actionTypes';

export default function authReducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
}
