/* eslint-disable import/no-named-as-default */
import React from 'react';
import LogInButton from '../components/Auth0/LogInButton';
// import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer';
import './LogInPage.css';

export default function LogInPage() {
  return (
    <>
      <h1>hola mundo</h1>
      <img src="https://i.ibb.co/M7Cprgj/Child-Connect-2.png" alt="Child Connect Logo" />
      <LogInButton />
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
