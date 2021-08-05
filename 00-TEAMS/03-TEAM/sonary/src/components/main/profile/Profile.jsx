import React from 'react';
import Favorites from './Favorites';
import UserProfile from './UserProfile';

export default function Profile() {
  return (
    <main>
      <h1>Profile</h1>
      <UserProfile />
      <Favorites />
    </main>
  );
}
