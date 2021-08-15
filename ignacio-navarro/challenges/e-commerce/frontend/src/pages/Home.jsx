/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/actions/actionCreator';
import CardItem from '../components/CardItem/CardItem';
import './Home.scss';

export default function Home() {
  const beersList = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <main>
      <div className="home__banner">
        <h2 className="home__h2">Top beers</h2>
      </div>

      <div className="home__items">
        {beersList.slice(0, 6).map((beer) => <CardItem beer={beer} />)}
      </div>
    </main>
  );
}
