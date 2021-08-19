import React from 'react';
import ProfileComp from '../../components/ProfileComp';

import './Profile.scss';

export default function Profile() {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <ProfileComp />
    </div>
  );
}
