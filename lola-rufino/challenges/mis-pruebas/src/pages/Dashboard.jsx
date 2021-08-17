import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <h1>Dashboard</h1>
      <p className="dashboard__description">
        Welcome everybody to this creepy website where
        I am trying to figure out how the hell React, Redux, Router... works.
        Enjoy!
      </p>
      <img src="https://media0.giphy.com/media/cBncDNrdxga2I/giphy.gif?cid=ecf05e474xqzoe8cbgkb67g6yespc325nijiypo1wyp510e0&rid=giphy.gif&ct=g" alt="cat waving" />
      <Footer />
    </>
  );
}
