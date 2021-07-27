import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import List from './components/List';
import Detail from './components/Detail';
import './styles.css';
import heroes from './heroes-const';

function App() {
  const [currentDetail, changeDetailPage] = useState(heroes[0]);
  const [currentPage, setCurrentPage] = useState('dashboard');

  function changeHero(heroId) {
    const index = heroes.map(({ id }) => id).indexOf(heroId);
    changeDetailPage(heroes[index]);
    setCurrentPage('detail');
  }

  const page = {
    dashboard: <Dashboard heroes={heroes.slice(1, 5)} heroDetail={changeHero} />,
    list: <List heroes={heroes} heroDetail={changeHero} />,
    detail: <Detail hero={currentDetail} changePage={setCurrentPage} />
  };

  return (
    <>
      <Header changePage={setCurrentPage} />
      {page[currentPage]}
    </>
  );
}

export default App;
