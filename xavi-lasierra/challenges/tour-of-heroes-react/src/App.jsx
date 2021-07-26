import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import List from './components/List';
import Detail from './components/Detail';
import './styles.css';

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

  const [currentDetail, changeDetailPage] = useState(heroes[0]);

  function changeHero(heroId) {
    const index = heroes.map(({ id }) => id).indexOf(heroId);
    changeDetailPage(heroes[index]);
  }

  const page = [
    <Dashboard heroes={heroes.slice(1, 5)} heroDetail={changeHero} />,
    <List heroes={heroes} heroDetail={changeHero} />,
    <Detail hero={currentDetail} />
  ];

  const [currentPage, changeCurrentPage] = useState(page[0]);

  function changePage(pageNumber) {
    changeCurrentPage(page[pageNumber]);
  }

  return (
    <>
      <Header changePage={changePage} />
      {currentPage}
    </>
  );
}

export default App;
