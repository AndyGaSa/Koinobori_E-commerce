/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import PrevNext from '../../components/PrevNext/PrevNext';
import './All.scss';
import { loadProducts } from '../../redux/actions/actionCreator';

export default function All() {
  const dispatch = useDispatch();
  const beersList = useSelector((store) => store.products);
  useEffect(() => {
    if (beersList.length < 1) {
      dispatch(loadProducts());
    }
  }, []);

  return (
    <main>
      <div className="all__items">
        {beersList.slice(0, 40).map((beer) => <CardItem key={`${beer.name}_all`} beer={beer} />)}
      </div>
      <PrevNext />
    </main>
  );
}
