import React from 'react';
import Header from '../../components/Header/Header';
import DashboardContainer from '../../components/DashboardContainer/DashboardContainer';

export default function Dashboard() {
  const heroes = [
    'Narco',
    'Bombasto',
    'Celeritas',
    'Magneta',
  ];

  return (
    <>
      <Header />
      <DashboardContainer heroes={heroes} />
    </>

  );
}
