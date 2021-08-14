import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './profile.scss';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    (isAuthenticated && !isLoading) && (
      <section className="profile">
        <span className="profile__user-name">{user.name}</span>
        <img className="profile__user-photo" src={user.picture} alt={user.name} />
      </section>
    )
  );
}

export default Profile;
