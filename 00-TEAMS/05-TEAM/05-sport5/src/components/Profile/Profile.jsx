import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.scss';

export default function Profile() {
  const {
    user,
    isAuthenticated
  } = useAuth0();

  return isAuthenticated && (
  <div className="profile">
    <img
      className="profile__picture"
      src={user.picture}
      alt={user.name}
    />
    <h2
      data-testid="profile-test-name"
      className="profile__name"
    >
      {user.name}

    </h2>

  </div>
  );
}
