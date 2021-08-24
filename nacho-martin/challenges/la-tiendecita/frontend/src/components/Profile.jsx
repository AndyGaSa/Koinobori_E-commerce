import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import('../styles/profile.scss');

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <h2 className="user__name">{user.name}</h2>
      </>
    )
  );
}
