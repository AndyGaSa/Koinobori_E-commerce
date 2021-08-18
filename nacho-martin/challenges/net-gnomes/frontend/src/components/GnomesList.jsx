/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadGnomes from '../redux/actions/creators';

export default function gnomesList() {
  const gnomesUsers = useSelector((store) => store.gnomes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGnomes());
  }, []);

  return (
    <>
      <h2>Gnomes</h2>
      <ul>
        {gnomesUsers?.map((gnome) => <li key={gnome._id}>{gnome.name}</li>)}
      </ul>
    </>
  );
}
