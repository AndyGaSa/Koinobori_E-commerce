import React, { useEffect } from 'react';

import firebase from 'firebase/app';
// import 'firebase/auth';

import Header from './components/Header';

function App() {
  // FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user);
      } else {
        // No user is signed in.
        console.log(user);
      }
    });
  }, []);

  return (
    <main className="main">

      <Header />
    </main>
  );
}

export default App;
