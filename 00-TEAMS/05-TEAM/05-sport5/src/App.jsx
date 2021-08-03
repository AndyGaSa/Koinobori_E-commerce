import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch
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

    <BrowserRouter>
      <Header />
      <Switch>
        <TeamsList />
        <Route path="/" exact component={LeaguesList} />
        <Redirect path="/countries/:sportId" to="/" />
        <Route path="/league/:leagueId" component={TeamsList} />
        <Route path="/team/:teamId" component={TeamDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
