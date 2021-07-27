import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './styles.css';
import { heroesLocalStorage } from './services/heroes-local-storage';

function App() {
  (function localStorageCheck() {
    heroesLocalStorage();
  }());

  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('heroes')));
  const [maxId, setMaxId] = useState(+JSON.parse(localStorage.getItem('heroesMaxId')));

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
    localStorage.setItem('heroesMaxId', maxId);
  },
  [heroes]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <Dashboard heroes={heroes.slice(1, 5)} />} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/list" component={() => <List heroes={heroes} setHeroes={setHeroes} maxId={maxId} setMaxId={setMaxId} />} />
        <Route path="/detail/:heroId?" component={() => <Detail heroes={heroes} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
