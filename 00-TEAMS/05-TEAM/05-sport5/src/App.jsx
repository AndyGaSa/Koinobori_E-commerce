import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeaguesList from './pages/LeaguesList/LeaguesList';
import TeamsList from './pages/TeamsList/TeamsList';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import NotFound from './pages/NotFound/NotFound';

import configureStore from './redux/store';
import './styles/App.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LeaguesList} />
          <Redirect path="/countries/:sportId" to="/" />
          <Route path="/league/:leagueId" component={TeamsList} />
          <Route path="/team/:teamId" component={TeamDetail} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
