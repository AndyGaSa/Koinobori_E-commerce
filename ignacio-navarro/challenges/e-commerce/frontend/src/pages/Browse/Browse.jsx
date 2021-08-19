/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import Filter from '../../components/Filter/Filter';
import PrevNext from '../../components/PrevNext/PrevNext';
import { loadProducts } from '../../redux/actions/actionCreator';
import './Browse.scss';

export default function Browse() {
  const dispatch = useDispatch();
  const beersList = useSelector((store) => store.products);
  useEffect(() => {
    if (beersList.length < 1) {
      dispatch(loadProducts());
    }
  }, []);

  return (
    <main>
      <section className="browse__main-section">
        <Filter />
        <div className="browse__items">
          {beersList.slice(0, 10).map((beer) => <CardItem key={`${beer.name}_browse`} beer={beer} />)}
        </div>
      </section>
      <PrevNext />
    </main>
  );
}
