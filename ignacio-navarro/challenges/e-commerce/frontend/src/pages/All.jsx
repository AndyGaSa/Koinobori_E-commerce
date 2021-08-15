import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../components/CardItem/CardItem';
import PrevNext from '../components/PrevNext/PrevNext';
import { loadProducts } from '../redux/actions/actionCreator';
import './All.scss';

export default function All() {
  const beersList = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <main>
      <div className="all__items">
        {beersList.slice(0, 40).map((beer) => <CardItem beer={beer} />)}
      </div>
      <PrevNext />
    </main>
  );
}
