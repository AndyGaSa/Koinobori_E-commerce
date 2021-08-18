/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import HeroesList from './pages/HeroesList';
import Details from './pages/HeroDetail';
import NotFound from './pages/NotFound';
import './TourOfHeroes.css';

export default function TourOfHeroes() {
  /* (function localStorageCheck() {
    uploadToLocalStorage();
  }());
  const [heroes, setHeroes] = useState(JSON.parse(localStorage('heroes')));
  const [lastId, setLastId] = useState(+JSON.parse(localStorage('lastId')));

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
    localStorage.setItem('lastId', lastId);
  }); */

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect path="/dashboard" to="/" />
        <Route path="/heroeslist" component={HeroesList} />
        <Route path="/details/:heroId" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
