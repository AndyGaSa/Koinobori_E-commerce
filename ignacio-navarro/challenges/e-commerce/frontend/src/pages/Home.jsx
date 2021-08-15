/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, loadUser, createCart } from '../redux/actions/actionCreator';
import CardItem from '../components/CardItem/CardItem';
import './Home.scss';

export default function Home() {
  const beersList = useSelector((store) => store.products);
  const currentUser = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  useEffect(() => {
    dispatch(loadUser('61191abd00a361185ee43629'));
  }, []);
  useEffect(() => {
    if (currentUser._id) {
      dispatch(createCart(currentUser._id));
    }
  }, [currentUser]);

  return (
    <main>
      <div className="home__banner">
        <h2 className="home__h2">Top beers</h2>
      </div>

      <div className="home__items">
        {beersList.slice(0, 6).map((beer) => <CardItem key={beer._id} beer={beer} />)}
      </div>
    </main>
  );
}
