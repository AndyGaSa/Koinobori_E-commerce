import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import List from './components/List';

function App() {
  const heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  const page = [
    <Dashboard heroes={heroes.slice(1, 5)} />,
    <List heroes={heroes} />
  ];

  // eslint-disable-next-line no-unused-vars
  const [currentPage, changeCurrentPage] = useState(page[1]);

  return (
    <>
      <Header />
      {currentPage}
    </>
  );
}

export default App;
