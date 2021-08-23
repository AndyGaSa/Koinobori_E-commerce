import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { randomCountry } from '../../redux/actions/actionCreators';

export default function Random() {
  // const countries = useSelector((store) => store.countries);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(randomCountry());
  }, []);
  // eslint-disable-next-line no-unused-vars
  //   function randomItem(items) {
  //     const Item = items[Math.floor(Math.random() * items.length)];
  //     return Item;
  //   }
  return (
    <>
      <h2>Random</h2>
      <img className="countries-flag" src="" alt="" srcSet="" />
      <button type="button">random</button>
      <section className="countries" />
    </>
  );
}
