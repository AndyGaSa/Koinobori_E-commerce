import firebase from 'firebase';
import userActions from './user.actions';

export function loginUser() {
  return async (dispatch) => {
    const { user } = await firebase.auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        return firebase.auth().signInWithPopup(provider);
      });

    dispatch({
      type: userActions.LOGIN_USER,
      data: user
    });
  };
}

export function logoutUser() {
  return {
    type: userActions.LOGOUT_USER
  };
}

export function addUserData(data) {
  return {
    type: userActions.LOGIN_USER,
    data
  };
}
