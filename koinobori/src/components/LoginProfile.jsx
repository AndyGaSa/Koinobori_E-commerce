import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginProfile.scss';

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
    <h2 className="userName">
      {' '}
      {user.name}
    </h2>
  );
}
