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

import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile/Profile';
import LoginButton from './components/LoginButton/LoginButton';

function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Header />
      <Switch>
        <Route path="/" exact component={LeaguesList} />
        <Route path="/:sportId" exact component={LeaguesList} />
        <Redirect path="/countries/:sportId" to="/:sportId" />
        <Route path="/league/:leagueId" exact component={TeamsList} />
        <Route path="/team/:teamId" exact component={TeamDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
