/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CardItem from '../components/CardItem/CardItem';
import './Home.scss';

export default function Home() {
  return (
    <main>
      <div className="home__banner">
        <h2 className="home__h2">Top beers</h2>
      </div>

      <div className="home__items">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </main>
  );
}
