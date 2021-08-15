/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem/CardItem';
import PrevNext from '../components/PrevNext/PrevNext';
import './All.scss';

export default function All() {
  const beersList = useSelector((store) => store.products);

  return (
    <main>
      <div className="all__items">
        {beersList.slice(0, 40).map((beer) => <CardItem key={beer._id} beer={beer} />)}
      </div>
      <PrevNext />
    </main>
  );
}
