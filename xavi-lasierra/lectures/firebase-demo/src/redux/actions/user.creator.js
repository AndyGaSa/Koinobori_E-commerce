import firebase from 'firebase';
import userActions from './user.actions';

export function loginUser() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const { user } = await firebase.auth().signInWithPopup(provider);

    dispatch({
      type: userActions.LOGIN_USER,
      data: user
    });
  };
}

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
