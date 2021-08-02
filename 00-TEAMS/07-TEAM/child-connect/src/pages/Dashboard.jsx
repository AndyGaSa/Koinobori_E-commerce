/* eslint-disable import/no-named-as-default */
import React from 'react';
import './Dashboard.css';
import EventList from './EventList';
import Faq from './Faq';

export default function Dashboard() {
  return (
    <>
      <EventList />
      <Faq />
    </>
  );
}
