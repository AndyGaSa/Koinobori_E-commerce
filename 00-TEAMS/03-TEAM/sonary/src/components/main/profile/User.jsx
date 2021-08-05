import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function User() {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <aside className="user">
      <img className="user__image" src={user.picture} alt={user.name} />
      <h2 className="user__name">{user.name}</h2>
      <p className="user__name">
        Email:
        {' '}
        {user.email}
      </p>
    </aside>
  );
}
