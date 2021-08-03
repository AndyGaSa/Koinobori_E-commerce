/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import EventList from './EventList';
// import fetchAllEvents from '../redux/actions/events.creators';

export default function Dashboard() {
//  const dispatch = useDispatch();
  // dispatch(fetchAllEvents());

  const currentEvents = useSelector(({ events }) => events);
  console.log(currentEvents);

  return (
    <>
      {currentEvents && (
        <>
          <h3>{currentEvents[0]?.title}</h3>
          <h4>{currentEvents[0]?.activity}</h4>
          <hr />
          <p>{currentEvents[0]?.description}</p>
        </>
      )}
      <EventList />
    </>
  );
}
