import actionTypes from '../actions/actionTypes';

export default function authReducer(state = { isAuthenthicated: false }, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        isAuthenthicated: true,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return {
        isAuthenthicated: false,
      };
    default:
      return state;
  }
}
