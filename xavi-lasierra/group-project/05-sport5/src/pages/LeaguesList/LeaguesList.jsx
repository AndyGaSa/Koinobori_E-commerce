import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getLeagues from '../../redux/actions/sports.creator';

export default function LeaguesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues('Soccer'));
  }, []);
  return (
    <div>
      Aqui iran las ligas
    </div>
  );
}
