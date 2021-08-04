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

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';

function App() {
  return (

    <BrowserRouter>
      <Login />
      <Logout />
      <Profile />
      <Header />
      <Switch>
        <Route path="/:sportId" exact component={LeaguesList} />
        <Redirect path="/" exact to="/Soccer" />
        <Redirect path="/countries/:sportId" to="/:sportId" />
        <Route path="/league/:leagueId" exact component={TeamsList} />
        <Route path="/team/:teamId" component={TeamDetail} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
