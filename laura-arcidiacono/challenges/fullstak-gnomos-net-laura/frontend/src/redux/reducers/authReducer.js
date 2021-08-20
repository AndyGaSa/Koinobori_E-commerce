import authInitialState from '../../constants/authInitialState';
import actionTypes from '../actions/actionTypes';

export default function authReducer(
  auth = authInitialState,
  action
) {
  let nextAuthState = auth;

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      nextAuthState = {
        isAuthenticated: true,
        user: action.user
      };
      break;

    case actionTypes.AUTH_LOGOUT:
      nextAuthState = authInitialState;
      break;

    default:
      break;
  }

  return nextAuthState;
}
