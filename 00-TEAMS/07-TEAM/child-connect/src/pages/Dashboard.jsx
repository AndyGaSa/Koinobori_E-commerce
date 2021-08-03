/* eslint-disable import/no-named-as-default */
import React from 'react';
import './Dashboard.css';
import EventList from './EventList';
import Perfil from './Perfil';

export default function Dashboard() {
  return (
    <>
      <EventList />
      <Perfil />
    </>
  );
}
