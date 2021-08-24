import actionTypes from './actionTypes';

export default function login(name) {
  return async (dispatch) => {
    try {
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: name
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message
        });
      }

      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message
      });
    }
  };
}
