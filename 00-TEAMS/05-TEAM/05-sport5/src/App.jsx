import React from 'react';
import {
  Redirect, Route, Switch
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeaguesList from './pages/LeaguesList/LeaguesList';
import TeamsList from './pages/TeamsList/TeamsList';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import NotFound from './pages/NotFound/NotFound';

import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={LeaguesList} />
        <Route path="/:sportId" exact component={LeaguesList} />
        <Redirect path="/countries/:sportId" exact to="/:sportId" />
        <Route path="/league/:leagueId" exact component={TeamsList} />
        <Route path="/team/:teamId" exact component={TeamDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
