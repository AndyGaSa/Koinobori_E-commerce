/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/loginError.actions';
import userTypes from '../actions/user.actions';

function loginErrorReducer(loginError = false, action) {
  let newLoginError = loginError;

  switch (action.type) {
    case actionTypes.LOAD_ERROR:
      newLoginError = true;
      break;
    case userTypes.LOAD_USER:
      newLoginError = false;
      break;
    default:
      break;
  }

  return newLoginError;
}

export default loginErrorReducer;
