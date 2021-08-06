/* eslint-disable import/no-named-as-default */
import React from 'react';
import LogInButton from '../components/Auth0/LogInButton';
import Faq from '../components/Faq/Faq';
import './LogInPage.css';

export default function LogInPage() {
  return (
    <>
      <div className="login-container">
        <div className="login-background">
          <LogInButton />
        </div>
      </div>
      <Faq />
    </>
  );
}
