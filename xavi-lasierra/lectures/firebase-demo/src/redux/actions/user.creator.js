import firebase from 'firebase';
import userActions from './user.actions';

export function logoutUser() {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: userActions.LOGOUT_USER
    });
  };
}

export function addUserData(data) {
  return {
    type: userActions.LOGIN_USER,
    data
  };
}
