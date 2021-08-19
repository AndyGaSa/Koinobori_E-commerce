import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadDriverStandings, loadRacesData, loadConstructorStandings } from '../redux/actions/action.creators';

export default function GetDrivers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDriverStandings());
  }, []);
  useEffect(() => {
    dispatch(loadRacesData());
  }, []);
  useEffect(() => {
    dispatch(loadConstructorStandings());
  }, []);

  return (
    <>

    </>
  );
}
