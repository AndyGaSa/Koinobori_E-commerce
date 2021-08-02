import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadDrivers, { loadDriversPts } from '../redux/actions/action.creators';
// import actionType from '../redux/actions/action.type';

export default function GetDrivers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDrivers());
  }, []);
  useEffect(() => {
    dispatch(loadDriversPts());
  }, []);

  return (
    <>
      <h2>hola</h2>
      <button type="button">Click</button>
    </>
  );
}
