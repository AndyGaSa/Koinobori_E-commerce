import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import MainPage from './components/MainPage';

function App() {
  const { isAuthenticated } = useAuth0();
  return (

    isAuthenticated
      ? <MainPage />
      : <Login />

  );
}

export default App;
