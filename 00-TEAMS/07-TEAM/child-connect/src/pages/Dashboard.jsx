/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './Dashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import EventList from './EventList';
import Perfil from './Perfil';
import fetchAllEvents from '../redux/actions/events.creators';

export default function Dashboard() {
  const dispatch = useDispatch();
  dispatch(fetchAllEvents());

  const currentEvents = useSelector(({ events }) => events);
  console.log(currentEvents);

  return (
    <>
      {currentEvents && currentEvents[0]?.title}
      <EventList />
      <Perfil />
    </>
  );
}
