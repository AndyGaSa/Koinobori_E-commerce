/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadGnomes from '../redux/actions/gnomeCreators';
import Login from './Login';

export default function gnomesList() {
  const gnomesUsers = useSelector((store) => store.gnomes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGnomes());
  }, []);

  return (
    <>
      <Login />
      <ul>
        {gnomesUsers.map((gnome) => <li key={gnome._id}><Link to={`${gnome._id}`}>{gnome.name}</Link></li>)}
      </ul>
    </>
  );
}
