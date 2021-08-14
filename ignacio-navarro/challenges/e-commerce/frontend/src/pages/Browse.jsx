import React from 'react';
import CardItem from '../components/CardItem/CardItem';
import Filter from '../components/Filter/Filter';
import PrevNext from '../components/PrevNext/PrevNext';
import './Browse.scss';

export default function Browse() {
  return (
    <main>
      <section className="browse__main-section">
        <Filter />
        <div className="browse__items">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>
      <PrevNext />
    </main>
  );
}
