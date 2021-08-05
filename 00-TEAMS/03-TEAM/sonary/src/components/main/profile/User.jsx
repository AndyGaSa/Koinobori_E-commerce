import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

export default function User() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <aside className="user">
      <img className="user__image" src={user.picture} alt={user.name} />
      <div className="user__information">
        <div>
          <h2 className="information__name">{user.name}</h2>
          <p className="information__mail">
            {user.email}
          </p>
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}
