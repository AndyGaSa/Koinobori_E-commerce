import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.scss';

export default function Profile() {
  const {
    user,
    isAuthenticated,
    isLoading
  } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && (
  <div className="profile">
    <img className="profile__picture" src={user.picture} alt={user.name} />
    <h2 className="profile__name">{user.name}</h2>

  </div>
  );
}
