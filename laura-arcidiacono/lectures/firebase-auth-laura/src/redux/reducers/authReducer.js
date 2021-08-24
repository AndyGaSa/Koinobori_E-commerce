import actionTypes from '../actions/actionTypes';

export default function reducer(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case actionTypes.LOGOUT:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
}
