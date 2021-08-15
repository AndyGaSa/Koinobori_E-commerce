/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem/CardItem';
import Filter from '../components/Filter/Filter';
import PrevNext from '../components/PrevNext/PrevNext';
import './Browse.scss';

export default function Browse() {
  const beersList = useSelector((store) => store.products);

  return (
    <main>
      <section className="browse__main-section">
        <Filter />
        <div className="browse__items">
          {beersList.slice(0, 10).map((beer) => <CardItem key={beer._id} beer={beer} />)}
        </div>
      </section>
      <PrevNext />
    </main>
  );
}
