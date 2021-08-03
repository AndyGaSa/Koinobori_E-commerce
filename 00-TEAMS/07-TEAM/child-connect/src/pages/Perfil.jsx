/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
/* import EventList from './EventList'; */

export default function Perfil() {
  const currentEvents = useSelector(({ events }) => events);

  console.log(currentEvents);
  return (
    <>
      <h1>{currentEvents[0]?.title}</h1>

    </>

  );
}
