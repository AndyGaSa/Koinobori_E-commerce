import React from 'react';
// import Profile from '../login/Profile';
import LoginButton from '../login/LoginButton';
import './style.scss';

export default function InitialPage() {
  return (
    <>
      <div className="body">
        <div className="buttons_login_logout">
          <LoginButton />
        </div>
      </div>
    </>
  );
}
