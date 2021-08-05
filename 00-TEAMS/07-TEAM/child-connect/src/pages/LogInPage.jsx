/* eslint-disable import/no-named-as-default */
import React from 'react';
import LogInButton from '../components/Auth0/LogInButton';
import Faq from '../components/Faq/Faq';
import './LogInPage.css';

export default function LogInPage() {
  return (
    <>
      <LogInButton />
      <Faq />
    </>
  );
}
