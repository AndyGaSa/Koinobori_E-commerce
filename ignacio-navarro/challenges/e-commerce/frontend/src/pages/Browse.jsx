import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/actions/actionCreator';
import CardItem from '../components/CardItem/CardItem';
import Filter from '../components/Filter/Filter';
import PrevNext from '../components/PrevNext/PrevNext';
import './Browse.scss';

export default function Browse() {
  const beersList = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <main>
      <section className="browse__main-section">
        <Filter />
        <div className="browse__items">
          {beersList.slice(0, 10).map((beer) => <CardItem beer={beer} />)}
        </div>
      </section>
      <PrevNext />
    </main>
  );
}
