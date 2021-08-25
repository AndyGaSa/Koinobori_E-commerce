import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';

import './app.scss';
import { addUserData } from './redux/actions/user.creator';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(addUserData(user));
      }
    });
  }, []);

  return (
    <Header />
  );
}

export default App;
