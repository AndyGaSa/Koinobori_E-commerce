import React from 'react';
import CardItem from '../components/CardItem/CardItem';
import PrevNext from '../components/PrevNext/PrevNext';
import './All.scss';

export default function All() {
  return (
    <main>
      <div className="all__items">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <PrevNext />
    </main>
  );
}
