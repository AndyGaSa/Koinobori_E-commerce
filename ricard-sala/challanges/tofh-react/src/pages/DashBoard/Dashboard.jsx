import React from 'react';
import DashboardContainer from '../../components/DashboardContainer/DashboardContainer';
import './dashboard.css';

export default function Dashboard() {
  const heroes = [
    'Narco',
    'Bombasto',
    'Celeritas',
    'Magneta',
  ];
  return (
    <>

      <DashboardContainer heroes={heroes} />
    </>

  );
}
