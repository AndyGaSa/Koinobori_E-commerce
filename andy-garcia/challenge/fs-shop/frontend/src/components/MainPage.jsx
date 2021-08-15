/* eslint-disable camelcase */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function MainPage() {
  const { user_id } = useAuth0();
  return (
    <div className="MainPage">
      {user_id
      ?? <h1>{user_id}</h1>}

      <h1>hola soy el main</h1>
    </div>
  );
}

export default MainPage;
