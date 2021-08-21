/* eslint-disable import/named */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadCountries from '../redux/actions/actionCreators';

export default function GetCountries() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountries());
  });

  return (
    <>
    </>
  );
}
